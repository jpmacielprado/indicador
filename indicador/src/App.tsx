
import { AssetSelector } from './components/AssetSelector';
import GaugeIndicator from './components/GaugeIndicator';


export type CategoryId = 'CURTO_PRAZO' | 'OPERACIONAL' | 'TENDENCIA' | 'MACRO';

function App() {


  const categoryData = {
    CURTO_PRAZO: { labels: ['M1', 'M5'], values: [45, 62] },
    OPERACIONAL: { labels: ['M15', 'M30'], values: [80, 23] },
    TENDENCIA: { labels: ['H1', 'H4'], values: [70, 15] },
    MACRO: { labels: ['D1', 'W1'], values: [92, 12] },
  };

  // Transformamos o objeto em uma lista plana para facilitar o mapeamento do grid
  const allGauges = Object.entries(categoryData).flatMap(([category, data]) =>
    data.labels.map((label, index) => ({
      label,
      value: data.values[index],
      category
    }))
  );

  return (
    <div className="flex h-screen bg-[#191832] text-white overflow-hidden">


      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <AssetSelector selected="AUD/CAD" />

          <div className="flex items-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[1.5px]">Licença Ativa</span>
          </div>
        </header>

        {/* Título Central */}
        <div className="text-center mb-8">
          <h1 className="text-slate-500 text-xs font-bold uppercase tracking-[3px]">
            Painel de Confluência Multi-Timeframe
          </h1>
        </div>

        {/* GRID PRINCIPAL: 4 colunas (desktop) e 2 linhas automáticas */}
        <div className="max-w-350 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allGauges.map((gauge, index) => (
              <div
                key={index}

              >
                <GaugeIndicator
                  value={gauge.value}
                  label={gauge.label}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;