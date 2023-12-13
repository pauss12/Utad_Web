"use client"

import EditarUsuario from "../../componentes/editarUsuario"

async function loadUser(id) {
    const res = await fetch(`https://localhost/api/usuarios/${id}`)
    const data = await res.json()
    return data
}

async function Page({params}) {
    
    const user = await loadUser(params.idUsuario)

    return (
        <div>
            <h1>Post Page</h1>
            
        </div>
    )
}

export default Page;
