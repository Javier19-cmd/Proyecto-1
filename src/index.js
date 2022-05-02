//  Javier Valle
//  Carnet 20159
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

function App() {
  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
}

const root = ReactDOMClient.createRoot(
  document.getElementById('root'),
)

root.render(
  <App />,
)
