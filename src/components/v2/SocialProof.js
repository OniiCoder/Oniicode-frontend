'use client'

import { Award, Rocket, Globe, Building2 } from 'lucide-react'

export default function SocialProof() {
  const metrics = [
    {
      icon: Award,
      value: '7+ Years',
      label: 'Shipping Software',
      desc: 'Deep engineering experience across web, AI & mobile.',
    },
    {
      icon: Rocket,
      value: '20+ Projects',
      label: 'Products Built',
      desc: 'From initial prototype to high scale production.',
    },
    {
      icon: Building2,
      value: '10+ Companies',
      label: 'Worked & Partnered With',
      desc: 'Founders, ecommerce brands & high growth startups.',
    },
    {
      icon: Globe,
      value: '5+ Countries',
      label: 'Global Clients Served',
      desc: 'US, UK, Canada, Nigeria, Ghana & Europe.',
    },
  ]

  const brands = [
    { name: 'BuukMeNow', role: 'Founder & Architect', tag: 'Commerce & Booking' },
    { name: '3zbrands', role: 'Software Engineer', tag: 'Sleep Tech & Ecommerce' },
    { name: 'ShowUpp', role: 'Lead Architect', tag: 'Event & Ticketing SaaS' },
    { name: 'Gifty', role: 'Product Creator', tag: 'Gifting Platform' },
    { name: 'FreshFold', role: 'Lead Engineer', tag: 'On-Demand Laundry' },
  ]

  return (
    <section className="relative py-16 bg-[#FCFCFB] border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {metrics.map((m, idx) => {
            const Icon = m.icon
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all space-y-2"
              >
                <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-800">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  {m.label}
                </div>
                <div className="text-[11px] text-gray-500 leading-snug">
                  {m.desc}
                </div>
              </div>
            )
          })}
        </div>

        {/* Brands Row */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
          <p className="text-center text-xs font-mono font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Featured Companies & Ecosystem Projects
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-gray-50/80 border border-gray-100 space-y-0.5"
              >
                <div className="font-bold text-gray-900 text-sm">
                  {brand.name}
                </div>
                <div className="text-[11px] text-blue-600 font-medium">{brand.role}</div>
                <div className="text-[10px] text-gray-500">{brand.tag}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
