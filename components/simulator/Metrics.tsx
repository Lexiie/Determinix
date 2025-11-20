'use client';

import { useSimulatorStore } from '@/store/simulatorStore';
import Card from '../common/Card';

export default function Metrics() {
  const { results } = useSimulatorStore();
  const successRate = results.length > 0 ? (results.filter(r => r.status === 'success').length / results.length * 100).toFixed(1) : '0';
  const averageDelay = results.length > 0 ? (results.reduce((sum, r) => sum + r.delay, 0) / results.length).toFixed(2) : '0';
  const reorderedCount = results.filter(r => r.reordered).length;
  const reservedSlots = new Set(results.map(r => r.finalSlot)).size;

  return (
    <Card>
      <h2 className="text-2xl font-bold text-white mb-6">Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><div className="text-3xl font-bold text-green-400">{successRate}%</div><div className="text-sm text-slate-400">Success Rate</div></div>
        <div><div className="text-3xl font-bold text-cyan-400">{averageDelay}</div><div className="text-sm text-slate-400">Avg Delay</div></div>
        <div><div className="text-3xl font-bold text-yellow-400">{reorderedCount}</div><div className="text-sm text-slate-400">Reordered</div></div>
        <div><div className="text-3xl font-bold text-purple-400">{reservedSlots}</div><div className="text-sm text-slate-400">Reserved Slots</div></div>
      </div>
    </Card>
  );
}
