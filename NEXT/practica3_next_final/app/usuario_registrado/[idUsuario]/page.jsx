"use client"

import EditarUsuario from '@/app/componentes/editarUsuario';
import { useState, useEffect } from 'react';

async function loadUser(idUsuario) {

    const res = await fetch(`http://localhost:3000/api/usuarios/${idUsuario}`);

    const data = await res.json()

    return data.user
}

//cargar los comercios  ------- 
async function loadComercios() {
    try {

        // Trae todos los comercios de la base de datos
        const res = await fetch('http://localhost:3000/api/comercios')

        const data = await res.json()

        return data.comercios 

    } catch (error) {

        console.error('Error al cargar los comercios:', error);

        throw error;  

    }
}


function Page({params}) {
    
    const [usuario, setUsuario] = useState([]);

    const [comercios, setComercios] = useState([]);

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


    //Obtener los comercios ----------------------------------
    useEffect(() => {

        const obtenerComercios = async () => {
            
            try {

                const comercios = await loadComercios();

                setComercios(comercios);

            } catch (error) {

                console.error('Error al cargar el usuario:', error);

            }
        
        };

            obtenerComercios();
            
    }, []);

    useEffect(() => {
        console.log(comercios); // This will show the updated state
    }, [comercios]);


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
   
    //Poner reseña ------------------------------------------
    const ponerResena = async (comercio) => {

        try {

            const nuevaResena = prompt("Introduce la reseña que quieres poner");

            if (nuevaResena === null || nuevaResena.trim() === "") {

                alert("No has introducido ninguna reseña");
                
                return; 
                
            }

            const resena = {

                idComercio: comercio.idComercio,
                comentarios: nuevaResena
            };

            const response = await fetch(`http://localhost:3000/api/comercios/${comercio.idComercio}`, {

                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resena),
            });

            if (response.ok) {

                console.log('Reseña actualizada con éxito')
                alert('Reseña actualizada con éxito')

            } else {

                console.error('Error al actualizar la reseña. Código de estado:', response.status);
                alert('Error al actualizar la reseña. Código de estado:', response.status)

            }

        } catch (error) {

            console.error('Error en la solicitud de actualizar la reseña:', error);
            alert('ERROR! ', error)

        }
    };

  


    return (

        <div className="flex flex-col ">

            <div className="flex justify-center ">

                <EditarUsuario user={usuario}  />

                <ul className="grid grid-cols-2 gap-8 justify-center items-center ml-7 mt-20">
                    
                    {comercios && comercios.map((comercio) => (

                        <li key={comercio.idComercio}  className="bg-gray-200 rounded-2x1 ml-4 border border-black pl-4 pr-20 py-10 md:p-50 lg:px-30 my-2 shadow-md rounded">

                            <h2>Nombre: {comercio.nombreComercio}</h2>
                            <p>ID: {comercio.idComercio} </p>
                            <p>CIF: {comercio.cifComercio}</p>
                            <p>Dirección: {comercio.direccionComercio}</p>
                            <p>Email: {comercio.emailComercio}</p>
                            <p>Teléfono: {comercio.telefonoComercio}</p>
                            <p>Puntuación: {comercio.puntuacion}</p>
                            <p>Comentarios:{comercio.comentarios}</p>

                            <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
                                onClick={() => ponerResena(comercio)}
                            >
                                Poner reseña
                            </button>

                            <hr></hr>
                        </li>

                    ))}

                </ul>

                <button onClick={darseDeBajaUsuario}
                    className="absolute right-4 top-12 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Darse de baja
                </button>
            </div>
        </div>
    )
}

export default Page;
