import { useState } from "react";
import Dropdown from "../componentes/Dropdown";

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
        tipoUsuario: "",

    });

    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

    const handleCheckboxChange = (e) => {
        setDatosUsuario({ ...DatosUsuario, permiteOfertas: e.target.checked });
    };

    const handleSubmit = async () => {

        setDatosUsuario(prevDatosUsuario => ({ ...prevDatosUsuario, tipoUsuario: { opcionSeleccionada } }));
        alert(JSON.stringify(DatosUsuario));

        try {
            
            const response = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(DatosUsuario),
            });

            if (response.ok) {
                
                alert('Datos guardados exitosamente');
                // Optionally, reset the form data after a successful request
                setDatosUsuario({
                    nombreUsuario: '',
                    emailUsuario: '',
                    passwordUsuario: '',
                    edadUsuario: 0,
                    ciudadUsuario: '',
                    interesesUsuario: '',
                    permiteOfertas: false,
                    tipoUsuario: '',
                });
                setOpcionSeleccionada('');
                
            } else {
                console.error(`HTTP error! Status: ${response.status}`);
                alert('Error al guardar los datos');
            }
        } catch (error) {
            console.error(error);
            alert('Error al guardar los datos');
        }
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
                                autoComplete="email"
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
                                autoComplete="edad"
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
                                autoComplete="ciudad"
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
                                autoComplete="intereses"
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

                    <Dropdown opcionSeleccionada={opcionSeleccionada} setOpcionSeleccionada={setOpcionSeleccionada} />

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox text-blue-500 h-5 w-5"
                            checked={DatosUsuario.permiteOfertas}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="quieroOfertas" className="ml-2 text-sm leading-5">
                            Quiero recibir ofertas
                        </label>
                    </div>

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