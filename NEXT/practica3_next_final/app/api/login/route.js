import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function POST(request) {
    
    const data = await request.json()
    
    console.log("Ha entrado en el POST");

    try {

        const users = JSON.parse(readFileSync("data/users.txt"))
        
        const user = users.filter(user => user.nombreUsuario == data.nombreUsuario && user.passwordUsuario == data.passwordUsuario) 

        if (user.length > 0) {

            console.log("Usuario existe ---")
            return NextResponse.json({ message: "Usuario existe...", status: 200 })

        
        } else {

            console.log("Usuario NO existe -- ")
            return NextResponse.json({ message: "Usuario no existe...", status: 400 })
        
        }
    
    } catch (e) {

        return NextResponse.json({ message: "Usuario no existe...", status: 400 })
    
    }
}
