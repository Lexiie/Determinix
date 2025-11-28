interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export default function Button({ children, onClick, variant = 'primary', className = '', disabled = false }: ButtonProps) {
  const variantClass = variant === 'primary' 
    ? 'bg-green-500 hover:bg-green-400 text-slate-950 shadow-lg shadow-green-500/50' 
    : 'bg-slate-800 hover:bg-slate-700 text-green-400 border border-green-500/30';
  
  return <button onClick={onClick} disabled={disabled} className={`px-6 py-3 rounded-xl font-semibold transition-all ${variantClass} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}>{children}</button>;
}
