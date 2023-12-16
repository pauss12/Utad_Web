"use client"

import { useState, useEffect } from "react";
import "../styles/comercio.css"

import { useRouter } from 'next/navigation';

function comercio() {

    const router = useRouter();

    const [comercios, setComercios] = useState([]);

    // Funcion para obtener los comercios de la "BBDD" ------------------------
    useEffect(() => {

        const obtenerComercios = async () => {

            try {

                const response = await fetch('http://localhost:3000/api/comercios');

                const data = await response.json()

                setComercios(data.user)

            } catch (error) {

                console.log("Error:", error);

                alert("There was a problem obtaining Comercios");
                
            }
        };

        obtenerComercios();

    }, []);


    //Funcion para editar un usuario ----------------------------------------
    const handleChange = async (comercio) => {

        router.push(`/comercio/${comercio.idComercio}`)

    };


    return (

        <ul className="flex mt-5">
            {comercios && comercios.map((comercio) => (
                <li key={comercio.idComercio} className="bg-gray-200 rounded-2x1 ml-4 border border-black pl-4 pr-20 py-10 md:p-50 lg:px-30 my-2 shadow-md rounded">
                    <h2>Nombre: {comercio.nombreComercio}</h2>
                    <p>ID: {comercio.idComercio}</p>
                    <p>CIF: {comercio.cifComercio}</p>
                    <p>Dirección: {comercio.direccionComercio}</p>
                    <p>Actividad: {comercio.actividadComercio}</p>
                    <p>Foto: {comercio.fotos}</p>
                    <p>Email: {comercio.emailComercio}</p>
                    <p>Teléfono: {comercio.telefonoComercio}</p>
                    <p>Puntuación: {comercio.puntuacion}</p>
                    <p>Comentarios:{comercio.comentarios}</p>

                    <button className="bg-red-500 text-white rounded-md px-4 py-2"
                        onClick={() => handleChange(comercio)}
                    >
                        Editar Comercio
                    </button>

                </li>
            ))}
        </ul>
    );
}

export default comercio;