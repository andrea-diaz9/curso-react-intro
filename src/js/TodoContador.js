import '../css/TodoContador.css'

function TodoContador( {total, completado} ){ //puede recibir props con el nombre que queramos

  return (
    <h1 className="TodoContador">
      Has completado <span>{completado}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export  {TodoContador};