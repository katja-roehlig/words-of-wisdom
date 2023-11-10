import Image from "next/image";
import Link from "next/link";
import Logo from './logo-wisdom.png'

export default function Navbar() {
  return (
    <nav className="nav">
        <Image 
            src={Logo}
            alt="Buddhas Eyes"
            width={100}
        
        />

        <h1 >Weisheiten</h1>

         <div className="nav-left">
            <Link href="/">Home</Link>
            <Link href="/all">alle</Link>
            <Link href="/create">neu</Link>
            <Link href="/categories">Kategorien</Link>
        </div>
    </nav>
  )
}
