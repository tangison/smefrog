'use client'

import Image from 'next/image'
import Link from 'next/link'

interface BrandLogoProps {
  theme?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showWordmark?: boolean
}

const sizes = {
  sm: { img: 'w-8 h-8', text: 'text-lg' },
  md: { img: 'w-10 h-10', text: 'text-xl' },
  lg: { img: 'w-14 h-14', text: 'text-3xl' },
  xl: { img: 'w-20 h-20', text: 'text-5xl' },
}

export function BrandLogo({ theme = 'dark', size = 'md', showWordmark = false }: BrandLogoProps) {
  const s = sizes[size]
  return (
    <Link href="/" className="flex items-center gap-3 group select-none">
      <div className={`${s.img} relative transition-transform duration-700 group-hover:rotate-[360deg]`}>
        <Image
          src="/frog-icon.png"
          alt="SMEfrog"
          width={80}
          height={80}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      {showWordmark && (
        <span className={`${s.text} font-black tracking-tighter leading-none`}>
          <span className={theme === 'dark' ? 'text-white' : 'text-black'}>SME</span>
          <span className="text-[#7AC943]">frog</span>
        </span>
      )}
    </Link>
  )
}
