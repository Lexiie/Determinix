'use client';

import Card from '../common/Card';

interface EducationPanelProps {
  currentState: string;
  scenarioExplanation?: string;
}

const stateEducation: Record<string, { title: string; content: string }> = {
  Idle: {
    title: "Idle State",
    content: "Transaction has not reserved a slot yet. This is the starting point before any Raiku execution begins."
  },
  SlotReserved_AOT: {
    title: "AOT Reservation",
    content: "Ahead-of-Time reservation guarantees deterministic landing. Perfect for orderbook DEX, batch NFT mints, and settlements where execution order matters. No gas wars, no front-running."
  },
  SlotReserved_JIT: {
    title: "JIT Reservation",
    content: "Just-in-Time reservation schedules execution at execution window. Ideal for latency-sensitive operations and cross-chain atomic settlements where precise timing coordination is required."
  },
  Executing: {
    title: "Executing",
    content: "The transaction is executing deterministically on-chain. The slot reservation ensures predictable execution order and timing."
  },
  AckermannRetry: {
    title: "Ackermann Retry",
    content: "Retry is handled automatically by the Ackermann Node; no user resubmission needed. This creates a more stable execution environment and reduces network spam."
  },
  Confirmed: {
    title: "Confirmed",
    content: "Execution successful and deterministic. The transaction has been confirmed on-chain with guaranteed ordering."
  },
  Failed: {
    title: "Failed",
    content: "Execution failed; retry logic may occur. Ackermann Nodes can automatically retry failed transactions without user intervention."
  }
};

export default function EducationPanel({ currentState, scenarioExplanation }: EducationPanelProps) {
  const education = stateEducation[currentState] || stateEducation.Idle;

  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-3">{education.title}</h2>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">{education.content}</p>
      
      {scenarioExplanation && (
        <div className="pt-3 border-t border-slate-700">
          <h3 className="text-sm font-semibold text-slate-400 mb-2">Scenario Context</h3>
          <p className="text-xs text-slate-400">{scenarioExplanation}</p>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-slate-700">
        <h3 className="text-sm font-semibold text-slate-400 mb-2">Why Deterministic?</h3>
        <p className="text-xs text-slate-400">
          Raiku ensures deterministic execution through slot reservations, 
          guaranteed ordering, and retry mechanisms. This eliminates MEV and provides 
          predictable transaction outcomes.
        </p>
      </div>
    </Card>
  );
}
