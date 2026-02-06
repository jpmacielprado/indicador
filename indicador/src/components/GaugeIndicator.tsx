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
    chart: { type: "radialBar", sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: { background: "#1e293b", strokeWidth: "85%" },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -2,
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            formatter: () => value + "%",
          },
        },
      },
    },
    fill: { colors: [isBuy ? "#10b981" : "#f43f5e"] },
  };

  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-lg p-2 flex flex-col items-center justify-between h-full min-h-45 max-h-52.5">
      <span className="text-white font-bold text-[10px] uppercase tracking-wider">{label}</span>

      <div className="w-full -my-3">
        <Chart options={options} series={[value]} type="radialBar" height={130} />
      </div>

      <div className={`text-[11px] font-black uppercase mb-2 ${isBuy ? "text-emerald-500" : "text-rose-500"}`}>
        {status || (isBuy ? "Comprar" : "Vender")}
      </div>

      <div className="grid grid-cols-3 w-full gap-1 border-t border-slate-800 pt-2 text-[9px] font-bold">
        <div className="text-center">
          <span className="text-rose-500 block opacity-70 text-[7px] uppercase">Vender</span>
          <span className="text-rose-500">{sell}</span>
        </div>
        <div className="text-center">
          <span className="text-slate-400 block opacity-70 text-[7px] uppercase">Neutro</span>
          <span className="text-white">14</span>
        </div>
        <div className="text-center">
          <span className="text-emerald-500 block opacity-70 text-[7px] uppercase">Comprar</span>
          <span className="text-emerald-500">{buy}</span>
        </div>
      </div>
    </div>
  );
}