"use client"

import React, { useState } from 'react';
import Buscador from '../componentes/Buscador.jsx';
import Link from 'next/link';

import CartaComercio from '../componentes/cartas/cartaComercio.jsx';

import "../styles/anonimo.css"

function anonimo() {

    //Busquedas por ciudad
    const [comercios, setComercios] = useState([]);

    

    return (

        <>
            <div className="contenedorBuscadores">
                
                <div className="busqueda">
                    <Buscador lista={comercios} setLista={setComercios} />
                </div>

            </div>

            <div className="contenedorListas">
                    
                <div className="lista">

                    {comercios.map((comercio) => (
                        
                        <CartaComercio comercio={comercio} onDelete={null}/>

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