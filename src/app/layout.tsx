import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JobsDev GO',
  description: 'Project Open Source for Developers find jobs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="bg-zinc-950 text-zinc-200">
          <div className="container mx-auto min-h-screen w-full ">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
