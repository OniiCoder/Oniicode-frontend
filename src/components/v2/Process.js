'use client'

import { Clock, PhoneCall, Compass, FileCheck, Palette, Code2, Rocket, HeartHandshake } from 'lucide-react'

export default function Process({ onBookCall }) {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      duration: '15 - 30 Mins',
      icon: PhoneCall,
      description: 'Initial consultation to understand your vision, business requirements, target audience, and AI product objectives.',
    },
    {
      num: '02',
      title: 'Strategy & Architecture',
      duration: '1 Week',
      icon: Compass,
      description: 'Defining tech stack, AI model pipeline, database schema, API integrations, and UX user journeys.',
    },
    {
      num: '03',
      title: 'Proposal & Scope',
      duration: '3 Days',
      icon: FileCheck,
      description: 'Clear, transparent proposal with fixed milestone pricing, detailed deliverables, and project agreement.',
    },
    {
      num: '04',
      title: 'Design & Prototyping',
      duration: '1 - 2 Weeks',
      icon: Palette,
      description: 'High-fidelity UI/UX designs with interactive click-through user testing.',
    },
    {
      num: '05',
      title: 'Agile Development',
      duration: '2 - 6 Weeks',
      icon: Code2,
      description: 'Weekly sprint builds, clean maintainable code, test-driven engineering, and live demo access.',
    },
    {
      num: '06',
      title: 'Production Launch',
      duration: '1 Week',
      icon: Rocket,
      description: 'Cloud deployment (Cloudflare/AWS/Vercel), domain setup, security hardening, and analytics tracking.',
    },
    {
      num: '07',
      title: 'Support & Growth',
      duration: 'Ongoing',
      icon: HeartHandshake,
      description: 'Post-launch maintenance, SLA support, continuous monitoring, and iterative feature scaling.',
    },
  ]

  return (
    <section id="process" className="relative py-20 bg-[#FCFCFB] border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            development process
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-mono">
            7-stage transparent engineering path
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-gray-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-900 font-mono font-bold shrink-0">
                    <Icon className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                      <span className="px-2.5 py-0.5 text-[11px] font-mono text-gray-600 bg-gray-100 border border-gray-200 rounded-full flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-blue-600" />
                        <span>{step.duration}</span>
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center justify-end">
                  <button
                    onClick={onBookCall}
                    className="px-3.5 py-1.5 bg-gray-100 hover:bg-black text-gray-800 hover:text-white font-semibold text-xs rounded-xl transition-colors"
                  >
                    Start
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
