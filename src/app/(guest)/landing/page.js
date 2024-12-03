import Layout2 from "@/app/(auth)/layout2"
import Featured from "@/components/Featured"
import Hero from "@/components/Hero"

const landing = () => {
    return (
        <Layout2>
            <Hero/>
            <Featured />
            <div>Blog</div>
            <div>Footer</div>
        </Layout2>
    )
}

export default landing