"use client"

import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'
import NavigationLink from '@/components/NavigationLinks'
import { usePathname } from 'next/navigation'
import NavigationLinks from '@/components/NavigationLinks'
import PrimaryButton from '@/components/PrimaryButton'
import Socials from '@/components/Socials'
import { useState } from 'react'

export const metadata = {
    title: 'Oniicode',
}

const Layout2 = ({ children }) => {
    const [menuOpen, toggleMenuOpen] = useState(false);

    return (
        <div>
            <div className="text-gray-900 antialiased h-screen w-full bg-[#FCFCFB]">
                <div className="fixed top-0 left-0 w-full border-b-[1px] border-b-[#F5F5F5] z-50">
                    <div className="bg-white">
                        <div className="max-w-[1216px] mx-auto lg:flex items-center max-w-[1440px] mx-auto py-5 lg:py-5 px-4">
                            <div className='flex justify-between'>
                                <ApplicationLogo />
                                <div className='flex lg:hidden'>
                                    <button
                                        onClick={() => toggleMenuOpen(!menuOpen)}
                                    >
                                        <svg className={`${menuOpen ? 'hidden': ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 7H21" stroke="#292929" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M3 12H21" stroke="#292929" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M3 17H21" stroke="#292929" stroke-width="1.5" stroke-linecap="round"/>
                                        </svg>
                                        <svg className={`${!menuOpen ? 'hidden': ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.75 6.75L17.4313 17.2813" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M17.4316 6.75L6.75029 17.2813" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden lg:block w-[64px]"></div>
                            {/* web */}
                            <div className={`hidden flex-grow lg:flex flex-col lg:flex-row gap-6 justify-between items-center`}>
                                <NavigationLinks />
                                <div className='flex flex-col md:flex-row gap-6 items-center lg:justify-center'>
                                    <Socials />
                                    <PrimaryButton 
                                        href="https://docs.google.com/document/d/15uEC_l_zrQUObqoOubgciMWVTjd2JMmzqZyGnJPttmI/edit?usp=sharing"
                                        target="_blank"
                                    >View resume</PrimaryButton>
                                </div>
                            </div>
                            {/* mobile */}
                            <div className={`${!menuOpen ? 'hidden': ''} flex-grow flex flex-col lg:flex-row gap-6 justify-between items-center`}>
                                <NavigationLinks />
                                <div className='flex flex-col md:flex-row gap-6 items-center lg:justify-center'>
                                    <Socials />
                                    <PrimaryButton 
                                        href="https://docs.google.com/document/d/15uEC_l_zrQUObqoOubgciMWVTjd2JMmzqZyGnJPttmI/edit?usp=sharing"
                                        target="_blank"
                                    >View resume</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=".max-w-[1080px] max-w-[1216px] mx-auto">
                    <div className="h-[80px]"></div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout2
