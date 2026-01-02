'use client'

export default function Footer() {
    return (
        <footer className="py-16 bg-white border-t border-slate-200 text-slate-600 text-sm">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-4 gap-12">

                <div className="col-span-1 md:col-span-1">
                    <div className="mb-6">
                        <span className="text-slate-900 font-bold text-xl tracking-tight">HighTempo</span>
                    </div>
                    <p className="mb-6">
                        AI-powered buying signal detection. Know who&apos;s ready to buy before your competitors do.
                    </p>
                    <div className="text-slate-400 text-xs">© 2025 HighTempo Inc.</div>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
                    <ul className="space-y-4">
                        <li><a href="#methodology" className="hover:text-blue-600 transition-colors">How It Works</a></li>
                        <li><a href="#agents" className="hover:text-blue-600 transition-colors">AI Agents</a></li>
                        <li><a href="#infrastructure" className="hover:text-blue-600 transition-colors">Signal Sources</a></li>
                        <li><a href="#contact" className="hover:text-blue-600 transition-colors">Get Analysis</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-6">Capabilities</h4>
                    <ul className="space-y-4">
                        <li><span className="text-slate-500">Buying Signal Detection</span></li>
                        <li><span className="text-slate-500">ICP Scoring</span></li>
                        <li><span className="text-slate-500">Pipeline Generation</span></li>
                        <li><span className="text-slate-500">Intent Data Analysis</span></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-6">Get Started</h4>
                    <p className="mb-4">Request a free analysis of your target accounts.</p>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-slate-900 text-white px-5 py-2.5 font-bold hover:bg-slate-800 transition-colors rounded-lg w-full"
                    >
                        Free Analysis →
                    </button>
                </div>

            </div>
        </footer>
    )
}
