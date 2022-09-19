import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux' ;

import counterReducer from './store/reducer'
import { Provider } from 'react-redux';





// STORE (state)
let store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

  );
// store.subscribe(()=>{
//   console.log(store.getState())
// })

// DISPATCH

// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(increment())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
