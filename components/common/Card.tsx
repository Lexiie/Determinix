export default function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur p-6 ${className}`}>{children}</div>;
}
