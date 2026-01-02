'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, TrendingUp, ShieldCheck, Activity, Users, Globe, Zap, FileText } from 'lucide-react'

// Icons used in accounts data: TrendingUp, Users, Zap, Globe, FileText, Activity, ShieldCheck

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const accounts = [
        {
            name: "Acme Enterprise",
            score: 98,
            status: "BUYING WINDOW OPEN",
            statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
            signals: [
                { icon: TrendingUp, text: "Series C Funding ($50M)", time: "2h ago", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: Users, text: "New VP of Sales Hired", time: "5h ago", color: "text-violet-600", bg: "bg-violet-50" },
                { icon: Zap, text: "Evaluating CRM Vendors", time: "1d ago", color: "text-amber-600", bg: "bg-amber-50" }
            ],
            action: "Agent engaging decision maker...",
            code: "EXEC_SEQ_04"
        },
        {
            name: "Global Dynamics",
            score: 94,
            status: "HIGH INTENT DETECTED",
            statusColor: "text-blue-700 bg-blue-50 border-blue-200",
            signals: [
                { icon: Globe, text: "Expansion into APAC", time: "1h ago", color: "text-indigo-600", bg: "bg-indigo-50" },
                { icon: FileText, text: "RFP Released: Marketing Tech", time: "3h ago", color: "text-pink-600", bg: "bg-pink-50" },
                { icon: Activity, text: "Website Traffic Spike (+40%)", time: "6h ago", color: "text-emerald-600", bg: "bg-emerald-50" }
            ],
            action: "Drafting personalized outreach...",
            code: "GEN_CONTENT_02"
        },
        {
            name: "Nexus Systems",
            score: 89,
            status: "TOP OF FUNNEL",
            statusColor: "text-violet-700 bg-violet-50 border-violet-200",
            signals: [
                { icon: Users, text: "Hiring: 5x SDRs", time: "30m ago", color: "text-orange-600", bg: "bg-orange-50" },
                { icon: TrendingUp, text: "Quarterly Revenue Beat", time: "4h ago", color: "text-teal-600", bg: "bg-teal-50" },
                { icon: ShieldCheck, text: "SOC2 Compliance Achieved", time: "1d ago", color: "text-slate-600", bg: "bg-slate-100" }
            ],
            action: "Enriching contact data...",
            code: "DATA_ENRICH_09"
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % accounts.length)
        }, 5000) // Switch every 5 seconds
        return () => clearInterval(timer)
    }, [accounts.length])

    const currentAccount = accounts[currentIndex]

    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[#FAFAFA] -z-20" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/80 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left Column: Copy */}
                <div className="max-w-3xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 text-sm font-semibold mb-10">
                            Timing is Everything
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]">
                            Know Who&apos;s Ready to Buy.
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-xl font-light">
                            ICP fit is table stakes. HighTempo triangulates funding, hiring, and tech signals to detect the exact <strong>buying window</strong> your competitors miss.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 mb-16">
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-lg transition-all hover:-translate-y-1 shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 rounded-lg"
                            >
                                Get Your Free Analysis
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-semibold text-lg transition-all rounded-lg shadow-sm hover:shadow-md"
                            >
                                See How It Works
                            </button>
                        </div>

                        <div className="flex items-center gap-12 text-sm font-medium text-slate-500 border-t border-slate-200 pt-8">
                            <div className="flex items-center gap-2">
                                <Activity className="w-5 h-5 text-slate-400" />
                                <span>30+ Signal Sources</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-slate-400" />
                                <span>Enterprise Ready</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Premium Visual */}
                <div className="relative h-[700px] w-full hidden lg:flex items-center justify-center">
                    <div className="relative w-full max-w-lg aspect-[4/5]">
                        {/* Main Glass Card */}
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-[0_8px_32px_rgba(30,58,138,0.1)] overflow-hidden z-20 flex flex-col">

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    className="flex-1 flex flex-col"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Header */}
                                    <div className="p-8 border-b border-slate-100/50 flex justify-between items-center bg-white/40">
                                        <div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Target Account</div>
                                            <div className="text-xl font-bold text-slate-900">{currentAccount.name}</div>
                                        </div>
                                        <div className={`px-3 py-1 text-xs font-bold rounded-full border ${currentAccount.statusColor}`}>
                                            {currentAccount.status}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col gap-6">
                                        {/* Signal Strength Meter */}
                                        <div>
                                            <div className="flex justify-between items-end mb-3">
                                                <span className="text-sm font-medium text-slate-500">Propensity Score</span>
                                                <span className="text-3xl font-bold text-blue-600">{currentAccount.score}/100</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-blue-600"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${currentAccount.score}%` }}
                                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                                />
                                            </div>
                                        </div>

                                        {/* Recent Signals List */}
                                        <div className="space-y-3">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Detected Signals</p>

                                            {currentAccount.signals.map((signal, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100 shadow-sm"
                                                    initial={{ x: 20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3 + (i * 0.15) }}
                                                >
                                                    <div className={`p-2 rounded-lg ${signal.bg} ${signal.color}`}>
                                                        <signal.icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-slate-800">{signal.text}</div>
                                                        <div className="text-xs text-slate-400">Source: Public Filing • {signal.time}</div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Agent Action */}
                                        <motion.div
                                            className="mt-auto p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                                </span>
                                                <span className="text-sm font-medium">{currentAccount.action}</span>
                                            </div>
                                            <span className="text-xs text-slate-400 font-mono">{currentAccount.code}</span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Decorative Elements behind - static */}
                        <div className="absolute top-10 -right-10 w-full h-full bg-slate-200/50 rounded-3xl -z-10 rotate-6" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}
