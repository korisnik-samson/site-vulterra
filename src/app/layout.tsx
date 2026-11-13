import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { onest } from '@/lib/fonts'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={onest.variable}>
          <body>{children}</body>
        </html>
    );
}
