import '../css/TodoContador.css'

function TodoContador({ total, completado, onCompletados }) {
  //puede recibir props con el nombre que queramos

  return (
    <h1 className="TodoContador">
      <p className={`${onCompletados ? "hidden" : ""}`}>
        Has completado <span>{completado}</span> de <span>{total}</span> TODOs
      </p>
      <p className={`${onCompletados ? "Todos-completados" : "hidden"}`}>
        FELICIDADES, HAS COMPLETADO TODOS TUS ToDo's! 🥳
      </p>
    </h1>
  );
}

export  {TodoContador};