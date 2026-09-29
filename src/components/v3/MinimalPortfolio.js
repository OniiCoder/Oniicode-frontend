'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SunIcon, XIcon, SendIcon, CheckCircle2Icon, BedDoubleIcon } from '@/components/v3/Icons'

export default function MinimalPortfolio() {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  
  // Contact Form state
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Initialize theme preference
  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('peter_portfolio_theme')
    if (storedTheme) {
      setTheme(storedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  // Synchronize document.documentElement class with theme state
  useEffect(() => {
    if (!mounted) return
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('peter_portfolio_theme', nextTheme)
  }

  // Handle keydown escape for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isContactOpen) {
        setIsContactOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isContactOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email || !formData.message) return
    
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      const mailtoUrl = `mailto:perezpeter32@gmail.com?subject=${encodeURIComponent(formData.subject || 'Hello Peter')}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`
      window.open(mailtoUrl, '_blank')
    }, 600)
  }

  const resetForm = () => {
    setFormData({ email: '', subject: '', message: '' })
    setSubmitted(false)
    setIsContactOpen(false)
  }

  if (!mounted) {
    return null
  }

  const linkStyle = `underline underline-offset-4 transition-colors font-medium ${
    theme === 'dark'
      ? 'text-neutral-100 decoration-neutral-600 hover:decoration-neutral-100'
      : 'text-neutral-900 decoration-neutral-400 hover:decoration-neutral-900'
  }`

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0a0a] text-[#e5e5e5]' : 'bg-[#f4f1ea] text-[#1c1917]'}`}>
      <div className="min-h-screen flex flex-col justify-between max-w-[580px] w-full mx-auto px-6 py-16 sm:py-24 font-sans">
        
        {/* Main Content */}
        <main className="space-y-6">
          {/* Header */}
          <header className="mb-8">
            <h1 className={`text-2xl sm:text-3xl font-bold tracking-tight font-sans ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
              Peter Onisha Peregbakumo
            </h1>
          </header>

          {/* Section 1: Intro */}
          <section className={`space-y-6 text-[15px] sm:text-[16px] leading-[1.8] font-normal ${theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'}`}>
            <p>
              I’m a builder who enjoys solving ambiguous problems. I’ve worked across software engineering, machine learning systems, and AI tools, with 7+ years of experience shipping production applications.
            </p>

            <p>
              I’m passionate about building personalized, intelligent, and accessible software.
            </p>

            <p>
              Currently working on Sleep Tech at{' '}
              <a
                href="https://3zbrands.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                3zbrands
              </a>.
              
            </p>

            <p>
              Outside of work, I’m a songwriter, singer, content creator, and AI enthusiast.
            </p>

            <p>
              I spend my spare time building <a href="https://buukmenow.com" target="_blank" rel="noopener noreferrer" className={linkStyle}>Buukmenow</a> with my bestfriend, a platform to help creatives and businesses book appointments seamlessly.
            </p>

            <p>
              You can read my{' '}
              <Link href="/blog" className={linkStyle}>
                writing
              </Link>
              , explore what I am{' '}
              <a
                href="https://github.com/OniiCoder"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                building
              </a>
              , and see my projects.
            </p>

            <p>
              Connect with me on{' '}
              <a
                href="https://x.com/oniicode"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                X (twitter)
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/in/peter-onisha-peregbakumo/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                LinkedIn
              </a>
              ,{' '}
              <a
                href="https://github.com/OniiCoder"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                GitHub
              </a>
              , or send an{' '}
              <a
                href="mailto:perezpeter32@gmail.com"
                className={linkStyle}
              >
                Email
              </a>
              .
            </p>
          </section>
        </main>

        {/* Footer & Theme Toggle */}
        <footer className={`mt-16 pt-8 border-t flex justify-center ${theme === 'dark' ? 'border-neutral-800/60' : 'border-neutral-300/40'}`}>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className={`p-2.5 rounded-full transition-all cursor-pointer ${
              theme === 'dark'
                ? 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50'
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/50'
            }`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <BedDoubleIcon className="w-5 h-5 stroke-[1.75]" />
            ) : (
              <SunIcon className="w-5 h-5 stroke-[1.75]" />
            )}
          </button>
        </footer>

      </div>

      {/* Interactive Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`relative max-w-md w-full rounded-2xl p-6 sm:p-7 shadow-2xl z-10 border transition-colors font-sans ${
                theme === 'dark'
                  ? 'bg-[#181818] border-neutral-800 text-neutral-100'
                  : 'bg-[#faf8f5] border-neutral-200/90 text-neutral-900'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-semibold tracking-tight font-sans">
                  Send a note
                </h3>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className={`p-1 rounded-lg transition-colors ${
                    theme === 'dark' ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-400 hover:text-neutral-700'
                  }`}
                  aria-label="Close modal"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 font-sans">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${
                    theme === 'dark' ? 'bg-emerald-950/60 text-emerald-400' : 'bg-emerald-100 text-emerald-600'
                  }`}>
                    <CheckCircle2Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-medium">Message Ready!</h4>
                  <p className={`text-sm max-w-xs mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Your note has been drafted. If your email client didn’t open automatically, feel free to email me directly at{' '}
                    <a
                      href="mailto:perezpeter32@gmail.com"
                      className={`underline font-medium ${theme === 'dark' ? 'text-neutral-100' : 'text-neutral-900'}`}
                    >
                      perezpeter32@gmail.com
                    </a>.
                  </p>
                  <button
                    onClick={resetForm}
                    className={`mt-2 px-4 py-2 text-sm font-medium rounded-xl hover:opacity-90 transition-opacity ${
                      theme === 'dark' ? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-900 text-white'
                    }`}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-1 transition-colors ${
                        theme === 'dark'
                          ? 'bg-neutral-900 border-neutral-800 text-neutral-100 focus:border-neutral-500 focus:ring-neutral-500 placeholder-neutral-600'
                          : 'bg-white border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:ring-neutral-400 placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project idea, question, or hello"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-1 transition-colors ${
                        theme === 'dark'
                          ? 'bg-neutral-900 border-neutral-800 text-neutral-100 focus:border-neutral-500 focus:ring-neutral-500 placeholder-neutral-600'
                          : 'bg-white border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:ring-neutral-400 placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your note here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-1 transition-colors resize-none ${
                        theme === 'dark'
                          ? 'bg-neutral-900 border-neutral-800 text-neutral-100 focus:border-neutral-500 focus:ring-neutral-500 placeholder-neutral-600'
                          : 'bg-white border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:ring-neutral-400 placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-2.5 px-4 text-sm font-medium rounded-xl flex items-center justify-center space-x-2 transition-all shadow-sm ${
                        theme === 'dark'
                          ? 'bg-neutral-100 hover:bg-white text-neutral-900'
                          : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <SendIcon className="w-4 h-4" />
                          <span>Send</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
