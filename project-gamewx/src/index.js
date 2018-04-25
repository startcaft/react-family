import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './appLayout';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

        <AppLayout />

    , document.getElementById('root'));
registerServiceWorker();
