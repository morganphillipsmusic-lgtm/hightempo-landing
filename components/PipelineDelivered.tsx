'use client'
import { motion } from 'framer-motion'
import { MapPin, Users, Zap, Mail, Linkedin, ExternalLink, CheckCircle2 } from 'lucide-react'

export default function PipelineDelivered() {
    const targetAccounts = [
        {
            company: "Meridian Analytics",
            logo: "MA",
            industry: "Data Infrastructure",
            location: "San Francisco, CA",
            employees: "127",
            propensityScore: 94,
            signals: [
                { type: "Funding", text: "Series B ($32M)", time: "3 days ago", hot: true },
                { type: "Hiring", text: "3 SDR roles posted", time: "1 week ago", hot: true },
                { type: "Tech", text: "Installed Outreach.io", time: "2 weeks ago", hot: false },
            ],
            contacts: [
                { name: "Sarah Chen", title: "VP of Sales", email: true, linkedin: true },
                { name: "Marcus Webb", title: "Head of Revenue Ops", email: true, linkedin: true },
            ],
            status: "ready"
        },
        {
            company: "Prism Health Tech",
            logo: "PH",
            industry: "Healthcare SaaS",
            location: "Austin, TX",
            employees: "89",
            propensityScore: 91,
            signals: [
                { type: "Funding", text: "Series A ($18M)", time: "1 week ago", hot: true },
                { type: "Hiring", text: "New VP Sales hired", time: "2 weeks ago", hot: true },
                { type: "Intent", text: "Researching CRMs", time: "5 days ago", hot: true },
            ],
            contacts: [
                { name: "David Park", title: "CEO", email: true, linkedin: true },
                { name: "Lisa Romano", title: "VP Sales (New)", email: true, linkedin: true },
            ],
            status: "ready"
        },
        {
            company: "NovaTech Systems",
            logo: "NT",
            industry: "DevOps Tools",
            location: "Seattle, WA",
            employees: "203",
            propensityScore: 87,
            signals: [
                { type: "Growth", text: "Revenue +140% YoY", time: "This quarter", hot: true },
                { type: "Hiring", text: "Scaling sales team", time: "Ongoing", hot: false },
                { type: "Tech", text: "Using Snowflake", time: "Detected", hot: false },
            ],
            contacts: [
                { name: "James Liu", title: "CRO", email: true, linkedin: true },
                { name: "Amanda Foster", title: "Sales Director", email: true, linkedin: true },
            ],
            status: "ready"
        },
    ]

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
                        <Mail className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Pipeline Delivered</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Ready-to-Contact Accounts.<br />In Your Inbox. Weekly.
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        No more hunting. Every week you receive a curated list of accounts that match your ICP
                        <strong> and</strong> are showing active buying signals. Complete with decision-maker contacts
                        and personalized outreach angles.
                    </p>
                </div>

                {/* Account Cards */}
                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                    {targetAccounts.map((account, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {/* Header */}
                            <div className="p-5 border-b border-slate-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                                            {account.logo}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{account.company}</h3>
                                            <p className="text-sm text-slate-500">{account.industry}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-emerald-600">{account.propensityScore}</div>
                                        <div className="text-[10px] font-medium text-slate-400 uppercase">Score</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-xs text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {account.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-3.5 h-3.5" />
                                        {account.employees} employees
                                    </span>
                                </div>
                            </div>

                            {/* Signals */}
                            <div className="p-5 border-b border-slate-100 bg-slate-50/50">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Active Signals</p>
                                <div className="space-y-2">
                                    {account.signals.map((signal, j) => (
                                        <div key={j} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                {signal.hot && (
                                                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                                                )}
                                                <span className="text-sm text-slate-700">{signal.text}</span>
                                            </div>
                                            <span className="text-[10px] text-slate-400">{signal.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contacts */}
                            <div className="p-5">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Decision Makers</p>
                                <div className="space-y-3">
                                    {account.contacts.map((contact, j) => (
                                        <div key={j} className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-slate-900">{contact.name}</p>
                                                <p className="text-xs text-slate-500">{contact.title}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {contact.email && (
                                                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                                                        <Mail className="w-3.5 h-3.5 text-blue-600" />
                                                    </div>
                                                )}
                                                {contact.linkedin && (
                                                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                                                        <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer CTA */}
                            <div className="px-5 pb-5">
                                <button className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                                    View Full Dossier
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats Bar */}
                <motion.div
                    className="bg-white rounded-2xl border border-slate-200 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">This Week&apos;s Delivery</p>
                                <p className="text-sm text-slate-500">23 accounts matched • 47 contacts enriched</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-slate-900">89%</p>
                                <p className="text-xs text-slate-500">Avg. ICP Match</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-slate-900">2.3</p>
                                <p className="text-xs text-slate-500">Signals / Account</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-emerald-600">12x</p>
                                <p className="text-xs text-slate-500">vs. Cold Outbound</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
