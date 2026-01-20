import { Zap, Target, TrendingUp, Globe } from 'lucide-react';
import type { CategoryId } from '../App';

interface SidebarProps {
  activeCategory: CategoryId;
  onSelect: (id: CategoryId) => void;
}

export function TimeframeSidebar({ activeCategory, onSelect }: SidebarProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-[11px] font-black text-slate-500 uppercase tracking-[2px] mb-6 px-2">
        Estratégia de Análise
      </h2>

      <CategoryButton
        id="CURTO_PRAZO" label="Curto Prazo" desc="M1 e M5"
        icon={<Zap size={18} />}
        active={activeCategory === 'CURTO_PRAZO'}
        onClick={onSelect}
      />

      <CategoryButton
        id="OPERACIONAL" label="Operacional" desc="M15 e M30"
        icon={<Target size={18} />}
        active={activeCategory === 'OPERACIONAL'}
        onClick={onSelect}
      />

      <CategoryButton
        id="TENDENCIA" label="Tendência" desc="H1 e H4"
        icon={<TrendingUp size={18} />}
        active={activeCategory === 'TENDENCIA'}
        onClick={onSelect}
      />

      <CategoryButton
        id="MACRO" label="Macro" desc="D1 e W1"
        icon={<Globe size={18} />}
        active={activeCategory === 'MACRO'}
        onClick={onSelect}
      />
    </div>
  );
}

function CategoryButton({ id, label, desc, icon, active, onClick }: any) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${active
        ? 'bg-blue-600/20 border-blue-500/50 shadow-lg shadow-blue-500/10'
        : 'border-slate-800 bg-slate-900/20 hover:bg-slate-800/40 text-slate-400'
        }`}
    >
      <div className={`${active ? 'text-blue-400' : 'text-slate-600'}`}>
        {icon}
      </div>
      <div className="text-left flex-1">
        <div className="flex items-center justify-between">
          <span className={`font-bold ${active ? 'text-white' : 'text-slate-300'}`}>{label}</span>

        </div>
        <span className="text-[10px] text-slate-500 font-medium uppercase">{desc}</span>
      </div>
    </button>
  );
}