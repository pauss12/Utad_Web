import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from '../components/Navbar';

export const metadata = {
  title: "Mi tienda",
  description: "Esta es la página principal de mi tienda",
  keywords: "tienda, online, ecommerce"
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
