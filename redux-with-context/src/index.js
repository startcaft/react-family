import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanle from './views/ControlPanel';
import store from './stores/Store';

import Provider from './Provider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <ControlPanle />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
