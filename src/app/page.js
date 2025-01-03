import Layout2 from "@/app/(auth)/layout2"
import Featured from "@/components/Featured"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"

const landing = () => {
    return (
        <Layout2>
            <Hero/>
            <Featured />
            <Footer />
        </Layout2>
    )
}

export default landing