'use client';

import Card from '../common/Card';

interface SlotTimelineProps {
  slots: Array<{
    id: number;
    type: 'empty' | 'aot' | 'jit' | 'executing' | 'confirmed' | 'failed';
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
      case 'confirmed': return 'bg-green-600';
      case 'failed': return 'bg-red-600';
      default: return 'bg-slate-800';
    }
  };

  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-4">Slot Timeline</h2>
      <div className="space-y-2">
        <div className="grid grid-cols-12 gap-2">
          {slots.map((slot) => (
            <div key={slot.id} className="flex flex-col items-center">
              <div
                className={`w-full aspect-square rounded-lg ${getSlotColor(slot.type)} ${
                  slot.id === currentSlot ? 'ring-2 ring-white' : ''
                } transition-all flex items-center justify-center`}
              >
                <span className="text-white text-xs font-bold">{slot.id}</span>
              </div>
              {slot.label && (
                <span className="text-xs text-slate-400 mt-1 text-center">{slot.label}</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t border-slate-700 grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-slate-300">AOT Reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-slate-300">JIT Reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-slate-300">Executing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            <span className="text-slate-300">Confirmed</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
