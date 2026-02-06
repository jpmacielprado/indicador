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
      sparkline: { enabled: true }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: { background: "#1e293b", strokeWidth: "85%" },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -5,
            fontSize: "26px", // Valor percentual bem grande
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
  };

  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-between h-full min-h-55 shadow-lg transition-all hover:border-slate-600">

      {/* Label do Timeframe (M1, H1, etc) ampliada */}
      <h2 className="text-white font-black text-2xl uppercase tracking-[0.25em] mt-1 drop-shadow-md">
        {label}
      </h2>

      {/* Container do Gráfico - Aumentado de 130 para 180 */}
      <div className="w-full -my-2 flex justify-center">
        <Chart options={options} series={[value]} type="radialBar" height={180} width="100%" />
      </div>

      {/* Status da Operação */}
      <div className={`text-base font-black uppercase mb-4 tracking-widest ${isBuy ? "text-emerald-500" : "text-rose-500"}`}>
        {status || (isBuy ? "Comprar" : "Vender")}
      </div>

      {/* Grid de Contadores Inferiores com números maiores */}
      <div className="grid grid-cols-3 w-full gap-2 border-t border-slate-800/60 pt-4 text-[10px] font-bold">
        <div className="text-center">
          <span className="text-rose-500 block opacity-80 text-[9px] uppercase mb-1">Vender</span>
          <span className="text-rose-400 text-base font-black">{sell}</span>
        </div>

        <div className="text-center border-x border-slate-800/40 px-1">
          <span className="text-slate-500 block opacity-80 text-[9px] uppercase mb-1">Neutro</span>
          <span className="text-white text-base font-black">14</span>
        </div>

        <div className="text-center">
          <span className="text-emerald-500 block opacity-80 text-[9px] uppercase mb-1">Comprar</span>
          <span className="text-emerald-400 text-base font-black">{buy}</span>
        </div>
      </div>
    </div>
  );
}