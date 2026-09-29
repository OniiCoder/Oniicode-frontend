import MinimalPortfolio from '@/components/v3/MinimalPortfolio'

export const metadata = {
    title: 'Peter Onisha Peregbakumo',
    description: 'Personal website of Peter Onisha Peregbakumo. Software engineer, AI builder, and founder of Buukmenow & Oniicode.',
    keywords: [
        'Peter Onisha Peregbakumo',
        'Peter Peregbakumo',
        'Oniicode',
        'Buukmenow',
        'Software Engineer',
        'AI Engineer',
        'Machine Learning',
        'SaaS Founder',
    ],
    openGraph: {
        title: 'Peter Onisha Peregbakumo',
        description: 'Personal website of Peter Onisha Peregbakumo. Software engineer, AI builder, and founder of Buukmenow & Oniicode.',
        url: 'https://oniicode.com',
        siteName: 'Peter Onisha Peregbakumo',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Peter Onisha Peregbakumo',
            },
        ],
        locale: 'en_US',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@oniicode',
        creator: '@oniicode',
        title: 'Peter Onisha Peregbakumo',
        description: 'Personal website of Peter Onisha Peregbakumo. Software engineer, Cloud/DevOps Engineer, AI builder, and founder of Buukmenow & Oniicode.',
        images: ['/og-image.jpg'],
    },
    alternates: {
        canonical: '/',
    },
}

export default function Page() {
    return <MinimalPortfolio />
}
