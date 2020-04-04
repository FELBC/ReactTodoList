import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators';
import TodoListUI from './TodoListUI';


class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return (
            <TodoListUI 
                inputValue={this.state.inputValue} 
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                handleItemDelete = {this.handleItemDelete}
            />
        )
    }

    componentDidMount(){
        // 一般action只能是js对象，
        // 用了redux-thunk后即使getTodoList返回的内容不是对象，而是一个函数，
        // 你也可以通过store.dispatch把这个函数发送给store
        // store自动帮你执行了action对应的这个函数
        /*
            (dispatch) => {
                axios.get('/list').then((res) => {
                    const data = res.data;
                    const action = initListAction(data);
                    dispatch(action);
                })
            }
        */
        const action = getTodoList();
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;