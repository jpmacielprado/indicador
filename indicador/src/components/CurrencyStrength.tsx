const STRENGTH_DATA = [
  { coin: "USD", val: 7.2, color: "bg-emerald-500", flag: "🇺🇸" },
  { coin: "GBP", val: 6.8, color: "bg-emerald-600", flag: "🇬🇧" },
  { coin: "AUD", val: 5.9, color: "bg-emerald-700", flag: "🇦🇺" },
  { coin: "EUR", val: 5.9, color: "bg-emerald-700", flag: "🇪🇺" },
  { coin: "NZD", val: 4.3, color: "bg-yellow-500", flag: "🇳🇿" },
  { coin: "CHF", val: 3.6, color: "bg-yellow-600", flag: "🇨🇭" },
  { coin: "CAD", val: 2.8, color: "bg-rose-500", flag: "🇨🇦" },
  { coin: "JPY", val: 2.4, color: "bg-rose-600", flag: "🇯🇵" },
];

export function CurrencyStrength() {
  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-lg p-4 w-full min-w-65 h-full flex flex-col">
      <h3 className="text-slate-300 text-xs font-black mb-6 text-center uppercase tracking-[0.2em] border-b border-slate-800 pb-4">
        Classificação da moeda
      </h3>
      
      {/* O space-y-auto ou flex-1 aqui ajuda a distribuir melhor se a tela for alta */}
      <div className="flex-1 flex flex-col justify-around"> 
        {STRENGTH_DATA.map((item) => (
          <div key={item.coin} className="flex items-center gap-4 py-1">
            <div className="flex items-center gap-2 w-14">
              <span className="text-lg">{item.flag}</span>
              <span className="text-sm font-black text-white">{item.coin}</span>
            </div>
            
            <div className="flex-1 bg-slate-800 h-3 rounded-full overflow-hidden border border-slate-700">
              <div 
                className={`${item.color} h-full rounded-full transition-all duration-1000`} 
                style={{ width: `${item.val * 10}%` }}
              />
            </div>
            
            <span className={`text-sm font-black w-8 text-right ${item.val > 5 ? 'text-emerald-500' : 'text-rose-500'}`}>
              {item.val.toFixed(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}