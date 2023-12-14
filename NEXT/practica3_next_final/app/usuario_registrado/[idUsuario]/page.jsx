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

    return (

        <div>
            <EditarUsuario user={usuario} />
        </div>
    )
}

export default Page;
