import React from 'react' 
import { TodoContador } from "../js/TodoContador";
import { TodoBuscador } from "../js/TodoBuscador";
import { TodoList } from "../js/TodoList";
import { TodoItem } from "../js/TodoItem";
import { CrearBotonTodo } from "../js/CrearBotonTodo";
import { TodoCargando } from "../js/TodoCargando.js";
import { TodoError } from "../js/TodoError.js";
import { CeroTodos } from "../js/CeroTodos.js";
import { TodoForm } from "../js/TodoForm.js";
import { Modal } from "../js/Modal.js";
import { TodoContext } from "../js/TodoContext.js";

function AppExport() {
    //esto es .jsx (class(html)  = className(jsx))
    const { cargando,
                error,
                totalTodos,
                toDosBuscados,
                completarToDo,
                borrarToDo,
                propOpenModal,
                propSetOpenModal } = React.useContext(TodoContext)
    return (
        <>
            <TodoContador/>

            <TodoBuscador/>

            
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
                propSetOpenModal = { propSetOpenModal }/>

            {propOpenModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppExport };