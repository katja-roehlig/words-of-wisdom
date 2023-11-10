import Link from "next/link";
import { Suspense } from "react";
import WisdomList from "./WisdomList";



export default function All() {
  return (
    <main>
    <h2>Alle Weisheiten</h2>
  
    <WisdomList/>
    </main>
  )
}
