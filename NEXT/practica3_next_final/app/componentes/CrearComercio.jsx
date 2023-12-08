"use client"

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CrearComercio() {

    //Guardar los datos de un comercio
    const [datosComercio, setComercio] = useState({
        idComercio: uuidv4(),
        nombreComercio: "",
        cifComercio: "",
        direccionComercio: "",
        emailComercio: "",
        telefonoComercio: "",
        puntuacion: 0,
        Reseñas: [],

    });

    //Funcion para guardar los datos de un comercio
    const handleCrearComercio = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/comercio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosComercio),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Crear Comercio
                    </h2>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <div className="mt-2">
                                Nombre Comercio
                                <input
                                    id="Nombre Comercio"
                                    placeholder=" Nombre Comercio"
                                    name="Nombre Comercio"
                                    type="Nombre Comercio"
                                    value={datosComercio.nombreComercio}
                                    autoComplete="Nombre Comercio"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                CIF
                                <input
                                    id="CIF"
                                    placeholder=" CIF"
                                    name="CIF"
                                    type="CIF"
                                    value={datosComercio.cifComercio}
                                    autoComplete="CIF"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                Direccion
                                <input
                                    id="Direccion"
                                    placeholder=" Direccion"
                                    name="Direccion"
                                    type="Direccion"
                                    value={datosComercio.direccionComercio}
                                    autoComplete="Direccion"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                Email
                                <input
                                    id="Email"
                                    placeholder=" Email"
                                    name="Email"
                                    type="Email"
                                    value={datosComercio.emailComercio}
                                    autoComplete="Email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                Telefono
                                <input
                                    id="Telefono"
                                    placeholder=" Telefono"
                                    name="Telefono"
                                    type="Telefono"
                                    value={datosComercio.telefonoComercio}
                                    autoComplete="Telefono"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={handleCrearComercio}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Crear Comercio
                            </button>
                        </div>


                    </form>

                </div>
            </div>
        </>
    );
}

export default CrearComercio;