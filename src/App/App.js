//import logo from './platzi.webp';

import { useLocalStorage } from './useLocalStorage'
import { AppExport } from './AppInfo'

import React from "react";

/* 
localStorage.removeItem('TODOS_V1')
const defaultTodos = [{ text: 'Cortar cebolla', completado: false},
  { text: 'Ver curso de react', completado: true},
  { text: 'Completar curso de React', completado: false },
  { text: 'Dormir', completado: true},
  { text: 'Salir', completado: false},
] 
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
*/


//componente de REACT, siempre empieza con mayuscula
function App() {
  const {item: propToDos,
          saveItem:  saveTodos,
          cargando,
          error
  } = useLocalStorage("TODOS_V1", [])
  //lo llame 'prop...' porque es la variable padre que se va a enviar a cada componente que este dentro de App(){}
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
    saveTodos(nuevosToDos)
  }

  const borrarToDo = (text) => {
    const nuevosToDos = [...propToDos];
    const index = nuevosToDos.findIndex((parte) => parte.text === text);
    nuevosToDos.splice(index, 1);
    saveTodos(nuevosToDos);
  }

  React.useEffect(() => { 
    const allDone = contadorCompletados === totalTodos && totalTodos > 0;
    if (allDone && !propCompletados) { //que allDone sea true y propCompletados false para que no salte siempre la alerta
      alert("¡Felicidades! Has completado todos tus TODOs.");
    }
    propSetCompletados(allDone);
  }, [contadorCompletados, totalTodos, propCompletados]); //solo pongo los estados en donde cuando cambien quiero que se ejecte la funcion

  //console.log(`Buscaste en TodoBuscador.js: \n'${propBuscadorValue}'`);

  return (
    <>
      <AppExport
        cargando={cargando}
        error={error}
        contadorCompletados={contadorCompletados}
        totalTodos={totalTodos}
        propCompletados={propCompletados}
        propBuscadorValue={propBuscadorValue}
        propSetBuscadorValue={propSetBuscadorValue}
        toDosBuscados={toDosBuscados}
        completarToDo={completarToDo}
        borrarToDo={borrarToDo}
      />
    </>
  );
}


export default App;
