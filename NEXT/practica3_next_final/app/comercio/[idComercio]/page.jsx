"use client"

import { useState, useEffect } from 'react';
import EditarComercio from '@/app/componentes/EditarComercio';


//Cargar el comercio --------------------------------------
async function loadComercio(idComercio) {

    const res = await fetch(`http://localhost:3000/api/comercios/${idComercio}`);

    const data = await res.json()

    return data.user
}

//Funcion para mostrar los datos del comercio ----------------------------
function MostrarComercio({ comercio }) {

    return (

        <ul className="flex mt-5">

            <li key={comercio.idComercio} className="bg-gray-200 rounded-2x1 ml-4 border border-black pl-4 pr-20 py-10 md:p-50 lg:px-30 my-2 shadow-md rounded">
                <h2>Nombre: {comercio.nombreComercio}</h2>
                <p>CIF: {comercio.cifComercio}</p>
                <p>Dirección: {comercio.direccionComercio}</p>
                <p>Email: {comercio.emailComercio}</p>
                <p>Teléfono: {comercio.telefonoComercio}</p>
                <p>Puntuación: {comercio.puntuacion}</p>
                <p>Comentarios:{comercio.comentarios}</p>
            
            </li>

            <hr></hr>

        </ul>
    );
}

function Page({ params }) {

    const [comercio, setComercio] = useState([]);

    //Obtener el Comercio -------------------------------------
    useEffect(() => {

        const fetchData = async () => {

            try {

                const comercio = await loadComercio(params.idComercio);

                setComercio(comercio);

            } catch (error) {

                console.error('Error al cargar el Comercio:', error);

            }

        };

        fetchData();

    }, []);

    return (

        <div className="flex flex-row bg-blue-200">

            <EditarComercio comercio={comercio} className="mr-5"/>

            {MostrarComercio({ comercio: comercio })}

            <button
                className="absolute right-4 top-12 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Darse de baja
            </button>

            <button
                onClick={() => router.push('/')}
                className="absolute right-20 top-12 bg-blue-500 hover:bg-blue-700 mr-20 text-white font-bold py-2 px-4 rounded">
                HOME
            </button>

        </div>
    )
}

export default Page;
