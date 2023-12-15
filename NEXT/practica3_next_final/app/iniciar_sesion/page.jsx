"use client"

import React, { useState } from 'react';
import DropdownCompleto from "../componentes/DropdownCompleto";

import { useRouter } from 'next/navigation';

import "../styles/inicioSesion.css"

function iniciar_sesion() {

    const router = useRouter();

    const [usuarioIntroducido, setUsuarioIntroducido] = useState("");
    const [contrasenaIntroducida, setContrasenaIntroducida] = useState("");

    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

    //Redirigir la pagina segun que opcion haya escogido ------------------------------------------------------------------
    const redirigir = (code, id) => {

        if (code === 200) {

            if (opcionSeleccionada === 'Administrador') {

                console.log('Estoy en el administrador');
                router.push('/administrador')

            } else if (opcionSeleccionada === 'Comercios') {
                
                console.log("IdComercio ", id)
                alert("IdComercio ", id)
                
                console.log('Estoy en el Comercios')
                router.push('/comercio')

            } else if (opcionSeleccionada === 'Usuario Registrado') {

                console.log("IdUsuario ", id)
                alert(id)

                console.log('Estoy en el Usuario Registrado')
                router.push('/usuario_registrado')


            } else if (opcionSeleccionada === 'Usuario Anonimo') {

                console.log('Estoy en el Usuario Anonimo')
                router.push('/anonimo')

            }
        }
        else if (code === 400) {

            alert("Ha habido un problema!");
            
        }
    };

    //Iniciar Sesion --------------------------------------------------------------------------------------------------------------------------
    const handleInicioSesion = (e) => {

        if (opcionSeleccionada === null) {
            alert("Debe seleccionar una opción")
            return;
        }

        if (opcionSeleccionada == 'Administrador' || opcionSeleccionada == 'Usuario Registrado') {

            const userTXT = {

                opcionSeleccionada: opcionSeleccionada,
                nombreUsuario: usuarioIntroducido,
                passwordUsuario: contrasenaIntroducida,

            }

            fetch('http://localhost:3000/api/login', {

                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userTXT)
            })
                .then((res) => res.json())
                .then((data) => redirigir(data.status, data.idUsuario))
                .catch((err) => console.log(err));


        } else if (opcionSeleccionada == 'Comercios') {
            
            const comercioTXT = {

                opcionSeleccionada: opcionSeleccionada,
                nombreComercio: usuarioIntroducido,
                cifComercio: contrasenaIntroducida,
            }

            fetch('http://localhost:3000/api/login', {

                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comercioTXT)
            })
                .then((res) => res.json())
                .then((data) => redirigir(data.status, data.idComercio))
                .catch((err) => console.log(err));     
            
        }
    }

        

    return (

        <div className="contenedor">

            <button
                onClick={() => router.push('/')}
                className="absolute right-4 top-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                HOME
            </button>

            <div className=" min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in
                    </h2>
                </div>

                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            Usuario
                            <div className="mt-2">
                                <input
                                    id="usuario"
                                    placeholder=" Usuario"
                                    name="usuario"
                                    type="usuario"
                                    autoComplete="usuario"
                                    required
                                    value={usuarioIntroducido}
                                    onChange={(e) => setUsuarioIntroducido(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                Contraseña
                                <input
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={contrasenaIntroducida}
                                    onChange={(e) => setContrasenaIntroducida(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        ¿Has olvidado la contraseña?
                                    </a>
                                </div>
                            </div>
                        </div>

                        <DropdownCompleto opcionSeleccionada={opcionSeleccionada} setOpcionSeleccionada={setOpcionSeleccionada} />

                        <div>
                            <button
                                    
                                onClick={handleInicioSesion}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
    
}

export default iniciar_sesion;