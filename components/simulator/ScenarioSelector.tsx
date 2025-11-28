'use client';

import Card from '../common/Card';
import { raikuScenarios, RaikuScenario } from '@/store/scenarios';

interface ScenarioSelectorProps {
  onSelectScenario: (scenario: RaikuScenario) => void;
}

export default function ScenarioSelector({ onSelectScenario }: ScenarioSelectorProps) {
  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-4">Raiku Scenarios</h2>
      <div className="space-y-3">
        {raikuScenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => onSelectScenario(scenario)}
            className="w-full text-left p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition border border-slate-700 hover:border-blue-500"
          >
            <h3 className="font-semibold text-white mb-1">{scenario.name}</h3>
            <p className="text-sm text-slate-400">{scenario.description}</p>
          </button>
        ))}
      </div>
    </Card>
  );
}
