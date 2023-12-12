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

async function getComercios() {
    
    const res = await fetch('http://localhost:3000/api/comercios')

    const data = await res.json()

    return data.comercios

}

function Administrador() {

    //Obtener lista de comercios
    const [listaComercios, setListaComercios] = useState([]);

    useEffect(() => {
        const obtenerComercios = async () => {

            try {

                const comercios = await getComercios();

                setListaComercios(comercios);

            } catch (error) {

                console.error("Error al obtener la lista de comercios", error);

            }
        };

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

            <div className="crear_comercio">
                <CrearComercio />
            </div>
            
            <div className="busquedaComercios">
                <Buscador listaComercios={listaComercios} />
            </div>

            <div className="listaComercios">

                {listaComercios.map((comercio) => 
                
                    <CartaComercio key={comercio.idComercio} comercio={comercio} onDelete={handleDelete}/>
                    
                )}

            </div>
            
        </div>
    );
}

export default Administrador;