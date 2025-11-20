'use client';

import { useSimulatorStore } from '@/store/simulatorStore';
import Card from '../common/Card';

export default function Timeline() {
  const { results } = useSimulatorStore();
  const SLOT_COUNT = 12;
  const getColor = (status: string) => status === 'success' ? '#22c55e' : status === 'pending' ? '#38bdf8' : '#ef4444';

  return (
    <Card>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Timeline</h2>
      <div className="overflow-x-auto -mx-4 px-4">
        <svg viewBox="0 0 800 200" className="w-full min-w-[500px] md:min-w-[600px]" preserveAspectRatio="xMidYMid meet">
          {Array.from({ length: SLOT_COUNT }, (_, i) => i + 1).map((slot) => (
            <g key={slot}>
              <rect x={50 + (slot - 1) * 60} y={80} width={50} height={80} fill="none" stroke="#334155" strokeWidth="2" rx="8" />
              <text x={75 + (slot - 1) * 60} y={70} textAnchor="middle" fill="#94a3b8" fontSize="12">{slot}</text>
            </g>
          ))}
          {results.map((tx, i) => (
            <g key={tx.id}>
              <circle cx={75 + (tx.finalSlot - 1) * 60} cy={110 + i * 15} r="8" fill={getColor(tx.status)} className="drop-shadow-[0_0_8px_currentColor]" style={{ color: getColor(tx.status) }} />
              <text x={90 + (tx.finalSlot - 1) * 60} y={114 + i * 15} fill="#e2e8f0" fontSize="10">{tx.type}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-4 mt-4 text-xs md:text-sm">
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500"></div><span className="text-slate-300">Success</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-cyan-400"></div><span className="text-slate-300">Pending</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><span className="text-slate-300">Failed</span></div>
      </div>
    </Card>
  );
}
