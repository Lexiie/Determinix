'use client';

import Card from '../common/Card';

interface Event {
  id: number;
  timestamp: string;
  action: string;
  state: string;
  slot?: number;
}

interface EventLogProps {
  events: Event[];
}

export default function EventLog({ events }: EventLogProps) {
  const getEventIcon = (action: string) => {
    if (action.includes('reserve')) return '📌';
    if (action.includes('execute')) return '⚡';
    if (action.includes('confirm')) return '✅';
    if (action.includes('fail')) return '❌';
    if (action.includes('retry')) return '🔄';
    return '•';
  };

  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-4">Event Log</h2>
      <div className="space-y-2 max-h-80 overflow-y-auto">
        {events.length === 0 ? (
          <p className="text-slate-400 text-sm">No events yet. Select a scenario and click Run or Step.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="flex items-start gap-3 p-2 bg-slate-800/50 rounded border border-slate-700/50">
              <span className="text-lg">{getEventIcon(event.action)}</span>
              <div className="flex-1">
                <p className="text-sm text-white font-mono">
                  [{event.action}] → {event.state}
                  {event.slot && ` (Slot ${event.slot})`}
                </p>
                <p className="text-xs text-slate-500">{event.timestamp}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
