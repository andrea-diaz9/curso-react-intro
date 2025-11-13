import React from 'react';
import '../css/TodoContador.css'

function TodoContador({completado, total, onCompletados, cargando}) {
  return (
    
    <h1 className={`TodoContador ${cargando ? "TodoContador--loading" : ""}`}>
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