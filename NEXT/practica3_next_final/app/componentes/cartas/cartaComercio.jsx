function cartaComercio({ comercio, onDelete }) {

    return (
        <div className="comercio-card">
            <h2>Nombre: {comercio.nombreComercio}</h2>
            <p>CIF: {comercio.cifComercio}</p>
            <p>Dirección: {comercio.direccionComercio}</p>
            <p>Email: {comercio.emailComercio}</p>
            <p>Teléfono: {comercio.telefonoComercio}</p>
            <p>Puntuación: {comercio.puntuacion}</p>
            <p>Comentarios:{comercio.comentarios}</p>
            
            <button onClick={() => onDelete(comercio._id)}>Borrar Comercio</button>
        </div>
    );
    
}

export default cartaComercio;