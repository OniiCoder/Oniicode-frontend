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
            skills: ["Tailwind CSS", "JavaScript", "HTML/CSS", "Livewire", "AlpineJs"],
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
            skills: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Figma"],
            icon: "🛠️",
            color: "from-gray-500 to-gray-700"
        }
    ]

    return (
        <div className="py-16 px-5 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I've worked with a diverse range of technologies to build scalable, user-friendly applications
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-center mb-6">
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {category.title}
                                </h3>
                                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full mx-auto`}></div>
                            </div>

                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors"
                                    >
                                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                                        <span className="text-gray-700 font-medium">{skill}</span>
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
