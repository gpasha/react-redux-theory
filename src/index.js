import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// function loggerMiddleware(store) {
//   return function(next) {
//     return function(action) {
//       const res =  next(action)
//       console.log('Middlewear:', store.getState())
//       return res
//     }
//   }
// }

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middlewear:', store.getState())
  return result
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
