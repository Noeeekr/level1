export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import './ui/globals.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
