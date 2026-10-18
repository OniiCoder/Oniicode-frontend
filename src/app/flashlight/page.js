import FlashlightLanding from '@/components/flashlight/FlashlightLanding'

export const metadata = {
    title: 'Reading Flashlight — Light only what you’re reading.',
    description:
        'Reading Flashlight dims everything on your Mac except the spot under your cursor, so your eyes stay on the line you’re reading. Free, native, and lives in your menu bar.',
    alternates: {
        canonical: '/flashlight',
    },
    openGraph: {
        type: 'website',
        url: 'https://oniicode.com/flashlight',
        title: 'Reading Flashlight — Light only what you’re reading.',
        description: 'A spotlight that follows your cursor and dims the rest of the screen. Free for macOS.',
        images: [{ url: '/flashlight/flashlight-og.jpg', width: 1200, height: 630, alt: 'Reading Flashlight for macOS' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reading Flashlight — Light only what you’re reading.',
        description: 'A spotlight that follows your cursor and dims the rest of the screen. Free for macOS.',
        images: ['/flashlight/flashlight-og.jpg'],
        creator: '@oniicode',
    },
}

export default function FlashlightPage() {
    return <FlashlightLanding />
}
