import { useState, useEffect } from 'react'
import Tarjeta from '../components/Tarjeta.jsx'


const razas = {
  Saiyan: 'Saiyajin',
  Human: 'Humano',
  Namekian: 'Namekiano',
  'Frieza Race': 'Raza de Freezer',
  Android: 'Androides',
  Majin: 'Majin',
  God: 'Dioses',
  Angel: 'Ángeles',
  Nucleico: 'kaiosamas'

}

const afiliaciones = {
  'Z Fighter': 'Guerrero Z',
  'Army of Frieza': 'Ejército de Freezer',
  'Red Ribbon Army': 'Patrulla Roja',
  Villain: 'Villano',
  Freelancer: 'Independiente',
  Other: 'Otro',
}

function Inicio() {

  const [personajes, setPersonajes] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)
  const [raza, setRaza] = useState('')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    setCargando(true)
    setError(false)

    let url = `https://dragonball-api.com/api/characters?page=${pagina}&limit=12`
    if (raza !== '') {
      url = `https://dragonball-api.com/api/characters?race=${encodeURIComponent(raza)}`
    }

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (Array.isArray(datos)) {
          setPersonajes(datos)
          setTotalPaginas(1)
        } else {
          setPersonajes(datos.items)
          setTotalPaginas(datos.meta.totalPages)
        }
        setCargando(false)
      })
      .catch(() => {
        setError(true)
        setCargando(false)
      })
  }, [pagina, raza])


  function cambiarRaza(evento) {
    setRaza(evento.target.value)
    setPagina(1)
  }

  return (
    <section>
      <h2>Personajes de Dragon Ball</h2>

      <div className="filtro">
        <label>Filtrar por raza: </label>
        <select value={raza} onChange={cambiarRaza}>
          <option value="">Todas</option>
          {Object.keys(razas).map((r) => (
            <option key={r} value={r}>
              {razas[r]}
            </option>
          ))}
        </select>
      </div>

      {cargando && <p className="aviso">Cargando personajes...</p>}
      {error && <p className="aviso error">no se pudo cargar la API</p>}
      {!cargando && !error && personajes.length === 0 && (
        <p className="aviso">No se encontraron personajes.</p>
      )}

      <div className="grilla">
        {personajes.map((p) => (
          <Tarjeta
            key={p.id}
            imagen={p.image}
            titulo={p.name}
            linea1={`Raza: ${razas[p.race] || p.race}`}
            linea2={`Afiliación: ${afiliaciones[p.affiliation] || p.affiliation}`}
            linea3={`Ki: ${p.ki}`}
          />
        ))}
      </div>

      {totalPaginas > 1 && (
        <div className="botones">
          <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
            ← Anterior
          </button>
          <span>
            Página {pagina} de {totalPaginas}
          </span>
          <button
            onClick={() => setPagina(pagina + 1)}
            disabled={pagina === totalPaginas}
          >
            Siguiente →
          </button>
        </div>
      )}
    </section>
  )
}

export default Inicio