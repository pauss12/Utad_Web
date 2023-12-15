"use client"

import { useState, useEffect } from "react";
import CartaUsuario from '../componentes/cartas/cartaUsuario.jsx';
import "../styles/usuarioRegistrado.css"

import { useRouter } from 'next/navigation';

function usuario_registrado() {

    const router = useRouter();

    //Variable para almacenar los usuarios que esten en la BBDD ------------
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        const obtenerUsuarios = async () => {

            try {

                const response = await fetch('http://localhost:3000/api/usuarios')

                const data = await response.json()

                setUsuarios(data.users)

            } catch (error) {

                console.log(error);
                alert("Ha habido un problema a la hora de obtener los Usuarios");
            }
        };

        obtenerUsuarios();

    }, []);

    //Funcion para editar un usuario ----------------------------------------
    const handleChange = async (usuario) => {

        router.push(`/usuario_registrado/${usuario.idUsuario}`)
    
    };

    
    return (
        
        <ul className="flex flex-wrap mt-5">
            {usuarios && usuarios.map((usuario) => (

                <CartaUsuario
                    key={usuario.idUsuario}
                    usuario={usuario}
                    onChange={() => handleChange(usuario)} />

            ))}
        </ul>
    );
}

export default usuario_registrado;