import Navbar from "./components/navbar/NavBar.jsx"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Tarefas from "./pages/Tarefas/Tarefas.jsx"
import Login from "./pages/Login/Login.jsx"
import Cadastro from "./pages/Cadastro/Cadastro.jsx"


export default function App() {
  return (
    <>
          <header>
              <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/tarefas" element={<Tarefas />}/>

              <Route path="/login" element={<Login/>}/>
              <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
          </main>
          <footer></footer>

    </>
  )
}