'use client'

import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-frog-black">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-[#7AC943]/3 blur-[120px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(122,201,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(122,201,67,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        {/* Error icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-red-400"
              >
                <path
                  d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Green accent glow */}
            <div className="absolute -inset-4 rounded-3xl bg-[#7AC943]/5 blur-xl -z-10" />
          </motion.div>
        </motion.div>

        {/* Error badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5"
        >
          <span className="font-[Space_Grotesk] text-sm font-bold text-red-400">Error</span>
          <span className="text-white/30">|</span>
          <span className="font-[Space_Grotesk] text-sm text-white/50">
            {error.digest ? `Ref: ${error.digest}` : 'Unexpected error'}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="font-[Space_Grotesk] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
        >
          Something went{' '}
          <span className="text-red-400">wrong.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="font-[Space_Grotesk] text-lg sm:text-xl text-white/50 mb-12 max-w-lg mx-auto"
        >
          We hit a snag. Try again or contact us for help.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => reset()}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#7AC943] hover:bg-[#6BB838] text-[#0F1412] font-[Space_Grotesk] font-bold text-base rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(122,201,67,0.3)] cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 4V9H4.582M20 20V15H19.418M4.582 9C5.53722 6.27878 8.06078 4.26825 11.0486 4.02687C14.0365 3.78549 16.8453 5.35764 18.2387 8.04904M19.418 15C18.4628 17.7212 15.9392 19.7318 12.9514 19.9731C9.96347 20.2145 7.15473 18.6424 5.76129 15.951M4.582 9H9M19.418 15H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Try Again
          </button>

          <a
            href="https://wa.me/264813411522"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-[#7AC943]/20 hover:border-[#7AC943]/40 bg-[#7AC943]/5 hover:bg-[#7AC943]/10 text-white font-[Space_Grotesk] font-bold text-base rounded-xl transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Helpful note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 font-[Space_Grotesk] text-sm text-white/25"
        >
          If this keeps happening, our team on WhatsApp is happy to help.
        </motion.p>
      </div>
    </main>
  )
}
