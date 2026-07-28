'use client'

import { Rocket, Bot, DollarSign, Zap, ShieldCheck, HeartHandshake } from 'lucide-react'

export default function WhyWorkWithMe() {
  const reasons = [
    {
      icon: Rocket,
      title: 'Founder Experience',
      desc: 'I’ve built and launched startups myself (like BuukMeNow). I understand product-market fit, unit economics, and real user needs.',
      badge: 'Real Startup Founder',
    },
    {
      icon: Bot,
      title: 'AI First Architecture',
      desc: 'Every application is designed with modern AI capabilities baked in—from voice agents & LLM search to intelligent automation.',
      badge: 'Modern Tech Stack',
    },
    {
      icon: DollarSign,
      title: 'Business & ROI Focused',
      desc: 'We don’t just write code for code’s sake. We focus on business metrics: saving labor costs, driving leads, and generating revenue.',
      badge: 'Revenue Mindset',
    },
    {
      icon: Zap,
      title: 'Fast & Iterative Delivery',
      desc: 'Ship MVPs in weeks, not quarters. Get real product in front of customers quickly to validate hypotheses and adapt.',
      badge: 'Agile Velocity',
    },
    {
      icon: ShieldCheck,
      title: 'Production Ready & Scalable',
      desc: 'Clean, modular, well-documented codebases built on enterprise-tested frameworks like Laravel, Next.js, and Cloudflare.',
      badge: 'Enterprise Quality',
    },
    {
      icon: HeartHandshake,
      title: 'Long-term Growth Partner',
      desc: 'We don’t abandon you after launch. We stay by your side to support scaling, infrastructure updates, and feature upgrades.',
      badge: 'Dedicated Support',
    },
  ]

  return (
    <section id="why" className="relative py-20 bg-white border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            why work with me
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-mono">
            built by a founder for founders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r, idx) => {
            const Icon = r.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FCFCFB] border border-gray-200 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                    {r.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900">
                  {r.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {r.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
