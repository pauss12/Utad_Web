import { NextResponse } from "next/server";
import { readFileSync } from 'fs';


export async function GET(request, { params }) {

    try {
        
        const users = JSON.parse(readFileSync("data/users.txt"))

        const user = users.find((user) => user.idUsuario === params.idUsuario)

        if (!user) {

            return NextResponse.json({ message: "API:USER not found", status: 404 });
        
        }

        return NextResponse.json({ user });

    } catch (error) {

        console.error("API: Error fetching USER:", error);

        return NextResponse.json({ message: "API: Error fetching USER", status: 500 });

    }
}