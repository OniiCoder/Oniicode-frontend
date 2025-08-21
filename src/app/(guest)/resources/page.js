import Layout2 from '@/app/(auth)/layout2'
import Resources from '@/components/Resources'

export const metadata = {
    title: 'Development Resources & Tools | Oniicode',
    description: 'Discover curated development tools, technologies, and resources that power modern web applications. Explore Laravel, Next.js, Flutter, AI coding tools, cloud services, and more.',
    keywords: 'development tools, Laravel, Next.js, Flutter, AI coding tools, cloud hosting, AWS, payment gateways, development resources, programming tools, software development',
    openGraph: {
        title: 'Development Resources & Tools | Oniicode',
        description: 'Curated collection of development tools, technologies, and resources for modern web development',
        type: 'website',
        url: 'https://oniicode.com/resources',
        siteName: 'Oniicode',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Development Resources & Tools | Oniicode',
        description: 'Curated collection of development tools, technologies, and resources for modern web development',
    },
    robots: {
        index: true,
        follow: true,
    }
}

const ResourcesPage = () => {
    return (
        <Layout2>
            <Resources />
        </Layout2>
    )
}

export default ResourcesPage
