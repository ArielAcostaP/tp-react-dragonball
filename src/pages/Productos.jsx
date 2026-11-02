import Tarjeta from '../components/Tarjeta.jsx'
import { productos } from '../data/productos.js'

function Productos() {
  return (
    <section>
      <h2>Catálogo de Figuras de Accion</h2>

      <div className="grilla">
        {productos.map((p) => (
          <Tarjeta
            key={p.id}
            imagen={p.imagen}
            titulo={p.nombre}
            linea1={p.descripcion}
            linea2={`Precio: ${p.precio}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Productos