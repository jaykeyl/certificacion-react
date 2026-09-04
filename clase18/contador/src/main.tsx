import { createRoot } from 'react-dom/client'
import './index.css'
import EjemploLlaves from './EjemploLlaves.tsx'
import Contador from './Contador.tsx'
import Saludo from './Saludo.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <EjemploLlaves/>
      <Contador/>
      <Saludo name="Toti"/>
    </StrictMode>
)
