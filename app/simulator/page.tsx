import Controls from '@/components/simulator/Controls';
import Timeline from '@/components/simulator/Timeline';
import Metrics from '@/components/simulator/Metrics';

export default function SimulatorPage() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Transaction Simulator</h1>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Controls />
            <Metrics />
          </div>
          <Timeline />
        </div>
      </div>
    </main>
  );
}
