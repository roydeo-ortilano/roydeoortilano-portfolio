// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MouseGlow from '@/components/MouseGlow'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meet Roy Deo B. Ortilano!',
  description: 'Designing delightful web apps that drive results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <MouseGlow />
        <Navigation />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}