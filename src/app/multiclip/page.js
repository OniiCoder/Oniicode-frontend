import MultiClipLanding from '@/components/multiclip/MultiClipLanding'

export const metadata = {
    title: 'MultiClip — Copy many. Paste any.',
    description:
        'MultiClip gives your Mac nine clipboard slots. Press ⌘C and a number to save, ⌘V and a number to paste. Free, native, and invisible.',
    alternates: {
        canonical: '/multiclip',
    },
    openGraph: {
        type: 'website',
        url: 'https://oniicode.com/multiclip',
        title: 'MultiClip — Copy many. Paste any.',
        description: 'Nine clipboard slots for macOS. ⌘C + 1–9 to copy, ⌘V + 1–9 to paste.',
        images: [{ url: '/multiclip/multiclip-og.jpg', width: 1200, height: 630, alt: 'MultiClip for macOS' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MultiClip — Copy many. Paste any.',
        description: 'Nine clipboard slots for macOS. ⌘C + 1–9 to copy, ⌘V + 1–9 to paste.',
        images: ['/multiclip/multiclip-og.jpg'],
        creator: '@oniicode',
    },
}

export default function MultiClipPage() {
    return <MultiClipLanding />
}
