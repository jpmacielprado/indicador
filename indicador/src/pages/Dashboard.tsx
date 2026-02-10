import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AssetSelector } from '../components/AssetSelector';
import GaugeIndicator from '../components/GaugeIndicator';
import { CurrencyStrength } from '../components/CurrencyStrength';

export default function Dashboard() {
    const [selectedAsset, setSelectedAsset] = useState("BTCUSDT");
    const [data, setData] = useState<any>({});
    const [statusConn, setStatusConn] = useState<'conectado' | 'desconectado' | 'reconectando'>('desconectado');

    const navigate = useNavigate();
    const socketRef = useRef<WebSocket | null>(null); // Usamos useRef para manter a referência do socket

    const connectWebSocket = () => {
        const token = localStorage.getItem('token');

        // Se não houver token, nem tenta conectar e manda para o login
        if (!token) {
            navigate('/login');
            return;
        }

        setStatusConn('reconectando');

        const socket = new WebSocket(
            `ws://localhost:8000/ws/analise_completa/${selectedAsset}?token=${token}`
        );

        socket.onopen = () => {
            console.log("Conectado ao servidor de sinais!");
            setStatusConn('conectado');
        };

        socket.onmessage = (event) => {
            try {
                const payload = JSON.parse(event.data);
                setData(payload);
            } catch (err) {
                console.error("Erro ao processar dados", err);
            }
        };

        socket.onclose = () => {
            setStatusConn('desconectado');
            console.log("Conexão perdida. Tentando reconectar em 3 segundos...");
            // Tenta reconectar após 3 segundos
            setTimeout(() => {
                connectWebSocket();
            }, 3000);
        };

        socket.onerror = (err) => {
            console.error("Erro no WebSocket:", err);

            // Teste para Vercel: Se não estiver no localhost, simula dados para os relógios aparecerem
            if (window.location.hostname !== 'localhost') {
                setData({
                    M1: { value: 75, buy: 12, sell: 2, status: "Teste Vercel" },
                    M5: { value: 40, buy: 5, sell: 8, status: "Aguardando" },
                    M15: { value: 60, buy: 10, sell: 4, status: "Compra" },
                    M30: { value: 30, buy: 3, sell: 12, status: "Venda" },
                    H1: { value: 55, buy: 8, sell: 6, status: "Neutro" },
                    H4: { value: 80, buy: 15, sell: 1, status: "Forte Compra" },
                    D1: { value: 20, buy: 2, sell: 10, status: "Forte Venda" },
                    W1: { value: 50, buy: 7, sell: 7, status: "Indefinido" },
                    // Adicione os outros timeframes se quiser ver todos ativos
                });
            }

            socket.close();
        };


        socketRef.current = socket;
    };

    useEffect(() => {
        connectWebSocket();

        // Cleanup: Fecha o socket quando o utilizador muda de ativo ou sai da página
        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, [selectedAsset]);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const timeframes = ["M1", "M5", "M15", "M30", "H1", "H4", "D1", "W1"];

    return (
        <div className="h-screen bg-[#0f172a] text-white font-sans overflow-hidden flex flex-col">
            <main className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">

                {/* HEADER */}
                <header className="flex items-center justify-between mb-4 h-12 shrink-0">
                    <div className="flex items-center gap-6">
                        <AssetSelector selected={selectedAsset} onSelect={setSelectedAsset} />

                        {/* Indicador de Status da Conexão */}
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                            <div className={`h-2 w-2 rounded-full ${statusConn === 'conectado' ? 'bg-emerald-500 animate-pulse' :
                                statusConn === 'reconectando' ? 'bg-yellow-500 animate-bounce' : 'bg-rose-500'
                                }`} />
                            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300">
                                {statusConn}
                            </span>
                        </div>

                        <div className="hidden md:flex items-center text-slate-400 text-sm border-l border-slate-700 pl-6 italic gap-4">
                            <span>Licença Ativa</span>
                            <button onClick={handleLogout} className="not-italic text-xs text-rose-400 hover:text-rose-300">Sair</button>
                        </div>
                    </div>
                </header>

                {/* ÁREA DOS RELÓGIOS (GAUGES) */}
                <div className="flex gap-4 flex-1 overflow-hidden mb-4">
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

                {/* FOOTER COM RESUMO REAL-TIME */}
                <footer className="h-16 border-t border-slate-800 flex flex-col items-center justify-center bg-[#0f172a] shrink-0 pt-4">
                    <div className="flex gap-10 text-xs font-bold items-center mb-2">
                        <span className="text-blue-400 uppercase tracking-widest text-[10px]">Análise Global:</span>
                        <div className="flex gap-6 items-center">
                            <span className="text-rose-500 font-black">{data.vendas || 0} VENDAS</span>
                            <span className="text-emerald-500 font-black">{data.compras || 0} COMPRAS</span>
                            <div className="h-4 w-px bg-slate-700" />
                            <span className="text-cyan-400 uppercase text-[10px]">{selectedAsset}</span>
                        </div>
                    </div>

                    <div className="text-[9px] text-slate-500 uppercase tracking-tighter">
                        Streaming de Dados via WebSocket Ativo • {new Date().toLocaleTimeString()}
                    </div>
                </footer>
            </main>
        </div>
    );
}