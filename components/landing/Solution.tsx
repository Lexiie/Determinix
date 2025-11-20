import Card from '../common/Card';

export default function Solution() {
  const solutions = [
    { title: 'Deterministic Ordering', desc: 'Transactions are placed in predictable slots' },
    { title: 'Priority-Based', desc: 'High priority transactions get early slots' },
    { title: 'No Reordering', desc: 'Eliminate MEV and front-running attacks' }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">The Solution</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <Card key={i}>
              <svg viewBox="0 0 60 60" className="w-12 h-12 mb-4">
                <circle cx="30" cy="30" r="25" fill="none" stroke="#22c55e" strokeWidth="2" />
                <polyline points="20,30 27,37 40,24" fill="none" stroke="#22c55e" strokeWidth="2" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
