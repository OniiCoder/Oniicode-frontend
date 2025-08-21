"use client"
import { useEffect } from "react"
import Aos from "aos"
import { getAllResources } from "@/data/resources"

export default function Resources() {
    useEffect(() => {
        Aos.init()
    }, [])

    const resources = getAllResources()

    return (
        <div className="py-16 px-5">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
                    <div className="flex gap-2 text-[24px] font-sans text-black font-bold items-center justify-center mb-6">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
                                stroke="#292929"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 5.48999V20.49"
                                stroke="#292929"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.75 8.48999H5.5"
                                stroke="#292929"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.5 11.49H5.5"
                                stroke="#292929"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Resources
                    </div>
                    
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Development Resources & Tools
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A curated collection of tools, technologies, and resources that power my development workflow. 
                        These are the tools and platforms I use daily to build amazing applications.
                    </p>
                </div>

                {/* Resources Grid */}
                <div className="grid gap-8">
                    {resources.map((category, index) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={index * 100}
                        >
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    {category.category}
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-[#2F8519] to-[#FA812F] rounded-full"></div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="group bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-[#2F8519]"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="font-semibold text-gray-900 group-hover:text-[#2F8519] transition-colors">
                                                {item.name}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                                                    item.isFree 
                                                        ? 'bg-green-100 text-green-700' 
                                                        : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                    {item.isFree ? 'Free' : 'Paid'}
                                                </span>
                                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                                    {item.type}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                            {item.description}
                                        </p>
                                        
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-[#2F8519] hover:text-[#FA812F] font-medium text-sm transition-colors group-hover:gap-3"
                                        >
                                            Visit Resource
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
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <div className="bg-gradient-to-r from-[#2F8519] to-[#FA812F] rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Have a Resource to Share?
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            Found an amazing tool or resource that could help other developers? 
                            I'd love to hear about it and potentially add it to this collection!
                        </p>
                        <a
                            href="mailto:perezpeter32@gmail.com?subject=Resource%20Recommendation"
                            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-[#2F8519] bg-white hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Share a Resource
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
