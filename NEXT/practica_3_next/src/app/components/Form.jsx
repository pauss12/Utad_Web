
import React from 'react';

import '../styles/Form.css';

function Form() { 

    return (

        <div className="container">
            <div className="login-box">
                <h2>Login</h2>
                <form action="#">
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                    </div>

                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn">Login</button>
                
                </form>
            </div>

            
        </div>
    );
}

export default Form;