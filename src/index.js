/**
 * Instalaciones realizadas:
 * 
 * 1. Webpack: npm install webpack webpack-cli.
 * 2. React: npm install react react-dom.
 * 3. Babel: npm install babel-loader @babel/core @babel/preset-react.
 * 4. Webpack-dev-server: npm install webpack-dev-server
 * 5. npm install --save-dev style-loader
 * 6. npm install -D mini-css-extract-plugin
 * 7. npm install --save-dev css-loader
*/

import React from 'react'
import ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import Header from './components/Header.jsx'

const App = () => {
    return (
        <>
          <Header title='Hola' />
        </>
    )
}

const root = ReactDOMClient.createRoot(
    document.getElementById('root')
)

root.render(
    <App />
)