"use client"

import { useState, useEffect } from 'react';


function Page({ params }) {


    return (

        <div className="flex flex-col ">

            <div className="flex justify-center ">
                
                <button onClick={darseDeBajaUsuario}
                    className="absolute right-4 top-12 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Darse de baja
                </button>

            </div>
        </div>
    )
}

export default Page;
