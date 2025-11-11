import React from 'react'
import '../css/TodoBuscador.css'
import { TodoContext } from './TodoContext';

function TodoBuscador(){
  const {
    propBuscadorValue: searchValue,
    propSetBuscadorValue: setSearchValue,} = React.useContext(TodoContext);
  return (
    <input placeholder="Buscando..."
      className='TodoBuscador'
      value={searchValue}
      onChange={(event) => { setSearchValue(event.target.value) }
      } />
  )
}

export { TodoBuscador };