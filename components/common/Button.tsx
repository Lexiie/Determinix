interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const variantClass = variant === 'primary' 
    ? 'bg-green-500 hover:bg-green-400 text-slate-950 shadow-lg shadow-green-500/50' 
    : 'bg-slate-800 hover:bg-slate-700 text-green-400 border border-green-500/30';
  
  return <button onClick={onClick} className={`px-6 py-3 rounded-xl font-semibold transition-all ${variantClass} ${className}`}>{children}</button>;
}
