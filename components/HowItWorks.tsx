'use client'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { Dna, Radar, Target, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
    const containerRef = useRef(null)
    useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const steps = [
        {
            num: "01",
            title: "Model the Perfect Customer",
            subtitle: "The DNA",
            desc: "We analyze your closed-won data to build a mathematical profile of your ideal buyer. But knowing 'who' is only 10% of the battle.",
            icon: Dna,
            iconColor: "text-blue-600",
            subtitleColor: "text-blue-600",
            bgHover: "group-hover:bg-blue-500/5",
            pulse: "group-hover:bg-blue-500/20"
        },
        {
            num: "02",
            title: "Triangulate Buying Signals",
            subtitle: "The Timing",
            desc: "A single signal is noise. Three is a pattern. We monitor 30+ streams (Funding + Hiring + Tech Install) to detect exactly WHEN they need you.",
            icon: Radar,
            iconColor: "text-violet-600",
            subtitleColor: "text-violet-600",
            bgHover: "group-hover:bg-violet-500/5",
            pulse: "group-hover:bg-violet-500/20"
        },
        {
            num: "03",
            title: "Execute at the Perfect Moment",
            subtitle: "The Revenue",
            desc: "Speed wins. The second the buying window opens, our agents deploy hyper-relevant outreach before your competitors even know the lead exists.",
            icon: Target,
            iconColor: "text-emerald-600",
            subtitleColor: "text-emerald-600",
            bgHover: "group-hover:bg-emerald-500/5",
            pulse: "group-hover:bg-emerald-500/20"
        }
    ]

    return (
        <section id="methodology" ref={containerRef} className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100 -z-10" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest border border-blue-100 rounded-full"
                    >
                        The Intelligence Engine
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight"
                    >
                        Algorithmic Revenue Generation
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 leading-relaxed"
                    >
                        From static lists to dynamic buying windows. A systematic approach to capitalizing on timing.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[80px] left-[15%] right-[15%] h-[2px] bg-slate-200 z-0">
                        {/* Animated Progress Line */}
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ transformOrigin: "left" }}
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="relative group pt-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.3 }}
                            >
                                {/* Step Number Background */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] font-bold text-slate-100 opacity-50 -z-10 leading-none select-none">
                                    {step.num}
                                </div>

                                {/* Icon Card */}
                                <div className="relative z-10 w-24 h-24 mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
                                    <div className={`absolute inset-0 ${step.bgHover} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />

                                    {/* Pulse Effect */}
                                    <div className={`absolute -inset-2 ${step.pulse} rounded-2xl -z-10 opacity-0 group-hover:animate-ping`} />
                                </div>

                                <div className="text-center px-4">
                                    <div className={`inline-block mb-2 text-xs font-bold uppercase tracking-wider ${step.subtitleColor}`}>{step.subtitle}</div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-[15px]">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA to link flow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mt-20"
                >
                    <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest border-b border-transparent hover:border-blue-600 pb-1">
                        Explore the platform details <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>

            </div>
        </section>
    )
}
