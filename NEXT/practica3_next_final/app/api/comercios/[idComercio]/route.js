import { NextResponse } from "next/server";
import { readFileSync } from 'fs';


export async function GET(request, { params }) {

    try {

        const users = JSON.parse(readFileSync("data/comercios.txt"));

        const user = users.find((comercio) => comercio.id === params.id);

        if (!user) {

            return NextResponse.json({ message: "Comercio not found", status: 404 });

        }

        return NextResponse.json({ user });

    } catch (error) {

        console.error("Error fetching Comercio:", error);

        return NextResponse.json({ message: "Error fetching Comercio", status: 500 });

    }
}


export async function PUT(request, { params }) {

    try {

        const comercios = JSON.parse(readFileSync("data/comercios.txt"));

        const indiceComercio = comercios.findIndex((comercio) => comercio.idComercio === params.idComercio);

        if (indiceComercio === -1) {

            return NextResponse.json({ message: "Comercio not found", status: 404 });

        }

        const comercio = comercios[indiceComercio];

        const nuevoComercio = await request.body.json();

        comercios[indiceComercio] = { ...comercio, ...nuevoComercio };

        return NextResponse.json({ comercio: comercios[indiceComercio] });

    } catch (error) {

        console.error("Error updating Comercio:", error);

        return NextResponse.json({ message: "Error updating Comercio", status: 500 });

    }
}