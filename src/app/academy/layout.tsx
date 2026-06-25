import type { Metadata, Viewport } from 'next'
import { KerstiChat } from '@/components/kersti-chat'

export const metadata: Metadata = {
  title: 'SMEfrog Academy — Free Business Education for Namibia',
  description:
    '64 free modules across 3 tracks: Business Registration, Compliance & Governance, and Namibian Business Fundamentals. No login required. PWA-installable.',
  manifest: '/manifest.webmanifest',
  applicationName: 'SMEfrog Academy',
  appleWebApp: {
    capable: true,
    title: 'SMEfrog Academy',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'SMEfrog Academy — Free Business Education for Namibia',
    description:
      '64 free modules across 3 tracks. Built for Namibian founders. No login required.',
    type: 'website',
    siteName: 'SMEfrog Academy',
  },
}

export const viewport: Viewport = {
  themeColor: '#7AC943',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <KerstiChat />
    </>
  )
}
