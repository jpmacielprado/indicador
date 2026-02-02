import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

interface AssetSelectorProps {
  selected: string;
  onSelect: (symbol: string) => void; // Função para avisar o App.tsx
}

// Lista de ativos que seu SaaS suporta
const ASSETS = [
  { id: "BTCUSDT", name: "Bitcoin / Tether" },
  { id: "ETHUSDT", name: "Ethereum / Tether" },
  { id: "XAUUSD", name: "Ouro (Gold)" },
  { id: "EURUSD", name: "Euro / Dólar" },
  { id: "GBPUSD", name: "Libra / Dólar" },
  { id: "SOLUSDT", name: "Solana / Tether" },
];

export function AssetSelector({ selected, onSelect }: AssetSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (symbol: string) => {
    onSelect(symbol);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botão Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-[#0b101d] hover:bg-[#1e293b] transition-colors border border-slate-800 px-4 py-2 rounded-xl group"
      >
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-[#0b101d] flex items-center justify-center text-[10px] font-bold">
            {selected[0]}
          </div>
          <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-[#0b101d] flex items-center justify-center text-[10px] font-bold">
            {selected[1]}
          </div>
        </div>

        <span className="font-bold text-slate-200 tracking-wide">{selected}</span>

        <ChevronDown
          size={18}
          className={`text-slate-500 group-hover:text-white transition-all ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop para fechar ao clicar fora */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          <div className="absolute top-full left-0 mt-2 w-56 bg-[#0b101d] border border-slate-800 rounded-xl shadow-2xl z-20 overflow-hidden">
            {ASSETS.map((asset) => (
              <button
                key={asset.id}
                onClick={() => handleSelect(asset.id)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-slate-300 hover:bg-[#1e293b] hover:text-white transition-colors border-b border-slate-800/50 last:border-none"
              >
                <span className={selected === asset.id ? "text-emerald-500 font-bold" : ""}>
                  {asset.id} <span className="text-[10px] text-slate-500 ml-1 font-normal">{asset.name}</span>
                </span>
                {selected === asset.id && <Check size={14} className="text-emerald-500" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}