'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, TrendingUp, DollarSign, X, Check, ArrowRight, Calculator, Users, Target } from 'lucide-react'

function ROICalculatorModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [sdrCount, setSdrCount] = useState(5)
    const [avgDealSize, setAvgDealSize] = useState(25000)
    const [dealsPerQuarter, setDealsPerQuarter] = useState(4)
    const [sdrSalary, setSdrSalary] = useState(60000)

    // Calculations
    const hoursRecoveredPerSDRPerMonth = 84
    const totalHoursRecoveredMonthly = sdrCount * hoursRecoveredPerSDRPerMonth
    const pipelineIncrease = 0.47

    const currentQuarterlyRevenue = sdrCount * dealsPerQuarter * avgDealSize
    const projectedQuarterlyRevenue = currentQuarterlyRevenue * (1 + pipelineIncrease)
    const additionalRevenue = projectedQuarterlyRevenue - currentQuarterlyRevenue
    const annualAdditionalRevenue = additionalRevenue * 4

    const hourlyRate = sdrSalary / 2080 // Annual salary / work hours per year
    const monthlySavings = totalHoursRecoveredMonthly * hourlyRate
    const annualTimeSavings = monthlySavings * 12

    const totalAnnualBenefit = annualAdditionalRevenue + annualTimeSavings

    const formatCurrency = (num: number) => {
        if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`
        if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`
        return `$${num.toFixed(0)}`
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <Calculator className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">ROI Calculator</h3>
                                        <p className="text-sm text-slate-500">See your potential savings</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>

                            {/* Inputs */}
                            <div className="p-6 space-y-6 border-b border-slate-200">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            <Users className="w-4 h-4 inline mr-2" />
                                            Number of SDRs
                                        </label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="50"
                                            value={sdrCount}
                                            onChange={(e) => setSdrCount(parseInt(e.target.value))}
                                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                        <div className="flex justify-between mt-2">
                                            <span className="text-xs text-slate-400">1</span>
                                            <span className="text-lg font-bold text-slate-900">{sdrCount}</span>
                                            <span className="text-xs text-slate-400">50</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            <DollarSign className="w-4 h-4 inline mr-2" />
                                            Avg Deal Size
                                        </label>
                                        <input
                                            type="range"
                                            min="5000"
                                            max="250000"
                                            step="5000"
                                            value={avgDealSize}
                                            onChange={(e) => setAvgDealSize(parseInt(e.target.value))}
                                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                        <div className="flex justify-between mt-2">
                                            <span className="text-xs text-slate-400">$5K</span>
                                            <span className="text-lg font-bold text-slate-900">{formatCurrency(avgDealSize)}</span>
                                            <span className="text-xs text-slate-400">$250K</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            <Target className="w-4 h-4 inline mr-2" />
                                            Deals per SDR / Quarter
                                        </label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="20"
                                            value={dealsPerQuarter}
                                            onChange={(e) => setDealsPerQuarter(parseInt(e.target.value))}
                                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                        <div className="flex justify-between mt-2">
                                            <span className="text-xs text-slate-400">1</span>
                                            <span className="text-lg font-bold text-slate-900">{dealsPerQuarter}</span>
                                            <span className="text-xs text-slate-400">20</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            <Users className="w-4 h-4 inline mr-2" />
                                            Avg SDR Salary
                                        </label>
                                        <input
                                            type="range"
                                            min="40000"
                                            max="120000"
                                            step="5000"
                                            value={sdrSalary}
                                            onChange={(e) => setSdrSalary(parseInt(e.target.value))}
                                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                        <div className="flex justify-between mt-2">
                                            <span className="text-xs text-slate-400">$40K</span>
                                            <span className="text-lg font-bold text-slate-900">{formatCurrency(sdrSalary)}</span>
                                            <span className="text-xs text-slate-400">$120K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="p-6 bg-slate-50">
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Your Projected ROI</h4>

                                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                                        <Clock className="w-5 h-5 text-blue-500 mb-2" />
                                        <p className="text-2xl font-bold text-slate-900">{totalHoursRecoveredMonthly.toLocaleString()}</p>
                                        <p className="text-sm text-slate-500">Hours saved / month</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                                        <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                                        <p className="text-2xl font-bold text-slate-900">{formatCurrency(additionalRevenue)}</p>
                                        <p className="text-sm text-slate-500">Extra revenue / quarter</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                                        <DollarSign className="w-5 h-5 text-amber-500 mb-2" />
                                        <p className="text-2xl font-bold text-slate-900">{formatCurrency(annualTimeSavings)}</p>
                                        <p className="text-sm text-slate-500">Labor savings / year</p>
                                    </div>
                                </div>

                                <div className="bg-emerald-600 text-white p-6 rounded-xl">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-emerald-100 text-sm font-medium mb-1">Total Annual Benefit</p>
                                            <p className="text-4xl font-bold">{formatCurrency(totalAnnualBenefit)}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-emerald-100 text-sm">That&apos;s</p>
                                            <p className="text-2xl font-bold">{formatCurrency(totalAnnualBenefit / 12)}/mo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="p-6 border-t border-slate-200">
                                <button
                                    onClick={() => {
                                        onClose()
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                                >
                                    Get Started with HighTempo
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <p className="text-center text-sm text-slate-500 mt-3">
                                    See these results in your pipeline within 30 days
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default function ROISection() {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
    const beforeItems = [
        { task: "Building prospect lists", time: "4 hrs/week" },
        { task: "Researching companies", time: "6 hrs/week" },
        { task: "Finding contact info", time: "3 hrs/week" },
        { task: "Qualifying leads manually", time: "5 hrs/week" },
        { task: "Writing personalized emails", time: "4 hrs/week" },
    ]

    const afterItems = [
        { task: "Review delivered accounts", time: "30 min/week" },
        { task: "Approve outreach drafts", time: "30 min/week" },
        { task: "Focus on conversations", time: "All day" },
    ]

    const totalBefore = 22 // hours
    const totalAfter = 1 // hours

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-100 rounded-full mb-6">
                        <Calculator className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">The ROI</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Get 20+ Hours Back. Every Week.
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        Your SDRs spend most of their time on research, not revenue.
                        HighTempo flips that ratio—so they can focus on what actually closes deals.
                    </p>
                </div>

                {/* Before / After Comparison */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Before */}
                    <motion.div
                        className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-6 border-b border-slate-200 bg-slate-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                        <X className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Before HighTempo</h3>
                                        <p className="text-sm text-slate-500">Manual prospecting</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-red-500">{totalBefore} hrs</p>
                                    <p className="text-xs text-slate-400">per week</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            {beforeItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <span className="text-slate-600">{item.task}</span>
                                    <span className="text-sm font-medium text-slate-400">{item.time}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-6 bg-red-50 border-t border-red-100">
                            <p className="text-sm text-red-600">
                                <strong>Result:</strong> SDRs exhausted before they even pick up the phone.
                            </p>
                        </div>
                    </motion.div>

                    {/* After */}
                    <motion.div
                        className="bg-white rounded-2xl border-2 border-emerald-200 overflow-hidden shadow-lg shadow-emerald-100/50"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-6 border-b border-emerald-100 bg-emerald-50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <Check className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">With HighTempo</h3>
                                        <p className="text-sm text-slate-500">Automated intelligence</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-emerald-600">{totalAfter} hr</p>
                                    <p className="text-xs text-slate-400">per week</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            {afterItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <span className="text-slate-900 font-medium">{item.task}</span>
                                    <span className="text-sm font-medium text-emerald-600">{item.time}</span>
                                </motion.div>
                            ))}

                            <div className="pt-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-sm text-slate-600 mb-2">Time saved per SDR:</p>
                                    <p className="text-3xl font-bold text-slate-900">{totalBefore - totalAfter} hours/week</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-emerald-50 border-t border-emerald-100">
                            <p className="text-sm text-emerald-700">
                                <strong>Result:</strong> SDRs focused on conversations, not spreadsheets.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    className="bg-slate-900 rounded-2xl p-8 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-bold mb-2">The Math</h3>
                            <p className="text-sm text-slate-400">Per SDR, per month</p>
                        </div>

                        <div className="md:col-span-3 grid sm:grid-cols-3 gap-6">
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                                <p className="text-3xl font-bold mb-1">84 hrs</p>
                                <p className="text-sm text-slate-400">Time reclaimed monthly</p>
                            </div>

                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                                <p className="text-3xl font-bold mb-1">3.2x</p>
                                <p className="text-sm text-slate-400">More conversations</p>
                            </div>

                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <DollarSign className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                                <p className="text-3xl font-bold mb-1">47%</p>
                                <p className="text-sm text-slate-400">Pipeline increase</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-slate-300">
                            <strong className="text-white">Bottom line:</strong> HighTempo pays for itself if it helps close just one extra deal per quarter.
                        </p>
                        <button
                            onClick={() => setIsCalculatorOpen(true)}
                            className="shrink-0 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
                        >
                            Calculate Your ROI
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>

            <ROICalculatorModal isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
        </section>
    )
}
