import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "admin",
}

export default function adminLayout({ children }) {
    return (
        <div className={inter.className}>
            {children}
        </div>

    )
}