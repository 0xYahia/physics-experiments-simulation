import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Physical',
    description: 'My App Description',
}

export default function RouteLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body  className={inter.className}>{children}</body>
    </html>
  )
}