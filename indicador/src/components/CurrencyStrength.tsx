"use client";
import { useEffect, useState } from "react";

const getStrengthConfig = (val: number) => {
  if (val <= 2.0) return { gradient: "from-rose-600 to-rose-400", shadow: "shadow-rose-500/20", text: "text-rose-500" };
  if (val <= 4.5) return { gradient: "from-rose-400 to-orange-400", shadow: "shadow-rose-400/10", text: "text-rose-400" };
  if (val <= 5.5) return { gradient: "from-slate-500 to-slate-300", shadow: "shadow-slate-400/10", text: "text-slate-400" };
  if (val <= 8.0) return { gradient: "from-emerald-400 to-cyan-400", shadow: "shadow-emerald-400/10", text: "text-emerald-400" };
  return { gradient: "from-emerald-600 to-emerald-400", shadow: "shadow-emerald-500/20", text: "text-emerald-500" };
};

const FLAGS: { [key: string]: string } = {
  USD: "🇺🇸", GBP: "🇬🇧", AUD: "🇦🇺", EUR: "🇪🇺",
  NZD: "🇳🇿", CHF: "🇨🇭", CAD: "🇨🇦", JPY: "🇯🇵"
};

function useStrengthDims() {
  const [dims, setDims] = useState({
    flag: "text-base", coin: "text-xs", value: "text-xs", bar: "h-2.5",
    coinW: "w-11", valueW: "w-6", gap: "gap-2", innerGap: "gap-1.5",
    py: "py-1", padding: "p-4", titleSize: "text-[10px]", titleMb: "mb-4",
    titlePb: "pb-3", containerGap: "gap-1",
  });

  useEffect(() => {
    const update = () => {
      const h = window.innerHeight;
      if (h >= 1080) setDims({
        flag: "text-2xl", coin: "text-base", value: "text-base", bar: "h-4",
        coinW: "w-16", valueW: "w-9", gap: "gap-4", innerGap: "gap-3",
        py: "py-2", padding: "p-6", titleSize: "text-sm", titleMb: "mb-6",
        titlePb: "pb-4", containerGap: "gap-2",
      });
      else if (h >= 900) setDims({
        flag: "text-xl", coin: "text-sm", value: "text-sm", bar: "h-3",
        coinW: "w-14", valueW: "w-8", gap: "gap-3", innerGap: "gap-2",
        py: "py-1.5", padding: "p-5", titleSize: "text-xs", titleMb: "mb-4",
        titlePb: "pb-3", containerGap: "gap-1",
      });
      else setDims({
        flag: "text-base", coin: "text-[11px]", value: "text-[11px]", bar: "h-2.5",
        coinW: "w-12", valueW: "w-7", gap: "gap-2.5", innerGap: "gap-2",
        py: "py-1", padding: "p-4", titleSize: "text-[10px]", titleMb: "mb-3",
        titlePb: "pb-2", containerGap: "gap-1",
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return dims;
}

export function CurrencyStrength({ strengthData }: { strengthData?: any[] }) {
  const dims = useStrengthDims();
  const displayData = strengthData || [
    { coin: "USD", val: 5.0 }, { coin: "EUR", val: 5.0 },
    { coin: "GBP", val: 5.0 }, { coin: "JPY", val: 5.0 },
    { coin: "AUD", val: 5.0 }, { coin: "CHF", val: 5.0 },
    { coin: "CAD", val: 5.0 }, { coin: "NZD", val: 5.0 }
  ];

  return (
    <div className={`bg-linear-to-br from-[#111827] to-[#0f172a] border border-slate-800 rounded-2xl ${dims.padding} w-full max-w-75 h-full flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden`}>
      <h3 className={`text-slate-400 ${dims.titleSize} font-black ${dims.titleMb} text-center uppercase tracking-[0.4em] border-b border-white/5 ${dims.titlePb}`}>
        Força Atual
      </h3>

      <div className={`flex-1 flex flex-col justify-around ${dims.containerGap}`}>
        {displayData.map((item) => {
          const config = getStrengthConfig(item.val);
          return (
            <div key={item.coin} className={`flex items-center ${dims.gap} ${dims.py} group transition-all`}>
              <div className={`flex items-center ${dims.innerGap} ${dims.coinW} shrink-0`}>
                <span className={`${dims.flag} drop-shadow-md group-hover:scale-125 transition-transform duration-300`}>
                  {FLAGS[item.coin] || "🏳️"}
                </span>
                <span className={`${dims.coin} font-black text-slate-200`}>{item.coin}</span>
              </div>

              <div className={`flex-1 bg-black/40 ${dims.bar} rounded-full overflow-hidden border border-white/5 p-px`}>
                <div
                  className={`bg-linear-to-r ${config.gradient} h-full rounded-full transition-all duration-1000 ease-out ${config.shadow}`}
                  style={{ width: `${item.val * 10}%` }}
                />
              </div>

              <span className={`${dims.value} font-mono font-black ${dims.valueW} text-right ${config.text}`}>
                {item.val.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}