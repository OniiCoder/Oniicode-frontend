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

export default function MinimalBlogList({ posts = [] }) {
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
        <main className="space-y-8">
          {/* Back Navigation */}
          <div>
            <Link
              href="/"
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-neutral-400 hover:text-neutral-100'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              ← Peter Onisha Peregbakumo
            </Link>
          </div>

          {/* Header */}
          <header className="space-y-2">
            <h1
              className={`text-2xl sm:text-3xl font-bold tracking-tight font-sans ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Writing
            </h1>
            <p
              className={`text-[15px] sm:text-[16px] leading-[1.8] font-normal ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              Notes, recaps, and deep-dives on DevOps, software engineering, AI, and building systems.
            </p>
          </header>

          {/* Articles List */}
          <section className="space-y-0 pt-2">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug || post.id}`}
                className={`group block py-6 border-b first:border-t transition-colors ${
                  theme === 'dark'
                    ? 'border-neutral-800/80 hover:border-neutral-700'
                    : 'border-neutral-300/70 hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <span>{post.readingTime || '2 min read'}</span>
                </div>

                <h2
                  className={`text-lg sm:text-[19px] font-bold tracking-tight mb-2 transition-colors group-hover:underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-600 ${
                    theme === 'dark' ? 'text-neutral-100 group-hover:text-white' : 'text-neutral-900'
                  }`}
                >
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p
                    className={`text-sm leading-relaxed line-clamp-2 ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {post.excerpt}
                  </p>
                )}

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
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
              </Link>
            ))}

            {posts.length === 0 && (
              <div className="py-12 text-center text-sm text-neutral-500">
                No writings published yet. Check back soon!
              </div>
            )}
          </section>
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
