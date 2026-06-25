import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './academy.css'
import '@/app/globals.css'
import { AcademyApp } from '@/components/academy/academy-app'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-academy',
})

export const metadata: Metadata = {
  title: 'SMEfrog Academy — Free Business Education for Namibia',
  description:
    '64 free modules across 3 tracks: Business Registration, Compliance & Governance, and Namibian Business Fundamentals. Gamified. PWA-installable. No login required.',
  manifest: '/manifest.webmanifest',
  applicationName: 'SMEfrog Academy',
  appleWebApp: {
    capable: true,
    title: 'SMEfrog Academy',
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'SMEfrog Academy — Free Business Education for Namibia',
    description:
      '64 free modules across 3 tracks. Built for Namibian founders. Gamified, PWA-installable, no login required.',
    type: 'website',
    siteName: 'SMEfrog Academy',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF6B47',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 5, // allow zoom for accessibility
}

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`academy-theme ${nunito.variable}`}>
      <AcademyApp>{children}</AcademyApp>
    </div>
  )
}
