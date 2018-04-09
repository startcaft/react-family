import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.less';
import store from './store';
import { Provider } from 'react-redux';

import AllMemos from './typeTodoList/view/allMemos';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={AllMemos} />
            </App>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
