import "../css/EmptyTodos.css";
import { CgArrowBottomRight } from "react-icons/cg";

function EmptyTodos() {
    return (
        <>
            <div>
                <p className="Parrafo">CREA TU PRIMER TO DO 😊</p>
            </div>
            <div>
                <CgArrowBottomRight className="arrow" />
            </div>
        </>
    );
}

export { EmptyTodos };
