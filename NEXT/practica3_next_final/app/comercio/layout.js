import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "comercio",
}

export default function comercioLayout({ children }) {
    return (
        <div className={inter.className}>
            {children}
        </div>

    )
}