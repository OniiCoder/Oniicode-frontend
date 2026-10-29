'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const APP_STORE_URL = 'https://apps.apple.com/us/app/reading-flashlight/id6824158591?mt=12'
const X_URL = 'https://x.com/oniicode'
const BG = '#060607'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, ease },
}

/* ---------- Small primitives ---------- */

function AppleLogo({ className = '' }) {
    return (
        <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
    )
}

function XLogo({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

function Mark({ className = '' }) {
    // Lines of text, lit only inside a warm circle — same idea as the app icon.
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <defs>
                <radialGradient id="fl-mark-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE2B0" />
                    <stop offset="60%" stopColor="#F5C67E" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#F5C67E" stopOpacity="0" />
                </radialGradient>
                <clipPath id="fl-mark-clip">
                    <circle cx="12" cy="12" r="6.6" />
                </clipPath>
            </defs>
            {[5, 9.5, 14, 18.5].map((y) => (
                <rect key={y} x="2" y={y - 1} width="20" height="2" rx="1" fill="#FFFFFF" fillOpacity="0.16" />
            ))}
            <circle cx="12" cy="12" r="9" fill="url(#fl-mark-glow)" />
            <g clipPath="url(#fl-mark-clip)">
                {[5, 9.5, 14, 18.5].map((y) => (
                    <rect key={y} x="2" y={y - 1} width="20" height="2" rx="1" fill="#1a140c" />
                ))}
            </g>
        </svg>
    )
}

function Key({ children, active = false, size = 'md' }) {
    const sizes = {
        sm: 'h-8 min-w-8 px-2 text-[14px] rounded-[9px]',
        md: 'h-12 min-w-12 px-3.5 text-[19px] rounded-[14px]',
    }
    return (
        <span
            className={[
                'relative inline-grid place-items-center select-none font-medium transition-all duration-150',
                sizes[size],
                active
                    ? 'bg-[#FFE2B0] text-[#1a140c] translate-y-[2px] shadow-[0_0_24px_-4px_rgba(255,214,150,0.6)]'
                    : 'bg-[#141416] text-white/85 ring-1 ring-white/[0.08] shadow-[0_3px_0_#000,0_10px_24px_-10px_rgba(0,0,0,0.8)]',
            ].join(' ')}>
            {children}
        </span>
    )
}

function DownloadButton({ size = 'lg' }) {
    const cls = size === 'lg' ? 'h-12 px-6 text-[15px] gap-2.5' : 'h-9 px-4 text-[13px] gap-2'
    return (
        <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center rounded-full bg-white text-black font-medium tracking-[-0.01em] hover:bg-[#FFE9C4] hover:shadow-[0_0_40px_-6px_rgba(255,214,150,0.55)] active:scale-[0.98] transition ${cls}`}>
            <AppleLogo className={size === 'lg' ? 'w-[15px] h-[15px] -mt-0.5' : 'w-3 h-3 -mt-0.5'} />
            Download on the Mac App Store
        </a>
    )
}

/* ---------- Sections ---------- */

function Nav() {
    return (
        <header className="sticky top-0 z-40 bg-[#060607]/75 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
                <a href="/flashlight" className="flex items-center gap-2.5">
                    <Mark className="w-[22px] h-[22px]" />
                    <span className="text-[15px] font-semibold tracking-[-0.02em] text-white">Reading Flashlight</span>
                </a>
                <div className="flex items-center gap-5">
                    <a
                        href={X_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 text-[13px] text-white/45 hover:text-white transition">
                        <XLogo className="w-3 h-3" />
                        @oniicode
                    </a>
                    <DownloadButton size="sm" />
                </div>
            </div>
        </header>
    )
}

function Hero() {
    const ref = useRef(null)
    const d = (ms) => ({ animationDelay: `${ms}ms` })

    // A faint warm glow follows the pointer across the hero — a hint of what the app does.
    const onMove = (e) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        el.style.setProperty('--gx', `${e.clientX - r.left}px`)
        el.style.setProperty('--gy', `${e.clientY - r.top}px`)
        el.style.setProperty('--ga', '1')
    }

    return (
        <section
            ref={ref}
            onPointerMove={onMove}
            onPointerLeave={() => ref.current?.style.setProperty('--ga', '0')}
            className="relative"
            style={{ '--gx': '50%', '--gy': '40%', '--ga': '0' }}>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 transition-opacity duration-700"
                style={{
                    opacity: 'var(--ga)',
                    background: 'radial-gradient(520px circle at var(--gx) var(--gy), rgba(255,214,150,0.075), transparent 70%)',
                }}
            />
            <div className="relative mx-auto max-w-6xl px-6 pt-20 sm:pt-28 text-center">
                <p className="mc-rise text-[12px] font-medium uppercase tracking-[0.22em] text-white/35">For macOS · Free</p>
                <h1 className="mt-6 text-[52px] leading-[0.98] sm:text-[96px] font-bold tracking-[-0.045em] text-white">
                    <span className="mc-rise block" style={d(60)}>
                        Read what’s lit.
                    </span>
                    <span className="mc-rise block text-white/30" style={d(360)}>
                        Let the rest wait.
                    </span>
                </h1>
                <p className="mc-rise mx-auto mt-8 max-w-[540px] text-[18px] leading-[1.6] text-white/50" style={d(600)}>
                    Reading Flashlight dims your whole screen except the spot under your cursor. Your eyes stay on the
                    line you’re reading, and the rest of the screen stays out of the way.
                </p>
                <div className="mc-rise mt-10 flex flex-col items-center gap-4" style={d(750)}>
                    <DownloadButton />
                    <p className="text-[12.5px] text-white/30 font-mono">macOS 13+ · Apple silicon &amp; Intel · 1.1 MB</p>
                </div>
            </div>
        </section>
    )
}

function Demo() {
    return (
        <section id="demo" className="mx-auto max-w-6xl px-4 sm:px-6 mt-20 sm:mt-24">
            <div style={{ animationDelay: '900ms', animationDuration: '1.1s' }} className="mc-rise relative">
                {/* warm halo behind the frame */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-x-10 -inset-y-16 sm:-inset-y-24"
                    style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,214,150,0.10), transparent 70%)' }}
                />
                <div className="relative overflow-hidden rounded-[22px] sm:rounded-[32px] bg-black ring-1 ring-white/[0.08] shadow-[0_60px_140px_-50px_rgba(0,0,0,1)]">
                    <video
                        className="block w-full aspect-video"
                        src="/flashlight/flashlight-demo.mp4"
                        poster="/flashlight/flashlight-poster.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-label="Reading Flashlight demo: a spotlight follows the cursor across a document while the rest of the screen dims."
                    />
                </div>
            </div>
        </section>
    )
}

/* An in-page flashlight: move the pointer over the page, switch shapes, resize. */
const SHAPES = [
    { id: 'circle', label: 'Circle' },
    { id: 'box', label: 'Focus box' },
    { id: 'bar', label: 'Reading bar' },
]

function TryIt() {
    const stageRef = useRef(null)
    const beamRef = useRef(null)
    const target = useRef({ x: 0, y: 0 })
    const pos = useRef({ x: 0, y: 0 })
    const [shape, setShape] = useState('circle')
    const [radius, setRadius] = useState(120)
    const [on, setOn] = useState(true)
    const [hover, setHover] = useState(false)
    const [pressed, setPressed] = useState(null)

    // Start the beam on the first line, then ease toward the pointer every frame.
    useEffect(() => {
        const stage = stageRef.current
        if (!stage) return
        const r = stage.getBoundingClientRect()
        const start = { x: r.width * 0.34, y: r.height * 0.36 }
        target.current = { ...start }
        pos.current = { ...start }
        let raf
        const tick = () => {
            const p = pos.current
            const t = target.current
            p.x += (t.x - p.x) * 0.22
            p.y += (t.y - p.y) * 0.22
            if (beamRef.current) beamRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`
            raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [])

    const onMove = (e) => {
        const r = stageRef.current.getBoundingClientRect()
        target.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }

    const flash = (k) => {
        setPressed(k)
        setTimeout(() => setPressed((p) => (p === k ? null : p)), 220)
    }
    const cycle = () => setShape((s) => SHAPES[(SHAPES.findIndex((x) => x.id === s) + 1) % SHAPES.length].id)
    const resize = (d) => setRadius((r) => Math.min(220, Math.max(60, r + d)))

    // Keys work while the pointer is over the page: S shape, F on/off, −/= size.
    useEffect(() => {
        if (!hover) return
        const onKey = (e) => {
            if (e.metaKey) return
            const c = e.code
            if (c === 'KeyS') { cycle(); flash('S') } else if (c === 'KeyF') { setOn((v) => !v); flash('F') } else if (c === 'Equal') { resize(20); flash('=') } else if (c === 'Minus') { resize(-20); flash('−') } else return
            e.preventDefault()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [hover])

    const dims = {
        circle: { w: radius * 2, h: radius * 2, br: '9999px', f: radius * 0.75 },
        box: { w: radius * 4.4, h: radius * 1.15, br: '22px', f: radius * 0.45 },
        bar: { w: 4000, h: radius * 0.95, br: '0px', f: radius * 0.4 },
    }[shape]

    return (
        <section className="mx-auto max-w-6xl px-6 mt-32 sm:mt-44">
            <motion.div {...fadeUp} className="text-center">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/35">Try it here</p>
                <h2 className="mt-5 text-[34px] sm:text-[52px] font-bold tracking-[-0.04em] text-white">Move your pointer over the page.</h2>
            </motion.div>

            <motion.div {...fadeUp} className="mt-14">
                <div
                    ref={stageRef}
                    onPointerMove={onMove}
                    onPointerDown={onMove}
                    onPointerEnter={() => setHover(true)}
                    onPointerLeave={() => setHover(false)}
                    className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#F6F3EC] ring-1 ring-white/[0.08] cursor-default select-none">
                    <article
                        className="mx-auto max-w-[720px] px-7 py-14 sm:px-12 sm:py-20 text-[#1d1d1f]"
                        style={{ fontFamily: 'ui-serif, "New York", Charter, Georgia, serif' }}>
                        <h3 className="text-[30px] sm:text-[38px] font-bold tracking-[-0.02em]">On Attention</h3>
                        <p className="mt-1 text-[15px] text-neutral-500">A short essay on reading in a loud room</p>
                        <div className="mt-8 space-y-5 text-[18px] sm:text-[20px] leading-[1.75]">
                            <p>
                                We rarely lose our place on the page because the words are difficult. We lose it because
                                everything around them is asking to be noticed: a badge in the corner, a tab that just
                                changed color, the next paragraph quietly pulling the eye downward before this one is finished.
                            </p>
                            <p>
                                Reading well has always meant narrowing the world. Monks used a finger, students used a ruler,
                                and readers by candlelight had only the small circle the flame could reach. The darkness was
                                not an obstacle. It was the point.
                            </p>
                            <p>
                                A screen gives us the opposite: every pixel equally bright, every line equally loud. So give
                                the eye one warm place to rest, and let the rest of the page wait its turn.
                            </p>
                        </div>
                    </article>

                    {/* The beam: a transparent shape whose giant feathered shadow is the darkness. */}
                    <div ref={beamRef} aria-hidden="true" className="pointer-events-none absolute left-0 top-0">
                        <div
                            className="absolute -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                            style={{
                                width: on ? dims.w : 4000,
                                height: on ? dims.h : 4000,
                                borderRadius: dims.br,
                                boxShadow: `0 0 ${dims.f}px 4000px rgba(6,6,9,${on ? 0.86 : 0})`,
                            }}
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div {...fadeUp} className="mt-8 flex flex-col items-center gap-6">
                <div className="inline-flex rounded-full bg-white/[0.04] p-1 ring-1 ring-white/[0.06]">
                    {SHAPES.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => { setShape(s.id); setOn(true) }}
                            className={`h-9 px-4 rounded-full text-[13px] font-medium transition ${
                                shape === s.id && on ? 'bg-white text-black' : 'text-white/50 hover:text-white'
                            }`}>
                            {s.label}
                        </button>
                    ))}
                </div>
                <div className="hidden md:flex items-center gap-7 text-[13px] text-white/40">
                    <span className="flex items-center gap-2"><Key size="sm" active={pressed === 'S'}>S</Key> shape</span>
                    <span className="flex items-center gap-2"><Key size="sm" active={pressed === 'F'}>F</Key> on / off</span>
                    <span className="flex items-center gap-2">
                        <Key size="sm" active={pressed === '−'}>−</Key>
                        <Key size="sm" active={pressed === '='}>=</Key> size
                    </span>
                </div>
                <p className="hidden md:block text-[12.5px] text-white/30">In the app, the same keys work anywhere with ⌃ ⌥ held down.</p>
            </motion.div>
        </section>
    )
}

function Shortcuts() {
    const rows = [
        { keys: ['⌃', '⌥', 'F'], t: 'Turn it on or off', d: 'From any app. Or right-click the flashlight in your menu bar.' },
        { keys: ['⌃', '⌥', 'Scroll'], t: 'Resize the beam', d: 'Hold ⌃⌥ and scroll. ⌃⌥ = and ⌃⌥ − work too.' },
        { keys: ['⌃', '⌥', 'S'], t: 'Switch shape', d: 'Circle, focus box or reading bar. Pick what suits the page.' },
        { keys: ['⌃', '⌥', 'B'], t: 'Blur the rest', d: 'Add a frosted blur outside the beam for even fewer distractions.' },
        { keys: ['⌃', '⌥', '[ ]'], t: 'Set the darkness', d: 'Make everything outside the beam lighter or darker.' },
    ]
    return (
        <section className="mx-auto max-w-6xl px-6 mt-32 sm:mt-44">
            <motion.h2 {...fadeUp} className="text-center text-[36px] sm:text-[52px] font-bold tracking-[-0.04em] text-white">
                A few keys. That’s all.
            </motion.h2>
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
                {rows.map((r, i) => (
                    <motion.div
                        key={r.t}
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}
                        className="bg-[#0B0B0D] p-7 sm:p-10">
                        <div className="flex items-center gap-2">
                            {r.keys.map((k) => (
                                <Key key={k}>{k}</Key>
                            ))}
                        </div>
                        <h3 className="mt-9 text-[20px] font-semibold tracking-[-0.02em] text-white">{r.t}</h3>
                        <p className="mt-2 text-[15px] leading-[1.6] text-white/45 max-w-sm">{r.d}</p>
                    </motion.div>
                ))}
                <motion.div {...fadeUp} className="bg-[#0B0B0D] p-7 sm:p-10 flex flex-col justify-end">
                    <p className="text-[15px] leading-[1.6] text-white/45">
                        Click the menu bar icon to fine-tune the size, darkness, edge softness and a warm amber tint.
                        Your settings are remembered.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

function Features() {
    const items = [
        { t: 'Works everywhere', d: 'PDFs, web pages, code, email. It sits above every app, on every display you have.' },
        { t: 'Never in the way', d: 'Clicks, scrolling and typing go straight through. You’re only changing what you see.' },
        { t: 'No permissions', d: 'No Accessibility access and no screen recording. It never sees what’s on your screen.' },
        { t: 'Tiny and native', d: 'Written in Swift. A 1.1 MB download, with one build for Apple silicon and Intel Macs.' },
    ]
    return (
        <section className="mx-auto max-w-6xl px-6 mt-32 sm:mt-44">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                {items.map((f, i) => (
                    <motion.div key={f.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                        <div className="h-px w-8 bg-[#FFE2B0]" />
                        <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.015em] text-white">{f.t}</h3>
                        <p className="mt-2 text-[15px] leading-[1.65] text-white/45">{f.d}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

function FinalCTA() {
    return (
        <section className="relative mx-auto max-w-6xl px-6 mt-36 sm:mt-48 text-center">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/4"
                style={{ background: 'radial-gradient(closest-side, rgba(255,214,150,0.16), transparent)' }}
            />
            <motion.div {...fadeUp} className="relative">
                <Mark className="mx-auto w-14 h-14" />
                <h2 className="mt-10 text-[44px] sm:text-[72px] font-bold leading-[1] tracking-[-0.045em] text-white">
                    Reading Flashlight
                </h2>
                <p className="mt-4 text-[20px] text-white/40">Light only what you’re reading.</p>
                <div className="mt-10 flex justify-center">
                    <DownloadButton />
                </div>
            </motion.div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="mx-auto max-w-6xl px-6 mt-36 pb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.07] pt-8 text-[13px] text-white/35">
                <p>
                    Made by{' '}
                    <a
                        href={X_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-white hover:opacity-70 transition">
                        <XLogo className="w-3 h-3" />
                        @oniicode
                    </a>
                </p>
                <p className="font-mono">© {new Date().getFullYear()} Reading Flashlight</p>
            </div>
        </footer>
    )
}

export default function FlashlightLanding() {
    // Match the page background so overscroll/bounce doesn't flash white.
    useEffect(() => {
        const html = document.documentElement
        const prev = html.style.backgroundColor
        html.style.backgroundColor = BG
        return () => {
            html.style.backgroundColor = prev
        }
    }, [])

    return (
        <main
            className="min-h-screen text-white font-sans antialiased selection:bg-[#FFE2B0] selection:text-[#1a140c]"
            style={{ backgroundColor: BG }}>
            <Nav />
            <Hero />
            <Demo />
            <TryIt />
            <Shortcuts />
            <Features />
            <FinalCTA />
            <Footer />
        </main>
    )
}
