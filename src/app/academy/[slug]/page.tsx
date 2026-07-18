import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MODULES, getTrackById } from '@/lib/academy/modules'
import { ModuleView } from './module-view'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const moduleData = MODULES.find(m => m.slug === slug)

  if (!moduleData) {
    return {
      title: 'Module not found',
      description: 'This academy module could not be found.',
    }
  }

  const track = getTrackById(moduleData.trackId)
  const title = `${moduleData.title} — SMEfrog Academy`
  const description = `${moduleData.summary} ${moduleData.level} · ${moduleData.duration} min · ${moduleData.xp} XP. Free Namibian business education.`
  const url = `https://sme.tangison.com/academy/${moduleData.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: 'SMEfrog Academy',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    keywords: [
      moduleData.title,
      'Namibia',
      'BIPA',
      'business registration',
      track?.name || '',
      'SMEfrog Academy',
      moduleData.level,
    ].filter(Boolean),
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const moduleData = MODULES.find(m => m.slug === slug)

  if (!moduleData) {
    notFound()
  }

  // JSON-LD structured data for the module
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: moduleData.title,
    description: moduleData.summary,
    url: `https://sme.tangison.com/academy/${moduleData.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'SMEfrog Academy',
      url: 'https://sme.tangison.com/academy',
    },
    educationalLevel: moduleData.level,
    timeRequired: `PT${moduleData.duration}M`,
    learningResourceType: 'Module',
    teaches: moduleData.outcomes,
    isPartOf: {
      '@type': 'Course',
      name: getTrackById(moduleData.trackId)?.name,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ModuleView slug={slug} />
    </>
  )
}
