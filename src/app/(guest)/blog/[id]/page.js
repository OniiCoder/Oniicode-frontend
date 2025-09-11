import Layout2 from '@/app/(auth)/layout2'
import Link from 'next/link'
import { getAllPostIds, getPostData } from '@/lib/posts'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id)
  const imageUrl = postData.image ? `https://oniicode.com${postData.image}` : null
  const imageType = postData.image?.endsWith('.svg') ? 'image/svg+xml' : 'image/png'
  
  return {
    title: `${postData.title} | Peter Onisha's Blog`,
    description: postData.excerpt,
    keywords: postData.tags ? postData.tags.join(', ') : '',
    authors: [{ name: postData.author }],
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      type: 'article',
      publishedTime: postData.date,
      authors: [postData.author],
      tags: postData.tags,
      url: `https://oniicode.com/blog/${params.id}`,
      siteName: 'Oniicode',
      images: imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: postData.title,
          type: imageType,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@oniicode',
      creator: '@oniicode',
      title: postData.title,
      description: postData.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `/blog/${params.id}`,
    },
  }
}

const BlogPost = async ({ params }) => {
  const postData = await getPostData(params.id)
  const imageUrl = postData.image ? `https://oniicode.com${postData.image}` : null

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "description": postData.excerpt,
    "author": {
      "@type": "Person",
      "name": postData.author,
      "url": "https://oniicode.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Oniicode",
      "logo": {
        "@type": "ImageObject",
        "url": "https://oniicode.com/logo.png"
      }
    },
    "datePublished": postData.date,
    "dateModified": postData.date,
    "url": `https://oniicode.com/blog/${params.id}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://oniicode.com/blog/${params.id}`
    },
    "keywords": postData.tags ? postData.tags.join(', ') : '',
    ...(imageUrl && {
      "image": {
        "@type": "ImageObject",
        "url": imageUrl,
        "width": 1200,
        "height": 630
      }
    })
  }

  return (
    <Layout2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Additional meta tags for better SEO */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/svg+xml" />
      <meta name="twitter:image:alt" content={postData.title} />
      <meta name="article:author" content={postData.author} />
      <meta name="article:published_time" content={postData.date} />
      <meta name="article:section" content="Personal" />
      {postData.tags && postData.tags.map((tag, index) => (
        <meta key={index} name="article:tag" content={tag} />
      ))}
      <div className="mt-4 px-5 max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M19 12H5M12 19L5 12L12 5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Back to blog
        </Link>

        {/* Article header */}
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Featured image */}
          {postData.image && (
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <img 
                src={postData.image} 
                alt={postData.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>{new Date(postData.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{postData.author}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {postData.title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              {postData.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {postData.tags && postData.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Article content */}
          <div className="px-8 pb-8">
            <div 
              className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap"
            >
              {postData.rawContent}
            </div>
          </div>
        </article>

        {/* Author bio section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-semibold">
                {postData.author?.charAt(0) || 'P'}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{postData.author}</h3>
              <p className="text-gray-600 text-sm">
                Sharing thoughts and experiences from the journey of life and work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  )
}

export default BlogPost
