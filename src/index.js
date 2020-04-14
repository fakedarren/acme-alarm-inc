import React from 'react';

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import App from './pages/App';
import enableDevTools from './util/enableDevTools';
import rootReducer from './reducers';

import './global.scss';

const storeEnhancer = compose(applyMiddleware(thunk), enableDevTools);

const store = createStore(rootReducer, storeEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
