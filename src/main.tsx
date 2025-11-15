import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainWindow from './view/MainWindow.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainWindow/>
  </StrictMode>,
)
