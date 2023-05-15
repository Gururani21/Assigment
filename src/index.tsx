import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Button from './lib/components/Button'
import Input from './lib/components/Form/Input'
import App from './app'
import {Toaster} from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const str = 'fdfgfg'

root.render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>
)
