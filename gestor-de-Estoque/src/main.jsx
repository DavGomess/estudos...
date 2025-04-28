import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/Home/Home.css'
import './pages/StockItems/stockItems.css'
import './pages/NewItems/newItems.css'
import './pages/EditItems/EditItems.css'
import "./pages/ItemProfile/ItemProfile.css"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
