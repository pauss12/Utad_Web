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

import { useRouter } from 'next/navigation';

import CartaComercio from '../componentes/cartas/cartaComercio.jsx';

import React, { useState, useEffect } from "react";

import "../styles/admin.css"

function Administrador() {

    //Añadir router -----------------------------------
    const router = useRouter();

    // Definir useForceUpdate dentro de Administrador ---------------
    const useForceUpdate = () => {
        const [, setValue] = useState(0);
        return () => setValue(value => value + 1);
    };

    //Datos del comercio --------------------------------------------
    const [datosComercio, setDatosComercio] = useState({

        idComercio: uuidv4(),
        nombreComercio: "",
        actividadComercio: "",
        cifComercio: "",
        fotos: "",
        direccionComercio: "",
        emailComercio: "",
        telefonoComercio: "",
        puntuacion: "",
        comentarios: "",

    });

    //Lista de comercios guardados ----------------------------------
    const [listaComerciosGuardados, setListaComerciosGuardados] = useState([]);

    //Obtener los comercios -----------------------------------------
    useEffect(() => {

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

        obtenerComercios();

    }, [{ useForceUpdate }]);
   

    //Handle eliminar comercio
    const handleDelete = async (emailComercio) => {
      
        try {
            
            const response = await fetch('http://localhost:3000/api/comercios', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {email: emailComercio} ),
            });

            //Comprobar si se ha eliminado el comerciante
            if (response.ok) {

                alert("Comercio eliminado correctamente");

                useForceUpdate();

            } else {

                console.error("HTTP error! Status: ${response.status}");

                alert("Ha habido un problema a la hora de eliminar el comercio");

            }

        } catch (error) {
            
            console.error(error);

            alert(" -- Ha habido un problema a la hora de eliminar el comercio -- ");

        }

    };

    return (

        <div className="contenedor">

            <button
                onClick={() => router.push('/')}
                className="absolute right-4 top-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                HOME
            </button>

            <div className="crearComercio">
                <CrearComercio datosComercio={datosComercio} setDatosComercio={setDatosComercio} />
            </div>

            <div className="busquedaComercios">
                <Buscador lista={listaComerciosGuardados} setLista={setListaComerciosGuardados} />
            </div>

            <div className="grid grid-cols-2 gap-8 justify-center items-center ml-7 mt-20">

                {listaComerciosGuardados && listaComerciosGuardados.map((comercio) =>

                    <CartaComercio key={comercio.idComercio} comercio={comercio} onDelete={handleDelete} />

                )}

            </div>

        </div>
    );
}

export default Administrador;
