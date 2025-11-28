'use client';

import { useState } from 'react';
import DFAVisualizer from '@/components/simulator/DFAVisualizer';
import ScenarioSelector from '@/components/simulator/ScenarioSelector';
import RaikuInfoPanel from '@/components/simulator/RaikuInfoPanel';
import Button from '@/components/common/Button';
import { raikuDFA } from '@/store/raikuPreset';
import { RaikuScenario } from '@/store/scenarios';

export default function RaikuPage() {
  const [currentState, setCurrentState] = useState(raikuDFA.startState);
  const [sequence, setSequence] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState<RaikuScenario | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleSelectScenario = (scenario: RaikuScenario) => {
    setSelectedScenario(scenario);
    setSequence(scenario.sequence);
    setCurrentState(raikuDFA.startState);
    setCurrentStep(0);
    setIsRunning(false);
  };

  const executeStep = () => {
    if (currentStep >= sequence.length) return;
    
    const input = sequence[currentStep];
    const transitions = raikuDFA.transitions[currentState];
    
    if (transitions && transitions[input]) {
      setCurrentState(transitions[input]);
      setCurrentStep(currentStep + 1);
    }
  };

  const autoRun = async () => {
    setIsRunning(true);
    setCurrentState(raikuDFA.startState);
    setCurrentStep(0);
    
    let state = raikuDFA.startState;
    for (let i = 0; i < sequence.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const input = sequence[i];
      const transitions = raikuDFA.transitions[state];
      if (transitions && transitions[input]) {
        state = transitions[input];
        setCurrentState(state);
        setCurrentStep(i + 1);
      }
    }
    setIsRunning(false);
  };

  const reset = () => {
    setCurrentState(raikuDFA.startState);
    setCurrentStep(0);
    setIsRunning(false);
  };

  return (
    <main className="min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Raiku Execution Mode</h1>
          <p className="text-slate-400">
            Visualize deterministic transaction execution using DFA state machines
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <ScenarioSelector onSelectScenario={handleSelectScenario} />
            
            {selectedScenario && (
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Selected Scenario</h3>
                <p className="text-sm text-slate-300 mb-3">{selectedScenario.explanation}</p>
                <div className="flex gap-2">
                  <Button onClick={executeStep} disabled={isRunning || currentStep >= sequence.length} className="flex-1">
                    Step
                  </Button>
                  <Button onClick={autoRun} disabled={isRunning} className="flex-1">
                    Auto Run
                  </Button>
                  <Button onClick={reset} variant="secondary" disabled={isRunning}>
                    Reset
                  </Button>
                </div>
              </div>
            )}
          </div>

          <DFAVisualizer currentState={currentState} />

          {selectedScenario && (
            <RaikuInfoPanel
              currentState={currentState}
              sequence={sequence}
              currentStep={currentStep}
            />
          )}
        </div>
      </div>
    </main>
  );
}
