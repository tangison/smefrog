import Link from 'next/link'
import { LogoMark } from '@/components/logo-mark'

const serviceLinks = [
  { label: 'CC Registration', href: '/services/business-registration' },
  { label: 'PTY LTD Filing', href: '/services/business-registration' },
  { label: 'Tax Certifications', href: '/services/business-registration' },
  { label: 'Beneficial Ownership', href: '/services/business-registration' },
  { label: 'Startup Support', href: '/services/startup-support' },
  { label: 'Business Documents', href: '/services/business-documents' },
  { label: 'Digital Services', href: '/services/digital-services' },
]

const companyLinks = [
  { label: 'About SMEfrog', href: '/about' },
  { label: 'Pricing Packages', href: '/pricing' },
  { label: 'How It Works', href: '/faq' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

const AGENTS = [
  { name: 'Gadafi', phone: '081 341 1522', role: 'Compliance Expert', waLink: 'https://wa.me/264813411522' },
  { name: 'Mux', phone: '085 305 7020', role: 'Digital Strategist', waLink: 'https://wa.me/264853057020' },
]

export function Footer() {
  return (
    <footer className="bg-black pt-32 md:pt-40 pb-8 px-4 md:px-6 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#7AC943]/[0.03] blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#1E3A2F]/[0.08] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* ─── TOP: Big brand statement ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 mb-20 md:mb-28">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 relative">
                <LogoMark className="w-14 h-14" />
              </div>
              <span className="text-3xl font-black tracking-tighter leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="text-white">SME</span>
                <span className="text-[#7AC943]">frog</span>
              </span>
            </div>
            <p className="text-white/35 text-lg md:text-xl font-bold leading-relaxed max-w-sm mb-10">
              Empowering Namibian entrepreneurs with seamless, affordable, and 100% remote business registration.
            </p>

            {/* Agent Contact Cards */}
            <div className="space-y-3">
              {AGENTS.map(agent => (
                <a
                  key={agent.name}
                  href={agent.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-[#7AC943]/20 transition-all duration-500 group"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">{agent.role}</span>
                    <p className="text-white font-bold text-lg mt-0.5">{agent.name}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white/20 text-sm font-bold">{agent.phone}</span>
                    <span className="w-8 h-8 rounded-full bg-[#7AC943]/10 text-[#7AC943] flex items-center justify-center text-xs font-bold group-hover:bg-[#7AC943] group-hover:text-black transition-all duration-500">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Services */}
            <div className="space-y-6">
              <h6 className="text-white/15 text-[10px] font-black uppercase tracking-[0.4em]">Services</h6>
              <ul className="space-y-3">
                {serviceLinks.map(link => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-white/45 font-bold text-sm hover:text-white transition-colors duration-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h6 className="text-white/15 text-[10px] font-black uppercase tracking-[0.4em]">Company</h6>
              <ul className="space-y-3">
                {companyLinks.map(link => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-white/45 font-bold text-sm hover:text-white transition-colors duration-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Location */}
            <div className="space-y-6 col-span-2 lg:col-span-1">
              <h6 className="text-white/15 text-[10px] font-black uppercase tracking-[0.4em]">Contact</h6>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-white font-black mb-2">Windhoek, Namibia</p>
                <p className="text-[#7AC943] text-sm font-black italic mb-4">Support Available 24/7</p>
                <Link href="/contact" className="text-white text-xs font-black uppercase tracking-widest border-b-2 border-[#7AC943]/40 pb-1 hover:text-[#7AC943] hover:border-[#7AC943] transition-all duration-500">
                  Say Hello
                </Link>
              </div>

              {/* Gemsweb Digital Partner */}
              <div className="p-5 rounded-2xl bg-[#7AC943]/[0.05] border border-[#7AC943]/10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7AC943]/40 mb-2">Digital Partner</p>
                <a
                  href="https://gemsweb.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7AC943] font-bold text-sm hover:text-[#7AC943]/70 transition-colors"
                >
                  Gemsweb Digital ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── CTA Banner ─── */}
        <div className="mb-16 p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-[#7AC943]/10 via-[#7AC943]/5 to-transparent border border-[#7AC943]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to register your business?
            </h3>
            <p className="text-white/30 text-sm font-bold mt-1">100% remote · 7–10 day turnaround · From N$800</p>
          </div>
          <a
            href="https://wa.me/264813411522"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7AC943] text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#7AC943]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(122,201,67,0.2)] shrink-0"
          >
            Start Now →
          </a>
        </div>

        {/* ─── BOTTOM ─── */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/[0.04] gap-4">
          <div className="flex flex-wrap gap-6 items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/15">
            <p>© {new Date().getFullYear()} SMEFROG</p>
            {legalLinks.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-white/40 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-white/[0.06] uppercase tracking-[0.5em]">Crafted for Namibia</span>
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-white/5 to-[#7AC943]/20" />
          </div>
        </div>
      </div>
    </footer>
  )
}
