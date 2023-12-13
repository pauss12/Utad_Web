"use client"

import React, { useState, useEffect } from 'react';
import Buscador from '../componentes/Buscador.jsx';
import Link from 'next/link';

import CartaComercio from '../componentes/cartas/cartaComercio.jsx';

import "../styles/anonimo.css"

function anonimo() {

    //Variable para guardar los comercios que estan en el TXT ----
    const [comercios, setComercios] = useState([]);

    //Variable para la lista original ---
    const [originalTasks, setOriginalTasks] = useState([]);

    //Obtener Comercios ---------------------------------------------------------------------
    const obtenerComercios = async () => {

        try {

            const response = await fetch('http://localhost:3000/api/comercios')

            const data = await response.json()

            setComercios(data.comercios)

        } catch (error) {

            console.log(error);
            alert("Ha habido un problema a la hora de obtener los comercios");
        }
    };

    useEffect(() => {

        obtenerComercios();

    }, []);

    //Hacer la busqueda ---------------------------------------------------------------------
    const handleSearch = (searchTerm) => {

        if (searchTerm === '') {

            setComercios(originalTasks);

        } else {

            setOriginalTasks(comercios);

            const filteredTasks = originalTasks.filter((task) => {

                return (

                    task.nombreComercio.toLowerCase().includes(searchTerm.toLowerCase())

                );
            });

            setComercios(filteredTasks);
        }
    };


    return (

        <>
            <div className="contenedorBuscadores">
                
                <div className="busqueda">

                    <span className="fa-solid fa-magnifying-glass" style={{ marginRight: '3px' }}></span>
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputGroup1"
                        style={{ border: 'none', background: 'none' }}
                        placeholder="Buscador"
                        onChange={(e) => handleSearch(e.target.value)} 
                    />

                </div>

            </div>

            <div className="listaContenedores">
                    
                <div className="lista">

                    {comercios.map((comercio) => (
                        
                        <CartaComercio key={comercio.idComercio} comercio={comercio} onDelete={null} />

                    ))}

                </div>

            </div>

            <button className="absolute right-4 bottom-12 bg-white hover:bg-white-700 hover:scale-110 text-black font-bold py-2 px-4 rounded ">
                <Link href="../registro">Registrarse</Link>
            </button>

        </>

    );
}

export default anonimo;