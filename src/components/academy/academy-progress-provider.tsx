'use client'

import { createContext, useContext } from 'react'
import type { useAcademyProgress } from '@/hooks/use-academy-progress'

type ProgressValue = ReturnType<typeof useAcademyProgress>

const AcademyProgressContext = createContext<ProgressValue | null>(null)

export function AcademyProgressProvider({
  value,
  children,
}: {
  value: ProgressValue
  children: React.ReactNode
}) {
  return (
    <AcademyProgressContext.Provider value={value}>
      {children}
    </AcademyProgressContext.Provider>
  )
}

export function useAcademyProgressContext(): ProgressValue {
  const ctx = useContext(AcademyProgressContext)
  if (!ctx) {
    throw new Error('useAcademyProgressContext must be used within AcademyProgressProvider')
  }
  return ctx
}
