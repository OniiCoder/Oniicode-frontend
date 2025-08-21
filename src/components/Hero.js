"use client"
import { useEffect } from "react"
import PrimaryButton from "./PrimaryButton"
import Aos from "aos"

export default function Hero() {
    useEffect(() => {
        Aos.init()
      }, [])

    const hobbies = [
        {
            "id": 1,
            "color": "#2F8519",
            "title": "Software engineer"
        },
        {
            "id": 2,
            "color": "#FA812F",
            "title": "Content creator"
        },
        {
            "id": 3,
            "color": "#FAB12F",
            "title": "Musician"
        }
    ]

    return (
        <div className="grid lg:grid-cols-2 .text-dull-gray text-xl py-[64px] lg:py-[96px] px-5">
            <div className="flex flex-col gap-6">
                <div data-aos="fade-up" data-aos-duration="800">
                    <h1 className="text-3xl lg:text-[54px] font-sans text-black leading-tight">
                        Hi 👋 I am <span className="text-[#2F8519]">Oniicode</span>
                    </h1>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <p className="text-base lg:text-xl leading-relaxed">
                        I'm a <span className="font-semibold">software engineer</span> and a <span className="font-semibold">creative visionary</span> who strives to inspire my country, and continent through innovative technology solutions.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <p className="text-base lg:text-xl leading-relaxed">
                        I love sharing my progress as I embark on this journey of building solutions that make a difference. <br />
                        <span className="font-medium">Let's connect and create something amazing together!</span>
                    </p>
                </div>
                
                <div className="relative flex flex-col justify-end h-[70px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                    <div>
                        <a
                            href="mailto:perezpeter32@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gray-600 hover:bg-black rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-gray-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send me an email
                        </a>
                    </div>
                    <svg className="absolute top-0 left-40 animate-bounce" width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4326 21.5698C10.3623 22.8601 9.26 24.0982 8.01889 25.2294C7.427 25.7688 6.12263 27.4434 5.26088 27.3502C5.65151 25.9162 6.6287 24.7433 6.84867 23.1923C6.94344 22.5242 7.06119 21.604 6.42399 21.0493C5.47691 20.2249 5.23099 21.2774 4.92961 21.934C4.28168 23.3456 3.42336 24.6826 2.65694 26.0322C2.07011 27.0655 0.147065 29.1167 1.08038 30.4723C2.01747 31.8334 4.42161 30.956 5.6169 30.7129C7.55423 30.319 9.50303 29.9493 11.4336 29.5381C11.9656 29.4248 13.1148 29.3152 13.3059 28.7152C13.5728 27.8773 12.6638 27.6426 11.9777 27.5624C11.5347 27.5106 6.87508 27.8367 6.87346 27.8439C6.93574 27.5701 8.32144 26.7276 8.52183 26.569C9.34007 25.9212 10.1106 25.1813 10.8505 24.4282C12.785 22.4592 14.8408 20.4251 16.1832 17.9987C16.8106 16.8648 16.8706 15.7724 17.0267 14.5095C17.175 13.3103 18.3107 12.9046 19.1805 12.0955C20.9776 10.424 22.2307 8.24095 22.8952 5.88267C23.3489 4.27223 23.8987 0.30393 20.9437 0.12004C20.1723 0.0720307 19.4085 0.426998 20.208 0.894188C20.7501 1.21093 21.055 0.915662 21.5344 1.50813C21.8797 1.9348 21.8746 2.45341 21.8543 2.92712C21.7536 5.28077 20.4527 7.90972 19.0487 9.65892C18.5136 10.3257 17.3121 11.5565 16.429 11.8062C15.6435 12.0284 15.2308 11.2715 14.3448 10.8488C12.0479 9.75299 8.71802 10.6598 8.27811 13.1958C7.64074 16.87 13.2942 15.6902 15.0169 14.8562C15.5423 17.1292 12.6675 20.0809 11.4326 21.5698ZM10.5877 12.8581C11.7554 11.5754 13.048 11.7983 14.3977 12.9262C13.7903 13.1835 8.88152 14.915 10.5877 12.8581C10.788 12.638 10.4375 13.0392 10.5877 12.8581Z" fill="#222221"/>
                    </svg>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 font-sans" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                    {hobbies && hobbies.map((hobby) =>(
                        <div 
                            key={hobby.id}
                            className="flex items-center gap-[11px] hover:scale-105 transition-transform cursor-pointer">
                            <div>
                                <div style={{backgroundColor: hobby.color}} className="w-2 h-2 rounded-full"></div>
                            </div>
                            <div className="text-2xl font-medium">{hobby.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="hidden lg:flex items-center justify-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-[#2F8519] via-[#FA812F] to-[#FAB12F] rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                            <div className="text-6xl mb-4">🚀</div>
                            <div className="text-lg font-semibold">Building the Future</div>
                            <div className="text-sm opacity-80">One line of code at a time</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}