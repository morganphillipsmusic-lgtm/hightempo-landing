'use client'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, BarChart3, Sparkles } from 'lucide-react'

export default function ICPEngine() {
    const liftVariables = [
        { variable: "Series B-C Funding", lift: "+312%", direction: "up", confidence: 94, category: "Funding" },
        { variable: "Snowflake in Tech Stack", lift: "+245%", direction: "up", confidence: 91, category: "Technology" },
        { variable: "Hiring SDRs (3+ roles)", lift: "+189%", direction: "up", confidence: 88, category: "Hiring" },
        { variable: "US-Based HQ", lift: "+156%", direction: "up", confidence: 92, category: "Firmographic" },
        { variable: "51-200 Employees", lift: "+134%", direction: "up", confidence: 89, category: "Firmographic" },
        { variable: "Using HubSpot CRM", lift: "+98%", direction: "up", confidence: 85, category: "Technology" },
        { variable: "Recent Leadership Change", lift: "+76%", direction: "up", confidence: 82, category: "Signal" },
        { variable: "Enterprise (1000+)", lift: "-67%", direction: "down", confidence: 87, category: "Firmographic" },
    ]

    const correlationMatrix = [
        { combo: "Funding + Hiring", correlation: 0.89, deals: 34 },
        { combo: "Tech Stack + Size", correlation: 0.76, deals: 28 },
        { combo: "Industry + Region", correlation: 0.71, deals: 22 },
    ]

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">ICP Intelligence</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Your ICP, Quantified.
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        We don&apos;t guess who your ideal customer is. We analyze your closed-won deals to find the
                        <strong> statistical patterns</strong> that actually predict success—variables your team
                        would never think to track.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Main Lift Table */}
                    <motion.div
                        className="lg:col-span-3 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-6 border-b border-slate-200 bg-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Propensity Lift Analysis</h3>
                                    <p className="text-sm text-slate-500">Variables correlated with closed-won deals</p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                                    <span className="text-xs font-bold text-emerald-700">142 Deals Analyzed</span>
                                </div>
                            </div>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {liftVariables.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center justify-between p-4 hover:bg-white transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                            item.direction === 'up' ? 'bg-emerald-100' : 'bg-red-100'
                                        }`}>
                                            {item.direction === 'up' ? (
                                                <TrendingUp className="w-5 h-5 text-emerald-600" />
                                            ) : (
                                                <TrendingDown className="w-5 h-5 text-red-500" />
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">{item.variable}</p>
                                            <p className="text-xs text-slate-400">{item.category}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className={`text-lg font-bold ${
                                                item.direction === 'up' ? 'text-emerald-600' : 'text-red-500'
                                            }`}>
                                                {item.lift}
                                            </p>
                                            <p className="text-xs text-slate-400">win rate lift</p>
                                        </div>
                                        <div className="w-16">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[10px] font-medium text-slate-400">Conf.</span>
                                                <span className="text-[10px] font-bold text-slate-600">{item.confidence}%</span>
                                            </div>
                                            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-500 rounded-full"
                                                    style={{ width: `${item.confidence}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Side Panel - Insights */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Correlation Combos */}
                        <div className="bg-slate-900 rounded-2xl p-6 text-white">
                            <h4 className="font-bold mb-1">Signal Combinations</h4>
                            <p className="text-sm text-slate-400 mb-6">Variables that predict together</p>

                            <div className="space-y-4">
                                {correlationMatrix.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-sm">{item.combo}</p>
                                            <p className="text-xs text-slate-500">{item.deals} deals</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                                                    style={{ width: `${item.correlation * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-mono text-blue-400">{item.correlation.toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Insight Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 text-white">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Key Discovery</h4>
                                    <p className="text-sm text-blue-100">From your data analysis</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-blue-50">
                                Companies with <strong>Series B funding</strong> + <strong>actively hiring SDRs</strong> have a
                                <span className="text-white font-bold"> 4.2x higher</span> close rate than your average lead.
                                This pattern appears in 34 of your closed-won deals.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                <p className="text-3xl font-bold text-slate-900">47</p>
                                <p className="text-sm text-slate-500">Variables analyzed</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                <p className="text-3xl font-bold text-slate-900">8</p>
                                <p className="text-sm text-slate-500">High-lift signals</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
