import React, { Component } from 'react';
import './App.css';
import { ListView } from 'antd-mobile';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }),
        };
    }

    componentDidMount(){
        fetch('https://m.alibaba.com/products/tool_boxes/2.html?XPJAX=1',{
            method: 'GET',
            mode:'cors'
        }).then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                this.setState({
                    data: this.state.data.cloneWithRows(jsonData.data),
                });
            })
            .catch((error) => {
                alert(error);
            });
    }

    renderRow(rowData,rowID){
        return(
            <div key={rowID} style={{ padding: '0 15px' }}>
                <div
                    style={{
                        lineHeight: '50px',
                        color: '#888',
                        fontSize: 18,
                        borderBottom: '1px solid #F6F6F6',
                    }}
                >{rowData.name}</div>
                <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                    <img style={{ height: '64px', marginRight: '15px' }} source={{uri: `https:${rowData.imagePath}`}} alt="" />
                    <div style={{ lineHeight: 1 }}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.productName  }</div>
                        <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{companyName }</span>¥</div>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        if(!this.state.data){
            return (
                <div>loading...</div>
            )
        }
        else {
            return (
                <ListView
                    dataSource={this.state.data}      //必须写此属性并且传入dataSource对象
                    renderRow={this.renderRow}>      //必须写此属性并且传入一个返回component的回调函数
                </ListView>
            )
        }
    }
}

export default App;
