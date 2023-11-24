import React from 'react'
import bootstrap from 'bootstrap'
import MainRouter from './MainRouter.js'
import 'bootstrap/dist/css/bootstrap.min.css'

//main app allows bootstrap to be used throughout app and serves main router 
function App() {
    return (
        <MainRouter />
    )
}
export default App