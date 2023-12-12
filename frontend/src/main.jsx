import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, HashRouter} from "react-router-dom"
import GlobalStyle from './styles/GlobalStyle.js'
import {Provider} from "react-redux"
import store from './redux/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <GlobalStyle/>
  <App />
  </BrowserRouter>
  </Provider>
  
)
