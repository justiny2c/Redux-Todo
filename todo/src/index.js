import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todosReducer } from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(todosReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();