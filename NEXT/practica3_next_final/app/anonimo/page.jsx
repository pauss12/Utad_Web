"use client"

import React, { useState } from 'react';
import Buscador from '../componentes/Buscador.jsx';
import Link from 'next/link';

import "../styles/anonimo.css"

function anonimo() {

    //Busquedas por ciudad
    const [ComerciosPorCiudad, setCiudad] = useState([]);

    //Busquedas por actividad y ciudad
    const [ComerciosPorActividad, setActividad] = useState([]);

    //Busquedas por id
    const [ComerciosPorId, setId] = useState([]);

    return (

        <>
            <div className="contenedorBuscadores">
                
                <div className="busquedaCiudad">
                    <Buscador ComerciosPorCiudad={ComerciosPorCiudad} />
                </div>

                <div className="busquedaCiudad_Actividad">
                    <Buscador ComerciosPorActividad={ComerciosPorActividad} />
                </div>

                <div className="busquedaPorId">
                    <Buscador ComerciosPorId={ComerciosPorId} />
                </div>

            </div>

            <div className="contenedorListas">
                    
                <div className="listaComerciosCiudad">

                    {ComerciosPorCiudad.map((comercio) => (
                        <div key={comercio.id} className="unComercio">
                            <p>{comercio.nombre}</p>
                            <p>{comercio.ciudad}</p>
                        </div>
                    ))}
                </div>

                <div className="listaComerciosCiudad_Actividad">

                    {ComerciosPorActividad.map((comercio) => (

                        <div key={comercio.id} className="unComercio">
                            <p>{comercio.nombre}</p>
                            <p>{comercio.actividad}</p>
                        </div>

                    ))}
                </div>

                <div className="listaComerciosPorId">

                    {ComerciosPorId.map((comercio) => (
                        <div key={comercio.id} className="unComercio">
                            <p>{comercio.nombre}</p>
                            <p>{comercio.id}</p>
                        </div>
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