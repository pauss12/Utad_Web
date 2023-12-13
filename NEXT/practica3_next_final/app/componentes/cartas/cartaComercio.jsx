
function cartaComercio({ comercio, onDelete }) {

    return (
        <div className="bg-gray-200 rounded-2x1 ml-4 border border-black pl-4 pr-20 py-10 md:p-50 lg:px-30 my-2 shadow-md rounded">
            <h2>Nombre: {comercio.nombreComercio}</h2>
            <p>CIF: {comercio.cifComercio}</p>
            <p>Dirección: {comercio.direccionComercio}</p>
            <p>Email: {comercio.emailComercio}</p>
            <p>Teléfono: {comercio.telefonoComercio}</p>
            <p>Puntuación: {comercio.puntuacion}</p>
            <p>Comentarios:{comercio.comentarios}</p>
            
            {onDelete && (
                <button className="bg-red-500 text-white rounded-md px-4 py-2"
                    onClick={() => onDelete(comercio.emailComercio)}>
                    Borrar Comercio
                </button>
            )}
            
            <hr></hr>
        </div>
    );
    
}

export default cartaComercio;
