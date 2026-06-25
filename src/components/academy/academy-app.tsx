'use client'

import { useAcademyProgress } from '@/hooks/use-academy-progress'
import { AcademyHeader } from '@/components/academy/academy-header'
import { AcademyFooter } from '@/components/academy/academy-footer'
import { AchievementToast } from '@/components/academy/achievement-toast'
import { KerstiChat } from '@/components/kersti-chat'
import { AcademyProgressProvider } from '@/components/academy/academy-progress-provider'

export function AcademyApp({ children }: { children: React.ReactNode }) {
  const progress = useAcademyProgress()

  return (
    <AcademyProgressProvider value={progress}>
      <div className="min-h-screen flex flex-col">
        <AcademyHeader progress={progress} />
        <main className="flex-1">{children}</main>
        <AcademyFooter />
      </div>
      <AchievementToast
        achievements={progress.newAchievements}
        onDismiss={progress.dismissAchievements}
      />
      <KerstiChat />
    </AcademyProgressProvider>
  )
}
