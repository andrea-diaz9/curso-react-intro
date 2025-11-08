//import logo from './platzi.webp';
import { TodoContador } from './TodoContador';
import { TodoBuscador } from './TodoBuscador';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CrearBotonTodo } from './CrearBotonTodo';
import React from "react";

const defaultTodos = [{ text: 'Cortar cebolla', completado: false},
  { text: 'Ver curso de react', completado: true},
  { text: 'Completar curso de React', completado: false },
  { text: 'Salir', completado: false},
]

//componente de REACT, siempre empieza con mayuscula
function App() {
  //lo llame 'prop...' porque es la variable padre que se va a enviar a cada componente que este dentro de App(){}
  const [propToDos, propSetPropToDos] = React.useState(defaultTodos);
  const [propBuscadorValue, propSetBuscadorValue] = React.useState("");
  
  const contadorCompletados = propToDos.filter(
    (parte) => !!parte.completado
  ).length;
  const totalTodos = propToDos.length;

  const [propCompletados, propSetCompletados] = React.useState(false);

  const toDosBuscados = propToDos.filter((parte) => {
    const toDoText = parte.text.toLowerCase();
    const buscadorText = propBuscadorValue.toLowerCase();
    return toDoText.includes(buscadorText);
  })
  
  const completarToDo = (text) =>{
    const nuevosToDos = [...propToDos]
    const index = nuevosToDos.findIndex(
      (parte ) => parte.text === text
    )
    if (nuevosToDos[index].completado === true) {
      nuevosToDos[index].completado = false;
    } else {
      nuevosToDos[index].completado = true;
    }
    propSetPropToDos(nuevosToDos)
  }

  const borrarToDo = (text) => {
    const nuevosToDos = [...propToDos];
    const index = nuevosToDos.findIndex((parte) => parte.text === text);
    nuevosToDos.splice(index, 1);
    propSetPropToDos(nuevosToDos);
  }

  React.useEffect(() => { 
    const allDone = contadorCompletados === totalTodos && totalTodos > 0;
    if (allDone && !propCompletados) { //que allDone sea true y propCompletados false para que no salte siempre la alerta
      alert("¡Felicidades! Has completado todos tus TODOs.");
    }
    propSetCompletados(allDone);
  }, [contadorCompletados, totalTodos, propCompletados, propSetCompletados]);

  //console.log(`Buscaste en TodoBuscador.js: \n'${propBuscadorValue}'`);

  return (
    //esto es .jsx (class(html)  = className(jsx))
    <>
      <TodoContador
        completado={contadorCompletados}
        total={totalTodos}
        onCompletados={propCompletados}
      />

      <TodoBuscador
        searchValue={propBuscadorValue}
        setSearchValue={propSetBuscadorValue}
      />

      <TodoList>
        {toDosBuscados.map((parte) => (
          <TodoItem
            key={parte.text}
            text={parte.text}
            completado={parte.completado}
            onCompletar={() => completarToDo(parte.text)} //se pone dentro de arrow function para que se ejecute SÓLO cuando se de click y no se ejecute siempre de una cuando se quiera renderizar porque esto va a ocasionar un crasheo del sitio ("too many re-renders")
            onBorrar={() => borrarToDo(parte.text)}
          />
        ))}
      </TodoList>

      <CrearBotonTodo />
    </>
  );
}


export default App;
