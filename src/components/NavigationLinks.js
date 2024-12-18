import { usePathname } from 'next/navigation'
import NavigationLink from './NavigationLink'

export default function NavigationLinks () {
    const pathname = usePathname()

    const isActive = (href) => pathname == href

    return (
    <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-2 lg:gap-[24px] mt-6 lg:mt-0">
        <NavigationLink
            href="/"
            active={isActive('/')}
        >Home</NavigationLink>
        <NavigationLink
            href="/projects"
            active={isActive('/projects')}
        >Projects</NavigationLink>
        <NavigationLink
            href="/blog"
            active={isActive('/blog')}
        >Blog</NavigationLink>
        {/* <NavigationLink
            href="/social-feed"
            active={isActive('/social-feed')}
        >Social feed</NavigationLink> */}
        <NavigationLink
            href="/resources"
            active={isActive('/resources')}
        >Resources</NavigationLink>
    </div>
    )
}