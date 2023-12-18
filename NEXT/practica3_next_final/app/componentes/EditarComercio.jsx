"use client"

import React, { useState, useEffect } from 'react';

function EditarComercio( {comercio} ) {

  
    //Const para el comercio ------------------------
    const [comercioIndividual, setComercioIndividual] = useState(comercio || {});

    useEffect(() => {

        setComercioIndividual(comercio || {});

    }, [comercio]);

    //Variable para el estilo --------------------------
    const estilo = {
        
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        marginLeft: '50px',
        paddingLeft: '30px',
        paddingBottom: '30px',
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px #ccc',
        
    };


    const handleInputChange = (event) => {

        const { name, value } = event.target

        setComercioIndividual({
            ...comercioIndividual,
            [name]: value,
        });

    };

    //Actualizar comercio ---------------------------------
    const actualizarComercio = async () => {

        try {

            console.log('Updating Comercio:', comercioIndividual);

            const response = await fetch(`http://localhost:3000/api/comercios/${comercioIndividual.idComercio}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comercioIndividual),
            });

            if (response.ok) {

                console.log('Comercio actualizado con éxito');
                alert('Comercio actualizado con éxito')

            } else {

                console.error('Error al actualizar el Comercio');
                alert('Error al actualizar el Comercio')

            }

        } catch (error) {

            console.error('Error en la solicitud de actualización:', error);

        }
    };

    
    return (

        <div style={estilo}>

            <div className="container mx-auto mt-8 pr-4">
                <h2 className="text-2xl font-semibold mb-4">Editar Comercio</h2>
                <form className="max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre Comercio:
                            <input
                                type="text"
                                name="nombreComercio"
                                value={comercioIndividual.nombreComercio || ''}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Actividad:
                            <input
                                type="text"
                                name="actividadComercio"
                                placeholder="Actividad Comercio"
                                value={comercioIndividual.actividadComercio || ''}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            CIF:
                            <input
                                type="text"
                                name="cifComercio"
                                value={comercioIndividual.cifComercio || ''}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Direccion Comercio:
                            <input
                                type="text"
                                name="DireccionComercio"
                                value={comercioIndividual.ciudadComercio || ''}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email:
                            <input
                                type="text"
                                name="emailComercio"
                                value={comercioIndividual.emailComercio || ''}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Foto:
                            <input
                                type="text"
                                placeholder='Foto'
                                name="fotos"
                                value={comercioIndividual.fotos || ''}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Texto:
                            <input
                                type="text"
                                placeholder='Texto'
                                name="textos"
                                value={comercioIndividual.textos || ''}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Telefono Comercio:
                            <input
                                type="text"
                                name="telefonoComercio"
                                value={comercioIndividual.telefonoComercio || ''}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>

                    <button
                        type="button"
                        onClick={actualizarComercio}
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