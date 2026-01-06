import React from 'react'
//ESTE ES UN CUSTOM HOOK
function useStorageListener({ sincronizar }) {

    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change) => {
        if (change.key === 'ToDo_Lista') {
            console.log('Hubo cambios en ToDo_Lista')
            setStorageChange(true);
        }
    })

    const toggleShow = () => {
        sincronizar()
        setStorageChange(false)
    }

    return {
        show: storageChange,
        toggleShow: toggleShow 
    }
}


export { useStorageListener }