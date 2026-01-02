'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20)
    })

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 py-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)]'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 group">
                    <span className="group-hover:text-blue-600 transition-colors">HighTempo</span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <div className="flex gap-8 text-sm font-semibold text-slate-600">
                        {['Methodology', 'Agents', 'Infrastructure'].map((item) => (
                            <Link
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                className="relative hover:text-blue-600 transition-colors py-1 group"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="/blog"
                            className="relative hover:text-blue-600 transition-colors py-1 group"
                        >
                            Insights
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>

                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all active:scale-95"
                    >
                        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center gap-2">
                            Get Free Analysis
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
