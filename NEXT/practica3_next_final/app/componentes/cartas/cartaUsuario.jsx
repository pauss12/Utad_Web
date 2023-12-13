import React from 'react';

function cartaUsuario({ usuario, onChange }) {
    
    return (

        <>
            <div className="bg-gray-200 rounded-2x1 ml-4 border border-black pl-4 pr-20 py-10 md:p-50 lg:px-30 my-2 shadow-md rounded">
                    <h2>Nombre: {usuario.nombreUsuario}</h2>
                    <p>ID: {usuario.idUsuario}</p> 
                    <p>Email: {usuario.email}</p> 
                    <p>Edad: {usuario.edad}</p> 
                    <p>Ciudad: {usuario.edad}</p> 
                    <p>Intereses: {usuario.intereses}</p> 
                    <p>Permite ofertas: {usuario.permiteOfertas}</p> 
                    <p>Tipo: {usuario.tipoUsuario}</p> 
            </div>
                
            {
            onChange && (
                <button className="bg-red-500 text-white rounded-md px-4 py-2"
                    onClick={() => onChange(usuario)}>
                    Editar Usuario
                </button>
            )}
        
            <hr></hr>
            
        </>

    );
}

export default cartaUsuario;
