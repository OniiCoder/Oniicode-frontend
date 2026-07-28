import Layout2 from "@/app/(auth)/layout2"
import Featured from "@/components/Featured"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import OnlineFeatures from "@/components/OnlineFeatures"
import CallToAction from "@/components/CallToAction"

export const metadata = {
    title: 'Oniicode v1 | Legacy Portfolio',
    description: 'Peter Onisha Peregbakumo (Oniicode) - Software Engineer & Ecommerce Expert v1 portfolio page.',
    alternates: {
        canonical: '/v1',
    },
}

const V1LandingPage = () => {
    return (
        <Layout2>
            <Hero />
            <Skills />
            <OnlineFeatures />
            <Featured />
            <CallToAction />
            <Footer />
        </Layout2>
    )
}

export default V1LandingPage
