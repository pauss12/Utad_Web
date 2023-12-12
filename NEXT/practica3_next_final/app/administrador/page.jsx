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
        
        getComercios(); // Llama a la función para cargar los datos al montar el componente

    }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez al montar el componente

    async function getComercios() {
        
        const res = await fetch("http://localhost:3000/api/comercios")
        
        const data = await res.json()
        
        console.log(data.comercios)
        
        return data.users
    }

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
                
                <div className="sticky top-0 ml-3 card-list ">
                    {listaComercios.length > 0 ? (
                        listaComercios.map((comercio, index) => (
                            <CartaComercio key={index} merchant={comercio} />
                        ))
                    ) : (
                        <div className="bg-gray-200 hidden rounded-md shadow-md">
                            <p>No hay resultados</p>
                        </div>
                    )}
                </div>

            </div>
            
        </div>
    );
}

export default Administrador;