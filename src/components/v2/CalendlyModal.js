'use client'

import { useEffect, useState } from 'react'
import { X, Calendar, Clock, Video, CheckCircle2, ExternalLink } from 'lucide-react'

export default function CalendlyModal({ isOpen, onClose }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsLoaded(true)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white">
              <Calendar className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Book a Discovery Call</h3>
              <p className="text-xs text-gray-600">30-Min Strategy Call with Peter Onisha Peregbakumo</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="https://buukmenow.com/s/talk-to-peter-onisha-436"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-semibold text-blue-600 hover:underline flex items-center space-x-1"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Benefits bar */}
        <div className="grid grid-cols-3 gap-2 px-6 py-2.5 bg-blue-50/60 border-b border-blue-100 text-xs text-gray-700 font-medium">
          <div className="flex items-center space-x-1.5 justify-center">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>30 Mins</span>
          </div>
          <div className="flex items-center space-x-1.5 justify-center">
            <Video className="w-3.5 h-3.5 text-purple-600" />
            <span>Google Meet / Zoom</span>
          </div>
          <div className="flex items-center space-x-1.5 justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Free Strategy</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="relative flex-1 min-h-[580px] w-full bg-white">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center space-x-3 text-gray-500">
              <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              <span>Loading booking calendar...</span>
            </div>
          )}
          
          <iframe
            src="https://buukmenow.com/s/talk-to-peter-onisha-436"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a Discovery Call with Peter Onisha"
            className="w-full h-full min-h-[580px]"
          />
        </div>
      </div>
    </div>
  )
}
