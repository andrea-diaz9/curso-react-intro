import React from 'react'

function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){

        const [storageChange, setStorageChange] =  React.useState(false)

        window.addEventListener('storage',(change)=> {
            if(change.key === 'ToDo_Lista'){
                console.log('Hubo cambios en ToDo_Lista')
                setStorageChange(true);
            }
        })

        const toggleShow = () =>{
            props.sincronizar()
            setStorageChange(false)
        }

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={ toggleShow }
            />
        )
    }
}

export { withStorageListener }