import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('weather-icon')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
