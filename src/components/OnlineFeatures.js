"use client"
import { useEffect } from "react"
import Aos from "aos"

export default function OnlineFeatures() {
    useEffect(() => {
        Aos.init()
    }, [])

    const features = [
        {
            id: 1,
            title: "6 Questions with Peter Onisha - Co-founder BuukMeNow",
            description: "Featured in Innovation Spark discussing entrepreneurship, BuukMeNow's journey, and insights on building successful tech startups in Africa",
            link: "https://theinnovationspark.com/2024/06/13/6-questions-with-peter-onisha-co-founder-buukmenow/",
            source: "The Innovation Spark",
            date: "June 2024",
            type: "Media Feature",
            isVerified: true
        },
        {
            id: 2,
            title: "Alumni Spotlight - PaperLift App by Lancaster University",
            description: "Recognized by Lancaster University Ghana for developing the innovative PaperLift app and entrepreneurial achievements",
            link: "https://lancaster.edu.gh/news/alumni-spotlight-introducing-the-paperlyft-app-by-peter-peregbakumo-19/",
            source: "Lancaster University Ghana",
            date: "2024",
            type: "Alumni Recognition",
            isVerified: true
        },
        {
            id: 3,
            title: "BuukMeNow - Youth African Startup Recognition",
            description: "Featured on YASR (Youth African Startup Recognition) platform for innovative business solutions and entrepreneurial impact",
            link: "https://www.yasr.org/2025/buukmenow",
            source: "YASR",
            date: "2025",
            type: "Startup Recognition",
            isVerified: true
        },
        {
            id: 4,
            title: "DYG Campus Tour 2025 - Mid-Year Dispatch",
            description: "Mentioned in LinkedIn article about the DYG Campus Tour 2025, highlighting contributions to youth development and entrepreneurship",
            link: "https://www.linkedin.com/pulse/mid-year-dispatch-how-far-weve-come-dyg-campus-tour-2025-allotey-i444f/?trackingId=yGR38MmDiRQmjHD%2BAARWEw%3D%3D",
            source: "LinkedIn - DYG Campus Tour",
            date: "2025",
            type: "Community Recognition",
            isVerified: true
        },
        {
            id: 5,
            title: "OpenTorc Denver Event - Unforgettable Experience",
            description: "Featured participant in OpenTorc's Denver event, recognized for contributions to the tech community and innovative solutions",
            link: "https://www.linkedin.com/posts/opentorc_last-night-in-denver-torc-hosted-an-unforgettable-activity-7356716025272303616-TkGG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACTQ6O4BjK34TUcRv9Bc02fwt-fONzNbJ-A",
            source: "OpenTorc",
            date: "2025",
            type: "Event Recognition",
            isVerified: true
        },
        {
            id: 6,
            title: "BlueSPACE Innovation Hub Panel - TalentFACTORY Networking Event",
            description: "Featured participant in BlueSPACE Innovation Hub's TalentFACTORY Networking and Onboarding Mixer, recognized for contributions to career development and tech training initiatives",
            link: "https://www.linkedin.com/posts/bluespacehub_talentfactory-networking-careergrowth-activity-7338185260309897216-5JQ-?utm_medium=ios_app&rcm=ACoAACTQ6O4BjK34TUcRv9Bc02fwt-fONzNbJ-A&utm_source=social_share_send&utm_campaign=copy_link",
            source: "BlueSPACE Innovation Hub",
            date: "2024",
            type: "Event Recognition",
            isVerified: true
        },
        {
            id: 7,
            title: "AfroPark Panel - Enterprise Software, Digital Marketing & Fintech",
            description: "Panelist at AfroPark's thought-provoking discussions on enterprise software, digital marketing, and fintech trends shaping Africa's digital future",
            link: "https://www.linkedin.com/posts/afro-park_enterpisesoftware-digitalmarketing-fintech-activity-7117596716299612160-fCna?utm_medium=ios_app&rcm=ACoAACTQ6O4BjK34TUcRv9Bc02fwt-fONzNbJ-A&utm_source=social_share_send&utm_campaign=copy_link",
            source: "AfroPark",
            date: "2024",
            type: "Panel Discussion",
            isVerified: true
        }
    ]

    return (
        <div className="py-16 px-5 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Recognition & Features
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Featured, recognized, and mentioned across various platforms for my contributions to technology, entrepreneurship, and innovation
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={index * 100}
                        >
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                                            feature.type === 'Media Feature'
                                                ? 'bg-blue-100 text-blue-700'
                                                : feature.type === 'Alumni Recognition'
                                                ? 'bg-green-100 text-green-700'
                                                : feature.type === 'Startup Recognition'
                                                ? 'bg-purple-100 text-purple-700'
                                                : feature.type === 'Community Recognition'
                                                ? 'bg-orange-100 text-orange-700'
                                                : feature.type === 'Event Recognition'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : feature.type === 'Panel Discussion'
                                                ? 'bg-indigo-100 text-indigo-700'
                                                : 'bg-gray-100 text-gray-700'
                                        }`}>
                                            {feature.type}
                                        </span>
                                        {feature.isVerified && (
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-500">{feature.date}</span>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#2F8519] transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {feature.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">
                                        {feature.source}
                                    </span>
                                    <a
                                        href={feature.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#2F8519] hover:text-[#FA812F] font-medium transition-colors group-hover:gap-3"
                                    >
                                        View Feature
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
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <p className="text-gray-600 mb-4">
                        Have a feature or recognition to share? Let me know!
                    </p>
                    <a
                        href="mailto:perezpeter32@gmail.com?subject=Online%20Feature%20or%20Recognition"
                        className="inline-flex items-center gap-3 px-6 py-3 text-base font-medium text-[#2F8519] border-2 border-[#2F8519] rounded-full hover:bg-[#2F8519] hover:text-white transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Share Recognition
                    </a>
                </div>
            </div>
        </div>
    )
}
