"use client"
import { useEffect } from "react"
import Aos from "aos"

export default function Skills() {
    useEffect(() => {
        Aos.init()
    }, [])

    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["Tailwind CSS", "React & Next.js", "HTML/CSS", "Livewire"],
            icon: "🎨",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Backend Development",
            skills: ["PHP", "Laravel", "REST APIs"],
            icon: "⚙️",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Ecommerce & Shopify",
            skills: ["Shopify Development", "Shop Integrations", "Ecommerce Solutions", "Payment Gateways", "Inventory Management"],
            icon: "🛒",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Mobile Development",
            skills: ["Flutter", "iOS Development", "Android Development"],
            icon: "📱",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "AWS", "Vercel", "Figma"],
            icon: "🛠️",
            color: "from-gray-500 to-gray-700"
        }
    ]

    return (
        <div className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                        Skills & Technologies
                    </h2>
                    <p className="text-sm text-gray-600 max-w-lg mx-auto">
                        I've worked with a diverse range of technologies to build scalable, user-friendly applications
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100 hover:border-gray-200"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-center mb-3">
                                <div className="text-lg mb-1">{category.icon}</div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                                    {category.title}
                                </h3>
                                <div className={`w-8 h-0.5 bg-gradient-to-r ${category.color} rounded-full mx-auto`}></div>
                            </div>

                            <div className="space-y-1">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex items-center gap-1.5 p-1.5 bg-gray-50 rounded group-hover:bg-gray-100 transition-colors"
                                    >
                                        <div className={`w-1 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                                        <span className="text-xs text-gray-700 font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
