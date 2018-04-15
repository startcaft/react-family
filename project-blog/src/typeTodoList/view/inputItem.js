/**
 * Created by startcaft on 2018/4/15.
 */

import React,{ Component } from 'react';
import { Col,Row,Icon,message } from 'antd';

class InputItem extends Component{
    constructor(props){
        super(props);

        this.handleDel = this.handleDel.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
    }
    handleDel(e){
        const delindex = e.target.getAttribute('data-key');
        this.props.onDel(delindex);
    }
    handleChangeState(e){
        const index = e.target.getAttribute('data-key');
        if (this.props.item.istodo){
            this.props.onTodoToDoing(index);
        }
        if (this.props.item.doing){
            this.props.onDoingToDone(index);
        }
        if (this.props.item.done){
            message.warning('完成状态下无法转换状态!');
        }
    }
    render(){
        return(
            <Row>
                <Col span={23}>
                    <p
                        style={{paddingLeft:'10px'}}
                        data-key={this.props.index}
                        onClick={this.handleChangeState}
                    >
                        {this.props.item.todo}
                    </p >
                </Col>
                <Col span={1}>
                    <Icon
                        type="close-circle"
                        style={{
                            fontSize: '20px',
                        }}
                        data-key={this.props.index}
                        onClick={this.handleDel}
                    />
                </Col>
            </Row>
        )
    }
}


export default InputItem;