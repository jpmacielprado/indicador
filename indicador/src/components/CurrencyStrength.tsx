"use client";
import { useEffect, useState } from "react";

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

function useStrengthDims() {
  const [dims, setDims] = useState({
    flag: "text-base",
    coin: "text-xs",
    value: "text-xs",
    bar: "h-2",
    coinW: "w-11",
    valueW: "w-6",
    gap: "gap-2",
    innerGap: "gap-1.5",
    py: "py-0.5",
    padding: "p-3",
    titleSize: "text-[10px]",
    titleMb: "mb-3",
    titlePb: "pb-2",
    containerGap: "gap-0.5",
  });

  useEffect(() => {
    const update = () => {
      const h = window.innerHeight;
      if (h >= 1080) setDims({
        flag: "text-2xl",
        coin: "text-base",
        value: "text-base",
        bar: "h-3.5",
        coinW: "w-16",
        valueW: "w-9",
        gap: "gap-4",
        innerGap: "gap-2.5",
        py: "py-1",
        padding: "p-5",
        titleSize: "text-sm",
        titleMb: "mb-4",
        titlePb: "pb-3",
        containerGap: "gap-1",
      });
      else if (h >= 900) setDims({
        flag: "text-xl",
        coin: "text-sm",
        value: "text-sm",
        bar: "h-3",
        coinW: "w-14",
        valueW: "w-8",
        gap: "gap-3",
        innerGap: "gap-2",
        py: "py-1",
        padding: "p-4",
        titleSize: "text-xs",
        titleMb: "mb-3",
        titlePb: "pb-2.5",
        containerGap: "gap-0.5",
      });
      else if (h >= 768) setDims({
        flag: "text-lg",
        coin: "text-[13px]",
        value: "text-[13px]",
        bar: "h-2.5",
        coinW: "w-12",
        valueW: "w-7",
        gap: "gap-2.5",
        innerGap: "gap-2",
        py: "py-0.5",
        padding: "p-3",
        titleSize: "text-[11px]",
        titleMb: "mb-2.5",
        titlePb: "pb-2",
        containerGap: "gap-0.5",
      });
      else setDims({
        flag: "text-base",
        coin: "text-xs",
        value: "text-xs",
        bar: "h-2",
        coinW: "w-11",
        valueW: "w-6",
        gap: "gap-2",
        innerGap: "gap-1.5",
        py: "py-0.5",
        padding: "p-3",
        titleSize: "text-[10px]",
        titleMb: "mb-3",
        titlePb: "pb-2",
        containerGap: "gap-0.5",
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
    <div className={`bg-[#111827]/80 border border-slate-800 rounded-xl ${dims.padding} w-full h-full flex flex-col shadow-lg overflow-hidden`}>

      <h3 className={`text-slate-300 ${dims.titleSize} font-black ${dims.titleMb} text-center uppercase tracking-[0.25em] border-b border-slate-800/50 ${dims.titlePb}`}>
        Força Relativa da Moeda
      </h3>

      <div className={`flex-1 flex flex-col justify-around ${dims.containerGap}`}>
        {displayData.map((item) => {
          const config = getStrengthConfig(item.val);

          return (
            <div key={item.coin} className={`flex items-center ${dims.gap} ${dims.py} group`}>

              <div className={`flex items-center ${dims.innerGap} ${dims.coinW} shrink-0`}>
                <span className={`${dims.flag} group-hover:scale-110 transition-transform leading-none`}>
                  {FLAGS[item.coin] || "🏳️"}
                </span>
                <span className={`${dims.coin} font-black text-white uppercase`}>
                  {item.coin}
                </span>
              </div>

              <div className={`flex-1 bg-slate-900 ${dims.bar} rounded-full overflow-hidden border border-slate-800`}>
                <div
                  className={`${config.color} h-full rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${item.val * 10}%` }}
                />
              </div>

              <span className={`${dims.value} font-black ${dims.valueW} text-right transition-colors ${config.text}`}>
                {item.val.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}