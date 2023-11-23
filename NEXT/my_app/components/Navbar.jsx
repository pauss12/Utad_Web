import Link from 'next/link'
//Después de CSS
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar py-5">
            <Link href="/">
                <h1 className="text-xxl text-bold">Clase de Nextjs</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/contact/book">Booking</Link>
                </li>
                <li>
                    <Link href="/contact/book/info">Info</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    )
}