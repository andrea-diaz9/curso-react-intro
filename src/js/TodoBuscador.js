import React from 'react'
import '../css/TodoBuscador.css'

function TodoBuscador( { searchValue, setSearchValue, cargando } ){
  return (
    <input placeholder="Buscar..."
      className='TodoBuscador'
      value={searchValue}
      onChange={(event) => { setSearchValue(event.target.value) } }
      disabled = { cargando }
    />
  )
}

export { TodoBuscador };