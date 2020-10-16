import React from 'react'
import ReactDOM from 'react-dom'
//connecting to redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
//importing reducers
import formReducer from './store/form/form.reducer'
//importing routing
import { BrowserRouter } from 'react-router-dom'

const rootReducer = combineReducers({
  form: formReducer,
})
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
