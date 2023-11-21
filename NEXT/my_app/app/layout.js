import { Inter } from 'next/font/google'
import './globals.css'

import Link from 'next/link'
import Navbar from '../components/Navbar';

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
