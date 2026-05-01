import type { Metadata } from 'next'
import { Cormorant_Garamond, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const lora = Lora({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'To The Most Beautiful Soul',
  description: 'A tribute to the most beautiful woman in the world',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/heart-icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/heart-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
