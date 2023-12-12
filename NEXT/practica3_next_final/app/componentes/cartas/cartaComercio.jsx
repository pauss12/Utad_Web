import "../../styles/carta.css"

function cartaComercio({ comercio, onDelete }) {

    return (
        <div className="carta">
            <h2>Nombre: {comercio.nombreComercio}</h2>
            <p>CIF: {comercio.cifComercio}</p>
            <p>Dirección: {comercio.direccionComercio}</p>
            <p>Email: {comercio.emailComercio}</p>
            <p>Teléfono: {comercio.telefonoComercio}</p>
            <p>Puntuación: {comercio.puntuacion}</p>
            <p>Comentarios:{comercio.comentarios}</p>
            
            {onDelete && (
                <button className="botonEliminar" onClick={() => onDelete(comercio.emailComercio)}>
                    Borrar Comercio
                </button>
            )}
            
            <hr></hr>
        </div>
    );
    
}

export default cartaComercio;
