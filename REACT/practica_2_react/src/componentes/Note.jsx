
import '../styles/Other.css';

function Note({ id, titulo, contenido, eliminarNota }) {

    return (
        <div className="todo-icon-container">
            <div className="todo-title">
                {titulo}
            </div>
            <div className="todo-content">
                {contenido}
            </div>
            <div
                onClick={() => eliminarNota(id)}>
                <button className="boton-delete">Eliminar </button>
            </div>
        </div>
    );
}

export default Note;
