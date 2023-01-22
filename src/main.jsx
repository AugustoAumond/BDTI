import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import MainRoutes from './Routes';
import './GlobalStyle.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MainRoutes />
  </React.StrictMode>
)
