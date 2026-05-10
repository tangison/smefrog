'use client'

interface DoubleBezelProps {
  children: React.ReactNode
  className?: string
  highlight?: boolean
}

export function DoubleBezel({ children, className = '', highlight = false }: DoubleBezelProps) {
  return (
    <div className={`bg-frog-shell ring-1 ${highlight ? 'ring-[#7AC943]/25' : 'ring-frog-hairline'} p-1.5 rounded-[2rem] ${className}`}>
      <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full">
        {children}
      </div>
    </div>
  )
}
