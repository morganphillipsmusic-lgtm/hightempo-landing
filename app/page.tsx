import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import ROISection from '@/components/ROISection'
import HowItWorks from '@/components/HowItWorks'
import ICPEngine from '@/components/ICPEngine'
import PipelineDelivered from '@/components/PipelineDelivered'
import AgentShowcase from '@/components/AgentShowcase'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-500/30">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <ROISection />
      <HowItWorks />
      <ICPEngine />
      <PipelineDelivered />
      <AgentShowcase />
      <FinalCTA />
      <Footer />
    </main>
  )
}
