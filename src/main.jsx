import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'; // Add this import if it's missing
import { BrowserRouter } from 'react-router-dom';
import CoinContextProvider from './context/coinContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CoinContextProvider>
    <App />
    </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
