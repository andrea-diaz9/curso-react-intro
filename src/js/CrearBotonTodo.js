import '../css/CrearBotonTodo.css'

function CrearBotonTodo( { propSetOpenModal }){
  return(
    <button className="CrearBotonTodo"
    onClick={
      () => {
        /* console.log('Le diste click al +') */
        propSetOpenModal (state => !state)
      }
    }>+</button>
  )
}

export  { CrearBotonTodo };