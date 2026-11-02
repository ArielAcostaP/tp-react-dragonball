import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import Contacto from './pages/Contacto.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <footer className="footer">Trabajo Práctico - Programación Web II</footer>
    </div>
  )
}

export default App
