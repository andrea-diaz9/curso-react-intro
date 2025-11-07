import React from 'react'
import '../css/TodoBuscador.css'

function TodoBuscador({
  searchValue,
  setSearchValue
}) {
  return (
    <input placeholder="Cortar cebolla"
      className='TodoBuscador'
      value={searchValue}
      onChange={(event) => { setSearchValue(event.target.value) }
      } />
  )
}

export { TodoBuscador };