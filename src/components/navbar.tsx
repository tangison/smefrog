'use client'

import { useState, useCallback, useEffect, useRef, startTransition } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Search, ChevronDown, ExternalLink } from 'lucide-react'
import { LogoMark } from '@/components/logo-mark'
import { waLink } from '@/lib/config'

interface NavChild {
  label: string
  href: string
}

interface NavLink {
  label: string
  href: string
  children?: NavChild[]
  external?: boolean
}

const navLinks: NavLink[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'CC Registration', href: '/services/business-registration' },
      { label: 'PTY LTD Filing', href: '/services/business-registration' },
      { label: 'Compliance Services', href: '/services/compliance-services' },
      { label: 'Business Documents', href: '/services/business-documents' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Guides', href: '/resources' },
      { label: 'Templates', href: '/resources#templates' },
      { label: 'Pricing Calculator', href: '/resources/pricing-calculator' },
      { label: 'Cost Estimator', href: '/resources/cost-estimator' },
      { label: 'Name Checker', href: '/resources/name-checker' },
    ],
  },
  { label: 'Academy', href: 'https://document-library-one.vercel.app', external: true },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    startTransition(() => setOpen(false))
  }, [pathname])

  // Cleanup close timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  const handleDesktopMouseEnter = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setDesktopDropdown(label)
  }

  const handleDesktopMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setDesktopDropdown(null)
    }, 150)
  }

  return (
    <>
      {/* ═══ PREMIUM FLOATING NAVBAR ═══ */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 pt-5 md:pt-7 pointer-events-none"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className={`pointer-events-auto flex items-center justify-between px-5 md:px-8 py-4 md:py-5 rounded-full border transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              scrolled
                ? 'bg-black/70 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/30'
                : 'bg-black/30 backdrop-blur-xl border-white/[0.06]'
            }`}
          >
            {/* Logo — BIG, icon only, no wordmark */}
            <Link href="/" className="flex items-center shrink-0 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-700 group-hover:rotate-[360deg]">
                <LogoMark className="w-12 h-12 md:w-14 md:h-14" />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const hasChildren = link.children && link.children.length > 0
                const isExternal = link.external

                if (hasChildren) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => handleDesktopMouseEnter(link.label)}
                      onMouseLeave={handleDesktopMouseLeave}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          pathname === link.href
                            ? 'text-frog-green'
                            : 'text-white/40 hover:text-white'
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            desktopDropdown === link.label ? 'rotate-180' : ''
                          }`}
                        />
                      </Link>

                      {/* Dropdown panel */}
                      <AnimatePresence>
                        {desktopDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{
                              duration: 0.2,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[220px] bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl overflow-hidden z-50"
                            onMouseEnter={() => handleDesktopMouseEnter(link.label)}
                            onMouseLeave={handleDesktopMouseLeave}
                          >
                            <div className="py-2">
                              {link.children!.map((child) => (
                                <Link
                                  key={child.href + child.label}
                                  href={child.href}
                                  className="block px-4 py-2.5 text-[14px] text-[#c0c0c0] border-l-[1px] border-transparent hover:text-white hover:border-l-frog-green transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                if (isExternal) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      pathname === link.href
                        ? 'text-frog-green'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* CMD+K trigger */}
              <button
                onClick={() => {
                  const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true, ctrlKey: true })
                  window.dispatchEvent(event)
                }}
                className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/[0.06] text-white/30 text-[10px] font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white/50 transition-all duration-300"
              >
                <Search className="w-3 h-3" />
                <span className="hidden xl:inline">⌘K</span>
              </button>

              {/* CTA Button */}
              <a
                href={waLink('home')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-frog-green text-black rounded-full px-5 py-2.5 text-[11px] font-black uppercase tracking-wider hover:bg-frog-green/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(122,201,67,0.15)]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Start Registration
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/[0.05] transition-colors touch-action-manipulation"
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <span
                    className={`absolute h-[2px] w-6 bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                      open ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-[30%]'
                    }`}
                  />
                  <span
                    className={`absolute h-[2px] w-6 bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                      open ? '-rotate-45 top-1/2 -translate-y-1/2' : 'top-[70%]'
                    }`}
                  />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* ═══ FULLSCREEN MOBILE OVERLAY ═══ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[90] backdrop-blur-3xl bg-black/95 flex flex-col items-center justify-center overflow-y-auto"
          >
            {/* Big logo at top */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 relative">
                <LogoMark className="w-16 h-16" />
              </div>
            </div>

            {/* Nav links with stagger */}
            <div className="flex flex-col items-center gap-2 py-20">
              {navLinks.map((link, i) => {
                const hasChildren = link.children && link.children.length > 0
                const isExternal = link.external
                const isExpanded = mobileExpanded === link.label

                if (hasChildren) {
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                      className="flex flex-col items-center"
                    >
                      <button
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : link.label)
                        }
                        className={`flex items-center gap-2 text-3xl md:text-4xl font-black tracking-tight py-2 transition-colors duration-500 touch-action-manipulation min-h-[48px] ${
                          pathname === link.href ? 'text-frog-green' : 'text-white/60 hover:text-white'
                        }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center gap-1 pl-4"
                          >
                            {link.children!.map((child) => (
                              <Link
                                key={child.href + child.label}
                                href={child.href}
                                onClick={close}
                                className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 py-1.5 min-h-[44px] flex items-center touch-action-manipulation"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                }

                if (isExternal) {
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={close}
                        className="flex items-center gap-2 text-3xl md:text-4xl font-black tracking-tight py-2 text-white/60 hover:text-white transition-colors duration-500 min-h-[48px] touch-action-manipulation"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {link.label}
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </motion.div>
                  )
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className={`block text-3xl md:text-4xl font-black tracking-tight py-2 transition-colors duration-500 min-h-[48px] touch-action-manipulation ${
                        pathname === link.href ? 'text-frog-green' : 'text-white/60 hover:text-white'
                      }`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Mobile CTA */}
            <motion.a
              href={waLink('home')}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="mt-10 flex items-center gap-2.5 bg-frog-green text-black rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider shadow-[0_0_30px_rgba(122,201,67,0.25)] touch-action-manipulation min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              Start Registration
            </motion.a>

            {/* Bottom close hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 text-white/10 text-[10px] font-bold uppercase tracking-[0.4em]"
            >
              Tap X to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
