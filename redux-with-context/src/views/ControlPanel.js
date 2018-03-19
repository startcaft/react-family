import React,{ Component } from 'react';

// 对于使用 容器组件的 模块来说，根本感觉不到 傻瓜组件 的存在，从外部看到的就是 容器组件；
import Counter from './Counter';
import Summary from './Summary.js';

class ControlPanel extends Component {

    render(){
        return (
            <div>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <hr/>
                <Summary />
            </div>
        )
    }
}


export default ControlPanel;