import React from 'react'
import '../css/TodoHeader.css'


function TodoHeader({ children, cargando }){
    return(
        <header>
            {React.Children.toArray( children).map( child => React.cloneElement(child, {cargando})) }
        </header>
    )
}

export { TodoHeader }

