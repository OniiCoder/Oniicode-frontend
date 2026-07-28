'use client'

import { Calendar, ArrowDown } from 'lucide-react'

export default function Hero({ onBookCall }) {
  return (
    <section className="relative pt-32 pb-20 bg-[#FCFCFB] overflow-hidden border-b border-gray-200/60">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full text-emerald-800 text-xs font-mono mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold">Available for AI & Product Sprints</span>
        </div>

        {/* Farza-style direct intro in clean Light Theme */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            hi, i'm <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">peter onisha peregbakumo</span>.
          </h1>

          <p className="text-xl sm:text-3xl text-gray-800 font-semibold leading-relaxed max-w-3xl">
            i build <span className="text-gray-900 underline decoration-emerald-500 decoration-2 underline-offset-4">AI products</span>, <span className="text-gray-900 underline decoration-blue-500 decoration-2 underline-offset-4">SaaS platforms</span>, and <span className="text-gray-900 underline decoration-purple-500 decoration-2 underline-offset-4">automations</span> that save time & make money.
          </p>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
            7+ years shipping production software. Founder <a href="https://buukmenow.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">@buukmenow</a>. I help founders and growing businesses design, engineer, and launch software that scales.
          </p>
        </div>

        {/* Light Theme CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md">
          <button
            onClick={onBookCall}
            className="px-7 py-3.5 bg-black text-white hover:bg-gray-800 font-semibold rounded-xl text-sm transition-all flex items-center justify-center space-x-2 shadow-md"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Book a 30-Min Strategy Call</span>
          </button>

          <a
            href="#work"
            className="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl text-sm border border-gray-200 shadow-sm transition-all flex items-center justify-center space-x-2"
          >
            <span>See Stuff I've Built</span>
            <ArrowDown className="w-4 h-4 text-gray-500" />
          </a>
        </div>

        {/* Minimal Trust Checklist */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-x-8 gap-y-3 text-xs text-gray-600 font-mono">
          <div className="flex items-center space-x-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>AI Agents & Voice</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Full-Stack SaaS (Laravel / Next.js)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Workflow Automations</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>100% Direct Founder Access</span>
          </div>
        </div>

      </div>
    </section>
  )
}
