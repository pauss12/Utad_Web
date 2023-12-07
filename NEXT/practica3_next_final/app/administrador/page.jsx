/*
se podrá registrar un comercio
(por un admin) enviando la siguiente información:
- Nombre del comercio.
- CIF
- Dirección
- E-mail
- Teléfono de contacto
*/

import CrearComercio from '../componentes/CrearComercio.jsx';
import BusquedaComercios from '../componentes/BusquedaComercios.jsx';

import "../styles/admin.css"

function Administrador() {

    return (

        <div className="contenedor">

            <div className="crear_comercio">
                <CrearComercio />
            </div>

            <div className="busqueda-comercios">
                <BusquedaComercios />
            </div>
        </div>
    );
}

export default Administrador;