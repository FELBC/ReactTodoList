import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type:ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type:DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type:INIT_LIST_ACTION,
    data
});

// 为了便于统一管理，
// 异步数据请求从TodoList生命周期函数componentDidMount里抽离出来
export const getTodoList = () => {
    //返回的函数会自动接收到dispatch
    return (dispatch) => {
        axios.get('/list').then((res) => {
            const data = res.data;
            //异步获取完数据后改变store数据
            const action = initListAction(data);
            dispatch(action);
        })
    }
}
