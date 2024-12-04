"use client"

import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'
import NavigationLink from '@/components/NavigationLinks'
import { usePathname } from 'next/navigation'
import NavigationLinks from '@/components/NavigationLinks'
import PrimaryButton from '@/components/PrimaryButton'
import Socials from '@/components/Socials'

export const metadata = {
    title: 'Oniicode',
}

const Layout2 = ({ children }) => {

    return (
        <div>
            <div className="text-gray-900 antialiased h-screen w-full bg-[#FCFCFB]">
                <div className="fixed top-0 left-0 w-full border-b-[1px] border-b-[#F5F5F5] z-50">
                    <div className="bg-white">
                        <div className="max-w-[1216px] mx-auto flex items-center max-w-[1440px] mx-auto py-5">
                            <ApplicationLogo />
                            <div className="w-[64px]"></div>
                            <div className='w-full flex justify-between items-center'>
                                <NavigationLinks />
                                <div className='flex gap-6 items-center'>
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