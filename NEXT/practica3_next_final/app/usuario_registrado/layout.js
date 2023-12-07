import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "usuario_registrado",
}

export default function usuario_registradoLayout({ children }) {
    return (
        <div className={inter.className}>
            {children}
        </div>

    )
}