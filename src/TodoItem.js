import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // 提高React组件的性能，避免无谓的组件render函数的运行 
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render() {
        console.log('child render');
        const { content,test } = this.props ;
        // JSX -> createElement ->虚拟DOM(JS对象) -> 真实的DOM
        return (
            <div onClick={this.handleClick}>
                {test}-{content}
            </div>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }

    // 当一个组件从父组件接收了参数
    // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps(){
        console.log('child componentWillReceiveProps');
    }

    // 当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount(){
        console.log('child componentWillUnmount');
    }
}

TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

TodoItem.defaultProps = {
    test:'hello world'
}

export default TodoItem;