import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';


import App from './containers/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { requestRobots, searchRobots } from './reducers'

import './index.css';

const logger = createLogger() 

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunk, logger))

const root = createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <App/>
</Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
