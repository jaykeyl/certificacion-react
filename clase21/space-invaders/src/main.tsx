import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SpaceInvader from './SpaceInvader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpaceInvader/>
  </StrictMode>,
)
