import React from 'react'
import '../css/TodoForm.css'

function TodoForm({ agregarTodo, propSetOpenModal} ) {
        
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) =>{
        event.preventDefault()
        agregarTodo(newTodoValue)
        propSetOpenModal(false)
    }

    const onCancel = (event) => {
        event.preventDefault()
        propSetOpenModal(false)
    }
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label> <br/>
            <textarea placeholder='Llamar a mamá'
            value={newTodoValue}
            onChange={onChange}/>
            <div className='TodoForm-buttonContainer'>
                <button 
                type='button'
                onClick={onCancel}
                className='TodoForm-button TodoForm-button--CANCEL'>
                    Cancelar
                </button>
                <button 
                type='submit'
                
                className='TodoForm-button TodoForm-button--ADD'>
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm }