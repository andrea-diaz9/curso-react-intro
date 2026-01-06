import React from 'react'
import { useStorageListener } from './useStorageListener'
import '../css/ChangeAlert.css'


function ChangeAlert({ sincronizar }) {
    const { show, toggleShow } = useStorageListener({ sincronizar })
    if (show) {
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Parece que cambiaste la lista de To Dos en otra pestaña o ventana del navegador.</p>
                    <p>¿Quieres sincronizar tus TODOS?</p>
                    <button
                        className='TodoForm-button TodoForm-button--add'
                        onClick={toggleShow}>
                        Sí
                    </button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export { ChangeAlert }