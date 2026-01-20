import Chart from "react-apexcharts";

interface GaugeProps {
  value: number;
  label: string;
}

export default function GaugeIndicator({ value, label }: GaugeProps) {
  const isBuy = value >= 50;

  const options: ApexCharts.ApexOptions = {
    chart: { type: "radialBar", sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: { background: "#1e293b", strokeWidth: "97%" },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -2,
            fontSize: "22px",
            fontWeight: "bold",
            color: "#fff",
            formatter: (val) => val + "%",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#10b981"], // Verde (Emerald 500)
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: "#f43f5e", opacity: 1 }, // Vermelho (Rose 500)
          { offset: 100, color: "#10b981", opacity: 1 }, // Verde
        ],
      },
    },
    labels: [label],
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex flex-col items-center w-full">
      <span className="text-slate-400 font-bold mb-2 uppercase text-xs tracking-widest">
        {label}
      </span>

      <div className="w-full">
        <Chart
          options={options}
          series={[value]}
          type="radialBar"
          height={200}
        />
      </div>

      <div
        className={`text-xl font-black uppercase mt-5 ${isBuy ? "text-emerald-500" : "text-rose-500"}`}
      >
        {isBuy ? "Comprar" : "Vender"}
      </div>

      <div className="flex justify-between w-full mt-4 border-t border-slate-800 pt-3 text-[10px] font-bold">
        <div className="text-rose-500 text-center">
          VENDER
          <br />
          <span className="text-white text-sm">9</span>
        </div>
        <div className="text-slate-600 text-center self-end">9/14</div>
        <div className="text-emerald-500 text-center">
          COMPRAR
          <br />
          <span className="text-white text-sm">14</span>
        </div>
      </div>
    </div>
  );
}
