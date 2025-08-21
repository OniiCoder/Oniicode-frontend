import Layout2 from "@/app/(auth)/layout2"
import Featured from "@/components/Featured"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Talks from "@/components/Talks"
import OnlineFeatures from "@/components/OnlineFeatures"
import CallToAction from "@/components/CallToAction"

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