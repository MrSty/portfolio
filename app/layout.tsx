import Header from '@/components/_header'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'], weight:"200"})

export const metadata: Metadata = {
  title: 'Mrsty Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
        {children}
        </Header>
      </body>
    </html>
  )
}
