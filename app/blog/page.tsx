import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Calendar, Clock, ArrowRight, Radio, Target, BarChart3, Mail, Timer, GitCompare } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Insights - Sales Intelligence',
  description: 'Expert insights on B2B sales, buying signals, lead generation, and AI-powered sales intelligence. Learn how top sales teams find and close more deals.',
  openGraph: {
    title: 'HighTempo Insights - Sales Intelligence',
    description: 'Expert insights on B2B sales, buying signals, lead generation, and AI-powered sales intelligence.',
  },
}

// Map slugs to icons and gradients for visual variety
const postStyles: Record<string, { icon: React.ElementType; gradient: string }> = {
  'what-are-buying-signals': { icon: Radio, gradient: 'from-blue-600 via-blue-700 to-indigo-800' },
  'icp-definition-guide': { icon: Target, gradient: 'from-violet-600 via-purple-700 to-indigo-800' },
  'sales-intelligence-tools-2026': { icon: BarChart3, gradient: 'from-emerald-600 via-teal-700 to-cyan-800' },
  'cold-email-personalization': { icon: Mail, gradient: 'from-orange-500 via-amber-600 to-yellow-700' },
  'sdr-productivity-guide': { icon: Timer, gradient: 'from-rose-600 via-pink-700 to-fuchsia-800' },
  'intent-data-vs-buying-signals': { icon: GitCompare, gradient: 'from-slate-700 via-slate-800 to-zinc-900' },
}

const defaultStyle = { icon: Radio, gradient: 'from-slate-700 to-slate-900' }

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  const getPostStyle = (slug: string) => postStyles[slug] || defaultStyle

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              Sales Intelligence Insights
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-4xl">
              Insights for modern sales teams
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Strategies for finding ready-to-buy accounts, detecting buying signals,
              and building pipeline that actually converts.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="px-6 pb-16">
            <div className="max-w-6xl mx-auto">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                {(() => {
                  const style = getPostStyle(featuredPost.slug)
                  const Icon = style.icon
                  return (
                    <article className="grid md:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                      <div className={`aspect-video bg-gradient-to-br ${style.gradient} rounded-xl flex items-center justify-center overflow-hidden relative`}>
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 left-4 w-32 h-32 border border-white/30 rounded-full" />
                          <div className="absolute bottom-4 right-4 w-48 h-48 border border-white/20 rounded-full" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full" />
                        </div>
                        <div className="text-white/90 text-center p-8 relative z-10">
                          <Icon className="w-16 h-16 mx-auto mb-4 opacity-90" strokeWidth={1.5} />
                          <div className="text-sm uppercase tracking-widest font-medium opacity-80">Featured</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {featuredPost.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-slate-600 mb-6 line-clamp-3">
                          {featuredPost.description}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-slate-500">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPost.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readingTime}
                          </span>
                        </div>
                      </div>
                    </article>
                  )
                })()}
              </Link>
            </div>
          </section>
        )}

        {/* Other Posts Grid */}
        {otherPosts.length > 0 && (
          <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">More Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => {
                  const style = getPostStyle(post.slug)
                  const Icon = style.icon
                  return (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                      <article className="h-full flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                        <div className={`aspect-[16/10] bg-gradient-to-br ${style.gradient} flex items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute -top-8 -right-8 w-32 h-32 border border-white/30 rounded-full" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-white/20 rounded-full" />
                          </div>
                          <Icon className="w-12 h-12 text-white/90 relative z-10" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 p-6 flex flex-col">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1">
                            {post.description}
                          </p>
                          <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readingTime}
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Empty State */}
        {posts.length === 0 && (
          <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto text-center py-20">
              <p className="text-slate-500 text-lg mb-4">No posts yet. Check back soon!</p>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
              >
                Back to home <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to find accounts that are actually buying?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Stop guessing. Let our AI agents detect buying signals and deliver qualified accounts to your inbox weekly.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Your Free Analysis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
