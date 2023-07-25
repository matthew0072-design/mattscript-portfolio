import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mattscript',
  description: 'Built by Mattscript',
}



const exoSpace = localFont({
  src: './fonts/Exo Space DEMO.ttf',
  display: 'swap',
  variable: '--font-exoSpace'
})

const ribeka = localFont({
  src:'./fonts/Cyborg Regular.ttf',
  display: 'swap',
  variable: '--font-ribeka'
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${ribeka.variable} ${exoSpace.variable} `}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
