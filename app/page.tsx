import Link from 'next/link';
import Hero from '@/components/landing/Hero';
import Problem from '@/components/landing/Problem';
import Solution from '@/components/landing/Solution';
import UseCases from '@/components/landing/UseCases';
import CTA from '@/components/landing/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/simulator" className="group p-8 bg-slate-900 border border-slate-800 rounded-lg hover:border-green-500 transition">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-500">Classic DFA Mode</h3>
              <p className="text-slate-400">Learn DFA concepts with interactive visualization and simulation</p>
            </Link>
            
            <Link href="/raiku" className="group p-8 bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/50 rounded-lg hover:border-blue-400 transition">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400">Raiku Execution Mode</h3>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded">NEW</span>
              </div>
              <p className="text-slate-300">Visualize deterministic Solana transaction execution with AOT/JIT slot reservations</p>
            </Link>
          </div>
        </div>
      </section>

      <Problem />
      <Solution />
      <UseCases />
      <CTA />
    </main>
  );
}
