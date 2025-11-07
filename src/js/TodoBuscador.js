import '../css/TodoBuscador.css'

function TodoBuscador(){
  return(
    <input placeholder="Cortar cebolla"
    className='TodoBuscador'
    onInput={(l) => console.log(`Buscaste ${l}`)}/>
  )
}

export  {TodoBuscador};