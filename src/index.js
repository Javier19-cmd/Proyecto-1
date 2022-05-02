//  Javier Valle
//  Carnet 20159
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import Header from './components/Header.jsx'

function App() {
  return (
    <div>
      <Header title="Hola" />
    </div>
  )
}

const root = ReactDOMClient.createRoot(
  document.getElementById('root'),
)

root.render(
  <App />,
)
