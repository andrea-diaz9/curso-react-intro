//import logo from './platzi.webp';
import { TodoContador } from './TodoContador';
import { TodoBuscador } from './TodoBuscador';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CrearBotonTodo } from './CrearBotonTodo';

const defaultTodos = [{ text: 'Cortar cebolla', completado: true},
  { text: 'Ver curso de react', completado: true},
  { text: 'Completar curso de React', completado: false },
  { text: 'Salir', completado: false}
]

//componente de REACT, siempre empieza con mayuscula
function App() {
  return (
    //esto es .jsx (class(html)  = className(jsx))
    <>
      <TodoContador completado = {16} total = {25} />
      <TodoBuscador />

      <TodoList>
          {defaultTodos.map(todo =>(<TodoItem key={todo.text}
          text={todo.text} 
          completado = {todo.completado}/>))}
      </TodoList>

      <CrearBotonTodo />
    </>
  );
}


export default App;
