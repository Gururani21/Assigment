import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const str = 'fdfgfg'
root.render(
  <React.StrictMode>
    <div className="bg-black w-9 h-7"></div>
    <div>dkfkjdk</div>
    <h1>kdfjdkfj</h1>
    <p>test</p>
    <div className="prose">
      <h1>My heading</h1>
      <p>My paragraph</p>
      <a href="#">My link</a>
    </div>
  </React.StrictMode>
)
