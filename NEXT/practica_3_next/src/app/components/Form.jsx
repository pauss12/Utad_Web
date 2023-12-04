"use client"

import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Form.css';

function Form() {

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
                        required
                    />

                </div>

                <div className="input_box">
                    <input
                        type="password"
                        id="pass"
                        className="input-field"
                        placeholder="Password"
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

export default Form;