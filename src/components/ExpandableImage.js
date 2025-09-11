'use client'

import { useState } from 'react'

const ExpandableImage = ({ src, alt }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  return (
    <div 
      className={`w-full bg-gray-100 flex items-center justify-center cursor-pointer transition-all duration-300 relative ${
        isImageExpanded ? 'h-screen fixed top-0 left-0 z-50' : 'h-64'
      }`}
      onClick={() => setIsImageExpanded(!isImageExpanded)}
    >
      <img 
        src={src} 
        alt={alt}
        className={`w-full transition-all duration-300 ${
          isImageExpanded ? 'h-full object-contain' : 'h-full object-cover'
        }`}
      />
      
      {/* Click indicator */}
      {!isImageExpanded && (
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm text-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300">
            Click to expand
          </div>
        </div>
      )}
      
      {/* Minimize indicator */}
      {isImageExpanded && (
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Click to minimize
        </div>
      )}
    </div>
  )
}

export default ExpandableImage
