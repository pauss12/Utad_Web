
"use client"



function UsuarioDetalle() {
    
    //Como obtener el ultimo parametro de la URL
    const idUsuario = useParams().idUsuario;


    return (
        <div>
            <h1>Detalles del Usuario con ID: {idUsuario}</h1>
            {/* Renderizar otros detalles del usuario */}
        </div>
    );
}

export default UsuarioDetalle;
