

const getStrengthConfig = (val: number) => {
  if (val <= 2.0) return { color: "bg-rose-600", text: "text-rose-600" };
  if (val <= 4.5) return { color: "bg-rose-400", text: "text-rose-400" };
  if (val <= 5.5) return { color: "bg-slate-400", text: "text-slate-400" };
  if (val <= 8.0) return { color: "bg-emerald-400", text: "text-emerald-400" };
  return { color: "bg-emerald-600", text: "text-emerald-600" };
};

const FLAGS: { [key: string]: string } = {
  USD: "🇺🇸", GBP: "🇬🇧", AUD: "🇦🇺", EUR: "🇪🇺",
  NZD: "🇳🇿", CHF: "🇨🇭", CAD: "🇨🇦", JPY: "🇯🇵"
};

export function CurrencyStrength({ strengthData }: { strengthData?: any[] }) {

  const displayData = strengthData || [
    { coin: "USD", val: 5.0 }, { coin: "EUR", val: 5.0 },
    { coin: "GBP", val: 5.0 }, { coin: "JPY", val: 5.0 },
    { coin: "AUD", val: 5.0 }, { coin: "CHF", val: 5.0 },
    { coin: "CAD", val: 5.0 }, { coin: "NZD", val: 5.0 }
  ];

  return (
    // Reduzi o padding de p-4 para p-3 em notebooks e ajustei min-w
    <div className="bg-[#111827]/80 border border-slate-800 rounded-xl p-3 md:p-4 w-full h-full flex flex-col shadow-lg overflow-hidden">

      <h3 className="text-slate-300 text-[9px] lg:text-[10px] font-black mb-4 lg:mb-6 text-center uppercase tracking-[0.2em] lg:tracking-[0.3em] border-b border-slate-800/50 pb-3">
        Força Relativa da Moeda
      </h3>

      {/* Container das moedas com gap dinâmico */}
      <div className="flex-1 flex flex-col justify-around gap-1 lg:gap-0">
        {displayData.map((item) => {
          const config = getStrengthConfig(item.val);

          return (
            <div key={item.coin} className="flex items-center gap-2 lg:gap-4 py-0.5 lg:py-1 group">

              {/* Moeda e Bandeira - tamanhos responsivos */}
              <div className="flex items-center gap-1.5 lg:gap-2 w-11 lg:w-14 shrink-0">
                <span className="text-base lg:text-lg group-hover:scale-110 transition-transform">
                  {FLAGS[item.coin] || "🏳️"}
                </span>
                <span className="text-[11px] lg:text-sm font-black text-white uppercase">{item.coin}</span>
              </div>

              {/* Barra de Força - h-2 para notebooks */}
              <div className="flex-1 bg-slate-900 h-2 lg:h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`${config.color} h-full rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${item.val * 10}%` }}
                />
              </div>

              {/* Valor numérico */}
              <span className={`text-[11px] lg:text-sm font-black w-6 lg:w-8 text-right transition-colors ${config.text}`}>
                {item.val.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}