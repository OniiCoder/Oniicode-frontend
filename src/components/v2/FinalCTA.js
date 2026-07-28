'use client'

import { Calendar, Mail, ArrowRight } from 'lucide-react'

export default function FinalCTA({ onBookCall }) {
  return (
    <section className="relative py-24 bg-white border-t border-gray-200/60 text-center">
      <div className="max-w-2xl mx-auto px-4 space-y-6">
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          want to build something?
        </h2>

        <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
          whether you need an MVP in 4 weeks or an AI automation system that saves 20 hours a week, let's talk. no hard sales pitch—just clear technical advice.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onBookCall}
            className="w-full sm:w-auto px-7 py-3.5 bg-black hover:bg-gray-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Book a 30-Min Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="mailto:peter@buukmenow.com"
            className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-900 font-bold text-xs rounded-xl border border-gray-200 shadow-sm transition-all flex items-center justify-center space-x-2 font-mono"
          >
            <Mail className="w-4 h-4 text-gray-600" />
            <span>peter@buukmenow.com</span>
          </a>
        </div>

        <div className="text-xs text-gray-500 font-mono pt-4">
          — peter onisha peregbakumo (@oniicode)
        </div>

      </div>
    </section>
  )
}
