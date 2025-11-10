import React from 'react'
import '../css/TodoCargando.css'
import { AiOutlineLoading } from "react-icons/ai";

function TodoCargando() {

    return (
        <>
            <div>
                <AiOutlineLoading className='cargandoIcon' />
            </div>
        </>
    );
}

export { TodoCargando }