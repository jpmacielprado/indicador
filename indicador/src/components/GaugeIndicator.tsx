import Chart from "react-apexcharts";

interface GaugeProps {
  label: string;
  data: {
    value: number;
    buy: number;
    sell: number;
    status: string;
  };
  screenSize?: "default" | "2xl";
}

export default function GaugeIndicator({ label, data, screenSize = "default" }: GaugeProps) {
  const { value, buy, sell } = data;

  const getStatusConfig = (val: number) => {
    if (val <= 20) return { label: "VENDA FORTE", color: "#e11d48", textClass: "text-rose-600" };
    if (val <= 45) return { label: "VENDA", color: "#fb7185", textClass: "text-rose-400" };
    if (val <= 55) return { label: "NEUTRO", color: "#94a3b8", textClass: "text-slate-400" };
    if (val <= 80) return { label: "COMPRA", color: "#34d399", textClass: "text-emerald-400" };
    return { label: "COMPRA FORTE", color: "#059669", textClass: "text-emerald-600" };
  };

  const config = getStatusConfig(value);
  const chartHeight = screenSize === "2xl" ? 180 : 120;
  const fontSize = screenSize === "2xl" ? "28px" : "22px";

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
            offsetY: 4,
            fontSize,
            fontWeight: "900",
            color: "#fff",
            formatter: () => value + "%",
          },
        },
      },
    },
    fill: {
      colors: [config.color],
      type: "solid",
    },
    stroke: {
      lineCap: "round",
    },
  };

  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-xl p-2 2xl:p-4 flex flex-col items-center justify-between h-full min-h-44 2xl:min-h-64 shadow-lg transition-all hover:border-slate-600 overflow-hidden">

      {/* Timeframe Label */}
      <h2 className="text-white font-black text-base xl:text-lg 2xl:text-2xl uppercase tracking-[0.15em] xl:tracking-[0.2em] 2xl:tracking-[0.25em] mt-1 drop-shadow-md">
        {label}
      </h2>

      {/* Container do Gráfico */}
      <div className="w-full flex justify-center items-center -my-1 2xl:my-1">
        <Chart
          options={options}
          series={[value]}
          type="radialBar"
          height={chartHeight}
          width="100%"
        />
      </div>

      {/* Status da Operação */}
      <div className={`text-[11px] xl:text-[13px] 2xl:text-base font-black uppercase mt-3 mb-2 2xl:mt-4 2xl:mb-3 tracking-wide xl:tracking-widest 2xl:tracking-[0.2em] ${config.textClass}`}>
        {config.label}
      </div>

      {/* Grid Inferior - Dados de Venda/Compra */}
      <div className="grid grid-cols-3 w-full gap-1 border-t border-slate-800/60 pt-2 pb-1 2xl:pt-3 2xl:pb-2 mt-auto">
        <div className="text-center">
          <span className="text-rose-500 block text-[8px] 2xl:text-[11px] uppercase font-bold opacity-70">Sell</span>
          <span className="text-rose-400 text-xs xl:text-sm 2xl:text-lg font-black">{sell}</span>
        </div>

        <div className="text-center border-x border-slate-800/40 px-1">
          <span className="text-slate-500 block text-[8px] 2xl:text-[11px] uppercase font-bold opacity-70">Neu</span>
          <span className="text-white text-xs xl:text-sm 2xl:text-lg font-black">14</span>
        </div>

        <div className="text-center">
          <span className="text-emerald-500 block text-[8px] 2xl:text-[11px] uppercase font-bold opacity-70">Buy</span>
          <span className="text-emerald-400 text-xs xl:text-sm 2xl:text-lg font-black">{buy}</span>
        </div>
      </div>
    </div>
  );
}