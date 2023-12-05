import '../styles/Form.css';

function CrearComercio() {
    
    return (
        <>
          
            <div className="wrapper">

                <div className="login-box">

                    <div className="login-slogan">
                        <h1>Crear Comercio</h1>
                    </div>

                    <div className="input_box">

                        <input
                            type="text"
                            placeholder="Nombre comercio"
                            className="input-field"
                        />

                    </div>

                    <div className="input_box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="CIF"
                        />
                    </div>

                    <div className="input_box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Direccion"
                        />
                    </div>

                    <div className="input_box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="E-mail"
                        />
                    </div>

                    <div className="input_box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Telefono"
                        />
                    </div>

                    <div className="input_box">
                        <button type="submit" className="input-submit">Crear Comercio</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CrearComercio;