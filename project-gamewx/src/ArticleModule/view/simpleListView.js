/**
 * Created by Administrator on 2018/4/26.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';
import ListItem from './listItem';


class SimpleListView extends React.Component {
    constructor(props){
        super(props);

        // 初始化 dataSource，指定一个 rowHasChanged 行比较函数即可
        const dataSource = new ListView.DataSource({
            rowHasChanged:((r1,r2) => (r1 !==r2))
        })
        this.state = {
            dataSource:dataSource,
            height: document.documentElement.clientHeight * 3 / 4   // ListView 初始高度，随便给即可
        }

        this._getListViewBody = this._getListViewBody.bind(this);
        this._getData = this._getData.bind(this);
    }

    // 自定义容器 ListView，主要要计算其高度，并赋值给ListView组件
    _getListViewBody(){
        return (
            <div className="am-list-body my-body">
                {this.props.children}
            </div>
        )
    }

    _getData(pageIndex = 0,pageSize = 10,dicItemId = 0){
        const requestUrl = `http://localhost:8080/articles/page?page=${pageIndex}&rows=${pageSize}&dicItemId=${dicItemId}`;
        fetch(requestUrl,{
            method:'GET'
        }).then((response) => {
            if(response.status !== 200){
                console.warn('fail request');
            }
            return response.json();
        }).then((responseText) => {
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(responseText.rows)
            })
        }).catch((error) => {
            console.warn(error);
        })
    }

    componentDidMount() {
        // 获取 ListView 组件的DOM节点的父容器（也就是 applayout.css 中的 .main 容器的向上偏移量）
        const lvDom = ReactDOM.findDOMNode(this.lv);
        // main容器向上的偏移量
        const mainContainerOffSetTop = lvDom.parentNode.offsetTop;
        // main容器向下的偏移量
        const mainContaineroffSetBottom = 50;
        const hei = document.documentElement.clientHeight - mainContainerOffSetTop - mainContaineroffSetBottom;

        // simulate initial Ajax
        setTimeout(() => {
            this.setState({
                height: hei
            });
        }, 600);

        this._getData();
    }

    render(){
        const getRowFunc = (rowData, sectionID, rowID, highlightRow) => {
            // return (
            //     <div key={rowID} style={{ padding: '0 15px' }} onClick={() => highlightRow(sectionID,rowID)}>
            //         <div style={{lineHeight:'50px',color:'#888',fontSize:16,borderBottom:'1px solid #F6F6F6'}}>
            //             {rowData.articleTitle}
            //         </div>
            //         <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            //             <img style={{ height: '64px', marginRight: '15px' }} src="http://crawl.nosdn.127.net/1a4a01fe547f722470a2019c53a11735.jpg" alt="" />
            //             <div style={{ lineHeight: 1 }}>
            //                 <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.articleDesc}</div>
            //             </div>
            //         </div>
            //     </div>
            // )
            return (
                <ListItem rowData={rowData} sectionID={sectionID} rowID={rowID} />
            )
        };

        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderRow={getRowFunc}
                renderBodyComponent={() => this._getListViewBody()}
                style={{
                    height: this.state.height,
                    overflow: 'auto',
                }}
                pageSize={4}
            />
        );
    }
}

export default SimpleListView;