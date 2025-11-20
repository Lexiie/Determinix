import Card from '../common/Card';

export default function UseCases() {
  const cases = [
    { title: 'DeFi Trading', desc: 'Execute swaps without front-running risk' },
    { title: 'NFT Minting', desc: 'Fair launches with predictable ordering' },
    { title: 'Gaming', desc: 'Real-time game moves with guaranteed order' },
    { title: 'Liquidations', desc: 'Priority execution for time-sensitive operations' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Use Cases</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <Card key={i}>
              <svg viewBox="0 0 60 60" className="w-12 h-12 mb-4">
                <rect x="15" y="15" width="30" height="30" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="30" cy="30" r="8" fill="#38bdf8" opacity="0.5" />
              </svg>
              <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
              <p className="text-slate-400 text-sm">{c.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
