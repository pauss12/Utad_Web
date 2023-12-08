/*
se podrá registrar un comercio
(por un admin) enviando la siguiente información:
- Nombre del comercio.
- CIF
- Dirección
- E-mail
- Teléfono de contacto
*/

"use client"

import CrearComercio from '../componentes/CrearComercio.jsx';
import Buscador from '../componentes/Buscador.jsx';

import React, { useState } from "react";

import "../styles/admin.css"

function Administrador() {

    const [tasks, setTasks] = useState([]);

    return (

        <div className="contenedor">

            <div className="crear_comercio">
                <CrearComercio />
            </div>

            <div className="busquedaComercios">
                <Buscador tasks={tasks} />
            </div>

            <div className="lista-comercios">
                
                {tasks.map((task) => (

                    <>

                        <div className="un-comercio">

                            

                        </div>
                    </>

                ))}

            </div>
        </div>
    );
}

export default Administrador;