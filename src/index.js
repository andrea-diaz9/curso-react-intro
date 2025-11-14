import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App/App.js'

/* function App(props){
    return (
        <h1>¡{props.saludo}, {props.nombre}!</h1>
    )
}

function withSaludo(WrappedComponent){ //hoc high order component
    return function WrappedComponentWithSaludo(saludo){
        return function ComponenteDeVerdad(props) {
            return (
                <>
                    <WrappedComponent {...props} saludo = {saludo}/>
                    <p>Estamos acmpañando al wrapped component</p>
                    //{este ÚLTIMO return siempre tiene que ser un componente de react}
                </>
            )
        }
    }
}

const AppWithSaludo = withSaludo(App)('heelouu')//AQUI SE VA A GUARDAR AL COMPONENTE APP DESPUES DE QUE SE HAYA ENVUELTO EN EL HOC
 */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App /* saludo="hola" nombre="Juan" */ />);
