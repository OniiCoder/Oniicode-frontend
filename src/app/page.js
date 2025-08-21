import Layout2 from "@/app/(auth)/layout2"
import Featured from "@/components/Featured"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import OnlineFeatures from "@/components/OnlineFeatures"
import CallToAction from "@/components/CallToAction"

export const metadata = {
    title: 'Home',
    description: 'Peter Peregbakumo (Oniicode) - Software Engineer & Ecommerce Expert. Currently changing the future of Sleep at 3zbrands. Expert in Laravel, Next.js, Flutter, Shopify, and modern web technologies.',
    keywords: ['software engineer', 'ecommerce expert', 'Shopify developer', 'Laravel developer', 'Next.js developer', 'Flutter developer', 'African tech entrepreneur', 'BuukMeNow', 'DayTracker', 'FreshFold', 'sleep technology', '3zbrands', 'Peter Peregbakumo'],
    openGraph: {
        title: 'Oniicode - Peter Peregbakumo | Software Engineer & Ecommerce Expert',
        description: 'Peter Peregbakumo (Oniicode) - Software Engineer & Ecommerce Expert. Currently changing the future of Sleep at 3zbrands. Expert in Laravel, AI, Next.js, Flutter, Shopify, and modern web technologies.',
        url: 'https://oniicode.com',
        siteName: 'Oniicode',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Peter Peregbakumo - Software Engineer & Ecommerce Expert',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Oniicode - Peter Peregbakumo | Software Engineer & Ecommerce Expert',
        description: 'Peter Peregbakumo (Oniicode) - Software Engineer & Ecommerce Expert. Currently changing the future of Sleep at 3zbrands.',
        images: ['/og-image.jpg'],
    },
    alternates: {
        canonical: '/',
    },
}

const landing = () => {
    return (
        <Layout2>
            <Hero/>
            <Skills />
            {/* <Talks /> */}
            <OnlineFeatures />
            <Featured />
            <CallToAction />
            <Footer />
        </Layout2>
    )
}

export default landing