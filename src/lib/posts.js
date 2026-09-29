import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import breaks from 'remark-breaks'

const postsDirectory = path.join(process.cwd(), 'src/data/blog')

export async function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  // Get file names under /src/data/blog
  const fileNames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'))
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Calculate reading time
    const wordCount = matterResult.content.trim().split(/\s+/g).length
    const readingTime = Math.max(1, Math.ceil(wordCount / 180))

    // Combine the data with the id
    return {
      id,
      slug: matterResult.data.slug || id,
      readingTime: `${readingTime} min read`,
      ...matterResult.data,
    }
  })
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'))
  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    const slug = matterResult.data.slug || fileName.replace(/\.md$/, '')
    
    return {
      id: slug,
    }
  })
}

export async function getPostData(id) {
  const fileNames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'))
  let fileName = null
  
  for (const file of fileNames) {
    const fullPath = path.join(postsDirectory, file)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    if (matterResult.data.slug === id || file.replace(/\.md$/, '') === id) {
      fileName = file
      break
    }
  }
  
  if (!fileName) {
    throw new Error(`Post with slug "${id}" not found`)
  }
  
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Return raw content for exact formatting preservation
  const rawContent = matterResult.content
  
  // Also provide HTML version for any markdown features (like lists)
  const processedContent = await remark()
    .use(breaks)
    .use(html, { sanitize: false })
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Calculate reading time
  const wordCount = matterResult.content.trim().split(/\s+/g).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 180))

  // Combine the data with the id, raw content, and contentHtml
  return {
    id,
    slug: matterResult.data.slug || id,
    rawContent,
    contentHtml,
    readingTime: `${readingTime} min read`,
    ...matterResult.data,
  }
}
