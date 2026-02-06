import { useState } from 'react';
import { AssetSelector } from './components/AssetSelector';
import GaugeIndicator from './components/GaugeIndicator';
import { CurrencyStrength } from './components/CurrencyStrength';

function App() {
  const [selectedAsset, setSelectedAsset] = useState("AUD/CAD");

  // Dados estáticos para preencher o grid de 8 relógios
  const gauges = [
    { label: "M1", value: 80, buy: 14, sell: 9, status: "Comprar" },
    { label: "M5", value: 80, buy: 14, sell: 9, status: "Comprar" },
    { label: "M15", value: 80, buy: 14, sell: 9, status: "Comprar" },
    { label: "M30", value: 80, buy: 14, sell: 9, status: "Comprar" },
    { label: "H1", value: 80, buy: 14, sell: 9, status: "Comprar" },
    { label: "H4", value: 80, buy: 14, sell: 9, status: "Comprar" },
    { label: "D1", value: 80, buy: 14, sell: 9, status: "Comprar" },
    { label: "W1", value: 80, buy: 14, sell: 9, status: "Comprar" },
  ];

  return (
    <div className="h-screen bg-[#0f172a] text-white font-sans overflow-hidden flex flex-col">
      
      {/* CONTEÚDO PRINCIPAL PADDING AJUSTADO */}
      <main className="flex-1 flex flex-col p-6 overflow-hidden">
        
        {/* HEADER */}
        <header className="flex items-center justify-between mb-6 h-10">
          <div className="flex items-center gap-6">
             <AssetSelector selected={selectedAsset} onSelect={setSelectedAsset} />
             <div className="text-slate-400 text-[12px] border-l border-slate-700 pl-6 italic">
               Licença Ativa | Mensal | Válida até 25/06/2026
             </div>
          </div>
        </header>

        {/* ÁREA CENTRAL - Ocupa todo o espaço restante */}
        <div className="flex gap-6 flex-1 overflow-hidden mb-6">
          
          {/* GRID DE GAUGES - 2 LINHAS FIXAS */}
          <div className="grid grid-cols-4 grid-rows-2 gap-4 flex-1">
            {gauges.map((g, i) => (
              <GaugeIndicator key={i} label={g.label} data={g} />
            ))}
          </div>

          {/* RANKING LATERAL */}
          <div className="h-full flex flex-col">
            <CurrencyStrength />
          </div>
        </div>

        {/* FOOTER - FIXO NA BASE */}
        <footer className="h-24 border-t border-slate-800 flex flex-col justify-center gap-3 bg-[#0f172a]">
          <div className="flex gap-10 text-[12px] font-bold">
            <span className="text-blue-400 uppercase tracking-[0.2em]">Resumo:</span>
            <div className="flex gap-6">
              <span className="text-rose-500">5 VENDAS</span>
              <span className="text-emerald-500">14 COMPRAS</span>
              <span className="text-emerald-400 uppercase">5 COMPRAS FORTE</span>
            </div>
          </div>
          
          <div className="text-[10px] text-blue-400/60 flex gap-6 uppercase tracking-widest">
            <span>Dados reais atualizados:</span>
            <div className="flex gap-4">
              <span>📅 16/01/2026</span>
              <span>🕒 10:40:32</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;