import { useState } from "react";
import Dropdown from "../componentes/Dropdown";

import Checkbox from "./checkbox";

function Formulario() {

    //Informacion de un usuario registrado
    const [DatosUsuario, setDatosUsuario] = useState({

        nombreUsuario: "",
        emailUsuario: "",
        passwordUsuario: "",
        edadUsuario: 0,
        ciudadUsuario: "",
        interesesUsuario: "",
        permiteOfertas: false,
        tipoUsuario: "Tipo Cliente",

    });

    const handleSubmit = () => {

        alert(JSON.stringify(DatosUsuario));

    };

    

    return (

        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="w-full max-w-md">
                <form className="space-y-6">
                    <h2 className="text-center pt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-900">
                                Usuario
                            </label>
                            <input
                                id="usuario"
                                placeholder="Usuario"
                                autoComplete="username"
                                required
                                value={DatosUsuario.nombreUsuario}
                                onChange={(e) => setDatosUsuario({ ...DatosUsuario, nombreUsuario: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="Email"
                                required
                                value={DatosUsuario.emailUsuario}
                                onChange={(e) => setDatosUsuario({ ...DatosUsuario, emailUsuario: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            
                        </div>

                        <div>
                            <label htmlFor="Edad" className="block text-sm font-medium leading-6 text-gray-900">
                                Edad
                            </label>
                            <input
                                id="Edad"
                                placeholder="Edad"
                                required
                                value={DatosUsuario.edadUsuario}
                                onChange={(e) => setDatosUsuario({ ...DatosUsuario, edadUsuario: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <label htmlFor="Ciudad" className="block text-sm font-medium leading-6 text-gray-900">
                                Ciudad
                            </label>
                            <input
                                id="Ciudad"
                                placeholder="Ciudad"
                                required
                                value={DatosUsuario.ciudadUsuario}
                                onChange={(e) => setDatosUsuario({ ...DatosUsuario, ciudadUsuario: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <label htmlFor="Intereses" className="block text-sm font-medium leading-6 text-gray-900">
                                Intereses
                            </label>
                            <input
                                id="Intereses"
                                placeholder="Intereses"
                                type="text"
                                required
                                value={DatosUsuario.interesesUsuario}
                                onChange={(e) => setDatosUsuario({ ...DatosUsuario, interesesUsuario: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Contraseña
                            </label>
                            <input
                                id="password"
                                placeholder="Contraseña"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={DatosUsuario.passwordUsuario}
                                onChange={(e) => setDatosUsuario({ ...DatosUsuario, passwordUsuario: e.target.value })}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <Dropdown opcionSeleccionada={DatosUsuario.tipoUsuario} setOpcionSeleccionada={nuevaOpcion => setDatosUsuario(prev => ({ ...prev, tipoUsuario: nuevaOpcion }))} />


                    <Checkbox DatosUsuario={DatosUsuario.permiteOfertas} setDatosUsuario={setDatosUsuario} />

                    <div className="mt-4">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
