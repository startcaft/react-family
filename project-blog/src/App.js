import React, { Component } from 'react';
import './app.less';

import { view as HeaderView } from './todo/index';
import { view as NavBar } from './navBar/index';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderView/>
        <NavBar/>
      </div>
    );
  }
}

export default App;
