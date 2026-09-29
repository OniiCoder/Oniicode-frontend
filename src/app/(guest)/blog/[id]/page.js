import { getAllPostIds, getPostData } from '@/lib/posts'
import MinimalBlogPost from '@/components/v3/MinimalBlogPost'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export async function generateMetadata({ params }) {
  try {
    const postData = await getPostData(params.id)
    const imageUrl = postData.image ? `https://oniicode.com${postData.image}` : 'https://oniicode.com/og-image.jpg'
    
    return {
      title: `${postData.title} | Peter Onisha Peregbakumo`,
      description: postData.excerpt,
      keywords: postData.tags ? postData.tags.join(', ') : '',
      authors: [{ name: postData.author || 'Peter Onisha Peregbakumo' }],
      openGraph: {
        title: postData.title,
        description: postData.excerpt,
        type: 'article',
        publishedTime: postData.date,
        authors: [postData.author || 'Peter Onisha Peregbakumo'],
        tags: postData.tags,
        url: `https://oniicode.com/blog/${params.id}`,
        siteName: 'Peter Onisha Peregbakumo',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: postData.title,
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@oniicode',
        creator: '@oniicode',
        title: postData.title,
        description: postData.excerpt,
        images: [imageUrl],
      },
      alternates: {
        canonical: `/blog/${params.id}`,
      },
    }
  } catch (e) {
    return {
      title: 'Writing | Peter Onisha Peregbakumo',
      description: 'Article by Peter Onisha Peregbakumo',
    }
  }
}

export default async function BlogPostPage({ params }) {
  const postData = await getPostData(params.id)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "description": postData.excerpt,
    "author": {
      "@type": "Person",
      "name": postData.author || "Peter Onisha Peregbakumo",
      "url": "https://oniicode.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "Peter Onisha Peregbakumo",
      "url": "https://oniicode.com"
    },
    "datePublished": postData.date,
    "dateModified": postData.date,
    "url": `https://oniicode.com/blog/${params.id}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://oniicode.com/blog/${params.id}`
    },
    "keywords": postData.tags ? postData.tags.join(', ') : '',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MinimalBlogPost post={postData} />
    </>
  )
}
