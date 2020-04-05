import React,{ Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component{

    render(){
        return(
            <div>
                <div>
                    <input 
                        value={this.props.inputValue} 
                        onChange={this.props.changeInputValue}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>Dell</li>
                </ul>
            </div>
        )
    }

    handleInputChange(e){
        console.log(e.target.value);
    }
}

// 把store里面的数据(state)映射给组件，变成组件的props
const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue
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
        }
    }
}

// 让todoList组件和store做连接
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);