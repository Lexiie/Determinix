import Link from 'next/link';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="neon1" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neon2" cx="70%" cy="70%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1000" height="1000" fill="url(#neon1)" />
        <rect width="1000" height="1000" fill="url(#neon2)" />
      </svg>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Determinix</h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8">Predictable transaction ordering for blockchain applications</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/simulator"><Button>Try Simulator</Button></Link>
              <Link href="/learn"><Button variant="secondary">Learn More</Button></Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <svg viewBox="0 0 400 400" className="w-full h-auto">
              <circle cx="200" cy="200" r="150" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.3" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.5" />
              <circle cx="200" cy="200" r="50" fill="#22c55e" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
