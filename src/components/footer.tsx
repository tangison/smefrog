'use client'

import { Phone, Globe } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0F1412]">
      <div className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {/* Column 1: Logo + Tagline */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/icon.png" alt="SMEfrog" className="w-8 h-8 rounded-full" />
                <span className="font-heading font-bold text-frog-light text-lg">
                  SMEfrog
                </span>
              </div>
              <p className="text-[#8BA89A] text-sm leading-relaxed">
                Simple. Fast. For Startups.
              </p>
              <p className="text-[#8BA89A] text-sm leading-relaxed mt-2">
                Affordable startup support for Namibian entrepreneurs.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-frog-light text-sm mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#8BA89A] text-sm hover:text-frog-green transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-heading font-semibold text-frog-light text-sm mb-4 uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                    <Phone className="w-3 h-3 text-frog-green" strokeWidth={1.5} />
                  </span>
                  <span className="text-[#8BA89A] text-sm">081 341 1522 (Gadafi)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                    <Phone className="w-3 h-3 text-frog-green" strokeWidth={1.5} />
                  </span>
                  <span className="text-[#8BA89A] text-sm">085 305 7020 (Mux)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                    <Globe className="w-3 h-3 text-frog-green" strokeWidth={1.5} />
                  </span>
                  <a
                    href="https://smefrog.tangison.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8BA89A] text-sm hover:text-frog-green transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  >
                    smefrog.tangison.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Brand */}
            <div>
              <h4 className="font-heading font-semibold text-frog-light text-sm mb-4 uppercase tracking-wider">
                SMEfrog
              </h4>
              <p className="text-[#8BA89A] text-sm leading-relaxed">
                Helping Namibian entrepreneurs register, launch, and grow their businesses
                with affordable, remote-first support.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#8BA89A] text-xs">
              &copy; {new Date().getFullYear()} SMEfrog. All rights reserved.
            </p>
            <p className="text-[#8BA89A] text-xs">
              Built with <span className="text-frog-green">&#9829;</span> for Namibian entrepreneurs
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
