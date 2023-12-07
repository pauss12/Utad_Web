"use client"

import React, { useState } from 'react';

function CrearComercio() {

    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <div className="mt-2">
                                Nombre Comercio
                                <input
                                    id="Nombre Comercio"
                                    placeholder=" Nombre Comercio"
                                    name="Nombre Comercio"
                                    type="Nombre Comercio"
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
                                    autoComplete="Telefono"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>


                    </form>

                </div>
            </div>
        </>
    );
}

export default CrearComercio;