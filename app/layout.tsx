import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hightempo.net'),
  title: {
    default: 'HighTempo | AI Sales Intelligence',
    template: '%s | HighTempo'
  },
  icons: {
    icon: '/ht-favicon.jpg',
    shortcut: '/ht-favicon.jpg',
    apple: '/ht-favicon.jpg',
  },
  description: 'Stop guessing who to call. HighTempo uses AI agents to detect buying signals, identify ready-to-buy accounts, and deliver qualified pipeline to your inbox weekly.',
  keywords: [
    'sales intelligence',
    'AI sales agents',
    'lead generation',
    'buying signals',
    'B2B sales',
    'sales automation',
    'ICP analysis',
    'pipeline generation',
    'SDR automation',
    'account-based marketing'
  ],
  authors: [{ name: 'Morgan', url: 'https://hightempo.net' }],
  creator: 'HighTempo',
  publisher: 'HighTempo',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hightempo.net',
    siteName: 'HighTempo',
    title: 'HighTempo - AI-Powered Sales Intelligence Platform',
    description: 'Stop guessing who to call. AI agents detect buying signals and deliver qualified accounts to your inbox weekly. Save 20+ hours per SDR.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HighTempo - AI Sales Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HighTempo - AI-Powered Sales Intelligence',
    description: 'AI agents detect buying signals and deliver qualified accounts weekly. Save 20+ hours per SDR.',
    images: ['/og-image.png'],
    creator: '@hightempo',
  },
  alternates: {
    canonical: 'https://hightempo.net',
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HighTempo',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI-powered sales intelligence platform that detects buying signals and delivers qualified accounts weekly.',
  url: 'https://hightempo.net',
  author: {
    '@type': 'Person',
    name: 'Morgan',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free analysis available',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-white text-slate-900")}>
        {children}
      </body>
    </html>
  )
}
