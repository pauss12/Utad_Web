"use client"

import { useState, useEffect } from "react";

function comercio() {

    //Variable para almacenar los comercios que esten en la BBDD ------------
    const [comercios, setComercios] = useState([]);

    //Funcion para obtener los comercios de la "BBDD" ------------------------
    const obtenerComercios = async () => {

        try {

            const response = await fetch('http://localhost:3000/api/comercios')

            const data = await response.json()

            setComercios(data.comercios)

        } catch (error) {

            console.log(error);

            alert("Ha habido un problema a la hora de obtener los Comercios");

        }
    };

    useEffect(() => {

        obtenerComercios();

    }, []);

    //Funcion para editar un usuario ----------------------------------------
    const handleChange = async (comercio) => {

        window.location.href = `/comercio/${comercio.idComercio}`;

    };


    return (

        <div className="flex">
        {comercios && comercios.map((comercio) => (
            
            <div className="bg-gray-200 rounded-2x1 ml-4 border border-black pl-4 pr-20 py-10 md:p-50 lg:px-30 my-2 shadow-md rounded">
                <h2>Nombre: {comercio.nombreComercio}</h2>
                <p>CIF: {comercio.cifComercio}</p>
                <p>Dirección: {comercio.direccionComercio}</p>
                <p>Email: {comercio.emailComercio}</p>
                <p>Teléfono: {comercio.telefonoComercio}</p>
                <p>Puntuación: {comercio.puntuacion}</p>
                <p>Comentarios:{comercio.comentarios}</p>

                <button className="bg-red-500 text-white rounded-md px-4 py-2">
                    Editar Comercio
                </button>

                <hr></hr>
            </div>
        ))}
        </div>
       
    );
}

export default comercio;