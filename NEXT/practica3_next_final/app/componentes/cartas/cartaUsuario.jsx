import React from 'react';

function cartaUsuario({ id, nombre, email, password, edad, ciudad, intereses, permiteOfertas, tipoUsuario}) {
    return (
        <div className="user-container">
            <div className="user-info">
                <div>
                    <strong>ID:</strong> {id}
                </div>
                <h2>Nombre: {usuario_registrado.nombreUsuario}</h2>
                <div>
                    <strong>Email:</strong> {email}
                </div>
                <div>
                    <strong>Edad:</strong> {edad}
                </div>
                <div>
                    <strong>Ciudad:</strong> {ciudad}
                </div>
                <div>
                    <strong>Intereses:</strong> {intereses}
                </div>
                <div>
                    <strong>Permite Ofertas:</strong> {permiteOfertas ? 'Sí' : 'No'}
                </div>
                <div>
                    <strong>Tipo:</strong> {tipo}
                </div>
            </div>
            
        </div>
    );
}

export default cartaUsuario;
