import { create } from 'zustand';
import { simulate, TxInput, TxResult, Mode } from '@/lib/simulate';

interface SimulatorState {
  mode: Mode;
  txInputs: TxInput[];
  results: TxResult[];
  setMode: (mode: Mode) => void;
  addTransaction: (tx: TxInput) => void;
  loadPreset: (preset: string) => void;
  runSimulation: () => void;
  reset: () => void;
}

const presets: Record<string, TxInput[]> = {
  basic: [
    { id: '1', type: 'swap', priority: 'high' },
    { id: '2', type: 'nft_mint', priority: 'medium' },
    { id: '3', type: 'liquidation', priority: 'low' }
  ],
  gaming: [
    { id: '1', type: 'game_move', priority: 'high' },
    { id: '2', type: 'game_move', priority: 'high' },
    { id: '3', type: 'game_move', priority: 'medium' }
  ],
  defi: [
    { id: '1', type: 'liquidation', priority: 'high' },
    { id: '2', type: 'swap', priority: 'high' },
    { id: '3', type: 'swap', priority: 'medium' },
    { id: '4', type: 'swap', priority: 'low' }
  ]
};

export const useSimulatorStore = create<SimulatorState>((set, get) => ({
  mode: 'normal',
  txInputs: [],
  results: [],
  setMode: (mode) => set({ mode }),
  addTransaction: (tx) => set((state) => ({ txInputs: [...state.txInputs, tx] })),
  loadPreset: (preset) => set({ txInputs: presets[preset] || [] }),
  runSimulation: () => set({ results: simulate(get().mode, get().txInputs) }),
  reset: () => set({ txInputs: [], results: [] })
}));
