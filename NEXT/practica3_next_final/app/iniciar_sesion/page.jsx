"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/router';  // Importa el hook useRouter para manejar las redirecciones
import Dropdown from "../componentes/Dropdown";

function iniciar_sesion() {

    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const router = useRouter();  // Instancia el hook useRouter para manejar las redirecciones

    function validarFormulario(e) {
        e.preventDefault();

        if (usuario.trim() === '' || contrasena.trim() === '') {
            alert('Por favor, complete ambos campos.');
        } else {
            console.log('Formulario válido. Enviar datos al servidor, etc.');
            // Habilita el Dropdown cuando se ingresan usuario y contraseña
            setDropdownHabilitado(true);

            // Redirige a la página correspondiente según la opción del Dropdown
            switch (opcionSeleccionada) {

                case 'opcion1':
                    router.push('/pagina1');
                    break;
                
                case 'opcion2':
                    router.push('/pagina2');
                    break;
                
                // Añade más casos según sea necesario
                default:
                    // Si no se selecciona ninguna opción, no realiza ninguna redirección
                break;
            }
        }
    }

    return (

        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Usuario
                            </label>
                            <div className="mt-2">
                                <input
                                    id="usuario"
                                    placeholder=" Usuario"
                                    name="usuario"
                                    type="usuario"
                                    autoComplete="usuario"
                                    required
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={contrasena}
                                    onChange={(e) => setContrasena(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contraseña
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        ¿Has olvidado la contraseña?
                                    </a>
                                </div>
                            </div>
                        </div>

                        <Dropdown />

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default iniciar_sesion;