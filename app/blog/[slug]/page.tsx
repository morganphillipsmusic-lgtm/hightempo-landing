import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  }
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-slate-900 mt-10 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-700 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-slate-700 mb-4 space-y-2 ml-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-slate-700" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-600 hover:text-blue-700 underline underline-offset-2" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-slate-50 italic text-slate-700" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props} />
  ),
  hr: () => <hr className="my-8 border-slate-200" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-slate-200 rounded-lg" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-slate-50 px-4 py-2 text-left font-semibold text-slate-900 border-b border-slate-200" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-2 text-slate-700 border-b border-slate-100" {...props} />
  ),
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    image: post.image,
    publisher: {
      '@type': 'Organization',
      name: 'HighTempo',
      url: 'https://hightempo.net',
    },
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to blog
            </Link>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 mb-8">
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-medium">{post.author}</span>
                {post.authorRole && (
                  <span className="text-slate-400">({post.authorRole})</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <section className="px-6 pb-8">
            <div className="max-w-4xl mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </section>
        )}

        {/* Content */}
        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight, rehypeSlug],
                },
              }}
            />
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to find accounts like these?
            </h2>
            <p className="text-slate-400 mb-8">
              Let our AI detect buying signals and deliver qualified accounts weekly.
            </p>
            <Link
              href="/#cta"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
