import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Iglesia Emanuel de Panamá | Betania',
  description: 'Un lugar de paz, comunidad y fe en el corazón de Betania, Panamá. Únete a nuestros servicios, eventos y ministerios.',
  keywords: 'iglesia, fe, comunidad, Panamá, Betania, cultos, evangelio',
  generator: 'v0.app',
  openGraph: {
    title: 'Iglesia Emanuel de Panamá',
    description: 'Un lugar de paz, comunidad y fe en Betania, Panamá',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
