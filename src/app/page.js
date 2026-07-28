import V2LandingPage from '@/components/v2/V2LandingPage'

export const metadata = {
    title: 'AI Software Development Studio | Oniicode',
    description: 'Helping founders and businesses build AI-powered software, SaaS platforms and automation tools that drive growth.',
    keywords: [
        'AI Development',
        'Laravel Development',
        'Startup CTO',
        'Custom Software',
        'SaaS Development',
        'AI Automation',
        'AI Product Studio',
        'Peter Onisha Peregbakumo',
        'BuukMeNow',
        'Voice AI',
        'Next.js AI',
    ],
    openGraph: {
        title: 'AI Software Development Studio | Oniicode',
        description: 'Helping founders and businesses build AI-powered software, SaaS platforms and automation tools that drive growth.',
        url: 'https://oniicode.com',
        siteName: 'Oniicode',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Software Development Studio | Oniicode',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Software Development Studio | Oniicode',
        description: 'Helping founders and businesses build AI-powered software, SaaS platforms and automation tools that drive growth.',
        images: ['/og-image.jpg'],
    },
    alternates: {
        canonical: '/',
    },
}

export default function Page() {
    return <V2LandingPage />
}