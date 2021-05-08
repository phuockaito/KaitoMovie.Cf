import React from 'react';
import ReactDOM from 'react-dom';
import App from './Apps/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import MyReducers from './Reducers/CombineReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({
});
const store = createStore(
  MyReducers,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
