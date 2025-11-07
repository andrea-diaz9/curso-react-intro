import '../css/CrearBotonTodo.css'

function CrearBotonTodo(){
  return(
    <button className="CrearBotonTodo"
    onClick={
      () => {
        console.log('Le diste click al +')
      }
    }>+</button>
  )
}

export  { CrearBotonTodo };