// Função auxiliar para definir cores baseada na força (0 a 10)
const getStrengthConfig = (val: number) => {
  if (val <= 2.0) return { color: "bg-rose-600", text: "text-rose-600" };   // Venda Forte
  if (val <= 4.5) return { color: "bg-rose-400", text: "text-rose-400" };   // Venda
  if (val <= 5.5) return { color: "bg-slate-400", text: "text-slate-400" }; // Neutro
  if (val <= 8.0) return { color: "bg-emerald-400", text: "text-emerald-400" }; // Compra
  return { color: "bg-emerald-600", text: "text-emerald-600" };            // Compra Forte
};

const STRENGTH_DATA = [
  { coin: "USD", val: 8.5, flag: "🇺🇸" },
  { coin: "GBP", val: 6.8, flag: "🇬🇧" },
  { coin: "AUD", val: 5.2, flag: "🇦🇺" },
  { coin: "EUR", val: 5.0, flag: "🇪🇺" },
  { coin: "NZD", val: 4.3, flag: "🇳🇿" },
  { coin: "CHF", val: 3.6, flag: "🇨🇭" },
  { coin: "CAD", val: 1.8, flag: "🇨🇦" },
  { coin: "JPY", val: 0.9, flag: "🇯🇵" },
];

export function CurrencyStrength() {
  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-xl p-4 w-full min-w-65 h-full flex flex-col shadow-lg">
      <h3 className="text-slate-300 text-[10px] font-black mb-6 text-center uppercase tracking-[0.3em] border-b border-slate-800/50 pb-4">
        Força Relativa da Moeda
      </h3>

      <div className="flex-1 flex flex-col justify-around">
        {STRENGTH_DATA.map((item) => {
          const config = getStrengthConfig(item.val);

          return (
            <div key={item.coin} className="flex items-center gap-4 py-1 group">
              {/* Moeda e Bandeira */}
              <div className="flex items-center gap-2 w-14 shrink-0">
                <span className="text-lg group-hover:scale-110 transition-transform">{item.flag}</span>
                <span className="text-sm font-black text-white">{item.coin}</span>
              </div>

              {/* Barra de Progresso */}
              <div className="flex-1 bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`${config.color} h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                  style={{ width: `${item.val * 10}%` }}
                />
              </div>

              {/* Valor Numérico */}
              <span className={`text-sm font-black w-8 text-right transition-colors ${config.text}`}>
                {item.val.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legenda rápida opcional */}
      <div className="mt-4 flex justify-between text-[8px] text-slate-500 font-bold uppercase tracking-tighter italic">
        <span>Fraco</span>
        <span>Neutro</span>
        <span>Forte</span>
      </div>
    </div>
  );
}