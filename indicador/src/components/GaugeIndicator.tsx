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
    fontSize: "22px",
    offsetY: 2,
  });

  useEffect(() => {
    const update = () => {
      const h = window.innerHeight;
      if (h >= 1080) setDims({ height: 190, fontSize: "30px", offsetY: 4 });
      else if (h >= 900) setDims({ height: 160, fontSize: "26px", offsetY: 3 });
      else if (h >= 768) setDims({ height: 130, fontSize: "23px", offsetY: 2 });
      else setDims({ height: 105, fontSize: "20px", offsetY: 2 });
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
    if (val <= 20) return { label: "VENDA FORTE", color: "#e11d48", textClass: "text-rose-600" };
    if (val <= 45) return { label: "VENDA", color: "#fb7185", textClass: "text-rose-400" };
    if (val <= 55) return { label: "NEUTRO", color: "#94a3b8", textClass: "text-slate-400" };
    if (val <= 80) return { label: "COMPRA", color: "#34d399", textClass: "text-emerald-400" };
    return { label: "COMPRA FORTE", color: "#059669", textClass: "text-emerald-600" };
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
        hollow: { size: "60%" },
        track: {
          background: "#1e293b",
          strokeWidth: "95%",
          margin: 3,
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY,
            fontSize,
            fontWeight: "900",
            color: "#fff",
            formatter: () => value + "%",
          },
        },
      },
    },
    fill: { colors: [config.color], type: "solid" },
    stroke: { lineCap: "round" },
  };

  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-xl flex flex-col items-center justify-between h-full shadow-lg transition-all hover:border-slate-600">

      {/* Timeframe Label */}
      <h2 className="text-white font-black text-sm xl:text-base 2xl:text-2xl uppercase tracking-[0.15em] xl:tracking-[0.2em] pt-2 2xl:pt-4 drop-shadow-md shrink-0">
        {label}
      </h2>

      {/* Container do Gráfico */}
      <div className="w-full flex justify-center items-center shrink-0 -mb-2">
        <Chart
          options={options}
          series={[value]}
          type="radialBar"
          height={chartHeight}
          width="100%"
        />
      </div>

      {/* Status da Operação */}
      <div className={`text-[10px] xl:text-[12px] 2xl:text-base font-black uppercase tracking-wide xl:tracking-widest shrink-0 ${config.textClass}`}>
        {config.label}
      </div>

      {/* Grid Inferior */}
      <div className="grid grid-cols-3 w-full border-t border-slate-800/60 mt-1.5 shrink-0">
        <div className="text-center py-1 xl:py-1.5 2xl:py-2">
          <span className="text-rose-500 block text-[7px] xl:text-[8px] 2xl:text-[10px] uppercase font-bold opacity-70">Sell</span>
          <span className="text-rose-400 text-[11px] xl:text-xs 2xl:text-base font-black leading-tight">{sell}</span>
        </div>
        <div className="text-center py-1 xl:py-1.5 2xl:py-2 border-x border-slate-800/40">
          <span className="text-slate-500 block text-[7px] xl:text-[8px] 2xl:text-[10px] uppercase font-bold opacity-70">Neu</span>
          <span className="text-white text-[11px] xl:text-xs 2xl:text-base font-black leading-tight">14</span>
        </div>
        <div className="text-center py-1 xl:py-1.5 2xl:py-2">
          <span className="text-emerald-500 block text-[7px] xl:text-[8px] 2xl:text-[10px] uppercase font-bold opacity-70">Buy</span>
          <span className="text-emerald-400 text-[11px] xl:text-xs 2xl:text-base font-black leading-tight">{buy}</span>
        </div>
      </div>
    </div>
  );
}