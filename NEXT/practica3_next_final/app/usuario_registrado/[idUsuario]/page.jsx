"use client"

import EditarUsuario from '@/app/componentes/editarUsuario';
import React from 'react';
import { useState, useEffect } from 'react';


async function loadUser(idUsuario) {

    const res = await fetch(`http://localhost:3000/api/usuarios/${idUsuario}`);

    const data = await res.json()

    return data.user
}

function Page({params}) {
    
    const [usuario, setUsuario] = useState([]);

    console.log(params.idUsuario);

    useEffect(() => {

        const fetchData = async () => {

            const user = await loadUser(params.idUsuario)
            setUsuario(user)

        };

        fetchData();

    }, []);

    return (

        <div>
            <EditarUsuario user={usuario} />
        </div>
    )
}

export default Page;
