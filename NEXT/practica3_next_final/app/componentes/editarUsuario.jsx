"use client"

import React, { useState } from 'react';

function EditarUsuario({user}) {

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            [name]: inputValue,
        }));
    };

    const handleActualizarUsuario = () => {
        console.log('Datos del usuario actualizados:', usuario);
        
    };

    return (
        
            <div className="contenedorEditarUsuario">
                <div className="container mx-auto mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Editar Usuario</h2>
                    <form className="max-w-md">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Nombre:
                                <input
                                    type="text"
                                    name="nombre"
                                    value={user.nombre}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Ciudad:
                                <input
                                    type="text"
                                    name="ciudad"
                                    value={user.ciudad}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Intereses:
                                <input
                                    type="text"
                                    name="intereses"
                                    value={user.intereses}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Recibir Ofertas:
                                <input
                                    type="checkbox"
                                    name="recibirOfertas"
                                    checked={user.recibirOfertas}
                                    onChange={handleInputChange}
                                    className="mr-2 leading-tight"
                                />
                            </label>
                        </div>
                        <button
                            type="button"
                            onClick={handleActualizarUsuario}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Actualizar Usuario
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default EditarUsuario;
