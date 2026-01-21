import { ChevronDown } from "lucide-react";

interface AssetSelectorProps {
  selected: string;
}

export function AssetSelector({ selected }: AssetSelectorProps) {
  return (
    <button className="flex items-center gap-3 bg-[#0b101d] hover:bg-[#1e293b] transition-colors border border-slate-800 px-4 py-2 rounded-xl group">
      {/* Ícone representando a bandeira/moeda */}
      <div className="flex -space-x-2">
        <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-[#0b101d] flex items-center justify-center text-[10px] font-bold">
          A
        </div>
        <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-[#0b101d] flex items-center justify-center text-[10px] font-bold">
          C
        </div>
      </div>

      <span className="font-bold text-slate-200 tracking-wide">{selected}</span>

      <ChevronDown
        size={18}
        className="text-slate-500 group-hover:text-white transition-colors"
      />
    </button>
  );
}
