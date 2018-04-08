import React, { Component } from 'react';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';


class Header extends Component {
    constructor(props) {
        super(props);
        /*
        *  hidden,hint属性判断用户输入空字符
        */
        this.state = {
            hidden: true,
            hint: '',
            todoText:''
        };
        this.handleAddClick = this.handleAddClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFocusHandle = this.onFocusHandle.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }
    handleSearchClick(e) {
        // e.preventDefault();
        // const inputNode = findDOMNode(this.refs.inputnew);
        // const text = inputNode.value.trim();
        // this.props.onSearch(text);
        // inputNode.value = '';
    }
    /*
     * @method  handleAddClick 添加新事项并对输入字符做出判断
     */
    handleAddClick(e){
        e.preventDefault();
        const todoText = this.state.todoText;
        
        if (todoText.length > 20) {
            this.setState({ hidden: false });
            this.setState({ hint: '请输入20字以内' });
        } else if (todoText !== '') {
            this.props.onAdd(todoText);
            this.setState({ hidden: true });
        } else {
            this.setState({ hint: '请输入内容' });
            this.setState({ hidden: false });
        }

        // 清空输入框
        this.setState({
            todoText:''
        })
    }
    onInputChange(e){
        const content = e.target.value;
        this.setState({
            todoText:content
        });
    }
    onFocusHandle(e){
        if(!this.state.hidden){
            this.setState({
                hidden:true
            });
        }
    }
    render(){
        return (
            <header>
                <section>
                    <form>
                        <label htmlFor="new-todo">备忘录</label>
                        <Input 
                            type="text"
                            placeholder="新建事项(20字以内)"
                            style={{
                                width: '40%',
                            }}
                            value={this.state.todoText}
                            onKeyUp={this.handleKeyUp}
                            onChange={this.onInputChange}
                            onFocus={this.onFocusHandle}
                        />
                        <div>
                            <Button
                                type="default"
                                ghost
                                onClick={e => this.handleAddClick(e)}
                            >添加</Button>
                            <Button
                                type="default"
                                ghost
                                onClick={e => this.handleSearchClick(e)}
                            >搜索</Button>
                        </div>
                    </form>
                </section>
                <div
                    className="hint"
                    style={{
                        display: this.state.hidden
                        ? 'none'
                        : 'inline-block',
                    }}
                >
                    <div className="test">
                        <span className="bot" />
                        <span className="top" />
                    </div>
                    <div>
                        {this.state.hint}
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
};

export default Header;