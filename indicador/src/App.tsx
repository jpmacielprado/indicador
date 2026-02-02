import { useState, useEffect } from 'react';
import { AssetSelector } from './components/AssetSelector';
import GaugeIndicator from './components/GaugeIndicator';

interface CategoryData {
  [key: string]: { labels: string[]; values: number[] };
}

function App() {
  // Estado para armazenar os dados e o status de carregamento
  const [categoryData, setCategoryData] = useState<CategoryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Exemplo de chamada para API (substitua pela URL real da sua API)
        // const response = await fetch('https://api.seusite.com/indicadores');
        // const data = await response.json();

        // Simulação de dados chegando da API (remover quando integrar)
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockData = {
          CURTO_PRAZO: { labels: ['M1', 'M5'], values: [45, 62] },
          OPERACIONAL: { labels: ['M15', 'M30'], values: [80, 23] },
          TENDENCIA: { labels: ['H1', 'H4'], values: [70, 15] },
          MACRO: { labels: ['D1', 'W1'], values: [92, 12] },
        };

        setCategoryData(mockData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex h-screen bg-[#191832] text-white items-center justify-center">Carregando indicadores...</div>;
  }

  // Transformamos o objeto em uma lista plana para facilitar o mapeamento do grid
  const allGauges = categoryData ? Object.entries(categoryData).flatMap(([category, data]) =>
    data.labels.map((label, index) => ({
      label,
      value: data.values[index],
      category
    }))
  ) : [];

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

        {/* GRID PRINCIPAL: 4 colunas (desktop) e 2 linhas automáticas */}
        <div className="max-h-screen overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allGauges.map((gauge) => (
              <GaugeIndicator key={gauge.label} label={gauge.label} value={gauge.value} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;