function cartaComercio({ idComercio, nombreComercio, cifComercio, direccionComercio, emailComercio, telefonoComercio, puntuacion, comentarios, onDelete}) {

    return (
        <div className="comercio-card">
            <h2>{nombreComercio}</h2>
            <p>CIF: {cifComercio}</p>
            <p>Dirección: {direccionComercio}</p>
            <p>Email: {emailComercio}</p>
            <p>Teléfono: {telefonoComercio}</p>
            <p>Puntuación: {puntuacion}</p>
            <p>Comentarios:{comercio.comentarios}</p>
            
            <button onClick={() => onDelete(comercio._id)}>Borrar Comercio</button>
        </div>
    );
    
}

export default cartaComercio;