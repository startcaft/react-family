import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component{
    render(){
        return (
            <div>this a Home page</div>
        )
    }
}
class Other extends Component{
    render(){
        return (
            <div>this a Other page</div>
        )
    }
}
class App extends Component{

    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/other">其他页</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/other" component={Other}/>
                </div>
            </Router>
        )
    }
}

export default App;
