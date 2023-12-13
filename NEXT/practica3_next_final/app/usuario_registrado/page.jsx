"use client"

import { useState, useEffect } from "react";
import Link from 'next/link';
import CartaUsuario from '../componentes/cartas/cartaUsuario.jsx';
import "../styles/usuarioRegistrado.css"

function usuario_registrado() {

    //Variable para almacenar los usuarios que esten en la BBDD ------------
    const [usuarios, setUsuarios] = useState([]);

    //Funcion para obtener los usuarios de la "BBDD" ------------------------
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

    useEffect(() => {

        obtenerUsuarios();

    }, []);

    //Funcion para editar un usuario ----------------------------------------
    const handleChange = async (idUsuario) => {

        //Mandar a mi pagina de ese usuario [idUsuario], mandandole tb el id
        //del usuario que quiero editar
        window.location.href = `/usuario_registrado/${idUsuario}`;
    
    };

    
    return (
        
        <div className="flex">
            {usuarios.map((usuario) => (

                <CartaUsuario
                    key={usuario.idUsuario}
                    usuario={usuario}
                    onChange={() => handleChange(usuario.idUsuario)} />

            ))}
        </div>
    );
}

export default usuario_registrado;