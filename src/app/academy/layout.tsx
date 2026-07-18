import type { Metadata, Viewport } from 'next'
import { Nunito, Newsreader } from 'next/font/google'
import '@/app/globals.css'
import './academy.css'
import { AcademyApp } from '@/components/academy/academy-app'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-academy',
})

// Serif for module body text — gives the academy a printed-reference feel
// (Collins DNA: serif for reading content, sans for UI chrome)
const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-academy-serif',
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
  alternates: {
    canonical: 'https://sme.tangison.com/academy',
  },
  openGraph: {
    title: 'SMEfrog Academy — Free Business Education for Namibia',
    description:
      '64 free modules across 3 tracks. Built for Namibian founders. Gamified, PWA-installable, no login required.',
    type: 'website',
    siteName: 'SMEfrog Academy',
    url: 'https://sme.tangison.com/academy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMEfrog Academy — Free Business Education for Namibia',
    description:
      '64 free modules across 3 tracks. Built for Namibian founders. Gamified, PWA-installable, no login required.',
  },
}

// themeColor must be a literal hex (meta tag doesn't support CSS vars)
// Keep in sync with --color-academy-primary-bright in academy.css
const ACADEMY_THEME_COLOR = '#FF6B47'

export const viewport: Viewport = {
  themeColor: ACADEMY_THEME_COLOR,
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 5, // allow zoom for accessibility
}

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'SMEfrog Academy',
    description:
      'Free business education for Namibian founders. 64 modules across 3 tracks: Business Registration, Compliance & Governance, and Namibian Business Fundamentals.',
    url: 'https://sme.tangison.com/academy',
    provider: {
      '@type': 'Organization',
      name: 'SMEfrog',
      url: 'https://sme.tangison.com',
    },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'learner',
    },
  }

  return (
    <div className={`academy-theme ${nunito.variable} ${newsreader.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademyApp>{children}</AcademyApp>
    </div>
  )
}
