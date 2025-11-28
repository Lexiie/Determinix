'use client';

import Card from '../common/Card';
import { raikuDFA, stateColors, stateDescriptions } from '@/store/raikuPreset';

interface DFAVisualizerProps {
  currentState: string;
}

export default function DFAVisualizer({ currentState }: DFAVisualizerProps) {
  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-4">State Machine</h2>
      <div className="space-y-3">
        {raikuDFA.states.map((state) => {
          const isActive = state === currentState;
          const isAccepting = raikuDFA.acceptStates.includes(state);
          const transitions = raikuDFA.transitions[state] || {};
          
          return (
            <div key={state} className="relative">
              <div
                className={`p-4 rounded-lg border-2 transition ${
                  isActive
                    ? 'border-white shadow-lg'
                    : 'border-slate-700'
                } ${stateColors[state]}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white">
                      {state}
                      {isAccepting && ' ✓'}
                    </h3>
                    <p className="text-xs text-white/80 mt-1">
                      {stateDescriptions[state]}
                    </p>
                  </div>
                  {isActive && (
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  )}
                </div>
                
                {Object.keys(transitions).length > 0 && (
                  <div className="mt-2 pt-2 border-t border-white/20">
                    <p className="text-xs text-white/70">
                      Transitions: {Object.entries(transitions).map(([input, target]) => 
                        `${input} → ${target}`
                      ).join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
