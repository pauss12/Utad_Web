

import { useState } from "react";
import Dropdown from "../componentes/Dropdown";

function Formulario() {


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign up
                        </h2>
                    </div>

                    <div>
                        <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-900">
                            Usuario
                        </label>
                        <div className="mt-1">
                            <input
                                id="usuario"
                                placeholder=" Usuario"
                                required
                                onChange={(e) => setUsuario(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                placeholder=" Email"
                                required
                                onChange={(e) => setUsuario(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Edad" className="block text-sm font-medium leading-6 text-gray-900">
                            Edad
                        </label>
                        <div className="mt-1">
                            <input
                                id="Edad"
                                placeholder=" Edad"
                                required
                                onChange={(e) => setUsuario(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Ciudad" className="block text-sm font-medium leading-6 text-gray-900">
                            Ciudad
                        </label>
                        <div className="mt-1">
                            <input
                                id="Ciudad"
                                placeholder=" Ciudad"
                                required
                                onChange={(e) => setUsuario(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Intereses" className="block text-sm font-medium leading-6 text-gray-900">
                            Intereses
                        </label>
                        <div className="mt-1">
                            <input
                                id="Intereses"
                                placeholder=" Intereses"
                                required
                                onChange={(e) => setUsuario(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>

                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900">
                                Contraseña
                            </label>
                        </div>

                        <div className="mt-1">
                            <input
                                id="password"
                                placeholder="Contraseña"
                                type="password"
                                required
                                onChange={(e) => setContrasena(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <Dropdown />

                    <div class="flex items-center">
                        <input type="checkbox" class="form-checkbox text-blue-500 h-5 w-5" />
                        <span class="ml-2">Quiero recibir ofertas</span>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={() => {
                                window.location.href = "../iniciar_sesion";
                            }}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Formulario;