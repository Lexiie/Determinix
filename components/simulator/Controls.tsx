'use client';

import { useState } from 'react';
import { useSimulatorStore } from '@/store/simulatorStore';
import Card from '../common/Card';
import Button from '../common/Button';

export default function Controls() {
  const { mode, setMode, addTransaction, loadPreset, runSimulation, reset } = useSimulatorStore();
  const [txType, setTxType] = useState<'swap' | 'nft_mint' | 'liquidation' | 'game_move'>('swap');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [targetSlot, setTargetSlot] = useState('');

  return (
    <Card>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Controls</h2>
      <div className="space-y-4 md:space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Mode</label>
          <div className="flex gap-2">
            <button onClick={() => setMode('normal')} className={`flex-1 py-2 px-3 md:px-4 rounded-lg font-medium text-sm md:text-base transition ${mode === 'normal' ? 'bg-green-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Normal</button>
            <button onClick={() => setMode('deterministic')} className={`flex-1 py-2 px-3 md:px-4 rounded-lg font-medium text-sm md:text-base transition ${mode === 'deterministic' ? 'bg-green-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Deterministic</button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Transaction Type</label>
          <select value={txType} onChange={(e) => setTxType(e.target.value as any)} className="w-full bg-slate-800 text-white rounded-lg px-3 md:px-4 py-2 border border-slate-700 text-sm md:text-base">
            <option value="swap">Swap</option>
            <option value="nft_mint">NFT Mint</option>
            <option value="liquidation">Liquidation</option>
            <option value="game_move">Game Move</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value as any)} className="w-full bg-slate-800 text-white rounded-lg px-3 md:px-4 py-2 border border-slate-700 text-sm md:text-base">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Target Slot (optional)</label>
          <input type="number" min="1" max="12" value={targetSlot} onChange={(e) => setTargetSlot(e.target.value)} placeholder="Auto" className="w-full bg-slate-800 text-white rounded-lg px-3 md:px-4 py-2 border border-slate-700 text-sm md:text-base" />
        </div>

        <Button onClick={() => addTransaction({ id: Date.now().toString(), type: txType, priority, targetSlot: targetSlot ? parseInt(targetSlot) : undefined })} className="w-full">Add Transaction</Button>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Presets</label>
          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => loadPreset('basic')} className="py-2 px-2 md:px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs md:text-sm">Basic</button>
            <button onClick={() => loadPreset('gaming')} className="py-2 px-2 md:px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs md:text-sm">Gaming</button>
            <button onClick={() => loadPreset('defi')} className="py-2 px-2 md:px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs md:text-sm">DeFi</button>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={runSimulation} className="flex-1">Run</Button>
          <Button onClick={reset} variant="secondary" className="flex-1">Reset</Button>
        </div>
      </div>
    </Card>
  );
}
