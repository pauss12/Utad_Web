import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "anonimo",
}

export default function anonimoLayout({ children }) {
    return (
        <div className={inter.className}>
            {children}
        </div>

    )
}