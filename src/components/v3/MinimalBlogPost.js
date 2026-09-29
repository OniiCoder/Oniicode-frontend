'use client'

import Link from 'next/link'
import { SunIcon, BedDoubleIcon } from '@/components/v3/Icons'
import { useTheme } from '@/hooks/useTheme'

function formatDate(dateString) {
  if (!dateString) return ''
  try {
    const parts = dateString.split('-').map(Number)
    if (parts.length === 3) {
      const date = new Date(parts[0], parts[1] - 1, parts[2])
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }
    return dateString
  } catch (e) {
    return dateString
  }
}

export default function MinimalBlogPost({ post }) {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return null
  }

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0a0a0a] text-[#e5e5e5]' : 'bg-[#f4f1ea] text-[#1c1917]'
      }`}
    >
      <div className="min-h-screen flex flex-col justify-between max-w-[580px] w-full mx-auto px-6 py-16 sm:py-24 font-sans">
        {/* Main Content */}
        <main>
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/blog"
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-neutral-400 hover:text-neutral-100'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              ← Writing
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8 pb-6 border-b border-neutral-300/60 dark:border-neutral-800/80">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readingTime || '2 min read'}</span>
            </div>

            <h1
              className={`text-2xl sm:text-3xl font-bold tracking-tight font-sans leading-[1.3] mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">
                By {post.author || 'Peter Onisha'}
              </span>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                        theme === 'dark'
                          ? 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                          : 'bg-neutral-200/60 text-neutral-700 border border-neutral-300/40'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Article Body */}
          <article
            className={`article-prose ${
              theme === 'dark'
                ? 'text-neutral-200 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-neutral-100 [&_h4]:text-neutral-200 [&_strong]:text-white [&_blockquote]:border-neutral-700 [&_blockquote]:text-neutral-300 [&_code]:bg-neutral-900 [&_code]:text-neutral-200 [&_pre]:bg-[#121212] [&_pre]:border-neutral-800 [&_a]:text-neutral-100 [&_a]:decoration-neutral-600 hover:[&_a]:decoration-neutral-100'
                : 'text-neutral-800 [&_h1]:text-neutral-900 [&_h2]:text-neutral-900 [&_h3]:text-neutral-900 [&_h4]:text-neutral-900 [&_strong]:text-neutral-900 [&_blockquote]:border-neutral-300 [&_blockquote]:text-neutral-700 [&_code]:bg-neutral-200/80 [&_code]:text-neutral-900 [&_pre]:bg-neutral-900 [&_pre]:text-neutral-100 [&_a]:text-neutral-900 [&_a]:decoration-neutral-400 hover:[&_a]:decoration-neutral-900'
            }`}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Article Bottom Navigation */}
          <nav
            className={`mt-14 pt-6 border-t flex items-center justify-between text-sm ${
              theme === 'dark' ? 'border-neutral-800/80' : 'border-neutral-300/60'
            }`}
          >
            <Link
              href="/blog"
              className={`underline underline-offset-4 font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-neutral-300 hover:text-white decoration-neutral-600 hover:decoration-white'
                  : 'text-neutral-700 hover:text-neutral-950 decoration-neutral-400 hover:decoration-neutral-950'
              }`}
            >
              ← Back to all writings
            </Link>
            <Link
              href="/"
              className={`underline underline-offset-4 font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-neutral-300 hover:text-white decoration-neutral-600 hover:decoration-white'
                  : 'text-neutral-700 hover:text-neutral-950 decoration-neutral-400 hover:decoration-neutral-950'
              }`}
            >
              Home →
            </Link>
          </nav>
        </main>

        {/* Footer & Theme Toggle */}
        <footer
          className={`mt-16 pt-8 border-t flex justify-center ${
            theme === 'dark' ? 'border-neutral-800/60' : 'border-neutral-300/40'
          }`}
        >
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className={`p-2.5 rounded-full transition-all cursor-pointer ${
              theme === 'dark'
                ? 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50'
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/50'
            }`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <BedDoubleIcon className="w-5 h-5 stroke-[1.75]" />
            ) : (
              <SunIcon className="w-5 h-5 stroke-[1.75]" />
            )}
          </button>
        </footer>
      </div>
    </div>
  )
}
