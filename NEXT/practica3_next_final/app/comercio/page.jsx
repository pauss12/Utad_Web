//Pagina del comercio

"use client"

import EditarComercio from '../componentes/EditarComercio.jsx';
import React, { useEffect, useState } from "react";

import '../styles/comercio.css';

function comercio() {

    const [listaComercios, setListaComercios] = useState([]);

    //Pedir a la API que me de la lista de comercios que esta guardado en la carpeta Data
    useEffect(() => {

        fetch('/api/comercios')
            .then((response) => response.json())
            .then((data) => setListaComercios(data.comercios));
        
    }, []);

    //Eliminar un comercio de la lista
    const eliminarComercio = (id) => {

        fetch(`/api/comercios/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setListaComercios(listaComercios.filter((comercio) => comercio.id !== id));
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    };

    return (
        <div>
            <div className="contenedor">

                <div className="editarComercio">
                    <EditarComercio />
                </div>

                <div className="lista-usuarios">

                    {listaComercios.map((task) => (

                        <>

                            <div className="un-usuario">

                            </div>
                        </>

                    ))}

                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Eliminar Comercio
                    </button>
                </div>

            </div>
        </div>
    );

}

export default comercio;