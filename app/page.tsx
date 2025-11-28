import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Determinix
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            Raiku Deterministic Execution Simulator & Educational Explorer
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Interactive visualization tool for understanding how deterministic transaction execution works on Solana through Raiku
          </p>
          
          <Link 
            href="/raiku" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg font-semibold rounded-xl transition shadow-lg"
          >
            Launch Simulator →
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Deterministic Execution?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">No MEV</h3>
              <p className="text-slate-400">Guaranteed ordering eliminates front-running opportunities</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Fair Systems</h3>
              <p className="text-slate-400">First-come-first-served that actually works</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-2">Auto Retry</h3>
              <p className="text-slate-400">Automatic retries reduce user friction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900 rounded-lg border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-3">📊 Slot Timeline Visualization</h3>
              <p className="text-slate-400">Real-time visual representation of AOT/JIT slot reservations and execution states</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-lg border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-3">🎓 Educational Content</h3>
              <p className="text-slate-400">Learn about deterministic execution, slot reservations, and retry mechanisms</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-lg border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-3">🎬 Interactive Scenarios</h3>
              <p className="text-slate-400">Step through real-world use cases like DEX orders, NFT mints, and cross-chain settlements</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-lg border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-3">🔍 State Machine View</h3>
              <p className="text-slate-400">Visualize transaction lifecycle through deterministic state transitions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Built for Raiku Challenge</h2>
          <p className="text-slate-400 mb-8">
            Demonstrating deterministic execution concepts through interactive visualization
          </p>
          <Link 
            href="/raiku" 
            className="inline-block px-8 py-4 bg-green-500 hover:bg-green-400 text-slate-950 text-lg font-semibold rounded-xl transition shadow-lg"
          >
            Explore Now →
          </Link>
        </div>
      </section>
    </main>
  );
}

