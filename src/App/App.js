//import logo from './platzi.webp';
import { TodoProvider } from '../js/TodoContext';
import { AppExport } from './AppInfo'

import React from "react";

//componente de REACT, siempre empieza con mayuscula
function App() {
  return (
    <>
      <TodoProvider>
        <AppExport />
      </TodoProvider>
    </>
  );
}


export default App;
