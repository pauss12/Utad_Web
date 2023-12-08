"use client"

import React, { useState } from 'react';
import Buscador from '../componentes/Buscador.jsx';

import "../styles/anonimo.css"

function anonimo() {

    //Busquedas por ciudad
    const [ComerciosPorCiudad, setCiudad] = useState([]);

    //Busquedas por actividad y ciudad
    const [ComerciosPorActividad, setActividad] = useState([]);

    //Busquedas por id
    const [ComerciosPorId, setId] = useState([]);

    return (

        <div className="contenedor">
            
            <div className="busquedaCiudad">
                <Buscador ComerciosPorCiudad={ComerciosPorCiudad} />
            </div>

            <div className="listaComerciosCiudad">

                {ComerciosPorCiudad.map((comercio) => (
                    <div key={comercio.id} className="unComercio">
                        <p>{comercio.nombre}</p>
                        <p>{comercio.ciudad}</p>
                    </div>
                ))}
                
            </div>

            <div className="busquedaCiudad_Actividad">
                <Buscador ComerciosPorActividad={ComerciosPorActividad} />
            </div>

            <div className="listaComerciosActividad">

                {ComerciosPorActividad.map((comercio) => (

                    <>
                        <div key={comercio.id} className="unComercio">
                            <p>{comercio.nombre}</p>
                            <p>{comercio.actividad}</p>
                        </div>
                    </>

                ))}
            </div>

            <div className="busquedaPorId">
                <Buscador ComerciosPorId={ComerciosPorId} />
            </div>

            <div className="listaComerciosId">
                    
                {ComerciosPorId.map((comercio) => (
                    <div key={comercio.id} className="unComercio">
                        <p>{comercio.nombre}</p>
                        <p>{comercio.id}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default anonimo;