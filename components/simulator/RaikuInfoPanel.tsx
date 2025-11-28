'use client';

import Card from '../common/Card';
import { stateDescriptions } from '@/store/raikuPreset';

interface RaikuInfoPanelProps {
  currentState: string;
  sequence: string[];
  currentStep: number;
}

export default function RaikuInfoPanel({ currentState, sequence, currentStep }: RaikuInfoPanelProps) {
  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-4">Execution Info</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-slate-400 mb-1">Current State</h3>
          <p className="text-lg font-semibold text-white">{currentState}</p>
          <p className="text-sm text-slate-300 mt-2">{stateDescriptions[currentState]}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-slate-400 mb-2">Sequence Progress</h3>
          <div className="flex flex-wrap gap-2">
            {sequence.map((step, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded text-xs font-medium ${
                  idx < currentStep
                    ? 'bg-green-600 text-white'
                    : idx === currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-700 text-slate-400'
                }`}
              >
                {step}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Why Deterministic?</h3>
          <p className="text-sm text-slate-300">
            Raiku ensures deterministic execution through slot reservations (AOT/JIT), 
            guaranteed ordering, and retry mechanisms. This eliminates MEV and provides 
            predictable transaction outcomes.
          </p>
        </div>
      </div>
    </Card>
  );
}
