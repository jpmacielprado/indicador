import { useState, useEffect } from 'react';
// Ajuste os caminhos abaixo conforme sua nova estrutura de pastas
import { AssetSelector } from '../components/AssetSelector';
import GaugeIndicator from '../components/GaugeIndicator';
import { CurrencyStrength } from '../components/CurrencyStrength';

export default function Dashboard() {
    const [selectedAsset, setSelectedAsset] = useState("BTCUSDT");
    const [data, setData] = useState<any>({});

    // Conexão com o WebSocket (Mantenha a lógica do backend aqui)
    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:8000/ws/analise_completa/${selectedAsset}`);

        socket.onmessage = (event) => {
            try {
                const payload = JSON.parse(event.data);
                setData(payload);
            } catch (err) {
                console.error("Erro ao processar dados", err);
            }
        };

        return () => socket.close();
    }, [selectedAsset]);

    // Labels dos timeframes que queremos exibir
    const timeframes = ["M1", "M5", "M15", "M30", "H1", "H4", "D1", "W1"];

    return (
        <div className="h-screen bg-[#0f172a] text-white font-sans overflow-hidden flex flex-col">
            <main className="flex-1 flex flex-col p-6 overflow-hidden">

                {/* HEADER */}
                <header className="flex items-center justify-between mb-6 h-12">
                    <div className="flex items-center gap-6">
                        <AssetSelector
                            selected={selectedAsset}
                            onSelect={(asset: string) => setSelectedAsset(asset)}
                        />
                        <div className="text-slate-400 text-sm border-l border-slate-700 pl-6 italic">
                            Licença Ativa | Mensal | Válida até 25/06/2026
                        </div>
                    </div>
                </header>

                {/* ÁREA CENTRAL */}
                <div className="flex gap-6 flex-1 overflow-hidden mb-6">
                    <div className="grid grid-cols-4 grid-rows-2 gap-5 flex-1 h-full">
                        {timeframes.map((tf) => (
                            <GaugeIndicator
                                key={tf}
                                label={tf}
                                data={data[tf] || { value: 50, buy: 0, sell: 0, status: "CARREGANDO..." }}
                            />
                        ))}
                    </div>
                    <div className="h-full flex flex-col">
                        <CurrencyStrength />
                    </div>
                </div>

                {/* FOOTER RESUMO */}
                <footer className="h-20 border-t border-slate-800 flex flex-col justify-center gap-2 bg-[#0f172a]">
                    <div className="flex gap-10 text-sm font-bold">
                        <span className="text-blue-400 uppercase tracking-[0.2em]">Resumo:</span>
                        <div className="flex gap-8 items-center">
                            <span className="text-rose-500">5 VENDAS</span>
                            <span className="text-emerald-500">14 COMPRAS</span>
                            <span className="text-emerald-400 uppercase">5 COMPRAS FORTE</span>
                        </div>
                    </div>
                    <div className="text-[11px] text-blue-400/60 flex gap-6 uppercase tracking-[0.3em]">
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