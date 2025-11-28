'use client';

import { useState } from 'react';
import SlotTimeline from '@/components/simulator/SlotTimeline';
import DFAVisualizer from '@/components/simulator/DFAVisualizer';
import ScenarioSelector from '@/components/simulator/ScenarioSelector';
import EducationPanel from '@/components/simulator/EducationPanel';
import EventLog from '@/components/simulator/EventLog';
import Button from '@/components/common/Button';
import { raikuDFA } from '@/store/raikuPreset';
import { RaikuScenario } from '@/store/scenarios';

interface Event {
  id: number;
  timestamp: string;
  action: string;
  state: string;
  slot?: number;
}

export default function RaikuPage() {
  const [currentState, setCurrentState] = useState(raikuDFA.startState);
  const [sequence, setSequence] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState<RaikuScenario | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [slots, setSlots] = useState<Array<{
    id: number;
    type: 'empty' | 'aot' | 'jit' | 'executing' | 'confirmed' | 'failed' | 'retry';
    label?: string;
  }>>(
    Array.from({ length: 12 }, (_, i) => ({ id: i + 1, type: 'empty' }))
  );
  const [currentSlot, setCurrentSlot] = useState(0);

  const addEvent = (action: string, state: string, slot?: number) => {
    setEvents(prev => [...prev, {
      id: Date.now() + Math.random(),
      timestamp: new Date().toLocaleTimeString(),
      action,
      state,
      slot
    }]);
  };

  const handleSelectScenario = (scenario: RaikuScenario) => {
    setSelectedScenario(scenario);
    setSequence(scenario.sequence);
    reset();
  };

  const reset = () => {
    setCurrentState(raikuDFA.startState);
    setCurrentStep(0);
    setIsRunning(false);
    setSlots(Array.from({ length: 12 }, (_, i) => ({ id: i + 1, type: 'empty' })));
    setCurrentSlot(0);
    setEvents([]);
  };

  const processTransition = (input: string, slotId: number) => {
    const transitions = raikuDFA.transitions[currentState];
    if (!transitions || !transitions[input]) return false;

    const nextState = transitions[input];
    setCurrentState(nextState);

    if (input === 'reserve_aot') {
      setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'aot' } : s));
      setCurrentSlot(slotId);
      addEvent('reserve_aot', nextState, 99 + slotId);
    } else if (input === 'reserve_jit') {
      setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'jit' } : s));
      setCurrentSlot(slotId);
      addEvent('reserve_jit', nextState, 99 + slotId);
    } else if (input === 'execute') {
      setSlots(prev => prev.map(s => s.id === currentSlot ? { ...s, type: 'executing' } : s));
      addEvent('execute', nextState, 99 + currentSlot);
    } else if (input === 'confirm') {
      setSlots(prev => prev.map(s => s.id === currentSlot ? { ...s, type: 'confirmed' } : s));
      addEvent('confirm', nextState, 99 + currentSlot);
    } else if (input === 'fail') {
      setSlots(prev => prev.map(s => s.id === currentSlot ? { ...s, type: 'failed' } : s));
      addEvent('fail', nextState, 99 + currentSlot);
    } else if (input === 'retry') {
      setSlots(prev => prev.map(s => s.id === currentSlot ? { ...s, type: 'retry' } : s));
      addEvent('retry', nextState, 99 + currentSlot);
    }

    return true;
  };

  const executeStep = () => {
    if (currentStep >= sequence.length || !selectedScenario) return;
    
    const input = sequence[currentStep];
    const slotId = selectedScenario.slotReservation || 5;
    
    if (processTransition(input, slotId)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const autoRun = async () => {
    if (!selectedScenario) return;
    
    setIsRunning(true);
    reset();
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const slotId = selectedScenario.slotReservation || 5;
    let state = raikuDFA.startState;
    
    for (let i = 0; i < sequence.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      const input = sequence[i];
      const transitions = raikuDFA.transitions[state];
      
      if (transitions && transitions[input]) {
        const nextState = transitions[input];
        state = nextState;
        setCurrentState(nextState);
        setCurrentStep(i + 1);
        
        if (input === 'reserve_aot') {
          setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'aot' } : s));
          setCurrentSlot(slotId);
          addEvent('reserve_aot', nextState, 99 + slotId);
        } else if (input === 'reserve_jit') {
          setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'jit' } : s));
          setCurrentSlot(slotId);
          addEvent('reserve_jit', nextState, 99 + slotId);
        } else if (input === 'execute') {
          setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'executing' } : s));
          addEvent('execute', nextState, 99 + slotId);
        } else if (input === 'confirm') {
          setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'confirmed' } : s));
          addEvent('confirm', nextState, 99 + slotId);
        } else if (input === 'fail') {
          setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'failed' } : s));
          addEvent('fail', nextState, 99 + slotId);
        } else if (input === 'retry') {
          setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'retry' } : s));
          addEvent('retry', nextState, 99 + slotId);
        }
      }
    }
    
    setIsRunning(false);
  };

  return (
    <main className="min-h-screen py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Raiku Deterministic Execution Simulator
          </h1>
          <p className="text-slate-400">
            Interactive educational explorer for understanding Raiku's execution model
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <ScenarioSelector onSelectScenario={handleSelectScenario} />
          </div>

          <div className="lg:col-span-3 space-y-4">
            <SlotTimeline slots={slots} currentSlot={currentSlot} />
            
            <div className="grid md:grid-cols-2 gap-4">
              <DFAVisualizer currentState={currentState} />
              <EducationPanel 
                currentState={currentState} 
                scenarioExplanation={selectedScenario?.explanation}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <EventLog events={events} />
        </div>

        {selectedScenario && (
          <div className="mt-4 bg-slate-900 border border-slate-800 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{selectedScenario.name}</h3>
                <p className="text-sm text-slate-400">
                  Step {currentStep} of {sequence.length}
                </p>
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={executeStep} 
                  disabled={isRunning || currentStep >= sequence.length}
                >
                  Step
                </Button>
                <Button 
                  onClick={autoRun} 
                  disabled={isRunning}
                >
                  {isRunning ? 'Running...' : 'Run'}
                </Button>
                <Button 
                  onClick={reset} 
                  variant="secondary" 
                  disabled={isRunning}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
