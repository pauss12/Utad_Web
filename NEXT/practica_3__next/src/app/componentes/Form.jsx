
function Form() {
    
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form>
                        <h1>Registro</h1>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label >Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label >Tipo de usuario</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                />
                                <label className="form-check-label">
                                    Administrador
                                </label>
                            </div>

                        </div>
                        <button type="submit" className="btn btn-primary" />  Registrar

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;