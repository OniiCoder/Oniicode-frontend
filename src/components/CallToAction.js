"use client"
import { useEffect } from "react"
import Aos from "aos"

export default function CallToAction() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="py-20 px-5 bg-gradient-to-r from-[#2F8519] via-[#FA812F] to-[#FAB12F]">
            <div className="max-w-4xl mx-auto text-center">
                <div data-aos="fade-up" data-aos-duration="800">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Build Something Amazing?
                    </h2>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Whether you have a project in mind, want to collaborate, or just want to say hello, 
                        I'd love to hear from you. Let's turn your ideas into reality!
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <a
                        href="mailto:perezpeter32@gmail.com"
                        className="inline-flex items-center px-8 py-4 text-lg font-medium text-[#2F8519] bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Start a Conversation
                    </a>
                    
                    <a
                        href="https://docs.google.com/document/d/15uEC_l_zrQUObqoOubgciMWVTjd2JMmzqZyGnJPttmI/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-[#2F8519] transition-all duration-300"
                    >
                        View Resume
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </a>
                </div>
                
                <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                    <div className="flex items-center gap-6 text-white/80">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-sm">Available for freelance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-sm">Open to collaboration</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-sm">Always learning</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
