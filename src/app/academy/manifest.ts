import type { MetadataRoute } from 'next'

/**
 * SMEfrog Academy PWA Manifest
 * Allows the academy to be installed as a standalone app on phones/desktops.
 * Served at /academy/manifest.webmanifest
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SMEfrog Academy',
    short_name: 'Academy',
    description:
      'Free business education for Namibian founders. 64 modules across 3 tracks: registration, compliance, and fundamentals. No login required.',
    start_url: '/academy',
    scope: '/academy',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0F1412',
    theme_color: '#7AC943',
    categories: ['education', 'business', 'productivity'],
    icons: [
      { src: '/upload/Icon.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/upload/Icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/upload/Icon.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      { name: 'Registration Track', url: '/academy#track-registration', description: '21 modules on business registration' },
      { name: 'Compliance Track', url: '/academy#track-compliance', description: '22 modules on compliance and governance' },
      { name: 'Fundamentals Track', url: '/academy#track-fundamentals', description: '21 modules on Namibian business fundamentals' },
    ],
  }
}
