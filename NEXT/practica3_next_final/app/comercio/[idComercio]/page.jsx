"use client"

import { useState, useEffect } from 'react';
import EditarComercio from '@/app/componentes/EditarComercio';

async function loadComercio(idComercio) {

    const res = await fetch(`http://localhost:3000/api/comercios/${idComercio}`);

    const data = await res.json()

    return data.comercios
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

        <div className="flex flex-col ">

            <EditarComercio comercio={comercio} />

            <div className="flex justify-center ">
                
                <button 
                    className="absolute right-4 top-12 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Darse de baja
                </button>

            </div>
        </div>
    )
}

export default Page;
