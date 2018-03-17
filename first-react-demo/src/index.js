import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from '../src/ClickCounter'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickCounter />, document.getElementById('root'));
registerServiceWorker();
