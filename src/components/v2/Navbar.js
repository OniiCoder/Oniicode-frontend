'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Menu, X } from 'lucide-react'

export default function Navbar({ onBookCall, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shadow-md">
              <span className="font-mono font-bold text-lg text-emerald-400">
                &lt;&gt;
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight text-gray-900">
                  Oniicode
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                  AI Studio
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-gray-100/80 border border-gray-200 rounded-full px-4 py-1.5 backdrop-blur-md">
            <a
              href="#services"
              className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-black hover:bg-white rounded-full transition-all"
            >
              Services
            </a>
            <a
              href="#work"
              className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-black hover:bg-white rounded-full transition-all"
            >
              Work
            </a>
            <a
              href="#process"
              className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-black hover:bg-white rounded-full transition-all"
            >
              Process
            </a>
            <a
              href="#why"
              className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-black hover:bg-white rounded-full transition-all"
            >
              Why Us
            </a>
            <a
              href="#content"
              className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-black hover:bg-white rounded-full transition-all"
            >
              Reels
            </a>
            <a
              href="#faq"
              className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-black hover:bg-white rounded-full transition-all"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-semibold text-gray-700 hover:text-black transition-colors"
            >
              Inquire
            </button>
            <button
              onClick={onBookCall}
              className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-black hover:bg-gray-800 shadow-md transition-all hover:scale-[1.02] flex items-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Book Call</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onBookCall}
              className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-semibold flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-black bg-gray-100 border border-gray-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-200 px-4 py-6 space-y-4 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-gray-800 hover:text-black rounded-lg hover:bg-gray-100 font-medium"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-gray-800 hover:text-black rounded-lg hover:bg-gray-100 font-medium"
            >
              Work & Case Studies
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-gray-800 hover:text-black rounded-lg hover:bg-gray-100 font-medium"
            >
              Development Process
            </a>
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-gray-800 hover:text-black rounded-lg hover:bg-gray-100 font-medium"
            >
              Why Work With Me
            </a>
            <a
              href="#content"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-gray-800 hover:text-black rounded-lg hover:bg-gray-100 font-medium"
            >
              Reels & Content
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-gray-800 hover:text-black rounded-lg hover:bg-gray-100 font-medium"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenContact()
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-xl"
            >
              Inquire Form
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onBookCall()
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-black rounded-xl"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
