import { useState } from 'react';
import { TimeframeSidebar } from './components/TimeframeSidebar';
import { AssetSelector } from './components/AssetSelector';
import GaugeIndicator from './components/GaugeIndicator';

// Definimos o tipo para as categorias de estratégia
export type CategoryId = 'CURTO_PRAZO' | 'OPERACIONAL' | 'TENDENCIA' | 'MACRO';

function App() {
  // Estado que controla a estratégia selecionada
  const [activeCategory, setActiveCategory] = useState<CategoryId>('OPERACIONAL');

  // Dados simulados para cada categoria (isso virá do seu Python depois)
  const categoryData = {
    CURTO_PRAZO: { labels: ['M1', 'M5'], values: [45, 62] },
    OPERACIONAL: { labels: ['M15', 'M30'], values: [80, 23] },
    TENDENCIA: { labels: ['H1', 'H4'], values: [70, 15] },
    MACRO: { labels: ['D1', 'W1'], values: [92, 12] },
  };

  const current = categoryData[activeCategory];

  return (
    <div className="flex h-screen bg-[#0b101d] text-white overflow-hidden">

      {/* 1. Sidebar Lateral com as Estratégias */}
      <aside className="w-72 p-6 border-r border-slate-800 bg-[#0f172a]">
        <TimeframeSidebar activeCategory={activeCategory} onSelect={setActiveCategory} />
      </aside>

      {/* 2. Área de Conteúdo Principal */}
      <main className="flex-1 p-8 overflow-y-auto">

        {/* CABEÇALHO (Header) */}
        <header className="flex justify-between items-center mb-12">
          {/* Seletor de Ativo à esquerda */}
          <AssetSelector selected="AUD/CAD" />

          {/* Status da Licença à direita */}
          <div className="flex items-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[1.5px]">
              Licença Ativa
            </span>
          </div>
        </header>

        {/* ÁREA DOS RELÓGIOS (Grid Central) */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-slate-500 text-xs font-bold uppercase tracking-[3px]">
              Análise de Confluência: {activeCategory.replace('_', ' ')}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Relógio 1 */}
            <GaugeIndicator
              value={current.values[0]}
              label={current.labels[0]}
            />

            {/* Relógio 2 */}
            <GaugeIndicator
              value={current.values[1]}
              label={current.labels[1]}
            />
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;