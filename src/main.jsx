import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Login from './pages/Login/Login.jsx'
import './global.css'
//import Cadastro from './pages/Cadastro/Cadastro.jsx'
import Navbar from './components/navbar/NavBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <Navbar/>
    </header>
    <main></main>
    <footer></footer>
    
    {/* <Login/> */}
    {/* <Cadastro/> */}
  </StrictMode>,
)
