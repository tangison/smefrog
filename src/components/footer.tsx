import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Github } from 'lucide-react'
import { waLink, PHONE_MAIN, PHONE_MAIN_TEL, FACEBOOK_URL, INSTAGRAM_URL, GITHUB_URL, GEMSWEB_URL } from '@/lib/config'
const serviceLinks = [
  { label: 'CC Registration', href: '/services/business-registration' },
  { label: 'PTY LTD Filing', href: '/services/business-registration' },
  { label: 'Compliance Services', href: '/services/compliance-services' },
  { label: 'Business Documents', href: '/services/business-documents' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Resources', href: '/resources' },
  { label: 'Academy', href: '/academy' },
  { label: 'Brand Guidelines', href: '/brand' },
  { label: 'Blog', href: '/blog' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]



export function Footer() {
  return (
    <footer className="bg-black pt-24 md:pt-32 pb-8 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-frog-green/[0.03] blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* ─── TOP ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 mb-16 md:mb-24">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="mb-8">
              <Image
                src="/upload/logo On Dark.png"
                alt="SMEfrog"
                width={200}
                height={60}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </div>
            <p className="text-white/40 text-base md:text-lg font-bold leading-relaxed max-w-sm mb-8">
              Remote business registration for Namibia. Fast. Affordable. 100% online.
            </p>

            {/* WhatsApp Contact Card */}
            <a
              href={waLink('footer')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-frog-green/20 transition-all duration-500 group min-h-[44px] mb-4"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Get in touch</span>
                <p className="text-white font-bold text-base mt-0.5">WhatsApp Us</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-sm font-bold">{PHONE_MAIN}</span>
                <span className="w-8 h-8 rounded-full bg-frog-green/10 text-frog-green flex items-center justify-center text-xs font-bold group-hover:bg-frog-green group-hover:text-black transition-all duration-500">
                  →
                </span>
              </div>
            </a>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Services */}
            <div className="space-y-6">
              <h6 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Services</h6>
              <ul className="space-y-3">
                {serviceLinks.map(link => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-white/50 font-bold text-sm hover:text-white transition-colors duration-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h6 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Company</h6>
              <ul className="space-y-3">
                {companyLinks.map(link => (
                  <li key={link.href + link.label}>
                    {'external' in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/50 font-bold text-sm hover:text-white transition-colors duration-500">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-white/50 font-bold text-sm hover:text-white transition-colors duration-500">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6 col-span-2 lg:col-span-1">
              <h6 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Contact</h6>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-white font-black mb-1">Windhoek, Namibia</p>
                <a href={PHONE_MAIN_TEL} className="block text-frog-green font-black text-lg mb-2 hover:text-frog-green/80 transition-colors">{PHONE_MAIN}</a>
                <p className="text-white/30 text-xs font-bold">Support 24/7</p>
              </div>

              {/* Social */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow SMEfrog on Facebook (opens in new tab)"
                    className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-frog-green hover:border-frog-green/30 transition-all duration-500"
                  >
                    <Facebook className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow SMEfrog on Instagram (opens in new tab)"
                    className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-frog-green hover:border-frog-green/30 transition-all duration-500"
                  >
                    <Instagram className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow SMEfrog on GitHub (opens in new tab)"
                    className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-frog-green hover:border-frog-green/30 transition-all duration-500"
                  >
                    <Github className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                </div>
                <p className="text-white/20 text-[10px] font-bold">LinkedIn · Google Business <span className="text-frog-green/40">Coming Soon</span></p>
              </div>

              {/* Gemsweb */}
              <div className="p-4 rounded-xl bg-frog-green/[0.05] border border-frog-green/10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-frog-green/40 mb-1">Digital Partner</p>
                <a
                  href={GEMSWEB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Gemsweb Digital (opens in new tab)"
                  className="text-frog-green font-bold text-sm hover:text-frog-green/70 transition-colors"
                >
                  Gemsweb Digital ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── CTA Banner ─── */}
        <div className="mb-12 p-6 md:p-10 rounded-[2rem] bg-gradient-to-r from-frog-green/10 via-frog-green/5 to-transparent border border-frog-green/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-black tracking-tight">
              Ready to register?
            </h3>
            <p className="text-white/40 text-sm font-bold mt-1">100% remote · 7 to 10 days · From N$1,000</p>
          </div>
          <a
            href={waLink('footer')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start registration on WhatsApp"
            className="bg-frog-green text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-frog-green/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(122,201,67,0.2)] shrink-0 min-h-[44px]"
          >
            Start Now →
          </a>
        </div>

        {/* ─── BOTTOM ─── */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/[0.04] gap-4">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex flex-wrap gap-6 items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
              <p>© 2026 SMEfrog</p>
              {legalLinks.map(link => (
                <Link key={link.href} href={link.href} className="hover:text-white/50 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
              A concept by Tangison.com — Tangison Technologies
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow SMEfrog on Facebook"
              className="text-white/30 hover:text-frog-green transition-colors duration-500"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow SMEfrog on Instagram"
              className="text-white/30 hover:text-frog-green transition-colors duration-500"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow SMEfrog on GitHub"
              className="text-white/30 hover:text-frog-green transition-colors duration-500"
            >
              <Github className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">Namibia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
