import { getSortedPostsData } from '@/lib/posts'
import MinimalBlogList from '@/components/v3/MinimalBlogList'

export const metadata = {
  title: 'Writing | Peter Onisha Peregbakumo',
  description: 'Articles, reflections, and technical notes by Peter Onisha Peregbakumo on DevOps, software engineering, AI, and systems.',
  openGraph: {
    title: 'Writing | Peter Onisha Peregbakumo',
    description: 'Articles, reflections, and technical notes by Peter Onisha Peregbakumo on DevOps, software engineering, AI, and systems.',
    url: 'https://oniicode.com/blog',
    siteName: 'Peter Onisha Peregbakumo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@oniicode',
    creator: '@oniicode',
    title: 'Writing | Peter Onisha Peregbakumo',
    description: 'Articles, reflections, and technical notes by Peter Onisha Peregbakumo on DevOps, software engineering, AI, and systems.',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData()
  return <MinimalBlogList posts={allPostsData} />
}