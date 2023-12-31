import { Raleway} from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Words of wisdom',
  description: 'Find more wisdom on this site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={raleway.className}>
        <header>
        <Navbar />
        </header>
     
        {children}</body>
    </html>
  )
}
