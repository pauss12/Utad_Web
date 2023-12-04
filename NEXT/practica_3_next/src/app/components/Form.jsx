"use client"

import React, {useState, useEffect} from 'react';

import '../styles/Form.css';

function Form() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dropdownEnabled, setDropdownEnabled] = useState(false);

    // Update dropdown state on component mount or username/password changes
    useEffect(() => {
        if (username && password) {
            setDropdownEnabled(true);
        } else {
            setDropdownEnabled(false);
        }
    }, [username, password]);

    return (

        <div className="wrapper">

            <div className="login-box">

                <div className="login-slogan">
                    <h1>Login</h1>
                </div>

                <div className="input_box">
                    <input type="text"
                        id="user"
                        placeholder="Usuario"
                        className="input-field"
                        required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <i className="bx bx-lock-alt icon" ></i>

                </div>

                <div className="input_box">
                    <input type="password"
                           id="pass"
                           className="input-field"
                           placeholder="Password"
                           required
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}
                    />
                    <i className="bx bx-lock-alt icon" ></i>

                </div>

                <div className="forgot">
                    <a href="#">Forgot password?</a>
                </div>

                <div className="dropdown">
                    <button id="botonSeleccionado"
                        className="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded={dropdownEnabled}
                        disabled={!dropdownEnabled}    
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