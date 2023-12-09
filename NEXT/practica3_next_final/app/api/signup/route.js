import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';


export async function POST(request) {
    const data = await request.json()
    try {
        const users = JSON.parse(readFileSync("data/users.txt"))
        //writeFileSync("data/users.txt", JSON.stringify([...users, data], null, 2) + '\n')
        writeFileSync("data/users.txt", JSON.stringify([...users, data], null, 4))

    } catch (e) {
        writeFileSync("data/users.txt", JSON.stringify([data], null, 4))
        
    }
    return NextResponse.json({ message: "Guardando datos..." })
}