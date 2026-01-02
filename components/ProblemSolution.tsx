'use client'
import { motion } from 'framer-motion'
import { Mail, List, Filter, Crosshair, Users, Target } from 'lucide-react'

export default function ProblemSolution() {
    const comparisons = [
        {
            problem: "The Static List",
            problemDesc: "50,000 leads that 'fit' your ICP but aren't buying.",
            problemIcon: List,
            solution: "The Buying Window",
            solutionDesc: "We identify the 127 accounts actively in-market this week.",
            solutionIcon: Crosshair,
        },
        {
            problem: "Linear Sequencing",
            problemDesc: "Blast everyone with the same generic 'value prop'.",
            problemIcon: Mail,
            solution: "Triangulated Context",
            solutionDesc: "Outreach triggered by specific events (Funding + Hiring + Tech).",
            solutionIcon: Filter,
        },
        {
            problem: "Guesswork",
            problemDesc: "Hoping you catch them at the right time.",
            problemIcon: Users,
            solution: "Precision Timing",
            solutionDesc: "Engage exactly when the internal need spikes.",
            solutionIcon: Target,
        }
    ]

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row gap-16 mb-24 items-end justify-between">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The Logic Gap</h2>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Why Most Outbound Fails.</h2>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            You&apos;re pitching features to people who don&apos;t have a problem yet.
                            <strong> Stop selling to the 99% who aren&apos;t ready.</strong> Focus entirely on the 1% who are.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {comparisons.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Problem Section (Top Half) */}
                            <div className="bg-slate-50 p-8 border-b border-slate-100 relative overflow-hidden h-[200px]">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <item.problemIcon className="w-24 h-24 text-slate-400" />
                                </div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-slate-200/50 rounded text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                                        Standard Approach
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-400 mb-2">{item.problem}</h3>
                                    <p className="text-slate-500 text-sm">{item.problemDesc}</p>
                                </div>
                            </div>

                            {/* Solution Section (Bottom Half) */}
                            <div className="bg-white p-8 relative overflow-hidden group-hover:bg-blue-50/30 transition-colors duration-500 h-[220px]">
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-blue-100/50 rounded text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
                                        HighTempo Advantage
                                    </div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <item.solutionIcon className="w-6 h-6 text-blue-600" />
                                        <h3 className="text-xl font-bold text-slate-900">{item.solution}</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.solutionDesc}</p>
                                </div>

                                {/* Decorative Gradient Blob */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
