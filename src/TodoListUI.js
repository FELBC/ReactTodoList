import React from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件(当一个普通组件只有render函数的时候)
// 优势：性能比较高(普通组件class类，生命周期，无状态组件只是一个js函数)
const TodoListUI = (props) => {
    return (
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <div>
                <Input 
                    value={props.inputValue} 
                    placeholder='todo info'  
                    style={{width:'300px', marginRight:'10px'}} 
                    onChange={props.handleInputChange}    
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List 
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}

export default TodoListUI;