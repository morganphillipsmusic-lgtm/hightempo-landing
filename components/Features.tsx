'use client'
import { Search, Database, Mail, Share2, Settings } from 'lucide-react'

export default function Features() {
    const features = [
        {
            title: "Agent Reconnaissance",
            desc: "Deep-dive analysis on tech stack, funding rounds, and leadership shifts.",
            icon: Search
        },
        {
            title: "Waterfall Enrichment",
            desc: "Aggregated data from 12+ premium providers for max coverage.",
            icon: Database
        },
        {
            title: "Contextual Outreach",
            desc: "Dynamic generation of emails that reference specific company events.",
            icon: Mail
        },
        {
            title: "Omnichannel Orchestration",
            desc: "Synchronized touchpoints across Email, LinkedIn, and Phone.",
            icon: Share2
        },
        {
            title: "Pipeline Autopilot",
            desc: "Automated CRM hygiene, status updates, and task creation.",
            icon: Settings
        }
    ]

    return (
        <section id="infrastructure" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold font-light tracking-tight mb-6">Enterprise-Grade Infrastructure</h2>
                        <p className="text-xl text-slate-400">
                            Built for teams that demand rigor, compliance, and scale.
                        </p>
                    </div>
                    <button className="px-6 py-3 border border-white/20 hover:bg-white/10 transition-colors">
                        View Full Capabilities
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {features.map((feature, i) => (
                        <div key={i} className="group p-10 bg-slate-900 hover:bg-slate-800/50 transition-colors">
                            <feature.icon className="w-8 h-8 text-blue-500 mb-6" />
                            <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                        </div>
                    ))}

                    {/* CTA Card in Grid */}
                    <div className="p-10 bg-blue-600 flex flex-col justify-center items-start">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready to Scale?</h3>
                        <p className="text-blue-100 mb-8">Deploy your first agent today.</p>
                        <button className="bg-white text-blue-900 px-6 py-2 font-bold hover:bg-blue-50 transition-colors">
                            Get Started &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
