'use client'

import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      name: 'Michael Vance',
      role: 'Founder & CEO',
      company: 'Ecommerce Scale Inc.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      review: 'Peter helped us convert our manual customer onboarding process into an automated AI workflow. Saved our team 25 hours every single week and boosted our response speed by 10x.',
      linkedin: 'https://linkedin.com',
      rating: 5,
    },
    {
      name: 'David O. Mensah',
      role: 'Head of Product',
      company: 'ShowUpp Events',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      review: 'Working with Peter on ShowUpp was incredible. His deep expertise in Laravel, Next.js, and high-concurrency payment systems delivered our ticketing platform ahead of schedule.',
      linkedin: 'https://linkedin.com',
      rating: 5,
    },
    {
      name: 'Sarah Jenkins',
      role: 'Managing Director',
      company: 'Apex Digital Agency',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      review: 'As an agency, we needed a white-label partner who could build complex AI integrations for our high-value clients. Peter delivered enterprise-grade code every time.',
      linkedin: 'https://linkedin.com',
      rating: 5,
    },
  ]

  return (
    <section className="relative py-20 bg-[#FCFCFB] border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            what founders say
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-mono">
            real reviews from founders & agency leads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1 text-amber-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-gray-300" />
                </div>

                <p className="text-xs text-gray-700 leading-relaxed italic">
                  "{r.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-8 h-8 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{r.name}</h4>
                    <p className="text-[10px] text-gray-500">{r.role}, <span className="font-semibold text-gray-700">{r.company}</span></p>
                  </div>
                </div>

                <a
                  href={r.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
