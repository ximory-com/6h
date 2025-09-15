import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/mobile-fix.css'
import './styles/harmony-cards-fix.css'
import './styles/articles-fix.css'
import './styles/brand-colors.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
