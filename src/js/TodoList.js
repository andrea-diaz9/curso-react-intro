import '../css/TodoList.css'
function TodoList( props){

    /* console.log(props.totalTodos) */
    /* console.count('TodoList render')
    console.log('toDosBuscados length:', props.toDosBuscados?.length) */
  
  return(
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.cargando && props.onCargando()}

      {(!props.totalTodos && !props.cargando) && props.onVacio()}
      {(!!props.totalTodos && !props.toDosBuscados.length) && props.onCeroResultados(props.textBuscador)}
      
      <ul className='TodoList'>
        {props.toDosBuscados.map(props.render)}
      </ul>
    </section>
  )
}

export  { TodoList };