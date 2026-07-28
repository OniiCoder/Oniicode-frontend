'use client'

import { Sparkles, CheckCircle2, MessageSquare } from 'lucide-react'

export default function MeetPeter({ onBookCall }) {
  return (
    <section className="relative py-20 bg-white border-b border-gray-200/60 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Profile Card */}
          <div className="md:col-span-5">
            <div className="p-6 rounded-3xl bg-[#FCFCFB] border border-gray-200 shadow-sm space-y-5">
              
              {/* Profile Avatar */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white font-mono font-bold text-xl shadow-md">
                    PP
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
                  </span>
                </div>

                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="text-lg font-bold text-gray-900">Peter Onisha Peregbakumo</h3>
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-xs text-blue-600 font-semibold">@oniicode • Founder & AI Engineer</p>
                  <div className="text-[11px] text-gray-500 font-mono">7+ Years Shipping Software</div>
                </div>
              </div>

              {/* Bio Box */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 space-y-1.5 text-xs text-gray-800">
                <p className="font-medium leading-relaxed">
                  🤖 Software & AI Engineer<br />
                  🚀 Building AI apps that save time & money<br />
                  💻 7+ years shipping software | Founder @buukmenow<br />
                  👇 Book a free strategy call
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-gray-100 border border-gray-200 text-center">
                  <div className="text-sm font-bold text-gray-900">Founder</div>
                  <div className="text-[11px] text-gray-600 font-mono">@buukmenow</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-100 border border-gray-200 text-center">
                  <div className="text-sm font-bold text-gray-900">Direct Access</div>
                  <div className="text-[11px] text-gray-600 font-mono">Zero Middlemen</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story */}
          <div className="md:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet The Engineer Behind Oniicode</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              "You don't hire a bloated agency. You work directly with a founder who codes."
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              Most agencies hand your project off to junior devs or offshore teams while charging enterprise markups. When you work with Oniicode, you talk directly with me—<strong className="text-gray-900">Peter Onisha Peregbakumo</strong>.
            </p>

            <div className="space-y-2.5 text-xs text-gray-700">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Direct Slack & Video Updates:</strong> No account managers or lost requirements.
                </div>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Practical Revenue AI:</strong> Voice agents, LLM search, and automated workflows that cut costs.
                </div>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-gray-50 border border-gray-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">100% Code Ownership:</strong> Clean repositories (Laravel, Next.js, Cloudflare) delivered to your GitHub.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookCall}
                className="px-6 py-3 bg-black text-white hover:bg-gray-800 font-semibold text-xs rounded-xl shadow-sm flex items-center space-x-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Talk Directly With Peter (30-Min Call)</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
