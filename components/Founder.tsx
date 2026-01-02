'use client'
import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Founder() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative shrink-0"
                        >
                            <div className="w-56 h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                                <Image
                                    src="/morgan.jpg"
                                    alt="Morgan - Founder of HighTempo"
                                    width={600}
                                    height={750}
                                    className="w-full h-full object-cover object-top"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl font-bold">HT</span>
                            </div>
                        </motion.div>

                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex-1"
                        >
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Behind the Build</p>
                            <h3 className="text-3xl font-bold text-slate-900 mb-1">Morgan</h3>
                            <p className="text-slate-500 font-medium mb-6">Founder</p>

                            <p className="text-slate-600 leading-relaxed mb-5">
                                Most outbound is broken because it ignores timing. You can have the perfect ICP,
                                the perfect message, and still get ignored—because the prospect isn&apos;t in a buying window.
                            </p>

                            <p className="text-slate-600 leading-relaxed mb-5">
                                I built HighTempo to fix that. We don&apos;t just tell you <em>who</em> to target.
                                We tell you <strong>when</strong> they&apos;re actually ready to talk—by triangulating
                                funding events, hiring patterns, and tech signals in real-time.
                            </p>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                The result? You stop wasting cycles on cold accounts and start landing meetings
                                with people who have an active need.
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white transition-all duration-200"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white transition-all duration-200"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
