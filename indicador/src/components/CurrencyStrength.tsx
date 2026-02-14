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
    <div className="bg-[#111827]/80 border border-slate-800 rounded-xl p-2 xl:p-3 2xl:p-4 w-full h-full flex flex-col shadow-lg overflow-hidden">

      <h3 className="text-slate-300 text-[8px] xl:text-[9px] 2xl:text-[10px] font-black mb-2 xl:mb-4 2xl:mb-6 text-center uppercase tracking-[0.2em] xl:tracking-[0.25em] 2xl:tracking-[0.3em] border-b border-slate-800/50 pb-2">
        Força Relativa da Moeda
      </h3>

      <div className="flex-1 flex flex-col justify-around">
        {displayData.map((item) => {
          const config = getStrengthConfig(item.val);

          return (
            <div key={item.coin} className="flex items-center gap-1.5 xl:gap-2 2xl:gap-4 py-0.5 group">

              {/* Moeda e Bandeira */}
              <div className="flex items-center gap-1 xl:gap-1.5 2xl:gap-2 w-9 xl:w-11 2xl:w-14 shrink-0">
                <span className="text-sm xl:text-base 2xl:text-lg group-hover:scale-110 transition-transform leading-none">
                  {FLAGS[item.coin] || "🏳️"}
                </span>
                <span className="text-[10px] xl:text-[11px] 2xl:text-sm font-black text-white uppercase">
                  {item.coin}
                </span>
              </div>

              {/* Barra de Força */}
              <div className="flex-1 bg-slate-900 h-1.5 xl:h-2 2xl:h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`${config.color} h-full rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${item.val * 10}%` }}
                />
              </div>

              {/* Valor numérico */}
              <span className={`text-[10px] xl:text-[11px] 2xl:text-sm font-black w-5 xl:w-6 2xl:w-8 text-right transition-colors ${config.text}`}>
                {item.val.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}