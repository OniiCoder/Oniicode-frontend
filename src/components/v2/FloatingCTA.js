'use client'

import { Calendar } from 'lucide-react'

export default function FloatingCTA({ onBookCall }) {
  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button
        onClick={onBookCall}
        className="group relative flex items-center space-x-2.5 px-5 py-3 bg-black hover:bg-gray-800 text-white font-semibold text-xs sm:text-sm rounded-full shadow-2xl border border-gray-800 transition-all transform hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <Calendar className="w-4 h-4 text-emerald-400" />
        <span className="hidden sm:inline">Book a Discovery Call</span>
        <span className="sm:hidden">Book Call</span>
      </button>
    </div>
  )
}
