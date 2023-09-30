import { Dir } from 'fs'
import './globals.css'
import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: '200'
})

export const metadata: Metadata = {
    title: 'physics experiments simulation',
    description: 'My App Description',
}

export default function RouteLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html dir='rtl'>
      <body  className={tajawal.className}>{children}</body>
    </html>
  )
}