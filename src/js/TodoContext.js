import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider( { children } ){
    const { item: propToDos,
        saveItem: saveTodos,
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

    const completarToDo = (text) => {
        const nuevosToDos = [...propToDos]
        const index = nuevosToDos.findIndex(
            (parte) => parte.text === text
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
    return (
        <TodoContext.Provider value={{
            cargando,
            error,
            contadorCompletados,
            totalTodos,
            propCompletados,
            propBuscadorValue,
            propSetBuscadorValue,
            toDosBuscados,
            completarToDo,
            borrarToDo
        }}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider}