'use client'

import { ExternalLink, ArrowUpRight } from 'lucide-react'

export default function FeaturedWork({ onBookCall }) {
  const projects = [
    {
      title: 'BuukMeNow',
      subtitle: 'Booking & commerce platform for service businesses.',
      role: 'Founder & Full-Stack Architect',
      description: 'Built from scratch to handle automated scheduling, calendar syncing, customer invoicing, and online payments. Processes thousands of bookings with 99.9% uptime.',
      tech: ['Laravel', 'Livewire', 'TailwindCSS', 'Stripe', 'Cloudflare'],
      link: 'https://buukmenow.com',
      badge: 'Flagship Product',
    },
    {
      title: 'ShowUpp',
      subtitle: 'Event discovery & high-concurrency ticketing SaaS.',
      role: 'Lead System Architect',
      description: 'End-to-end event management platform with sub-second QR code ticket validation, real-time analytics, and instant multi-currency payouts.',
      tech: ['Laravel', 'Next.js', 'Redis', 'Stripe', 'AWS'],
      link: '#',
      badge: 'Client SaaS',
    },
    {
      title: 'Gifty',
      subtitle: 'Corporate gifting & fulfillment ordering platform.',
      role: 'Product Engineer',
      description: 'Streamlined corporate rewards engine with automated vendor portals, instant digital gift card delivery, and custom gift box orders.',
      tech: ['Next.js', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
      link: '#',
      badge: 'Ecommerce SaaS',
    },
    {
      title: 'Voice AI & Operations Bot',
      subtitle: 'Autonomous voice agent & executive LLM dashboard.',
      role: 'AI Engineer',
      description: 'Replaced 20+ hours a week of manual customer intake with custom voice AI agents, automated CRM lead triage, and RAG knowledge search.',
      tech: ['Python', 'OpenAI Realtime', 'RAG / Vector DB', 'n8n'],
      link: '#',
      badge: 'AI Automation',
    },
  ]

  return (
    <section id="work" className="relative py-20 bg-[#FCFCFB] border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              stuff i've built
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-mono">
              real products • real revenue • shipped to production
            </p>
          </div>

          <button
            onClick={onBookCall}
            className="text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
          >
            <span>want something built?</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Clean Light Cards */}
        <div className="space-y-5">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all space-y-3.5 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700">
                      {p.badge}
                    </span>
                  </div>
                  <div className="text-xs text-blue-600 font-semibold mt-1">{p.subtitle}</div>
                </div>

                {p.link !== '#' && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-gray-600 hover:text-black font-mono font-semibold shrink-0"
                  >
                    <span>visit site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                {p.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-md border border-gray-200/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
