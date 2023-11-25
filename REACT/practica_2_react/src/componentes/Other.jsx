

import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../styles/Other.css';

function Other({ id, titulo, contenido, completed, completarNota, eliminarNota }) {

    return (
        <div className={completed ? "todo-container completed" : "todo-container"}>
            <div
                className="todo-text"
                onClick={() => completarNota(id)}>
                {titulo}
            </div>
            <div
                className="todo-text"
                onClick={() => completarNota(id)}>
                {contenido}
            </div>
            <div
                className="todo-icon-container"
                onClick={() => eliminarNota(id)}>
                <button className="boton-delete">Eliminar </button>
            </div>
        </div>
    )
}

export default Other;
