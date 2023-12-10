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

import CartaComercio from '../componentes/cartas/cartaComercio.jsx';

import React, { useState, useEffect } from "react";

import "../styles/admin.css"

function Administrador() {

    //Guardar la lista de comercios en una variable que la cogemos de nuestra carpeta data
    const [listaComercios, setListaComercios] = useState([]);

    //Segun inicie esta pagina, que se carguen los datos guardados
    useEffect(() => {
        handleGetComercios();
    }, []);

    //Pedir los datos de los comercios a la API y guardarlos en la API
    const handleGetComercios = async () => {

        try {

            //Respuesta de la api
            const response = await fetch('http://localhost:3000/api/comercios', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                
            });

            if (response.ok)
            {
                //He llamado al get y los datos me llegan en JSON, quiero guardarlos en mis variable
                const data = await response.json();
                
                //Imprimir lo que he recibido
                alert(JSON.stringify(data));

                //Guardo cada dato en su variable parametro a parametro
                setListaComercios(data);
                alert("Comercios obtenidos correctamente");

            } else {

                console.error("HTTP error! Status: ${response.status}");
                alert("Ha habido un problema a la hora de obtener los comercios");
            }

        } catch (error) {

            console.error(error);
            alert("Ha habido un problema al obtener los comercios");
        }

    };

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

            <div className="crear_comercio">
                <CrearComercio />
            </div>

            <div className="busquedaComercios">
                <Buscador listaComercios={listaComercios} />
            </div>

           
            <div className="lista-comercios">
                
                {Array.isArray(listaComercios) ? (
                    
                    listaComercios.map((comercio) => (

                        <div className="un-comercio" key={comercio.idComercio}>


                            <CartaComercio
                                idComercio={comercio.idComercio}
                                nombreComercio={comercio.nombreComercio}
                                cifComercio={comercio.cifComercio}
                                direccionComercio={comercio.direccionComercio}
                                emailComercio={comercio.emailComercio}
                                telefonoComercio={comercio.telefonoComercio}
                                puntuacion={comercio.puntuacion}
                                comentarios={comercio.comentarios}
                                onDelete={handleDelete}
                            />

                        </div>

                    ))
                ) : (
                    <p>No hay comercios disponibles.</p>
                )}

            </div>
            
        </div>
    );
}

export default Administrador;