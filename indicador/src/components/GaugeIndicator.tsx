import Chart from "react-apexcharts";

interface GaugeProps {
  label: string;
  data: {
    value: number;
    buy: number;
    sell: number;
    status: string;
  };
}

export default function GaugeIndicator({ label, data }: GaugeProps) {
  const { value, buy, sell, status } = data;
  const isBuy = value > 50;

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
      animations: { enabled: true, speed: 800 }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#1e293b",
          strokeWidth: "85%",
          margin: 5
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -2,
            fontSize: "22px",
            fontWeight: "900",
            color: "#fff",
            formatter: () => value + "%",
          },
        },
      },
    },
    fill: {
      colors: [isBuy ? "#10b981" : "#f43f5e"],
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        gradientToColors: [isBuy ? "#34d399" : "#fb7185"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    }
  };

  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-xl p-3 flex flex-col items-center justify-between h-full min-h-45 shadow-lg transition-all hover:border-slate-600 overflow-hidden">

      {/* Timeframe Label */}
      <h2 className="text-white font-black text-xl uppercase tracking-[0.2em] mt-0 drop-shadow-md">
        {label}
      </h2>

      {/* Container do Gráfico */}
      <div className="w-full -my-4 flex justify-center items-center">
        <Chart
          options={options}
          series={[value]}
          type="radialBar"
          height={160}
          width="100%"
        />
      </div>

      {/* Status da Operação */}
      <div className={`text-[13px] font-black uppercase mb-2 tracking-[0.15em] ${isBuy ? "text-emerald-500" : "text-rose-500"}`}>
        {status || (isBuy ? "Comprar" : "Vender")}
      </div>

      {/* Grid Inferior */}
      <div className="grid grid-cols-3 w-full gap-1 border-t border-slate-800/60 pt-2">
        <div className="text-center">
          <span className="text-rose-500 block text-[8px] uppercase font-bold opacity-70">Sell</span>
          <span className="text-rose-400 text-sm font-black">{sell}</span>
        </div>

        <div className="text-center border-x border-slate-800/40 px-1">
          <span className="text-slate-500 block text-[8px] uppercase font-bold opacity-70">Neu</span>
          <span className="text-white text-sm font-black">14</span>
        </div>

        <div className="text-center">
          <span className="text-emerald-500 block text-[8px] uppercase font-bold opacity-70">Buy</span>
          <span className="text-emerald-400 text-sm font-black">{buy}</span>
        </div>
      </div>
    </div>
  );
}