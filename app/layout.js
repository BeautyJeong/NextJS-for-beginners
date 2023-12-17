'use client'
import "./globals.css"
import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <NavBar />
        {children}
        </body>
        <style jsx global>{`
            span{
              color: white;
            }
        `}</style>
        </html>
    )
}
