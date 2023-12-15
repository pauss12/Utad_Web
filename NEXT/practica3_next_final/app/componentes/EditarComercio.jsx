"use client"

import React, { useState, useEffect } from 'react';

function EditarComercio( {comercio} ) {

    /*
    //Const para la URL de la foto
    const [foto, setFoto] = useState("");

    //Handle change foto
    const handleChangeFoto = (event) => {
        setFoto(event.target.value);
    };
    */
    
    
    //Const para el comercio ------------------------
    const [comercioIndividual, setComercioIndividual] = useState(comercio);

    useEffect(() => {

        setComercioIndividual(comercio);

    }, [comercio]);

    
    return (

        <div className="contenedorEditarComercio">

            <div className="container mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Editar Comercio</h2>
                <form className="max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre Comercio:
                            <input
                                type="text"
                                name="nombreComercio"
                                value={comercioIndividual.nombreComercio}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Actividad:
                            <input
                                type="text"
                                name="interesesUsuario"
                                value={comercioIndividual.actividadComercio}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            CIF:
                            <input
                                type="text"
                                name="ciudadUsuario"
                                value={comercioIndividual.cifComercio}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Direccion Comercio:
                            <input
                                type="text"
                                name="interesesUsuario"
                                value={comercioIndividual.direccionComercio}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email:
                            <input
                                type="text"
                                name="ciudadUsuario"
                                value={comercioIndividual.emailComercio}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Telefono Comercio:
                            <input
                                type="text"
                                name="ciudadUsuario"
                                value={comercioIndividual.telefonoComercio}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>

                    <button
                        type="button"
                       
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Actualizar Comercio
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditarComercio;