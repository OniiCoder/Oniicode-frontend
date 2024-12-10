import { Inter } from 'next/font/google'
import '@/app/global.css'
import localFont from 'next/font/local'
import Aos from 'aos'
import 'aos/dist/aos.css'

const interFont = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const oniicodeFont = localFont({
    src: [
        {
            path: '../../public/fonts/Oniicode-Regular.ttf',
            weight: '400',
        },
    ],
    variable: '--font-oniicode',
})

const RootLayout = ({ children }) => {
    return (
        <html
            lang="en"
            className={`${interFont.className} ${oniicodeFont.variable}`}>
            <body className="antialiased">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'Oniicode',
}

export default RootLayout
