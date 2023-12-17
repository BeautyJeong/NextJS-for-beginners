'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import styles from "./NavBar.module.css"

export default function NavBar(){
    const path = usePathname();

    return (
        <nav>
            <Link href="/" className={`${styles.link} ${path === "/" ? styles.active : ""}`}>Home</Link>
            <Link href="/about" className={[styles.link, path === "/about" ? styles.active : ""].join(" ")}>About Us</Link>
        </nav>
        )
}