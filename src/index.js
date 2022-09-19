import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux' ;


// ACTION -- 1

const increment = () =>{
  return {
    type: 'INC',
    payload: 2
  }
}

const decrement = () =>{
  return {
    type: 'DEC',
    payload: 1
  }
}

// REDUCER

const counter = (state=0,action)=>{
 switch(action.type){
  case 'INC' : return state+action.payload;
  case 'DEC' : return state-action.payload;
  default : return state;
 }
}


// STORE (state)
let store = createStore(counter);
store.subscribe(()=>{
  console.log(store.getState())
})

// DISPATCH

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increment())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
