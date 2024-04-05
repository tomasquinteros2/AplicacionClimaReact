import React from 'react'
import ReactDOM from 'react-dom/client'
import { WheaterApp } from './WheaterApp'
import "./Styles/weatherStyles.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheaterApp />
  </React.StrictMode>,
)
