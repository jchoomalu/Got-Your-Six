import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

//renders app in root div in public html
const myRender = React.createElement(App)
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(myRender)