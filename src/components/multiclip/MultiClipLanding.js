'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'

const DMG_URL = '/multiclip/MultiClip.dmg'
const X_URL = 'https://x.com/oniicode'

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
    // 3×3 slot grid, first three filled — the same dock as in the demo.
    return (
        <svg viewBox="0 0 22 22" className={className} aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
                <rect
                    key={i}
                    x={(i % 3) * 8}
                    y={Math.floor(i / 3) * 8}
                    width="6"
                    height="6"
                    rx="1.6"
                    fill={i < 3 ? '#111113' : '#D9D9DE'}
                />
            ))}
        </svg>
    )
}

function Key({ children, active = false, accent = false, size = 'md' }) {
    const sizes = {
        sm: 'h-9 min-w-9 px-2.5 text-[15px] rounded-[10px]',
        md: 'h-14 min-w-14 px-4 text-[22px] rounded-2xl',
    }
    const on = active && accent
    return (
        <span
            className={[
                'relative inline-grid place-items-center select-none font-medium transition-all duration-150',
                sizes[size],
                on
                    ? 'bg-[#111113] text-white translate-y-[2px] shadow-[0_1px_0_rgba(0,0,0,0.04)]'
                    : active
                      ? 'bg-white text-[#1d1d1f] translate-y-[2px] border border-black/10 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
                      : 'bg-white text-[#1d1d1f] border border-black/10 shadow-[0_3px_0_#E4E4E8,0_10px_24px_-10px_rgba(0,0,0,0.18)]',
            ].join(' ')}>
            {children}
        </span>
    )
}

const QUARANTINE_CMD = 'xattr -dr com.apple.quarantine /Applications/MultiClip.app'

function BeforeYouDownload({ open, onClose }) {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (!open) return
        const onKey = (e) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKey)
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = prev
        }
    }, [open, onClose])

    if (!open || typeof document === 'undefined') return null

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(QUARANTINE_CMD)
            setCopied(true)
            setTimeout(() => setCopied(false), 1600)
        } catch {
            // Clipboard unavailable (e.g. insecure context) — the command is still visible to copy by hand.
        }
    }

    const steps = [
        <>Open <span className="text-[#1d1d1f]">MultiClip.dmg</span> and drag MultiClip into Applications.</>,
        <>Open MultiClip. When macOS says <span className="text-[#1d1d1f]">“MultiClip” Not Opened</span>, click <span className="text-[#1d1d1f]">Done</span>.</>,
        <>Go to <span className="text-[#1d1d1f]">System Settings → Privacy &amp; Security</span>, scroll down and click <span className="text-[#1d1d1f]">Open Anyway</span>.</>,
        <>Switch MultiClip on under <span className="text-[#1d1d1f]">Privacy &amp; Security → Accessibility</span>, then open it once more.</>,
    ]

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="mc-before-title">
            <motion.div
                className="absolute inset-0 bg-white/70 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                onClick={onClose}
            />
            <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease }}
                className="relative w-full max-w-[520px] rounded-[28px] bg-white p-8 sm:p-10 text-left ring-1 ring-black/[0.07] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.35)]">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-400">Before you download</p>
                <h2 id="mc-before-title" className="mt-4 text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
                    One extra step the first time.
                </h2>
                <p className="mt-3 text-[15px] leading-[1.65] text-neutral-500">
                    MultiClip isn’t notarized by Apple yet, so macOS shows a warning the first time you open it.
                    Here’s how to get past it:
                </p>

                <ol className="mt-7 space-y-4">
                    {steps.map((s, i) => (
                        <li key={i} className="flex gap-4 text-[15px] leading-[1.6] text-neutral-500">
                            <span className="mt-[1px] grid h-6 w-6 shrink-0 place-items-center rounded-[7px] bg-[#111113] font-mono text-[12px] text-white">
                                {i + 1}
                            </span>
                            <span>{s}</span>
                        </li>
                    ))}
                </ol>

                <div className="mt-7 rounded-2xl bg-[#F7F7F8] p-4">
                    <p className="text-[13px] text-neutral-500">Prefer Terminal? After step 1, run:</p>
                    <div className="mt-2 flex items-center gap-3">
                        <code className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-[12.5px] text-[#1d1d1f]">{QUARANTINE_CMD}</code>
                        <button
                            onClick={copy}
                            className="shrink-0 h-7 px-3 rounded-full bg-white ring-1 ring-black/10 text-[12px] font-medium text-neutral-600 hover:text-black transition">
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="h-11 px-5 rounded-full text-[14px] font-medium text-neutral-500 hover:text-black transition">
                        Cancel
                    </button>
                    <a
                        href={DMG_URL}
                        download="MultiClip.dmg"
                        onClick={() => setTimeout(onClose, 400)}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#111113] px-6 text-[14px] font-medium text-white hover:bg-black active:scale-[0.98] transition">
                        <AppleLogo className="w-[13px] h-[13px] -mt-0.5" />
                        Download MultiClip.dmg
                    </a>
                </div>
            </motion.div>
        </div>,
        document.body,
    )
}

