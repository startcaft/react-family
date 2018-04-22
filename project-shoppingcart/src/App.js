import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link,BrowserRouter as Router,Route} from 'react-router-dom';

import {
    homeView as HomeView,
    detailView as DetailView,
    cartView as CartView,
    historyView as HistoryView
}
from './cartModule/index';

class App extends Component {
    render() {
        const SubMenu = Menu.SubMenu;

        return (
            <Router>
                <div className="clear container-main">
                    <div className="fl">
                        <Menu
                            style={{width: 240}}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>操作</span></span>}>
                                <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/cart">购物车</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/history">购买记录</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>

                    <Route exact path="/" component={HomeView} />
                    <Route path="/detail/:productId" component={DetailView} />
                    <Route path="/cart" component={CartView}/>
                    <Route path="/history" component={HistoryView} />
                </div>
            </Router>
        );
    }
}

export default App;
