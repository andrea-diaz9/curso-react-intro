import React from 'react'
import '../css/TodoForm.css'

function TodoForm() {
    return (
        <form>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder='Cortar cebolla para el almuerzo'/>
            <button className='TodoForm-button TodoForm-button--CANCEL'>Cancelar</button>
            <button className='TodoForm-button TodoForm-button--ADD'>Agregar</button>
        </form>
    )
}

export { TodoForm }