function DownloadButton({ size = 'lg' }) {
    const [open, setOpen] = useState(false)
    const cls =
        size === 'lg'
            ? 'h-12 px-6 text-[15px] gap-2.5'
            : 'h-9 px-4 text-[13px] gap-2'
    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={`inline-flex items-center rounded-full bg-[#111113] text-white font-medium tracking-[-0.01em] hover:bg-black active:scale-[0.98] transition ${cls}`}>
                <AppleLogo className={size === 'lg' ? 'w-[15px] h-[15px] -mt-0.5' : 'w-3 h-3 -mt-0.5'} />
                Download for Mac
            </button>
            <BeforeYouDownload open={open} onClose={() => setOpen(false)} />
        </>
    )
}

/* ---------- Sections ---------- */

function Nav() {
    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
                <a href="/multiclip" className="flex items-center gap-2.5">
                    <Mark className="w-[22px] h-[22px]" />
                    <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">MultiClip</span>
                </a>
                <div className="flex items-center gap-5">
                    <a
                        href={X_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 text-[13px] text-neutral-500 hover:text-[#1d1d1f] transition">
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
    const d = (ms) => ({ animationDelay: `${ms}ms` })
    return (
        <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-28 text-center">
            <p className="mc-rise text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-400">For macOS · Free</p>
            <h1 className="mt-6 text-[56px] leading-[0.98] sm:text-[96px] font-bold tracking-[-0.045em] text-[#1d1d1f]">
                <span className="mc-rise block" style={d(60)}>
                    Copy many.
                </span>
                <span className="mc-rise block text-[#A0A0A6]" style={d(360)}>
                    Paste any.
                </span>
            </h1>
            <p className="mc-rise mx-auto mt-8 max-w-[520px] text-[18px] leading-[1.6] text-neutral-500" style={d(600)}>
                Your Mac’s clipboard holds one thing. MultiClip gives it nine. Add a number to the
                shortcuts you already know.
            </p>
            <div className="mc-rise mt-10 flex flex-col items-center gap-4" style={d(750)}>
                <DownloadButton />
                <p className="text-[12.5px] text-neutral-400 font-mono">macOS 13+ · Apple silicon & Intel · 193 KB</p>
            </div>
        </section>
    )
}

function Demo() {
    const ref = useRef(null)
    const [muted, setMuted] = useState(true)

    const toggle = () => {
        const v = ref.current
        if (!v) return
        v.muted = !v.muted
        if (!v.muted) {
            v.currentTime = 0
            v.play()
        }
        setMuted(v.muted)
    }

    return (
        <section id="demo" className="mx-auto max-w-6xl px-4 sm:px-6 mt-20 sm:mt-24">
            <div
                style={{ animationDelay: '900ms', animationDuration: '1.1s' }}
                className="mc-rise relative overflow-hidden rounded-[22px] sm:rounded-[32px] bg-white ring-1 ring-black/[0.06] shadow-[0_50px_120px_-50px_rgba(0,0,0,0.30)]">
                <video
                    ref={ref}
                    className="block w-full aspect-video"
                    src="/multiclip/multiclip-demo.mp4"
                    poster="/multiclip/multiclip-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                />
                <button
                    onClick={toggle}
                    className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 h-8 px-3 rounded-full bg-white/90 backdrop-blur ring-1 ring-black/10 text-[12px] font-medium text-neutral-600 hover:text-black transition"
                    aria-label={muted ? 'Turn sound on' : 'Mute'}>
                    {muted ? 'Sound on' : 'Mute'}
                </button>
            </div>
        </section>
    )
}

function Shortcuts() {
    const rows = [
        { verb: 'Copy', keys: ['⌘', 'C'], text: 'Select anything and press ⌘C with a number. It goes into that slot.' },
        { verb: 'Paste', keys: ['⌘', 'V'], text: 'Press ⌘V with a number to paste from that slot. Any slot, any order.' },
    ]
    return (
        <section className="mx-auto max-w-6xl px-6 mt-32 sm:mt-44">
            <motion.h2 {...fadeUp} className="text-center text-[36px] sm:text-[52px] font-bold tracking-[-0.04em] text-[#1d1d1f]">
                Two shortcuts. Nine slots.
            </motion.h2>
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-black/[0.06] sm:grid-cols-2">
                {rows.map((r, i) => (
                    <motion.div
                        key={r.verb}
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                        className="bg-white p-7 sm:p-12">
                        <div className="flex items-center gap-2.5">
                            <Key>{r.keys[0]}</Key>
                            <Key>{r.keys[1]}</Key>
                            <span className="mx-1 text-neutral-300 text-xl">+</span>
                            <Key active accent>
                                <span className="font-mono text-[20px]">1–9</span>
                            </Key>
                        </div>
                        <h3 className="mt-10 text-[22px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">{r.verb}</h3>
                        <p className="mt-2 text-[16px] leading-[1.6] text-neutral-500 max-w-sm">{r.text}</p>
                    </motion.div>
                ))}
            </div>
            <motion.p {...fadeUp} className="mt-6 text-center text-[13.5px] text-neutral-400">
                You can hold all three keys together, or tap the number right after ⌘C / ⌘V. On their own,
                ⌘C and ⌘V still work as usual.
            </motion.p>
        </section>
    )
}

/* An in-page simulation: select text, press ⌘C then a number. */
function TryIt() {
    const [slots, setSlots] = useState(Array(9).fill(null))
    const [pending, setPending] = useState(null) // { mode: 'copy'|'paste', text, at }
    const [toast, setToast] = useState(null)
    const [pressed, setPressed] = useState({ meta: false, letter: null, digit: null })
    const pendingRef = useRef(null)
    pendingRef.current = pending
    const slotsRef = useRef(slots)
    slotsRef.current = slots

    useEffect(() => {
        let clearTimer
        const flash = (msg) => {
            setToast({ ...msg, id: Date.now() })
        }
        const onDown = (e) => {
            const k = e.key.toLowerCase()
            if (e.metaKey && (k === 'c' || k === 'v')) {
                const text = k === 'c' ? (window.getSelection()?.toString() || '').trim() : ''
                setPending({ mode: k === 'c' ? 'copy' : 'paste', text, at: Date.now() })
                setPressed({ meta: true, letter: k.toUpperCase(), digit: null })
                return
            }
            if (e.key === 'Meta') {
                setPressed((p) => ({ ...p, meta: true }))
                return
            }
            if (/^[1-9]$/.test(e.key)) {
                const p = pendingRef.current
                if (!p || Date.now() - p.at > 1500) return
                const n = Number(e.key)
                setPressed((s) => ({ ...s, digit: e.key }))
                if (p.mode === 'copy') {
                    const text = p.text || 'Select some text first, then press ⌘C and a number.'
                    if (p.text) {
                        setSlots((s) => s.map((v, i) => (i === n - 1 ? p.text : v)))
                        flash({ kind: 'copy', n, text })
                    } else {
                        flash({ kind: 'hint', n, text })
                    }
                } else {
                    const text = slotsRef.current[n - 1]
                    flash(text ? { kind: 'paste', n, text } : { kind: 'hint', n, text: `Slot ${n} is empty.` })
                }
                setPending(null)
            }
            clearTimeout(clearTimer)
            clearTimer = setTimeout(() => setPressed({ meta: false, letter: null, digit: null }), 900)
        }
        const onUp = (e) => {
            if (e.key === 'Meta') {
                clearTimeout(clearTimer)
                clearTimer = setTimeout(() => setPressed({ meta: false, letter: null, digit: null }), 500)
            }
        }
        window.addEventListener('keydown', onDown)
        window.addEventListener('keyup', onUp)
        return () => {
            window.removeEventListener('keydown', onDown)
            window.removeEventListener('keyup', onUp)
            clearTimeout(clearTimer)
        }
    }, [])

    useEffect(() => {
        if (!toast) return
        const t = setTimeout(() => setToast(null), 2600)
        return () => clearTimeout(t)
    }, [toast])

    return (
        <section className="hidden md:block mx-auto max-w-6xl px-6 mt-32 sm:mt-44">
            <motion.div {...fadeUp} className="rounded-[32px] bg-[#F7F7F8] px-10 py-16 sm:px-16 text-center">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-400">Try it here</p>
                <h2 className="mt-5 text-[32px] sm:text-[40px] font-bold tracking-[-0.035em] text-[#1d1d1f]">
                    Select a phrase below. Press ⌘C, then a number.
                </h2>
                <p className="mx-auto mt-8 max-w-2xl text-[22px] leading-[1.7] text-[#1d1d1f] font-serif selection:bg-[#B3D7FF]"
                    style={{ fontFamily: 'ui-serif, "New York", Georgia, serif' }}>
                    The best tools disappear the moment you start using them. Read
                    <span className="text-[#0066CC] underline underline-offset-4"> quiet.tools/research/attention</span>
                    , then gather what you need in one pass and put it down exactly where it belongs.
                </p>

                <div className="mt-12 flex items-center justify-center gap-2.5">
                    <Key active={pressed.meta}>⌘</Key>
                    <Key active={!!pressed.letter}>{pressed.letter || 'C'}</Key>
                    <span className="mx-1 text-neutral-300 text-xl">+</span>
                    <Key active={!!pressed.digit} accent>
                        <span className="font-mono text-[20px]">{pressed.digit || 'n'}</span>
                    </Key>
                </div>

                <div className="mt-10 inline-flex items-center gap-2 rounded-[22px] bg-white p-2.5 ring-1 ring-black/[0.05]">
                    {slots.map((v, i) => (
                        <div
                            key={i}
                            title={v || `Slot ${i + 1} is empty`}
                            className={[
                                'h-11 w-11 rounded-xl grid place-items-center font-mono text-[15px] transition-all duration-300',
                                v
                                    ? 'bg-[#111113] text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.4)]'
                                    : 'bg-white text-neutral-400 ring-1 ring-black/[0.07]',
                                toast && toast.n === i + 1 && toast.kind !== 'hint' ? 'scale-110' : '',
                            ].join(' ')}>
                            {i + 1}
                        </div>
                    ))}
                </div>

                <div className="mt-8 h-6">
                    {toast ? (
                        <motion.p
                            key={toast.id}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[14px] text-neutral-500">
                            {toast.kind === 'copy' && (
                                <>
                                    Saved to slot <span className="font-mono text-[#1d1d1f]">{toast.n}</span> —{' '}
                                    <span className="text-[#1d1d1f]">“{truncate(toast.text, 56)}”</span>
                                </>
                            )}
                            {toast.kind === 'paste' && (
                                <>
                                    ⌘V {toast.n} would paste <span className="text-[#1d1d1f]">“{truncate(toast.text, 56)}”</span>
                                </>
                            )}
                            {toast.kind === 'hint' && toast.text}
                        </motion.p>
                    ) : (
                        <p className="text-[14px] text-neutral-400">
                            Let go of ⌘ before you tap the number, so the browser doesn’t switch tabs.
                        </p>
                    )}
                </div>
            </motion.div>
        </section>
    )
}

function truncate(s, n) {
    return s.length > n ? s.slice(0, n - 1) + '…' : s
}

function Features() {
    const items = [
        { t: 'Keeps everything', d: 'Text, links, rich text, images and files are pasted back exactly as you copied them.' },
        { t: 'Invisible', d: 'No windows and no menu bar icon. It sits in the background until you use a shortcut.' },
        { t: 'Works everywhere', d: 'If an app supports copy and paste, it works with MultiClip.' },
        { t: 'Tiny and native', d: 'Written in Swift. 193 KB, with one build for both Apple silicon and Intel Macs.' },
    ]
    return (
        <section className="mx-auto max-w-6xl px-6 mt-32 sm:mt-44">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                {items.map((f, i) => (
                    <motion.div key={f.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                        <div className="h-px w-8 bg-[#111113]" />
                        <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">{f.t}</h3>
                        <p className="mt-2 text-[15px] leading-[1.65] text-neutral-500">{f.d}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

function Install() {
    const steps = [
        { n: '01', t: 'Drag to Applications', d: 'Open MultiClip.dmg and drag MultiClip into your Applications folder.' },
        {
            n: '02',
            t: 'Allow Accessibility',
            d: 'Open MultiClip. If macOS says it can’t check the developer, go to System Settings → Privacy & Security and click Open Anyway. Then switch MultiClip on under Privacy & Security → Accessibility.',
        },
        { n: '03', t: 'Open it once more', d: 'MultiClip now runs in the background. Copy with ⌘C + 1–9 and paste with ⌘V + 1–9.' },
    ]
    return (
        <section className="mx-auto max-w-6xl px-6 mt-32 sm:mt-44">
            <motion.h2 {...fadeUp} className="text-[36px] sm:text-[52px] font-bold tracking-[-0.04em] text-[#1d1d1f]">
                Set up in under a minute.
            </motion.h2>
            <div className="mt-14 divide-y divide-black/[0.07] border-y border-black/[0.07]">
                {steps.map((s, i) => (
                    <motion.div
                        key={s.n}
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                        className="grid gap-3 py-9 sm:grid-cols-[120px_280px_1fr] sm:gap-8 sm:items-baseline">
                        <span className="font-mono text-[13px] text-neutral-400">{s.n}</span>
                        <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">{s.t}</h3>
                        <p className="text-[16px] leading-[1.65] text-neutral-500 max-w-xl">{s.d}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

function FinalCTA() {
    return (
        <section className="mx-auto max-w-6xl px-6 mt-36 sm:mt-48 text-center">
            <motion.div {...fadeUp}>
                <Mark className="mx-auto w-12 h-12" />
                <h2 className="mt-10 text-[44px] sm:text-[72px] font-bold leading-[1] tracking-[-0.045em] text-[#1d1d1f]">
                    MultiClip
                </h2>
                <p className="mt-4 text-[20px] text-neutral-400">Copy many. Paste any.</p>
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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/[0.07] pt-8 text-[13px] text-neutral-400">
                <p>
                    Made by{' '}
                    <a
                        href={X_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#1d1d1f] hover:opacity-70 transition">
                        <XLogo className="w-3 h-3" />
                        @oniicode
                    </a>
                </p>
                <p className="font-mono">© {new Date().getFullYear()} MultiClip</p>
            </div>
        </footer>
    )
}

export default function MultiClipLanding() {
    return (
        <main className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased selection:bg-[#B3D7FF] selection:text-[#1d1d1f]">
            <Nav />
            <Hero />
            <Demo />
            <Shortcuts />
            <TryIt />
            <Features />
            <Install />
            <FinalCTA />
            <Footer />
        </main>
    )
}
