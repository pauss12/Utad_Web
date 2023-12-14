"use client"

import EditarUsuario from '@/app/componentes/editarUsuario';
import { useState, useEffect } from 'react';


async function loadUser(idUsuario) {

    const res = await fetch(`http://localhost:3000/api/usuarios/${idUsuario}`);

    const data = await res.json()

    return data.user
}

function Page({params}) {
    
    const [usuario, setUsuario] = useState([]);

    //Obtener el usuario -------------------------------------
    useEffect(() => {

        const fetchData = async () => {

            try {

                const user = await loadUser(params.idUsuario);

                setUsuario(user);

            } catch (error) {

                console.error('Error al cargar el usuario:', error);
                  
            }

        };

        fetchData();

    }, []);


    //Darse de baja -----------------------------------------
    const darseDeBajaUsuario = async () => {
        
        try {

            const response = await fetch(`http://localhost:3000/api/usuarios/${usuario.idUsuario}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {

                console.log('Usuario dado de baja con éxito');

                
            } else {

                console.error('Error al darse de baja');

            }

        } catch (error) {

            console.error('Error en la solicitud de darse de baja:', error);

        }

    };

    return (

        <div>
            <EditarUsuario user={usuario} />

            //Mostrar la lista de comercios
            <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Ver comercios
                </button>
            </div>

            <div className="flex justify-center">
                <button onClick={darseDeBajaUsuario}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Darse de baja
                </button>
            </div>
        </div>
    )
}

export default Page;
