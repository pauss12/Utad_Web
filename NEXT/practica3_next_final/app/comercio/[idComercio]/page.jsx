"use client"

import { useState, useEffect } from 'react';
import EditarComercio from '@/app/componentes/EditarComercio';

import { useRouter } from 'next/navigation';


//Cargar el comercio --------------------------------------
async function loadComercio(idComercio) {

    const res = await fetch(`http://localhost:3000/api/comercios/${idComercio}`);

    const data = await res.json()

    return data.user
}

//Funcion PAGE -------------------------------------------------------------------------
function Page({ params }) {

    //Usamos el router -----------------------------
    const router = useRouter();

    //Const para el comercio ------------------------
    const [comercio, setComercio] = useState({});

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

    const estilo = {

        height: '60vh',
        marginLeft: '30px',
        marginTop: '45px',
        paddingLeft: '30px',
        paddingBottom: '30px',
        justifyContent: 'center',
        paddingRight: '30px',
        paddingTop: '30px',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px #ccc',

    };

    //Mostrar los datos no modificables del comercio (puntuacion, foto, textos, numero de puntuaciones, reseñas)
    function showUnmodifiableData() {

        return (

            <div style={estilo}>
                <strong>Puntuación:</strong> {comercio.puntuacion || 'N/A'}

                <br />

                <strong>Número de Puntuaciones:</strong> {comercio.numeroPuntuaciones || 0}

                <br />

                <strong>Reseñas:</strong> {comercio.comentarios || 'N/A'}

                <br />

                <strong>Foto:</strong>

                {comercio.foto && <img src={comercio.fotos} alt="Foto del comercio" style={{ maxWidth: '100%', maxHeight: '100px' }} />}

            </div>
        );
    }





    return (

        <div className="flex flex-row bg-blue-200">

            <EditarComercio comercio={comercio} className="mr-5" />

            {showUnmodifiableData()}

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
