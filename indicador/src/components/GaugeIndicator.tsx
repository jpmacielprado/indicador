"use client";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

interface GaugeProps {
  label: string;
  data: {
    value: number;
    buy: number;
    sell: number;
    status: string;
  };
}

function useChartDimensions() {
  const [dims, setDims] = useState({
    height: 120,
    fontSize: "20px",
    offsetY: 2,
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1920) setDims({ height: 280, fontSize: "40px", offsetY: 10 });
      else if (w >= 1440) setDims({ height: 200, fontSize: "30px", offsetY: 8 });
      else if (w >= 1024) setDims({ height: 140, fontSize: "22px", offsetY: 4 });
      else setDims({ height: 110, fontSize: "18px", offsetY: 2 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return dims;
}

export default function GaugeIndicator({ label, data }: GaugeProps) {
  const { value, buy, sell } = data;
  const { height: chartHeight, fontSize, offsetY } = useChartDimensions();

  const getStatusConfig = (val: number) => {
    if (val <= 20) return { label: "VENDA FORTE", color: "#e11d48", shadow: "shadow-rose-900/20", border: "border-rose-500/30", textClass: "text-rose-600" };
    if (val <= 45) return { label: "VENDA", color: "#fb7185", shadow: "shadow-rose-900/10", border: "border-rose-400/20", textClass: "text-rose-400" };
    if (val <= 55) return { label: "NEUTRO", color: "#94a3b8", shadow: "shadow-slate-900/10", border: "border-slate-700/30", textClass: "text-slate-400" };
    if (val <= 80) return { label: "COMPRA", color: "#34d399", shadow: "shadow-emerald-900/10", border: "border-emerald-400/20", textClass: "text-emerald-400" };
    return { label: "COMPRA FORTE", color: "#059669", shadow: "shadow-emerald-900/20", border: "border-emerald-500/30", textClass: "text-emerald-600" };
  };

  const config = getStatusConfig(value);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
      animations: { enabled: true, speed: 800 },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: "65%" },
        track: {
          background: "rgba(30, 41, 59, 0.5)",
          strokeWidth: "100%",
          margin: 0,
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: offsetY,
            fontSize: fontSize,
            fontWeight: "900",
            color: "#fff",
            formatter: () => value + "%",
          },
        },
      },
    },
    fill: { 
      colors: [config.color], 
      type: "solid" 
    },
    stroke: { lineCap: "butt" },
  };

  return (
    <div className={`bg-linear-to-b from-[#1e293b]/40 to-[#0f172a]/90 border ${config.border} rounded-2xl flex flex-col items-center justify-between h-full shadow-2xl ${config.shadow} transition-all duration-500 overflow-hidden group`}>
      
      {/* Glow Effect */}
      <div className={`absolute -top-10 -left-10 w-20 h-20 blur-[50px] rounded-full opacity-20 transition-colors ${config.textClass.replace('text', 'bg')}`} />

      <h2 className="text-white font-black text-sm xl:text-lg 2xl:text-2xl uppercase tracking-[0.25em] pt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] shrink-0 z-10">
        {label}
      </h2>

      <div className="w-full flex justify-center items-center flex-1 relative z-10">
        <Chart
          key={`${chartHeight}-${fontSize}`}
          options={options}
          series={[value]}
          type="radialBar"
          height={chartHeight}
          width="100%"
        />
      </div>

      <div className={`text-[10px] xl:text-xs 2xl:text-base font-black uppercase tracking-[0.2em] mb-6 mt-3 shrink-0 py-1 px-3 rounded-full bg-slate-900/50 border border-white/5 ${config.textClass} z-10`}>
        {config.label}
      </div>

      <div className="grid grid-cols-3 w-full border-t border-white/5 bg-black/20 shrink-0 z-10">
        <div className="text-center py-2 2xl:py-4 ">
          <span className="text-rose-500 block text-[10px] 2xl:text-xs uppercase font-black opacity-60 -mb-1">Sell</span>
          <span className="text-rose-400 text-[11px] 2xl:text-lg font-black tracking-tighter">{sell}</span>
        </div>
        <div className="text-center py-2 2xl:py-4 border-x border-white/5">
          <span className="text-slate-500 block text-[7px] 2xl:text-xs uppercase font-black opacity-60 -mb-1">Neu</span>
          <span className="text-white text-[11px] 2xl:text-lg font-black tracking-tighter">14</span>
        </div>
        <div className="text-center py-2 2xl:py-4">
          <span className="text-emerald-500 block text-[7px] 2xl:text-xs uppercase font-black opacity-60 -mb-1">Buy</span>
          <span className="text-emerald-400 text-[11px] 2xl:text-lg font-black tracking-tighter">{buy}</span>
        </div>
      </div>
    </div>
  );
}