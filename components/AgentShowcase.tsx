'use client'
import { motion } from 'framer-motion'
import { Brain, ScanSearch, Handshake, Cpu, MessageSquare } from 'lucide-react'

export default function AgentShowcase() {
    const agents = [
        {
            name: "Scout",
            role: "Market Reconnaissance",
            icon: ScanSearch,
            desc: "Scans 30+ streams for buying signals.",
            stats: ["Funding", "Hiring", "Tech"],
            status: "Scanning",
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-200",
            glow: "via-blue-400"
        },
        {
            name: "Analyst",
            role: "Strategic Intelligence",
            icon: Brain,
            desc: "Synthesizes data into propensity models.",
            stats: ["Pattern Matching", "Scoring"],
            status: "Processing",
            color: "text-violet-600",
            bg: "bg-violet-50",
            border: "border-violet-200",
            glow: "via-violet-400"
        },
        {
            name: "Scribe",
            role: "Hyper-Personalization",
            icon: MessageSquare,
            desc: "Crafts context-aware outreach at scale.",
            stats: ["NLP", "Tone Adjust"],
            status: "Drafting",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            border: "border-indigo-200",
            glow: "via-indigo-400"
        },
        {
            name: "Closer",
            role: "Opportunity Management",
            icon: Handshake,
            desc: "Orchestrates follow-ups and meetings.",
            stats: ["Scheduling", "Nurture"],
            status: "Active",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-200",
            glow: "via-emerald-400"
        }
    ]

    return (
        <section id="agents" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Circuit Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-6">
                        <Cpu className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">The Neural Network</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Your Autonomous Revenue Team</h2>
                    <p className="text-xl text-slate-600">
                        Specialized agents working in concert to execute complex sales motions with human-like nuance and machine-like scale.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {agents.map((agent, i) => (
                        <motion.div
                            key={i}
                            className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {/* Header with Icon and Status */}
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-xl ${agent.bg} ${agent.color} border ${agent.border} group-hover:scale-110 transition-transform duration-300`}>
                                    <agent.icon className="w-6 h-6" />
                                </div>
                                <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded text-[10px] font-bold uppercase text-slate-500 border border-slate-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    {agent.status}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{agent.name}</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{agent.role}</p>
                            <p className="text-sm text-slate-600 mb-6 leading-relaxed">{agent.desc}</p>

                            {/* Capabilities Pills */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {agent.stats.map((stat, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-semibold text-slate-500">
                                        {stat}
                                    </span>
                                ))}
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${agent.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
