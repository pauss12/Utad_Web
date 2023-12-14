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