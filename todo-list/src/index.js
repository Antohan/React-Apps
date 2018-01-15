import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
