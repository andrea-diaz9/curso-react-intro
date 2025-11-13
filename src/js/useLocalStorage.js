import React from 'react'

//custom hook
function useLocalStorage(itemName, initialValue) {

    //se usa la palabra 'item' porque todo lo que tiene que ver con localStorage se llama item
    const [item, setItem] = React.useState(initialValue);
    const [cargando, setCargando] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        console.count('useLocalStorage effect run');
        const timeoutId = setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setCargando(false);
            } catch (err) {
                setCargando(false);
                setError(true);
            }
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
            console.count('useLocalStorage cleanup');
        };
    }, [itemName]);



    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }
    //console.log(item)

    return {
        item,
        saveItem,
        cargando,
        error
    }
}

export { useLocalStorage }

/* 
localStorage.removeItem('TODOS_V1')
const defaultTodos = [{ text: 'Cortar cebolla', completado: false},
    { text: 'Ver curso de react', completado: true},
    { text: 'Completar curso de React', completado: false },
    { text: 'Dormir', completado: true},
    { text: 'Salir', completado: false},
] 
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
*/