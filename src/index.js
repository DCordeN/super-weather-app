import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
// Components
import App from './App'
// Store
import store from './store/index'
// Styles
import './index.css'

const ConnectedApp = connect((state) => {
  return state
})(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
