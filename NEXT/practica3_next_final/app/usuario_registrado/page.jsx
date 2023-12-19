"use client"

import { useState, useEffect } from "react";
import CartaUsuario from '../componentes/cartas/cartaUsuario.jsx';
import { useRouter } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';

import "../styles/usuarioRegistrado.css"




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

        <>

            <button
                onClick={() => router.push('/')}
                className="absolute right-4 top-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                HOME
            </button>

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
        
        <ul className="flex flex-wrap mt-5">
            {usuarios && usuarios.map((usuario) => (

                <CartaUsuario
                    key={usuario.idUsuario}
                    usuario={usuario}
                    onChange={() => handleChange(usuario)} />

            ))}
            </ul>
            
        </>
    );
}

export default usuario_registrado;