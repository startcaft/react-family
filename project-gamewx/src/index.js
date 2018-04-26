import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './appLayout';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <AppLayout />
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
