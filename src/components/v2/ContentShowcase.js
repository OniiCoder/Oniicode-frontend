'use client'

import { useState } from 'react'
import { Play, Send, CheckCircle2, ArrowUpRight } from 'lucide-react'

export default function ContentShowcase() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const reels = [
    {
      title: 'Building AI Apps in 2026: What Founders Need to Know',
      views: '124K views',
      platform: 'Instagram Reel',
      link: 'https://instagram.com/oniicode',
    },
    {
      title: 'How I Built BuukMeNow: Architecture & Lessons Learned',
      views: '89K views',
      platform: 'YouTube Breakdown',
      link: 'https://youtube.com',
    },
    {
      title: 'Replacing 20 Hours of Manual Work with a 50-Line AI Script',
      views: '45K reads',
      platform: 'LinkedIn Article',
      link: 'https://www.linkedin.com/in/peter-onisha-peregbakumo/',
    },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <section id="content" className="relative py-20 bg-white border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              reels & content
            </h2>
            <a
              href="https://instagram.com/oniicode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-semibold text-pink-600 hover:underline flex items-center space-x-1"
            >
              <span>@oniicode on instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-mono">
            building software & AI in public
          </p>
        </div>

        {/* Reels List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {reels.map((r, idx) => (
            <a
              key={idx}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#FCFCFB] border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                  {r.platform}
                </span>
                <h3 className="text-xs font-bold text-gray-900 group-hover:text-pink-600 transition-colors leading-snug">
                  {r.title}
                </h3>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 font-mono pt-2 border-t border-gray-100">
                <span className="flex items-center space-x-1">
                  <Play className="w-3 h-3 text-pink-600 fill-pink-600" />
                  <span>{r.views}</span>
                </span>
                <span className="text-gray-900 group-hover:text-pink-600 font-semibold">watch →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 text-center space-y-3">
          <h3 className="text-base font-bold text-gray-900">
            get weekly AI & dev insights
          </h3>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Join 2,000+ founders & engineers getting short, actionable breakdowns on building AI products.
          </p>

          {subscribed ? (
            <div className="text-xs text-emerald-700 font-semibold flex items-center justify-center space-x-1.5 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>You're subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email address..."
                className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-black font-mono shadow-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white font-semibold rounded-xl text-xs flex items-center justify-center space-x-1 shrink-0 hover:bg-gray-800 shadow-sm"
              >
                <span>subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
