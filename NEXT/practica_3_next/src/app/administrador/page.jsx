/*
se podrá registrar un comercio
(por un admin) enviando la siguiente información:
- Nombre del comercio.
- CIF
- Dirección
- E-mail
- Teléfono de contacto
*/

import CrearComercio from '../components/CrearComercio.jsx';

function Administrador() { 

    return (

        <>
            <div>
                <h1>Bienvenido Administrador</h1>
            </div>

            <div className="crear_comercio">
                <CrearComercio />
            </div>
        </>
    );
}

export default Administrador;