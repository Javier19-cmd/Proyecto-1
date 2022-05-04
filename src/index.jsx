//  Javier Valle
//  Carnet 20159
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <Todo />
    </div>
  )
}

const root = ReactDOMClient.createRoot(
  document.getElementById('root'),
)

root.render(
  <App />,
)
