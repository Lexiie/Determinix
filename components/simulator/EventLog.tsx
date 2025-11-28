'use client';

import Card from '../common/Card';

interface Event {
  id: number;
  timestamp: string;
  type: 'reserve' | 'execute' | 'confirm' | 'fail' | 'retry';
  message: string;
}

interface EventLogProps {
  events: Event[];
}

export default function EventLog({ events }: EventLogProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'reserve': return '📌';
      case 'execute': return '⚡';
      case 'confirm': return '✅';
      case 'fail': return '❌';
      case 'retry': return '🔄';
      default: return '•';
    }
  };

  return (
    <Card>
      <h2 className="text-xl font-bold text-white mb-4">Event Log</h2>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {events.length === 0 ? (
          <p className="text-slate-400 text-sm">No events yet. Start a scenario to see execution events.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="flex items-start gap-3 p-2 bg-slate-800/50 rounded">
              <span className="text-lg">{getEventIcon(event.type)}</span>
              <div className="flex-1">
                <p className="text-sm text-white">{event.message}</p>
                <p className="text-xs text-slate-500">{event.timestamp}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
