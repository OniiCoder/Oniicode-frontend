'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import SocialProof from './SocialProof'
import MeetPeter from './MeetPeter'
import Services from './Services'
import FeaturedWork from './FeaturedWork'
import Process from './Process'
import WhyWorkWithMe from './WhyWorkWithMe'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import FinalCTA from './FinalCTA'
import Footer from './Footer'
import CalendlyModal from './CalendlyModal'
import ContactModal from './ContactModal'
import FloatingCTA from './FloatingCTA'

export default function V2LandingPage() {
  const [calendlyOpen, setCalendlyOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const handleBookCall = () => {
    if (typeof window !== 'undefined') {
      window.open('https://buukmenow.com/s/talk-to-peter-onisha-436', '_blank')
    }
  }

  const handleOpenContact = () => {
    setContactOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#FCFCFB] text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <Navbar onBookCall={handleBookCall} onOpenContact={handleOpenContact} />

      <main>
        {/* Section 1: Hero */}
        <Hero onBookCall={handleBookCall} />

        {/* Section 2: Social Proof */}
        <SocialProof />

        {/* Section 2.5: Meet Peter */}
        <MeetPeter onBookCall={handleBookCall} />

        {/* Section 3: Services */}
        <Services onBookCall={handleBookCall} />

        {/* Section 4: Featured Work */}
        <FeaturedWork onBookCall={handleBookCall} />

        {/* Section 5: Process */}
        <Process onBookCall={handleBookCall} />

        {/* Section 6: Why Work With Me */}
        <WhyWorkWithMe />

        {/* Section 7: Testimonials */}
        <Testimonials />

        {/* Section 8: FAQ */}
        <FAQ onBookCall={handleBookCall} />

        {/* Section 10: Final CTA */}
        <FinalCTA onBookCall={handleBookCall} />
      </main>

      {/* Footer */}
      <Footer onBookCall={handleBookCall} />

      {/* Floating CTA button */}
      <FloatingCTA onBookCall={handleBookCall} />

      {/* Interactive Modals */}
      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
