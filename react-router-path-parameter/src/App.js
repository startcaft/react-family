import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom';
import Products from './products';

class Home extends Component{
  render(){
      return (
          <div>this a Home page</div>
      )
  }
}

class App extends Component{
  render(){
      return (
          <div>
              <ul>
                  <li><Link to="/">首页</Link></li>
                  <li><Link to="/products">其他页</Link></li>
              </ul>
              <hr/>
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={Products}/>
          </div>
      )
  }
}

export default App;

