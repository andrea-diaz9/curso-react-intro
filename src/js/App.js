//import logo from './platzi.webp';
import { TodoContador } from './TodoContador';
import { TodoBuscador } from './TodoBuscador';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CrearBotonTodo } from './CrearBotonTodo';
import React from "react";

const defaultTodos = [{ text: 'Cortar cebolla', completado: true},
  { text: 'Ver curso de react', completado: true},
  { text: 'Completar curso de React', completado: false },
  { text: 'Salir', completado: false}
]

//componente de REACT, siempre empieza con mayuscula
function App() {
  const [propsearchValue, propsetSearchValue] = React.useState("");
  const [propToDos, /* propsetTodos */] = React.useState(defaultTodos)

  const toDoCompletados = propToDos.filter( todo => !!todo.completado).length
  const toDos = propToDos.length

  return (
    //esto es .jsx (class(html)  = className(jsx))
    <>
      <TodoContador
        completado={toDoCompletados}
        total={toDos}
      />

      <TodoBuscador
        searchValue={propsearchValue}
        setSearchValue={propsetSearchValue}
      />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completado={todo.completado}
          />
        ))}
      </TodoList>

      <CrearBotonTodo />
    </>
  );
}


export default App;
