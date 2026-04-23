import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import NavBar from './components/navBar'
import Hero from './components/Hero'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Hero />
  </StrictMode>,
)
