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
            <main className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">

                {/* HEADER - Reduzi um pouco a margem inferior de mb-6 para mb-4 */}
                <header className="flex items-center justify-between mb-4 h-12 shrink-0">
                    <div className="flex items-center gap-6">
                        <AssetSelector selected={selectedAsset} onSelect={setSelectedAsset} />
                        <div className="hidden md:block text-slate-400 text-sm border-l border-slate-700 pl-6 italic">
                            Licença Ativa | Mensal
                        </div>
                    </div>
                </header>

                {/* ÁREA CENTRAL - O segredo está no gap-4 e flex-1 */}
                <div className="flex gap-4 flex-1 overflow-hidden mb-4">
                    {/* Grid com gap menor para ganhar espaço */}
                    <div className="grid grid-cols-4 grid-rows-2 gap-3 flex-1 h-full">
                        {timeframes.map((tf) => (
                            <GaugeIndicator
                                key={tf}
                                label={tf}
                                data={data[tf] || { value: 50, buy: 0, sell: 0, status: "..." }}
                            />
                        ))}
                    </div>

                    <div className="h-full flex flex-col shrink-0">
                        <CurrencyStrength />
                    </div>
                </div>

                {/* FOOTER - Garantindo que ele não suba no conteúdo */}
                <footer className="h-16 border-t border-slate-800 flex flex-col items-center justify-center bg-[#0f172a] shrink-0 px-2 pt-6 gap-4">
                    <div className="flex gap-10 text-xs font-bold items-center ">
                        <span className="text-blue-400 uppercase tracking-widest">Resumo:</span>
                        <div className="flex gap-6 items-center">
                            <span className="text-rose-500 font-black">5 VENDAS</span>
                            <span className="text-emerald-500 font-black">14 COMPRAS</span>
                            <span className="text-emerald-400 uppercase text-[10px] px-2 py-0.5 border border-emerald-500/30 rounded">5 Compra Forte</span>
                        </div>
                    </div>

                    <div className="flex gap-6 text-[10px] text-blue-400/50 uppercase font-medium">
                        <span>Dados reais atualizados:</span>
                        <div className="flex gap-4">
                            <span>📅 {new Date().toLocaleDateString('pt-BR')}</span>
                            <span>🕒 {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}