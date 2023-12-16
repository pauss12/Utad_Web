import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function POST(request) {

    const data = await request.json()

    if (data.opcionSeleccionada == 'Usuario Registrado' || data.opcionSeleccionada == 'Administrador') {

        try {

            const users = JSON.parse(readFileSync("data/users.txt"));

            const user = users.filter(user => user.nombreUsuario === data.nombreUsuario && user.passwordUsuario === data.passwordUsuario);

            if (user.length > 0) {

                return NextResponse.json({ message: "Usuario existe...", idUsuario: user[0].idUsuario, status: 200 });

            } else {

                return NextResponse.json({ message: "Usuario no existe...", status: 400 });

            }

        } catch (error) {

            console.error('Error al procesar usuarios:', error.message);

            return NextResponse.json({ message: "Error interno del servidor", status: 500 });

        }

    } else if (data.opcionSeleccionada == 'Comercios') {

        try {

            const comercios = JSON.parse(readFileSync("data/comercios.txt"))

            const comercio = comercios.filter(comercio => comercio.nombreComercio == data.nombreComercio && comercio.cifComercio == data.cifComercio)

            if (comercio.length > 0) {

                return NextResponse.json({ message: "Comercio existe...", id: comercio[0].idComercio, status: 200 });

            } else {

                return NextResponse.json({ message: "Comercio no existe...", status: 400 });

            }

        } catch (error) {

            return NextResponse.json({ message: "Comercio no existe...", status: 400 })
        }

    } else {

        console.error('Error en la API:', error.message);
        
        return NextResponse.json({ message: "Opcion no existe...", status: 400 })
    }
    
}
