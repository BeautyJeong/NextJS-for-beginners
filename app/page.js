import Image from 'next/image'
import styles from './page.module.css'
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
      <div>
          <NavBar />
          <h1>Hello</h1>
      </div>
  )
}
