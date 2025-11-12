import React from 'react'
import '../css/TodoHeader.css'


function TodoHeader({ children }){
    return(
        <header>
            { children }
        </header>
    )
}

export { TodoHeader }

