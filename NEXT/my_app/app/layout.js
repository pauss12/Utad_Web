import { Roboto } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "Mi tienda",
  description: "Esta es la página principal de mi tienda",
  keywords: "tienda, online, ecommerce"
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
