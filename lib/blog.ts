import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorRole?: string
  tags: string[]
  image?: string
  readingTime: string
  content: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorRole?: string
  tags: string[]
  image?: string
  readingTime: string
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author || 'Morgan',
        authorRole: data.authorRole,
        tags: data.tags || [],
        image: data.image,
        readingTime: readingTime(content).text,
      }
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(postsDirectory)) {
    return null
  }

  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author || 'Morgan',
    authorRole: data.authorRole,
    tags: data.tags || [],
    image: data.image,
    readingTime: readingTime(content).text,
    content,
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}
