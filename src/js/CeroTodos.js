import "../css/CeroTodos.css";
import { CgArrowBottomRight } from "react-icons/cg";

function CeroTodos() {
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

export { CeroTodos };
