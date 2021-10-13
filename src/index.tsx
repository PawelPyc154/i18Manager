import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from 'twin.macro'
import App from './App'
import StateContext from './components/StateContext'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <StateContext>
      <GlobalStyles />
      <App />
    </StateContext>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
