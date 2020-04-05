import React from 'react';
import { connect } from 'react-redux';

//无状态组件
const TodoList = (props) => {
    const { inputValue, changeInputValue, handleClick, handleItemDelete, list } = props;
    return(
        <div>
            <div>
                <input 
                    value={inputValue} 
                    onChange={changeInputValue}
                />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index) => {
                        return <li onClick={handleItemDelete.bind(this,index)} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

// 把store里面的数据(state)映射给组件，变成组件的props
const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

// store.dispatch, props
// 如果想对store的数据做修改，
// 把store的dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            const action = {
                type:'change_input_value',
                value:e.target.value
            };
            dispatch(action);
        },

        handleClick(){
            const action = {
                type:'add_item'
            };
            dispatch(action);
        },

        handleItemDelete(index){
            const action = {
                type:'delete_item',
                index:index
            };
            dispatch(action);
        }

    }
}

// 让todoList组件和store做连接
// TodoList是一个UI组件，connect方法把这个UI组件和业务逻辑相结合，
// connect返回的内容实际上是一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);