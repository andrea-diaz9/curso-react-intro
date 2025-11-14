import React from 'react'
import '../css/ChangeAlert.css'
import { withStorageListener } from './withStorageListener'


function ChangeAlert({ show, toggleShow }) {
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
            </div>)
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }