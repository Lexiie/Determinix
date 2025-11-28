'use client';

import Card from '../common/Card';
import { raikuDFA } from '@/store/raikuPreset';

interface DFAVisualizerProps {
  currentState: string;
}

const stateInfo: Record<string, string> = {
  Idle: "Transaction has not reserved a slot yet.",
  SlotReserved_AOT: "Ahead-of-Time reservation guarantees deterministic landing.",
  SlotReserved_JIT: "Just-in-Time reservation schedules execution at execution window.",
  Executing: "The transaction is executing deterministically.",
  AckermannRetry: "Retry is handled automatically by the node; no user resubmission.",
  Confirmed: "Execution successful and deterministic.",
  Failed: "Execution failed; retry logic may occur."
};

export default function DFAVisualizer({ currentState }: DFAVisualizerProps) {
  const getStateColor = (state: string) => {
    if (state === 'Idle') return 'bg-slate-700';
    if (state === 'SlotReserved_AOT') return 'bg-blue-500';
    if (state === 'SlotReserved_JIT') return 'bg-yellow-500';
    if (state === 'Executing') return 'bg-green-500';
    if (state === 'AckermannRetry') return 'bg-orange-500';
    if (state === 'Confirmed') return 'bg-green-700';
    if (state === 'Failed') return 'bg-red-600';
    return 'bg-slate-700';
  };

  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-4">State Machine</h2>
      <div className="space-y-2">
        {raikuDFA.states.map((state) => {
          const isActive = state === currentState;
          const isAccepting = raikuDFA.acceptStates.includes(state);
          const transitions = raikuDFA.transitions[state] || {};
          
          return (
            <div key={state} className="relative">
              <div
                className={`p-3 rounded-lg border-2 transition-all ${
                  isActive
                    ? 'border-white shadow-lg shadow-white/20 scale-105'
                    : 'border-slate-700'
                } ${getStateColor(state)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm">
                      {state.replace('_', ' ')}
                      {isAccepting && ' ✓'}
                    </h3>
                    <p className="text-xs text-white/80 mt-1">
                      {stateInfo[state]}
                    </p>
                  </div>
                  {isActive && (
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse ml-2"></div>
                  )}
                </div>
                
                {Object.keys(transitions).length > 0 && (
                  <div className="mt-2 pt-2 border-t border-white/20">
                    <p className="text-xs text-white/70">
                      → {Object.values(transitions).join(', ')}
                    </p>
                  </div>
                )}
              </div>
              
              {isActive && Object.keys(transitions).length > 0 && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white animate-pulse"></div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
