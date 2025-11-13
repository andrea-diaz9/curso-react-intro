//import logo from './platzi.webp';
import { TodoContador } from "../js/TodoContador.js";
import { TodoBuscador } from "../js/TodoBuscador.js";
import { TodoList } from "../js/TodoList";
import { TodoItem } from "../js/TodoItem";
import { CrearBotonTodo } from "../js/CrearBotonTodo";
import { TodoCargando } from "../js/TodoCargando.js";
import { TodoError } from "../js/TodoError.js";
import { EmptyTodos } from "../js/EmptyTodos.js";
import { TodoForm } from "../js/TodoForm.js";
import { Modal } from "../js/Modal.js";
import { useTodos } from "./useTodos.js";
import { TodoHeader } from "../js/TodoHeader.js";


//componente de REACT, siempre empieza con mayuscula
function App() {
  const { 
    cargando,
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
          onCompletados={propCompletados}
          cargando = { cargando } />

        <TodoBuscador
          searchValue={propBuscadorValue}
          setSearchValue={propSetBuscadorValue}
          cargando = { cargando } />
      </TodoHeader>

      <TodoList
        error = {error}
        cargando = {cargando}
        toDosBuscados = {toDosBuscados}
        totalTodos={totalTodos}
        textBuscador={propBuscadorValue}

        onError = {() => <TodoError/>}
        onCargando={() => <TodoCargando />}
        onVacio={() => <EmptyTodos />}
        onCeroResultados={(textBuscador) => <p>No hay resultados para "{textBuscador}"</p>}
        render={todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completado={todo.completado}
            onCompletar={() => completarToDo(todo.text)} //se pone dentro de arrow function para que se ejecute SÓLO cuando se de click y no se ejecute siempre de una cuando se quiera renderizar porque esto va a ocasionar un crasheo del sitio ("too many re-renders")
              onBorrar={() => borrarToDo(todo.text)}
            />
        )}
      />

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
