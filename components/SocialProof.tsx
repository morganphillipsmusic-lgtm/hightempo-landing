export default function SocialProof() {
    return (
        <section className="py-12 border-b border-slate-100 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <p className="text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">Powering Growth for Industry Leaders</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Simple, authoritative text logos or placeholder SVGs */}
                    {["Acme Corp", "GlobalVentures", "NexusSystems", "PrimeData", "Elevate"].map((name, i) => (
                        <h3 key={i} className="text-2xl font-bold text-slate-800 tracking-tight font-serif italic">{name}</h3>
                    ))}
                </div>
            </div>
        </section>
    )
}
