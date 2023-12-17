'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function NavBar(){
    const path = usePathname();

    return (
        <nav>
            <Link href="/"><span className={path === "/" ? "active" : "" }>Home</span></Link>
            <Link href="/about"><span className={path === "/about" ? "active" : ""}>About</span></Link>
            <style jsx>{`
                nav{
                  background-color: tomato;
                }
                a{
                  color: blue;
                }
                .active{
                  color: yellow;
                }
            `}</style>
        </nav>
        )
}