//import logo from './platzi.webp';
import { TodoContador } from "../js/TodoContador.js";
import { TodoBuscador } from "../js/TodoBuscador.js";
import { TodoList } from "../js/TodoList";
import { TodoItem } from "../js/TodoItem";
import { CrearBotonTodo } from "../js/CrearBotonTodo";
import { TodoCargando } from "../js/TodoCargando.js";
import { TodoError } from "../js/TodoError.js";
import { CeroTodos } from "../js/CeroTodos.js";
import { TodoForm } from "../js/TodoForm.js";
import { Modal } from "../js/Modal.js";

import { TodoHeader } from "../js/TodoHeader.js";

import { useTodos } from "./useTodos.js";

import React from "react";

//componente de REACT, siempre empieza con mayuscula
function App() {
  const { cargando,
    error,
    contadorCompletados,
    totalTodos,
    propCompletados,
    propBuscadorValue,
    propSetBuscadorValue,
    toDosBuscados,
    completarToDo,
    borrarToDo,
    propOpenModal,
    propSetOpenModal,
        agregarTodo } = useTodos()
  return (
    <>
      <TodoHeader>
        <TodoContador
          completado={contadorCompletados}
          total={totalTodos}
          onCompletados={propCompletados} />

        <TodoBuscador
          searchValue={propBuscadorValue}
          setSearchValue={propSetBuscadorValue} />
      </TodoHeader>

      <TodoList>
        {cargando && <TodoCargando />}

        {error && <TodoError />}

        {!cargando && totalTodos === 0 && <CeroTodos />}
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

      <CrearBotonTodo
        propSetOpenModal={propSetOpenModal} />

      {propOpenModal && (
        <Modal>
          <TodoForm
            agregarTodo={agregarTodo}
            propSetOpenModal={propSetOpenModal}
          />
        </Modal>
      )}
    </>
  );
}


export default App;
