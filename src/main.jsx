import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import MainRoutes from './routes/MainRoutes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
        <MainRoutes />
      </ThemeProvider>
  </StrictMode>
)
 