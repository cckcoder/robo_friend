import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import './index.css';
import App from './container/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
