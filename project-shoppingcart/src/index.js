import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import 'antd/dist/antd.css';
import './assets/style/app.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
