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
  type: 'reserve' | 'execute' | 'confirm' | 'fail' | 'retry';
  message: string;
}

export default function RaikuPage() {
  const [currentState, setCurrentState] = useState(raikuDFA.startState);
  const [sequence, setSequence] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState<RaikuScenario | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [slots, setSlots] = useState(
    Array.from({ length: 12 }, (_, i) => ({ id: i + 1, type: 'empty' as const }))
  );
  const [currentSlot, setCurrentSlot] = useState(0);

  const addEvent = (type: Event['type'], message: string) => {
    setEvents(prev => [...prev, {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString(),
      type,
      message
    }]);
  };

  const handleSelectScenario = (scenario: RaikuScenario) => {
    setSelectedScenario(scenario);
    setSequence(scenario.sequence);
    setCurrentState(raikuDFA.startState);
    setCurrentStep(0);
    setIsRunning(false);
    setEvents([]);
    setSlots(Array.from({ length: 12 }, (_, i) => ({ id: i + 1, type: 'empty' as const })));
    setCurrentSlot(0);
    addEvent('reserve', `Scenario loaded: ${scenario.name}`);
  };

  const executeStep = () => {
    if (currentStep >= sequence.length) return;
    
    const input = sequence[currentStep];
    const transitions = raikuDFA.transitions[currentState];
    
    if (transitions && transitions[input]) {
      const nextState = transitions[input];
      setCurrentState(nextState);
      setCurrentStep(currentStep + 1);
      
      // Update slots and events based on action
      if (input === 'reserve_aot' && selectedScenario?.slotReservation) {
        const slotId = selectedScenario.slotReservation;
        setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'aot' } : s));
        setCurrentSlot(slotId);
        addEvent('reserve', `AOT slot ${slotId} reserved`);
      } else if (input === 'reserve_jit' && selectedScenario?.slotReservation) {
        const slotId = selectedScenario.slotReservation;
        setSlots(prev => prev.map(s => s.id === slotId ? { ...s, type: 'jit' } : s));
        setCurrentSlot(slotId);
        addEvent('reserve', `JIT slot ${slotId} reserved`);
      } else if (input === 'execute') {
        setSlots(prev => prev.map(s => s.id === currentSlot ? { ...s, type: 'executing' } : s));
        addEvent('execute', `Transaction executing in slot ${currentSlot}`);
      } else if (input === 'confirm') {
        setSlots(prev => prev.map(s => s.id === currentSlot ? { ...s, type: 'confirmed' } : s));
        addEvent('confirm', `Transaction confirmed in slot ${currentSlot}`);
      } else if (input === 'fail') {
        setSlots(prev => prev.map(s => s.id === currentSlot ? { ...s, type: 'failed' } : s));
        addEvent('fail', `Transaction failed in slot ${currentSlot}`);
      } else if (input === 'retry') {
        addEvent('retry', `Ackermann Node initiating retry`);
      }
    }
  };

  const autoRun = async () => {
    setIsRunning(true);
    setCurrentState(raikuDFA.startState);
    setCurrentStep(0);
    setEvents([]);
    setSlots(Array.from({ length: 12 }, (_, i) => ({ id: i + 1, type: 'empty' as const })));
    
    let state = raikuDFA.startState;
    let slot = selectedScenario?.slotReservation || 5;
    setCurrentSlot(slot);
    
    for (let i = 0; i < sequence.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const input = sequence[i];
      const transitions = raikuDFA.transitions[state];
      
      if (transitions && transitions[input]) {
        state = transitions[input];
        setCurrentState(state);
        setCurrentStep(i + 1);
        
        if (input === 'reserve_aot') {
          setSlots(prev => prev.map(s => s.id === slot ? { ...s, type: 'aot' } : s));
          addEvent('reserve', `AOT slot ${slot} reserved`);
        } else if (input === 'reserve_jit') {
          setSlots(prev => prev.map(s => s.id === slot ? { ...s, type: 'jit' } : s));
          addEvent('reserve', `JIT slot ${slot} reserved`);
        } else if (input === 'execute') {
          setSlots(prev => prev.map(s => s.id === slot ? { ...s, type: 'executing' } : s));
          addEvent('execute', `Transaction executing in slot ${slot}`);
        } else if (input === 'confirm') {
          setSlots(prev => prev.map(s => s.id === slot ? { ...s, type: 'confirmed' } : s));
          addEvent('confirm', `Transaction confirmed in slot ${slot}`);
        } else if (input === 'fail') {
          setSlots(prev => prev.map(s => s.id === slot ? { ...s, type: 'failed' } : s));
          addEvent('fail', `Transaction failed in slot ${slot}`);
        } else if (input === 'retry') {
          addEvent('retry', `Ackermann Node initiating retry`);
        }
      }
    }
    setIsRunning(false);
  };

  const reset = () => {
    setCurrentState(raikuDFA.startState);
    setCurrentStep(0);
    setIsRunning(false);
    setSlots(Array.from({ length: 12 }, (_, i) => ({ id: i + 1, type: 'empty' as const })));
    setCurrentSlot(0);
    setEvents([]);
  };

  return (
    <main className="min-h-screen py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Raiku Deterministic Execution Simulator
          </h1>
          <p className="text-slate-400">
            Interactive educational explorer for understanding Raiku's execution model
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          <ScenarioSelector onSelectScenario={handleSelectScenario} />
          <div className="lg:col-span-2">
            <SlotTimeline slots={slots} currentSlot={currentSlot} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          <DFAVisualizer currentState={currentState} />
          <EducationPanel topic={selectedScenario?.educationTopic || null} />
          <EventLog events={events} />
        </div>

        {selectedScenario && (
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{selectedScenario.name}</h3>
                <p className="text-sm text-slate-400">{selectedScenario.explanation}</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={executeStep} disabled={isRunning || currentStep >= sequence.length}>
                  Step
                </Button>
                <Button onClick={autoRun} disabled={isRunning}>
                  Auto Run
                </Button>
                <Button onClick={reset} variant="secondary" disabled={isRunning}>
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
