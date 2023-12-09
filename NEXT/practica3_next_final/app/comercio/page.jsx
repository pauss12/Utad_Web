//Pagina del comercio

"use client"

import EditarComercio from '../componentes/EditarComercio.jsx';
import React, { useEffect, useState } from "react";

import '../styles/comercio.css';

function comercio() {

    const [listaUsuarios, setListaUsuarios] = useState([]);

    useEffect(() => {
        fetch("../api/usuarios")
            .then((res) => res.json())
            .then((data) => {
                setListaUsuarios(data);
            });
    }, []);

    // Crear nueva variable con el filtrado de esos usuarios que tenga el permitirOfertas activado
    const listaUsuariosPermitirOfertas = Array.isArray(listaUsuarios)
        ? listaUsuarios.filter((usuario) => usuario.permitirOfertas === true)
        : [];

    return (
        <div>
            <div className="contenedor">

                <div className="editarComercio">
                    <EditarComercio />
                </div>

                <div className="listaUsuarios">

                    <h1 className="titulo">Lista de Usuarios</h1>

                    <div className="listaUsuariosPermitirOfertas">
                        <h2 className="subtitulo">Usuarios que permiten ofertas</h2>
                        <ul>
                            {listaUsuariosPermitirOfertas.map((usuario) => (
                                <li key={usuario.idUsuario}>
                                    <p>{usuario.nombreUsuario}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>


                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500  hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"

                    >
                        Eliminar Comercio
                    </button>
                </div>

            </div>
        </div>
    );

}

export default comercio;