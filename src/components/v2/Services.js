'use client'

import { Bot, Cpu, Workflow, UserCheck, ArrowRight } from 'lucide-react'

export default function Services({ onBookCall }) {
  const services = [
    {
      icon: Bot,
      title: 'AI Products & Autonomous Agents',
      description: 'Custom AI applications built on your proprietary data. Voice agents, LLM fine-tuning, RAG pipelines, and internal search tools.',
      forWho: 'Best for startups & companies wanting an AI edge.',
    },
    {
      icon: Cpu,
      title: 'SaaS MVP & Production Build',
      description: 'End-to-end full-stack web and mobile development (Laravel, React, Next.js, Stripe). Fast delivery without code bloat.',
      forWho: 'Best for founders needing to launch in 2-6 weeks.',
    },
    {
      icon: Workflow,
      title: 'AI Workflow & Business Automations',
      description: 'Eliminate manual labor. Connecting CRMs, email intake, document parsing, and database workflows automatically.',
      forWho: 'Best for businesses looking to save payroll hours.',
    },
    {
      icon: UserCheck,
      title: 'Fractional CTO & Advisory',
      description: 'Technical roadmap design, code audits, architecture scaling, and engineering team guidance directly from a founder.',
      forWho: 'Best for non-technical founders needing tech direction.',
    },
  ]

  return (
    <section id="services" className="relative py-20 bg-white border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            how i can help you
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-mono">
            no corporate bloat • direct senior engineering
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, idx) => {
            const Icon = s.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FCFCFB] border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-900">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-gray-500">{s.forWho}</span>
                  <button
                    onClick={onBookCall}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-black text-gray-700 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
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
