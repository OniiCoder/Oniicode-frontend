import Link from 'next/link'
import { getFeaturedProjects } from '@/data/projects'

export default function Featured() {
    const projects = getFeaturedProjects()
    
    return (
        <div className="grid text-xl pb-[64px] px-5">
            <div className="flex flex-col gap-6">
                <div className="flex gap-2 text-[24px] font-sans text-black font-bold items-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.01 2.91995L18.91 5.53995C20.61 6.28995 20.61 7.52995 18.91 8.27995L13.01 10.8999C12.34 11.1999 11.24 11.1999 10.57 10.8999L4.67002 8.27995C2.97002 7.52995 2.97002 6.28995 4.67002 5.53995L10.57 2.91995C11.24 2.61995 12.34 2.61995 13.01 2.91995Z"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Featured projects
                </div>

                <div className="grid lg:grid-cols-2 gap-6 bg-[#F5F5F5] rounded-[24px] p-[16px]">
                    {projects &&
                        projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`flex flex-col ${index % 2 != 0 ? 'flex-col-reverse' : ''} justify-between gap-[11px] bg-white rounded-[16px] overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                                
                                <div className="grid gap-4 px-5 py-5">
                                    <div className="grid gap-3">
                                        <div className="flex items-center justify-between">
                                            <div className="text-base lg:text-lg font-semibold">
                                                {project.title}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {project.isStartUp && (
                                                    <span className='px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium'>
                                                        Startup
                                                    </span>
                                                )}
                                                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                                                    project.status === 'Live' 
                                                        ? 'bg-blue-100 text-blue-700' 
                                                        : project.status === 'Beta Testing'
                                                        ? 'bg-yellow-100 text-yellow-700'
                                                        : project.status === 'In Development'
                                                        ? 'bg-purple-100 text-purple-700'
                                                        : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="text-sm lg:text-base text-dull-gray leading-relaxed">
                                            {project.description}
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="flex justify-between items-center text-sm font-medium border-t-[1px] border-t-[#FBFBFB] py-[12px] hover:text-[#2F8519] transition-colors">
                                        View Project
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2.33334 8H13.5533"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                                
                                <div className="relative group">
                                    <img
                                        className="w-full h-[240px] lg:h-[324px] rounded-[12px] object-cover transition-transform duration-300 group-hover:scale-105"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-[12px]"></div>
                                </div>
                            </div>
                        ))}
                </div>
                
                <div className="text-center">
                    <Link
                        href="https://vibraniuumtech.com"
                        target="_blank"
                        className="inline-flex gap-2 items-center text-base font-medium text-[#2F8519] hover:text-[#FA812F] transition-colors underline decoration-2 underline-offset-4">
                        See more projects
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.62 3.95337L13.6667 8.00004L9.62 12.0467"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.33334 8H13.5533"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
