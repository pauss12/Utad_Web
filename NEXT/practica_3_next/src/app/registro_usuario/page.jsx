"use client"

import React, { useState } from 'react';
import '../styles/Form.css';

function registro_user() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const isDropdownDisabled = usuario && password;

    return (
        <div className="wrapper">
            <div className="login-box">
                <div className="login-slogan">
                    <h1>Login</h1>
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

                <div className="dropdown">

                    <button
                        id="botonSeleccionado"
                        className="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        disabled={!isDropdownDisabled} // Hide dropdown if username or password is empty
                    >
                        Tipo de cliente
                    </button>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="../administrador" target="_blank">Administrador</a></li>
                        <li><a className="dropdown-item" href="../comercio" target="_blank">Comercios</a></li>
                        <li><a className="dropdown-item" href="../user_registrado" target="_blank">Usuarios Registrados</a></li>
                        <li><a className="dropdown-item" href="../anonimo" target="_blank">Usuarios Anonimos</a></li>
                    </ul>
                </div>

                <div className="input_box">
                    <button type="submit" className="input-submit">Login</button>
                </div>
            </div>
        </div>
    );
}

export default registro_user;