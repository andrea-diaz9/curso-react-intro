import React from 'react';
import '../css/TodoContador.css'
import { TodoContext} from './TodoContext';

function TodoContador() {
  //puede recibir props con el nombre que queramos
  const { contadorCompletados: completado, 
              totalTodos: total,
              propCompletados: onCompletados } = React.useContext(TodoContext);
  return (
    
    <h1 className="TodoContador">
      <p className={`${onCompletados ? "hidden" : ""}`}>
        Has completado <span>{completado}</span> de <span>{total}</span> TODOs
      </p>
      <p className={`${onCompletados ? "Todos-completados" : "hidden"}`}>
        FELICIDADES, HAS COMPLETADO TODOS TUS ToDo's! 🥳
      </p>
    </h1>
    
  )
}

export  {TodoContador};