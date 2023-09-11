import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/providers/toast-provider'
import { ModalProvider } from '@/providers/modal-provider'

import './globals.css'
import prismadb from '@/lib/prismadb'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dahsboard',
  description: 'Admin Dahsboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const store = prismadb.store
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
