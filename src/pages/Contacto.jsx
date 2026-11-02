import { useState } from 'react'

const URL_FORMSPREE = 'https://formspree.io/f/xljjorlq'

function Contacto() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [estado, setEstado] = useState('')

  async function enviar(evento) {
    evento.preventDefault()
    setEstado('enviando')

    try {
      const respuesta = await fetch(URL_FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje }),
      })

      if (respuesta.ok) {
        setEstado('ok')
        setNombre('')
        setEmail('')
        setMensaje('')
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <section>
      <h2>Contacto</h2>
      <div className="contacto">
        <form onSubmit={enviar} className="formulario">
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Mensaje</label>
          <textarea
            rows="6"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />

          <button type="submit" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {estado === 'ok' && <p className="aviso">¡Mensaje enviado! Gracias 😊</p>}
          {estado === 'error' && (
            <p className="aviso error">No se pudo enviar. Probá de nuevo.</p>
          )}
        </form>

        <iframe
          className="mapa"
          title="Mapa"
          src="https://maps.google.com/maps?q=Plaza%209%20de%20Julio%2C%20Salta&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default Contacto
