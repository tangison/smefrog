'use client'

import { useAcademyProgress } from '@/hooks/use-academy-progress'
import { AcademyHeader } from '@/components/academy/academy-header'
import { AcademyFooter } from '@/components/academy/academy-footer'
import { AchievementToast } from '@/components/academy/achievement-toast'
import { AcademyProgressProvider } from '@/components/academy/academy-progress-provider'

export function AcademyApp({ children }: { children: React.ReactNode }) {
  const progress = useAcademyProgress()

  return (
    <AcademyProgressProvider value={progress}>
      <a href="#academy-main" className="academy-skip-link">
        Skip to content
      </a>
      <div className="min-h-dvh flex flex-col">
        <AcademyHeader progress={progress} />
        <main id="academy-main" className="flex-1">
          {children}
        </main>
        <AcademyFooter />
      </div>
      <AchievementToast
        achievements={progress.newAchievements}
        onDismiss={progress.dismissAchievements}
      />
    </AcademyProgressProvider>
  )
}
