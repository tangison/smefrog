'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, MessageCircle, ArrowRight, ArrowLeft, Building2, Rocket, FileText, Globe, Phone, User, Mail, HelpCircle } from 'lucide-react'

/* ─── Types ─────────────────────────────────────────── */
interface OnboardingConfig {
  service?: string
  package?: string
  source?: string
}

interface OnboardingContextValue {
  openForm: (config?: OnboardingConfig) => void
}

const OnboardingContext = createContext<OnboardingContextValue>({ openForm: () => {} })
export const useOnboarding = () => useContext(OnboardingContext)

/* ─── Services data ──────────────────────────────────── */
const SERVICES = [
  { id: 'cc-registration', label: 'CC Registration', icon: Building2, desc: 'Close Corporation filing with BIPA compliance' },
  { id: 'startup-support', label: 'Startup Support', icon: Rocket, desc: 'Business plans, pitch decks, company profiles' },
  { id: 'business-documents', label: 'Business Documents', icon: FileText, desc: 'Contracts, policies, compliance documents' },
  { id: 'digital-services', label: 'Digital Services', icon: Globe, desc: 'Websites, email, branding via Gemsweb Digital' },
]

const PACKAGES = [
  { id: 'basic', label: 'Basic', price: 'N$800', desc: 'Name Reservation + BIPA Filing + Tax Certificate' },
  { id: 'advanced', label: 'Advanced', price: 'N$1,200', desc: 'Basic + Company Profile + Domain + BO Filing' },
  { id: 'full', label: 'Full', price: 'N$1,750', desc: 'Advanced + Business Plan + Social Setup + Pitch Deck' },
]

const TIMELINES = ['ASAP', 'Within 1 week', 'Within 2 weeks', 'Within a month', 'Just exploring']

const AGENTS = [
  { id: 'gadafi', name: 'Gadafi', role: 'Compliance Expert', phone: '264813411522' },
  { id: 'mux', name: 'Mux', role: 'Digital Strategist', phone: '264853057020' },
]

const STEP_COUNT = 4

