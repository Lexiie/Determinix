import Link from 'next/link';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

export default function LearnPage() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6 text-center">Learn About Determinix</h1>
        <p className="text-xl text-slate-300 mb-12 text-center">Understanding deterministic transaction ordering</p>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">What is Determinix?</h2>
          <p className="text-slate-300 mb-4">Determinix is a blockchain transaction ordering system that provides predictable, fair, and MEV-resistant transaction execution.</p>
          <p className="text-slate-300">Unlike traditional systems where transaction order is unpredictable, Determinix assigns transactions to specific slots based on priority, eliminating front-running and ensuring fairness.</p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
          <div className="space-y-4 text-slate-300">
            <div><span className="font-semibold text-green-400">1. Priority Assignment:</span> Transactions are categorized by priority (high, medium, low)</div>
            <div><span className="font-semibold text-green-400">2. Slot Allocation:</span> Each priority level gets assigned to specific slot ranges</div>
            <div><span className="font-semibold text-green-400">3. Deterministic Execution:</span> Transactions execute in their assigned slots with no reordering</div>
            <div><span className="font-semibold text-green-400">4. Guaranteed Success:</span> High priority transactions have near 100% success rate</div>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 text-slate-300">Feature</th>
                  <th className="py-3 text-slate-300">Normal Mode</th>
                  <th className="py-3 text-green-400">Deterministic Mode</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="py-3">Ordering</td><td>Random</td><td className="text-green-400">Predictable</td></tr>
                <tr className="border-b border-slate-800"><td className="py-3">MEV Risk</td><td>High</td><td className="text-green-400">None</td></tr>
                <tr className="border-b border-slate-800"><td className="py-3">Success Rate</td><td>60-95%</td><td className="text-green-400">100%</td></tr>
                <tr className="border-b border-slate-800"><td className="py-3">Delays</td><td>0-3 slots</td><td className="text-green-400">0 slots</td></tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Benefits</h2>
          <ul className="space-y-2 text-slate-300">
            <li>✓ Eliminate front-running and MEV attacks</li>
            <li>✓ Predictable transaction execution</li>
            <li>✓ Fair ordering for all users</li>
            <li>✓ Higher success rates for critical transactions</li>
            <li>✓ Better user experience</li>
          </ul>
        </Card>

        <div className="text-center">
          <Link href="/simulator"><Button>Try the Simulator</Button></Link>
        </div>
      </div>
    </main>
  );
}
