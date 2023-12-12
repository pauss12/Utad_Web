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
import { v4 as uuidv4 } from 'uuid';

import CartaComercio from '../componentes/cartas/cartaComercio.jsx';

import React, { useState, useEffect } from "react";

import "../styles/admin.css"

async function getComercios() {
    
    const res = await fetch('http://localhost:3000/api/comercios')

    const data = await res.json()

    return data.comercios

}

function Administrador() {

    const [datosComercio, setDatosComercio] = useState({

        idComercio: uuidv4(),
        nombreComercio: "",
        cifComercio: "",
        direccionComercio: "",
        emailComercio: "",
        telefonoComercio: "",
        puntuacion: "",
        comentarios: "",

    });

    const [listaComerciosGuardados, setListaComerciosGuardados] = useState([]);

    const obtenerComercios = async () => {

        try {

            const response = await fetch('http://localhost:3000/api/comercios')

            const data = await response.json()

            setListaComerciosGuardados(data.comercios)

        } catch (error) {

            console.log(error);
            alert("Ha habido un problema a la hora de obtener los comercios");
        }
    };

    useEffect(() => {

        obtenerComercios();

    }, []);

    //Handle eliminar comercio
    const handleDelete = async () => {
      
        try {
            
            //Respuesta de la api
            const response = await fetch('http://localhost:3000/api/comercios', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(),
            });

            //Comprobar si se ha eliminado el comerciante
            if (response.ok) {
                alert("Comercio eliminado correctamente");

            } else {
                console.error("HTTP error! Status: ${response.status}");
                alert("Ha habido un problema a la hora de eliminar el comercio");
            }

        } catch (error) {
            
            console.error(error);
            alert("Ha habido un problema a la hora de eliminar el comercio");
        }

    };

    return (

        <div className="contenedor">

            <div className="crearComercio">
                <CrearComercio datosComercio={datosComercio} setDatosComercio={setDatosComercio} />
            </div>

            <div className="busquedaComercios">
                <Buscador lista={listaComerciosGuardados} setLista={setListaComerciosGuardados} />
            </div>

            <div className="listaComercios">

                {listaComerciosGuardados.map((comercio) =>

                    <CartaComercio key={comercio.idComercio} comercio={comercio} onDelete={handleDelete} />

                )}

            </div>

        </div>
    );
}

export default Administrador;