'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function NavBar(){
    const path = usePathname();

    return (
        <nav>
            <Link href="/" className="Hello" style={{color: path === "/" ? "red" : "blue"}}>Home</Link>
            <Link href="/about" style={{color: path === "/about" ? "red" : "blue"}}>About Us</Link>
        </nav>
        )
}