import Card from '../common/Card';

export default function Problem() {
  const problems = [
    { title: 'MEV Attacks', desc: 'Front-running and sandwich attacks drain value from users' },
    { title: 'Unpredictable Timing', desc: 'Transaction ordering is random and unreliable' },
    { title: 'Failed Transactions', desc: 'High priority transactions still fail unexpectedly' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">The Problem</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <Card key={i}>
              <svg viewBox="0 0 60 60" className="w-12 h-12 mb-4">
                <circle cx="30" cy="30" r="25" fill="none" stroke="#ef4444" strokeWidth="2" />
                <line x1="20" y1="20" x2="40" y2="40" stroke="#ef4444" strokeWidth="2" />
                <line x1="40" y1="20" x2="20" y2="40" stroke="#ef4444" strokeWidth="2" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
