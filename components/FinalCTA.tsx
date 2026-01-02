'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react'

const FORMSPREE_ID = 'mjgkwpjv'

export default function FinalCTA() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    company: formState.company,
                    message: formState.message,
                }),
            })

            if (response.ok) {
                setIsSent(true)
            } else {
                setError('Something went wrong. Please try again.')
            }
        } catch {
            setError('Network error. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="py-32 relative bg-blue-900 border-t border-blue-800 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Side */}
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Stop Guessing. <br />Start Closing.
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
                            Let us prove it. We&apos;ll identify your top 10 in-market accounts for free.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Free Data Sample', 'No credit card required', 'Day 1 Results'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-blue-100">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-2xl shadow-blue-900/50"
                    >
                        {!isSent ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formState.company}
                                            onChange={handleChange}
                                            placeholder="Acme Inc."
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your sales goals..."
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                {error && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                        {error}
                                    </div>
                                )}

                                <button
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>Send Request <ArrowRight className="w-5 h-5" /></>
                                    )}
                                </button>

                                <p className="text-xs text-center text-slate-400 mt-4">
                                    By submitting, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </form>
                        ) : (
                            <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                                <p className="text-slate-600 mb-8">
                                    Thanks {formState.name}. We&apos;ve drafted an email for you to confirm the details. Check your specific mail client if it didn&apos;t open automatically.
                                </p>
                                <button
                                    onClick={() => setIsSent(false)}
                                    className="text-blue-600 font-bold hover:underline"
                                >
                                    Send another response
                                </button>
                            </div>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
