'use client';

import Card from '../common/Card';

interface EducationPanelProps {
  topic: 'overview' | 'aot' | 'jit' | 'retry' | 'developers' | null;
}

const educationContent = {
  overview: {
    title: "Deterministic Execution",
    content: "Raiku enables deterministic transaction execution on Solana. Unlike traditional execution where transaction ordering is unpredictable, Raiku guarantees execution order through slot reservations, eliminating MEV and providing predictable outcomes."
  },
  aot: {
    title: "AOT (Ahead-of-Time) Reservations",
    content: "AOT reservations guarantee a specific slot for transaction execution before it happens. Perfect for orderbook DEX, batch NFT mints, and settlements where execution order matters. No gas wars, no front-running."
  },
  jit: {
    title: "JIT (Just-in-Time) Reservations",
    content: "JIT reservations provide flexible execution timing right before the transaction needs to execute. Ideal for latency-sensitive operations and cross-chain atomic settlements where precise timing coordination is required."
  },
  retry: {
    title: "Ackermann Retry Logic",
    content: "When transactions fail due to minor issues, Ackermann Nodes automatically retry them without requiring user resubmission. This creates a more stable execution environment and reduces network spam from manual retries."
  },
  developers: {
    title: "How Developers Can Use It",
    content: "Developers can leverage Raiku for: scheduling strategies, agent orchestration, automation workflows, fair ordering systems, and batch processing. The deterministic guarantees enable new application patterns impossible with traditional execution."
  }
};

export default function EducationPanel({ topic }: EducationPanelProps) {
  if (!topic) {
    return (
      <Card>
        <h2 className="text-xl font-bold text-white mb-4">Learn About Raiku</h2>
        <p className="text-slate-400 text-sm">
          Select a scenario to learn about different aspects of Raiku's deterministic execution model.
        </p>
      </Card>
    );
  }

  const content = educationContent[topic];

  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-3">{content.title}</h2>
      <p className="text-slate-300 text-sm leading-relaxed">{content.content}</p>
      
      <div className="mt-4 pt-4 border-t border-slate-700">
        <h3 className="text-sm font-semibold text-slate-400 mb-2">Why This Matters</h3>
        <p className="text-xs text-slate-400">
          Deterministic execution transforms how applications are built on Solana, 
          enabling fairer, more predictable, and more sophisticated on-chain systems.
        </p>
      </div>
    </Card>
  );
}