/* ─── Provider Component ────────────────────────────── */
export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState<OnboardingConfig>({})
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)

  // Form state
  const [selectedService, setSelectedService] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('advanced')
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    timeline: '',
    needs: '',
  })
  const [selectedAgent, setSelectedAgent] = useState('gadafi')

  const openForm = useCallback((cfg?: OnboardingConfig) => {
    setConfig(cfg || {})
    if (cfg?.service) setSelectedService(cfg.service)
    if (cfg?.package) setSelectedPackage(cfg.package)
    setStep(0)
    setIsOpen(true)
  }, [])

  const closeForm = useCallback(() => {
    setIsOpen(false)
    // Reset after animation
    setTimeout(() => {
      setStep(0)
      setSelectedService('')
      setSelectedPackage('advanced')
      setFormData({ fullName: '', businessName: '', email: '', phone: '', timeline: '', needs: '' })
      setSelectedAgent('gadafi')
    }, 400)
  }, [])

  const nextStep = useCallback(() => {
    setDirection(1)
    setStep(s => Math.min(s + 1, STEP_COUNT - 1))
  }, [])

  const prevStep = useCallback(() => {
    setDirection(-1)
    setStep(s => Math.max(s - 1, 0))
  }, [])

  const handleSubmit = useCallback(() => {
    const agent = AGENTS.find(a => a.id === selectedAgent)
    if (!agent) return
    const serviceLabel = SERVICES.find(s => s.id === selectedService)?.label || selectedService
    const packageLabel = PACKAGES.find(p => p.id === selectedPackage)?.label || selectedPackage

    const msg = [
      `Hi ${agent.name}! I'd like to get started with SMEfrog.`,
      ``,
      `Service: ${serviceLabel}`,
      `Package: ${packageLabel}`,
      `Name: ${formData.fullName}`,
      `Business: ${formData.businessName}`,
      formData.email ? `Email: ${formData.email}` : '',
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.timeline ? `Timeline: ${formData.timeline}` : '',
      formData.needs ? `Notes: ${formData.needs}` : '',
      config.source ? `Source: ${config.source}` : '',
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${agent.phone}?text=${encodeURIComponent(msg)}`, '_blank')
    closeForm()
  }, [selectedAgent, selectedService, selectedPackage, formData, config.source, closeForm])

  const canProceed = (() => {
    switch (step) {
      case 0: return selectedService !== ''
      case 1: return formData.fullName.trim() !== '' && formData.businessName.trim() !== ''
      case 2: return true
      case 3: return true
      default: return false
    }
  })()

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <OnboardingContext.Provider value={{ openForm }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeForm}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] bg-frog-card rounded-[2rem] border border-white/10 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 shrink-0">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    Get Started
                  </h3>
                  <p className="text-white/60 text-xs mt-1">Step {step + 1} of {STEP_COUNT}</p>
                </div>
                <button
                  onClick={closeForm}
                  aria-label="Close form"
                  className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Progress bar */}
              <div className="px-6 md:px-8 pt-4 shrink-0">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-frog-green rounded-full"
                    initial={false}
                    animate={{ width: `${((step + 1) / STEP_COUNT) * 100}%` }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  />
                </div>
              </div>

              {/* Step content */}
              <div className="flex-1 overflow-y-auto frog-chat-scroll p-6 md:p-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  >
                    {/* ═══ STEP 0: Select Service ═══ */}
                    {step === 0 && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-black text-white mb-1">
                            What do you need?
                          </h4>
                          <p className="text-white/60 text-sm">Select the service that fits your needs.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {SERVICES.map((svc) => (
                            <button
                              key={svc.id}
                              onClick={() => setSelectedService(svc.id)}
                              className={`p-5 rounded-2xl text-left transition-all duration-300 border-2 ${
                                selectedService === svc.id
                                  ? 'bg-frog-green/10 border-frog-green'
                                  : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                                selectedService === svc.id ? 'bg-frog-green text-black' : 'bg-frog-green/10 text-frog-green'
                              }`}>
                                <svc.icon className="w-5 h-5" strokeWidth={1.5} />
                              </div>
                              <p className={`font-black text-sm ${selectedService === svc.id ? 'text-white' : 'text-white/70'}`}>
                                {svc.label}
                              </p>
                              <p className="text-white/60 text-xs mt-1">{svc.desc}</p>
                            </button>
                          ))}
                        </div>

                        {/* Package selection (only for registration) */}
                        {selectedService === 'cc-registration' && (
                          <div className="space-y-3 pt-2">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Choose your package</p>
                            <div className="grid grid-cols-3 gap-2">
                              {PACKAGES.map((pkg) => (
                                <button
                                  key={pkg.id}
                                  onClick={() => setSelectedPackage(pkg.id)}
                                  className={`p-4 rounded-xl text-center transition-all duration-300 border-2 ${
                                    selectedPackage === pkg.id
                                      ? 'bg-frog-green/10 border-frog-green'
                                      : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                                  }`}
                                >
                                  <p className={`font-black text-sm ${selectedPackage === pkg.id ? 'text-white' : 'text-white/60'}`}>{pkg.label}</p>
                                  <p className="text-frog-green font-bold text-sm mt-1">{pkg.price}</p>
                                  <p className="text-white/60 text-[10px] mt-1 leading-tight">{pkg.desc}</p>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* ═══ STEP 1: Your Details ═══ */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-black text-white mb-1">
                            Tell us about yourself
                          </h4>
                          <p className="text-white/60 text-sm">We&apos;ll use this to personalize your onboarding.</p>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="ob-fullname" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">
                              Full Name <span className="text-frog-green">*</span>
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" strokeWidth={1.5} />
                              <input
                                id="ob-fullname"
                                type="text"
                                required
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                placeholder="e.g. John Kamati"
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-4 text-white text-sm outline-none focus:border-frog-green/50 transition-colors font-medium"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="ob-bizname" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">
                              Business Name <span className="text-frog-green">*</span>
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" strokeWidth={1.5} />
                              <input
                                id="ob-bizname"
                                type="text"
                                required
                                value={formData.businessName}
                                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                placeholder="e.g. Kamati Enterprises CC"
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-4 text-white text-sm outline-none focus:border-frog-green/50 transition-colors font-medium"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="ob-email" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">Email</label>
                              <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" strokeWidth={1.5} />
                                <input
                                  id="ob-email"
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  placeholder="you@example.com"
                                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-4 text-white text-sm outline-none focus:border-frog-green/50 transition-colors font-medium"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="ob-phone" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">Phone</label>
                              <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" strokeWidth={1.5} />
                                <input
                                  id="ob-phone"
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                  placeholder="+264 81 000 0000"
                                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-4 text-white text-sm outline-none focus:border-frog-green/50 transition-colors font-medium"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ═══ STEP 2: Context ═══ */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-black text-white mb-1">
                            A bit more context
                          </h4>
                          <p className="text-white/60 text-sm">Help us understand your timeline and needs.</p>
                        </div>
                        <div>
                          <label id="ob-timeline-label" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-3">When do you need this?</label>
                          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="ob-timeline-label">
                            {TIMELINES.map((t) => (
                              <button
                                key={t}
                                onClick={() => setFormData({ ...formData, timeline: t })}
                                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                                  formData.timeline === t
                                    ? 'bg-frog-green/10 border-frog-green text-frog-green'
                                    : 'bg-white/[0.03] border-white/10 text-white/60 hover:border-white/20'
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="ob-needs" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">
                            Anything specific you need help with?
                          </label>
                          <div className="relative">
                            <HelpCircle className="absolute left-4 top-4 w-4 h-4 text-white/60" strokeWidth={1.5} />
                            <textarea
                              id="ob-needs"
                              value={formData.needs}
                              onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                              placeholder="e.g. I need help with BIPA compliance for my existing CC..."
                              rows={4}
                              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-4 text-white text-sm outline-none focus:border-frog-green/50 transition-colors font-medium resize-none"
                            />
                          </div>
                        </div>

                        {/* Agent selection */}
                        <div>
                          <label id="ob-consultant-label" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-3">Preferred consultant</label>
                          <div className="grid grid-cols-2 gap-3" role="group" aria-labelledby="ob-consultant-label">
                            {AGENTS.map((agent) => (
                              <button
                                key={agent.id}
                                onClick={() => setSelectedAgent(agent.id)}
                                className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                                  selectedAgent === agent.id
                                    ? 'bg-frog-green/10 border-frog-green'
                                    : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                                }`}
                              >
                                <p className={`font-black text-sm ${selectedAgent === agent.id ? 'text-white' : 'text-white/70'}`}>{agent.name}</p>
                                <p className="text-frog-green text-[10px] font-bold uppercase tracking-wider mt-1">{agent.role}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ═══ STEP 3: Review ═══ */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-black text-white mb-1">
                            Review & submit
                          </h4>
                          <p className="text-white/60 text-sm">We&apos;ll connect you with {AGENTS.find(a => a.id === selectedAgent)?.name} on WhatsApp.</p>
                        </div>

                        <div className="space-y-3">
                          {/* Service */}
                          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">Service</p>
                            <p className="text-white font-bold">
                              {SERVICES.find(s => s.id === selectedService)?.label || selectedService}
                              {selectedService === 'cc-registration' && ` — ${PACKAGES.find(p => p.id === selectedPackage)?.label || selectedPackage}`}
                            </p>
                          </div>

                          {/* Details */}
                          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">Your Details</p>
                            <p className="text-white font-bold">{formData.fullName}</p>
                            <p className="text-white/60 text-sm">{formData.businessName}</p>
                            {formData.email && <p className="text-white/60 text-xs mt-1">{formData.email}</p>}
                            {formData.phone && <p className="text-white/60 text-xs">{formData.phone}</p>}
                          </div>

                          {/* Context */}
                          {(formData.timeline || formData.needs) && (
                            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">Context</p>
                              {formData.timeline && <p className="text-white/60 text-sm">Timeline: {formData.timeline}</p>}
                              {formData.needs && <p className="text-white/60 text-xs mt-1">{formData.needs}</p>}
                            </div>
                          )}

                          {/* Agent */}
                          <div className="p-5 rounded-2xl bg-frog-green/5 border border-frog-green/20">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-frog-green/60 mb-2">Connecting with</p>
                            <p className="text-white font-bold">{AGENTS.find(a => a.id === selectedAgent)?.name}</p>
                            <p className="text-frog-green text-xs font-bold">{AGENTS.find(a => a.id === selectedAgent)?.role}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer with navigation */}
              <div className="p-6 md:p-8 border-t border-white/5 shrink-0">
                <div className="flex items-center justify-between gap-4">
                  {step > 0 ? (
                    <button
                      onClick={prevStep}
                      className="flex items-center gap-2 text-white/60 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors px-4 py-3 min-h-[44px]"
                    >
                      <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < STEP_COUNT - 1 ? (
                    <button
                      onClick={nextStep}
                      disabled={!canProceed}
                      className={`flex items-center gap-2 rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider min-h-[44px] transition-all duration-300 ${
                        canProceed
                          ? 'bg-frog-green text-black hover:bg-frog-green/90 active:scale-[0.98]'
                          : 'bg-white/5 text-white/60 cursor-not-allowed'
                      }`}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 bg-frog-green text-black rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(122,201,67,0.2)] min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                      Connect on WhatsApp
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </OnboardingContext.Provider>
  )
}
