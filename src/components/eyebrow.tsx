'use client'

interface EyebrowProps {
  children: React.ReactNode
  light?: boolean
}

export function Eyebrow({ children, light }: EyebrowProps) {
  return (
    <span className={`inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-black mb-4 ${
      light
        ? 'bg-black/5 text-black/50 border border-black/10'
        : 'bg-[#7AC943]/10 text-[#7AC943] border border-[#7AC943]/20'
    }`}>
      {children}
    </span>
  )
}
