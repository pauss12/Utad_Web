"use client"

import React, { useState } from 'react';
import '../styles/Form.css';

function Seleccionar() {

    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const handleClick = () => {
        setOpcionSeleccionada(document.getElementById('dropdown').querySelector('.dropdown-item.active').textContent);
    };

    return (
        <button
            onClick={handleClick}
        >Seleccionar</button>
    );
}

//FUNCION REGISTRO DE USUARIOS --------------------------------------------------------------------------------------------------------
function registro_user() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const isDropdownDisabled = usuario && password;

    const handleSeleccionar = (setOpcionSeleccionada) => {
        const opcionSeleccionada = document.getElementById('dropdown').querySelector('.dropdown-item.active').textContent;
        setOpcionSeleccionada(opcionSeleccionada);
    };


    return (
        <div className="wrapper">
            <div className="login-box">
                <div className="login-slogan">
                    <h1>Sign Up</h1>
                </div>

                <div className="input_box">

                    <input
                        type="text"
                        id="user"
                        placeholder="Usuario"
                        className="input-field"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />

                </div>

                <div className="input_box">
                    <input
                        type="password"
                        id="pass"
                        className="input-field"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                </div>

                <div className="forgot">
                    <a href="#">Forgot password?</a>
                </div>

                <div className="container-seleccion">

                    <div className="dropdown">

                        <button
                            id="botonSeleccionado"
                            className="btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            disabled={!isDropdownDisabled} // Hide dropdown if username or password is empty
                            onClick={handleSeleccionar}
                        >
                            Tipo de cliente
                        </button>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Administrador</a></li>
                            <li><a className="dropdown-item" href="#">Comercios</a></li>
                            <li><a className="dropdown-item" href="#">Usuarios Registrados</a></li>
                            <li><a className="dropdown-item" href="#">Usuarios Anonimos</a></li>
                        </ul>

                    </div>

                    <div className="input_box">
                        <button type="submit" className="input-submit">Registrar</button>
                    </div>

                
                </div>

            </div>
        </div>
    );
}

export default registro_user;