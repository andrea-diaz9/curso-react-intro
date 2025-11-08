import '../css/TodoItem.css'
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

function TodoItem(props){
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${
          props.completado && "Icon-check--active"
        }`}
        onClick={props.onCompletar}
      >
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${props.completado && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onBorrar}>
        <ImCross />
      </span>
    </li>
  );
}

export  { TodoItem };