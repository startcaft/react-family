import React, { Component } from 'react';
import { Button, Input } from 'antd';


class Header extends Component {
    render(){
        return (
            <header>
                <section>
                    <form>
                        <label htmlFor="new-todo">备忘录</label>
                        <Input 
                            id="new-todo"
                            type="text"
                            placeholder="新建事项(20字以内)"
                            style={{
                                width: '40%',
                            }}
                        />
                        <div>
                            <Button
                                type="default"
                                ghost
                            >添加</Button>
                            <Button
                                type="default"
                                ghost
                            >搜索</Button>
                        </div>
                    </form>
                </section>
                <div
                    className="hint"
                    style={{
                        display: 'inline-block'
                    }}
                >
                    <div className="test">
                        <span className="bot" />
                        <span className="top" />
                    </div>
                    <div>
                        ''
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;