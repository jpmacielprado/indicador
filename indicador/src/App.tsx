import { useState, useEffect } from 'react';
import { AssetSelector } from './components/AssetSelector';
import GaugeIndicator from './components/GaugeIndicator';

// O Back agora vai enviar algo como: { "M1": 45, "M5": 62, "H1": 70 ... }
interface RealTimeData {
  [key: string]: number;
}

function App() {
  const [data, setData] = useState<RealTimeData>({});
  const [loading, setLoading] = useState(true);
  const [selectedAsset, setSelectedAsset] = useState("BTCUSDT");

  useEffect(() => {
    setLoading(true);
    // Conectamos ao novo endpoint que envia TODOS os sinais daquela moeda
    const socket = new WebSocket(`ws://localhost:8000/ws/analise_completa/${selectedAsset}`);

    socket.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      // O payload deve vir formatado do back: { "M1": 45, "M5": 60... }
      setData(payload);
      setLoading(false);
    };

    socket.onerror = () => setLoading(false);

    return () => socket.close();
  }, [selectedAsset]);

  return (
    <div className="flex h-screen bg-[#191832] text-white overflow-hidden">
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          {/* Passe uma função para mudar o asset aqui */}
          <AssetSelector
            selected={selectedAsset}
            onSelect={(symbol) => setSelectedAsset(symbol)}
          />

          <div className="flex items-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[1.5px]">Licença Ativa</span>
          </div>
        </header>

        <div className="max-h-screen">
          {loading && Object.keys(data).length === 0 ? (
            <div className="text-center text-slate-500 animate-pulse">Iniciando análise técnica...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(data).map(([label, info]) => (
                <GaugeIndicator key={label} label={label} data={info as any} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;