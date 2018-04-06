import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.less';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
