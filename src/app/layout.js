import { Inter } from 'next/font/google'
import '@/app/global.css'
import localFont from 'next/font/local'
import 'aos/dist/aos.css'

const interFont = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const oniicodeFont = localFont({
    src: [
        {
            path: '../../public/fonts/Oniicode-Regular.ttf',
            weight: '400',
        },
    ],
    variable: '--font-oniicode',
})

const RootLayout = ({ children }) => {
    return (
        <html
            lang="en"
            className={`${interFont.className} ${oniicodeFont.variable}`}>
            <head>
                {/* Primary Meta Tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#2F8519" />
                
                {/* SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Oniicode" />
                <meta property="og:locale" content="en_US" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@oniicode" />
                <meta name="twitter:creator" content="@oniicode" />
                
                {/* Additional SEO */}
                <meta name="author" content="Peter Peregbakumo (Oniicode)" />
                <meta name="keywords" content="software engineer, ecommerce expert, Shopify developer, Laravel developer, Next.js developer, Flutter developer, African tech entrepreneur, BuukMeNow, DayTracker, FreshFold, sleep technology, 3zbrands" />
                <meta name="description" content="Peter Peregbakumo (Oniicode) - Software Engineer & Ecommerce Expert. Currently changing the future of Sleep at 3zbrands. Expert in Laravel, Next.js, Flutter, Shopify, and modern web technologies." />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://oniicode.com" />
                
                {/* Favicon and Icons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                
                {/* Preconnect for Performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                
                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Peter Peregbakumo",
                            "alternateName": "Oniicode",
                            "url": "https://oniicode.com",
                            "image": "https://oniicode.com/og-image.jpg",
                            "sameAs": [
                                "https://linkedin.com/in/oniicode",
                                "https://github.com/oniicode",
                                "https://twitter.com/oniicode"
                            ],
                            "jobTitle": "Software Engineer & Ecommerce Expert",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "3zbrands",
                                "description": "Changing the future of Sleep"
                            },
                            "alumniOf": {
                                "@type": "EducationalOrganization",
                                "name": "Lancaster University Ghana"
                            },
                            "knowsAbout": [
                                "Laravel", "Next.js", "Flutter", "Shopify", "Ecommerce", 
                                "Livewire", "Tailwind CSS", "AWS", "PHP", "React"
                            ],
                            "description": "Software Engineer and Creative Visionary specializing in ecommerce solutions, Shopify integrations, and innovative technology development."
                        })
                    }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    )
}

export const metadata = {
    title: {
        default: 'Oniicode - Peter Peregbakumo | Software Engineer & Ecommerce Expert',
        template: '%s | Oniicode'
    },
    description: 'Peter Peregbakumo (Oniicode) - Software Engineer & Ecommerce Expert. Currently changing the future of Sleep at 3zbrands. Expert in Laravel, AI, Next.js, Flutter, Shopify, and modern web technologies.',
    keywords: ['software engineer', 'ecommerce expert', 'Shopify developer', 'Laravel developer', 'Next.js developer', 'Flutter developer', 'African tech entrepreneur', 'BuukMeNow', 'DayTracker', 'FreshFold', 'sleep technology', '3zbrands'],
    authors: [{ name: 'Peter Peregbakumo', url: 'https://oniicode.com' }],
    creator: 'Peter Peregbakumo',
    publisher: 'Oniicode',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://oniicode.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://oniicode.com',
        siteName: 'Oniicode',
        title: 'Oniicode - Peter Peregbakumo | Software Engineer & Ecommerce Expert',
        description: 'Peter Peregbakumo (Oniicode) - Software Engineer & Ecommerce Expert. Currently changing the future of Sleep at 3zbrands. Expert in Laravel, AI, Next.js, Flutter, Shopify, and modern web technologies.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Peter Peregbakumo - Software Engineer & Ecommerce Expert',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Oniicode - Peter Peregbakumo | Software Engineer & Ecommerce Expert',
        description: 'Peter Peregbakumo (Oniicode) - Software Engineer & Ecommerce Expert. Currently changing the future of Sleep at 3zbrands.',
        images: ['/og-image.jpg'],
        creator: '@oniicode',
        site: '@oniicode',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
}

export default RootLayout

