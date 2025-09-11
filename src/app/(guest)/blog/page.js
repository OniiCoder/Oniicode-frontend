import Layout2 from '@/app/(auth)/layout2'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

const Blog = async () => {
  const allPostsData = await getSortedPostsData()
    return (
        <Layout2>
            <div className="mt-4 px-5">
                <div className="mt-4 flex gap-2 text-[24px] font-sans text-black font-bold">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.01 2.91995L18.91 5.53995C20.61 6.28995 20.61 7.52995 18.91 8.27995L13.01 10.8999C11.24 11.1999 11.24 11.1999 10.57 10.8999L4.67002 8.27995C2.97002 7.52995 2.97002 6.28995 4.67002 5.53995L10.57 2.91995C11.24 2.61995 12.34 2.61995 13.01 2.91995Z"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Insights & adventures
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {allPostsData.map(({ id, date, title, excerpt, author, tags, slug }) => (
                        <Link key={id} href={`/blog/${slug || id}`}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <span>{new Date(date).toLocaleDateString()}</span>
                                    <span>•</span>
                                    <span>{author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {excerpt}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {tags && tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {allPostsData.length === 0 && (
                    <div className='mt-8 inline-flex'>
                        <div className="flex items-center gap-[11px] border-[1px] border-[#E2E2E2] rounded-full p-2">
                            <div>
                                <div className="bg-[#FAB12F] w-2 h-2 rounded-full"></div>
                            </div>
                            <div className="text-xs">coming soon</div>
                        </div>
                    </div>
                )}
            </div>
        </Layout2>
    )
}

export default Blog