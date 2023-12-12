import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';


export async function POST(request) {
    
    const data = await request.json()
    
    try {
        
        const comercios = JSON.parse(readFileSync("data/comercios.txt"))
       
        writeFileSync("data/comercios.txt", JSON.stringify([...comercios, data], null, 4))

    } catch (e) {
        writeFileSync("data/comercios.txt", JSON.stringify([data], null, 4))

    }
    return NextResponse.json({ message: "Guardando datos..." })
}

export async function GET() {

    try {

        const comercios = JSON.parse(readFileSync("data/comercios.txt"))
        
        return NextResponse.json({ comercios })

    } catch (e) {
        return NextResponse.json({ message: "NO existen Comercios...", status: 400 })
    }
}


export async function DELETE(request) {
    
    const data = await request.json()

    try {

        const comercios = JSON.parse(readFileSync("data/comercios.txt"))
        
        const comercioFilter = comercios.filter(comercio => comercio.emailComercio != data.email)
        
        writeFileSync("data/comercios.txt", JSON.stringify(comercioFilter, null, 4))
        
        return NextResponse.json({ message: "Comercio eliminado...", status: 200 })

    } catch (e) {

        console.log(e)
    }
}