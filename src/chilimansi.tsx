import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Chilimansi from './pages/Chilimansi.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Chilimansi />
  </StrictMode>,
)
