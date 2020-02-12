import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
=======
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
>>>>>>> master
import './index.css';
import App from './container/App'
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers'
import 'tachyons';

<<<<<<< HEAD
const logger = createLogger()
const store = createStore(searchRobots, applyMiddleware(logger))
=======
const store = createStore(searchRobots)
>>>>>>> master

ReactDOM.render(
  <Provider store={store}>
    <App />
<<<<<<< HEAD
  </Provider>, document.getElementById('root'));
=======
  </Provider>, document.getElementById('root')
);

>>>>>>> master
serviceWorker.unregister();
