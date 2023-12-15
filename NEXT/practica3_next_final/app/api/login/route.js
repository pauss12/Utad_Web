import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function POST(request) {
    
    const data = await request.json()


    if (data.opcionSeleccionada == 'Usuario Registrado' || data.opcionSeleccionada == 'Administrador') {

        try {

            const users = JSON.parse(readFileSync("data/users.txt"))

            const user = users.filter(user => user.nombreUsuario == data.nombreUsuario && user.passwordUsuario == data.passwordUsuario)

            if (user.length > 0) {

                return NextResponse.json({ message: "Usuario existe...", idUsuario: user.idUsuario, status: 200 })


            } else {

                return NextResponse.json({ message: "Usuario no existe...", status: 400 })

            }

        } catch (e) {

            return NextResponse.json({ message: "Usuario no existe...", status: 400 })

        }

    } else if (data.opcionSeleccionada == 'Comercios') {

        try {

            const comercios = JSON.parse(readFileSync("data/comercios.txt"))

            const comercio = comercios.filter(comercio => comercio.nombreComercio == data.nombreComercio && comercio.cifComercio == data.cifComercio)

            console.log(comercio.idComercio)

            if (comercio.length > 0) {

                return NextResponse.json({ message: "Comercio existe...", idComercio: comercio.idComercio, status: 200 })

            } else {

                return NextResponse.json({ message: "Comercio no existe...", status: 400 })
            }

        } catch (error) {

            return NextResponse.json({ message: "Comercio no existe...", status: 400 })
        }
    }
    
}
