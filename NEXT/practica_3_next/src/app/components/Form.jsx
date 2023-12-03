
import React from 'react';

import '../styles/Form.css';

function Form() { 

    return (

        <div className="wrapper">

            <div className="login-box">

                <div className="login-slogan">
                    <h1>Login</h1>
                </div>

                <div className="input_box">
                    <input type="text" id="user" placeholder="Usuario" className="input-field" required />
                    <i className="bx bx-lock-alt icon" ></i>
                </div>

                <div className="input_box">
                    <input type="password" id="pass" className="input-field" placeholder="Password" required />
                    <i className="bx bx-lock-alt icon" ></i>
                </div>

                <div className="forgot">
                    <a href="#">Forgot password?</a>
                </div>

                <div className="input_box">
                    <button type="submit" className="input-submit">Login</button>
                </div>

            </div>
            
        </div>
    );
}

export default Form;