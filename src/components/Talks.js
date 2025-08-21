"use client"
import { useEffect } from "react"
import Aos from "aos"

export default function Talks() {
    useEffect(() => {
        Aos.init()
    }, [])

    const talks = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/heyset/image/upload/v1721733943/vibraniuumtech/Xnapper-2024-07-23-11.21.42.png',
            title: 'Building Scalable Web Applications',
            description: 'A deep dive into modern web development practices, architecture patterns, and tools for building applications that scale.',
            link: 'https://youtube.com/watch?v=example1',
            event: 'Tech Conference 2024',
            date: 'March 2024',
            duration: '45 min'
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/heyset/image/upload/v1721733939/vibraniuumtech/Xnapper-2024-07-23-11.22.11.png',
            title: 'AI in Modern Software Development',
            description: 'Exploring how artificial intelligence is transforming the way we write, test, and deploy software applications.',
            link: 'https://youtube.com/watch?v=example2',
            event: 'AI Summit',
            date: 'February 2024',
            duration: '30 min'
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/heyset/image/upload/v1725199664/vibraniuumtech/loomlab_art.png',
            title: 'From Idea to Launch: Startup Lessons',
            description: 'Sharing real-world experiences and lessons learned while building and launching successful tech startups.',
            link: 'https://youtube.com/watch?v=example3',
            event: 'Startup Meetup',
            date: 'January 2024',
            duration: '60 min'
        }
    ]

    return (
        <div className="py-16 px-5 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="text-3xl lg:text-4xl font-sans text-gray-900 mb-4">
                        Speaking & Talks
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sharing knowledge and experiences through speaking engagements, workshops, and tech talks
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {talks.map((talk, index) => (
                        <div
                            key={talk.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={index * 100}
                        >
                            {/* Image Section */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={talk.image}
                                    alt={talk.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 text-white text-sm mb-2">
                                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                                            {talk.event}
                                        </span>
                                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                                            {talk.duration}
                                        </span>
                                    </div>
                                    <div className="text-white/80 text-xs">{talk.date}</div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#2F8519] transition-colors">
                                    {talk.title}
                                </h3>
                                
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {talk.description}
                                </p>

                                <a
                                    href={talk.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#2F8519] hover:text-[#FA812F] font-medium transition-colors group-hover:gap-3"
                                >
                                    Watch Talk
                                    <svg 
                                        className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <p className="text-gray-600 mb-4">
                        Interested in having me speak at your event?
                    </p>
                    <a
                        href="mailto:perezpeter32@gmail.com?subject=Speaking%20Engagement%20Request"
                        className="inline-flex items-center gap-3 px-6 py-3 text-base font-medium text-[#2F8519] border-2 border-[#2F8519] rounded-full hover:bg-[#2F8519] hover:text-white transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    )
}
