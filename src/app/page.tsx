'use client'

import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { TrustBar } from '@/components/trust-bar'
import { ServicesSection } from '@/components/services-section'
import { PricingSection } from '@/components/pricing-section'
import { AboutSection } from '@/components/about-section'
import { WhySection } from '@/components/why-section'
import { ProcessSection } from '@/components/process-section'
import { FaqSection } from '@/components/faq-section'
import { ContactCta } from '@/components/contact-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="noise-overlay min-h-screen flex flex-col bg-frog-black text-frog-light">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <WhySection />
        <ProcessSection />
        <FaqSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
