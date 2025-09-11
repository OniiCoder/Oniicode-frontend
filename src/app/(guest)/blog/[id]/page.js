import Layout2 from '@/app/(auth)/layout2'
import Link from 'next/link'
import { getAllPostIds, getPostData } from '@/lib/posts'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id)
  return {
    title: `${postData.title} | Peter Onisha's Blog`,
    description: postData.excerpt,
    keywords: postData.tags ? postData.tags.join(', ') : '',
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      type: 'article',
      publishedTime: postData.date,
      authors: [postData.author],
      tags: postData.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.excerpt,
    },
  }
}

const BlogPost = async ({ params }) => {
  const postData = await getPostData(params.id)

  return (
    <Layout2>
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
