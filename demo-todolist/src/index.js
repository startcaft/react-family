import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import TodoApp from './todoApp';
import store from './Store';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
