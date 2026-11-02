import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🐉 Mi Sitio</h1>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Figuras</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  )
}

export default Navbar
