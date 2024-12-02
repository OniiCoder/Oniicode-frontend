import { usePathname } from 'next/navigation'
import NavigationLink from './NavigationLink'

export default function NavigationLinks () {
    const pathname = usePathname()

    const isActive = (href) => pathname == href

    return (
    <div className="flex gap-[24px]">
        <NavigationLink
            href="/landing"
            active={isActive('/landing')}
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