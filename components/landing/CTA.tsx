import Link from 'next/link';
import Button from '../common/Button';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Deterministic Ordering?</h2>
        <p className="text-xl text-slate-300 mb-8">Try our interactive simulator and see the difference</p>
        <Link href="/simulator"><Button>Launch Simulator</Button></Link>
      </div>
    </section>
  );
}
