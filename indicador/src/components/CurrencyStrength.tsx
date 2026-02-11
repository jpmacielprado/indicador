
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
    <div className="bg-[#111827]/80 border border-slate-800 rounded-xl p-4 w-full min-w-65 h-full flex flex-col shadow-lg">
      <h3 className="text-slate-300 text-[10px] font-black mb-6 text-center uppercase tracking-[0.3em] border-b border-slate-800/50 pb-4">
        Força Relativa da Moeda
      </h3>

      <div className="flex-1 flex flex-col justify-around">
        {displayData.map((item) => {
          const config = getStrengthConfig(item.val);
          
          return (
            <div key={item.coin} className="flex items-center gap-4 py-1 group">
              <div className="flex items-center gap-2 w-14 shrink-0">
                <span className="text-lg group-hover:scale-110 transition-transform">
                    {FLAGS[item.coin] || "🏳️"}
                </span>
                <span className="text-sm font-black text-white">{item.coin}</span>
              </div>

              <div className="flex-1 bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`${config.color} h-full rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${item.val * 10}%` }}
                />
              </div>

              <span className={`text-sm font-black w-8 text-right transition-colors ${config.text}`}>
                {item.val.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}