// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';

import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import { reducer } from "./redux";

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  compose(reduxDevTools)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
