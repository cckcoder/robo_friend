import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './container/App'
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers'
import 'tachyons';

const logger = createLogger()
const store = createStore(
  searchRobots
  ,applyMiddleware(logger, thunkMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
