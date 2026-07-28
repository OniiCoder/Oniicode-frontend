'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ({ onBookCall }) {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'How much does a project cost?',
      a: 'Project pricing depends on scope and complexity. Small automation workflows or AI integrations typically range from $3k - $8k, while full MVPs and SaaS platforms range from $10k - $30k+. We offer fixed milestone pricing so there are never unexpected billing surprises.',
    },
    {
      q: 'How long does development take?',
      a: 'A focused MVP or AI feature integration takes between 2 to 6 weeks. Simple automation scripts can be deployed in under 7 days. During our initial discovery call, we define a strict milestone timeline.',
    },
    {
      q: 'Can you build an MVP for my startup idea?',
      a: 'Yes! Building MVPs for founders is one of our primary specialties. As a founder who has launched products like BuukMeNow, I help you strip away non-essential features so you ship fast, validate demand, and save money.',
    },
    {
      q: 'Do you work internationally?',
      a: 'Absolutely. We work with startup founders and business executives across the US, UK, Canada, Europe, Nigeria, Ghana, and Australia. We manage async communication, video strategy calls, and clear project tracking across all time zones.',
    },
    {
      q: 'Can you improve or rebuild existing software?',
      a: 'Yes. We frequently step in to refactor legacy codebases, add AI capabilities, optimize database queries, overhaul UI/UX, or migrate applications to modern stacks like Laravel, Next.js, and Cloudflare.',
    },
    {
      q: 'Do you sign NDAs before discussing my idea?',
      a: 'Yes. We treat all client business ideas, proprietary code, and intellectual property with strict confidentiality and are happy to execute an NDA before our strategy call.',
    },
    {
      q: 'Do you provide ongoing maintenance after launch?',
      a: 'Yes. We offer flexible post-launch SLA maintenance retainers covering cloud infrastructure monitoring, bug fixes, performance tuning, and continuous feature updates.',
    },
    {
      q: 'Can you work alongside our existing in-house developers?',
      a: 'Definitely. We can plug into your team as specialized AI engineers or fractional technical leads, pairing with your current developers using Git, Jira, and linear sprint management.',
    },
  ]

  return (
    <section id="faq" className="relative py-20 bg-[#FCFCFB] border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            frequently asked questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-mono">
            transparent answers to common conversion questions
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-gray-900">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg text-gray-500 transition-transform ${isOpen ? 'rotate-180 text-black bg-gray-100' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 text-center p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left">
            <div className="text-xs font-bold text-gray-900">Have a specific question about your project?</div>
            <div className="text-[11px] text-gray-500 font-mono">Book a quick 15-min call and get a direct answer.</div>
          </div>
          <button
            onClick={onBookCall}
            className="px-4 py-2 bg-black hover:bg-gray-800 text-white text-xs font-semibold rounded-xl transition-colors shrink-0"
          >
            Ask on a Call
          </button>
        </div>

      </div>
    </section>
  )
}
