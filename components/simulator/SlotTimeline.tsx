'use client';

import Card from '../common/Card';

interface SlotTimelineProps {
  slots: Array<{
    id: number;
    type: 'empty' | 'aot' | 'jit' | 'executing' | 'confirmed' | 'failed' | 'retry';
    label?: string;
  }>;
  currentSlot: number;
}

export default function SlotTimeline({ slots, currentSlot }: SlotTimelineProps) {
  const getSlotColor = (type: string) => {
    switch (type) {
      case 'aot': return 'bg-blue-500';
      case 'jit': return 'bg-yellow-500';
      case 'executing': return 'bg-green-500 animate-pulse';
      case 'confirmed': return 'bg-green-700';
      case 'failed': return 'bg-red-600';
      case 'retry': return 'bg-orange-500';
      default: return 'bg-slate-800';
    }
  };

  const getSlotLabel = (type: string) => {
    switch (type) {
      case 'aot': return 'AOT';
      case 'jit': return 'JIT';
      case 'executing': return 'EXEC';
      case 'confirmed': return '✓';
      case 'failed': return '✗';
      case 'retry': return '↻';
      default: return '';
    }
  };

  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-4">Slot Timeline</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-12 gap-2">
          {slots.map((slot) => (
            <div key={slot.id} className="flex flex-col items-center group relative">
              <div
                className={`w-full aspect-square rounded-lg ${getSlotColor(slot.type)} ${
                  slot.id === currentSlot ? 'ring-2 ring-white shadow-lg' : ''
                } transition-all flex flex-col items-center justify-center cursor-pointer hover:scale-110`}
                title={`Slot ${99 + slot.id} - ${slot.type}`}
              >
                <span className="text-white text-[10px] font-bold">{99 + slot.id}</span>
                <span className="text-white text-xs font-bold">{getSlotLabel(slot.type)}</span>
              </div>
              {slot.id === currentSlot && (
                <div className="absolute -bottom-2 w-2 h-2 bg-white rounded-full animate-bounce"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t border-slate-700 grid grid-cols-3 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-slate-300">AOT</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-slate-300">JIT</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-slate-300">Executing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-700 rounded"></div>
            <span className="text-slate-300">Confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-600 rounded"></div>
            <span className="text-slate-300">Failed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span className="text-slate-300">Retry</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
