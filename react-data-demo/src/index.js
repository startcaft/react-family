import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanle from './ControlPanel'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ControlPanle />, document.getElementById('root'));
registerServiceWorker();
