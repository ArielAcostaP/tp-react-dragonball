function Tarjeta({ imagen, titulo, linea1, linea2, linea3 }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{linea1}</p>
      <p>{linea2}</p>
      <p>{linea3}</p>
    </div>
  )
}

export default Tarjeta
