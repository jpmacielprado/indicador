import Chart from "react-apexcharts";

interface GaugeProps {
  value: number;
  label: string;
}

export default function GaugeIndicator({ value, label }: GaugeProps) {
  const isBuy = value >= 50;

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: { background: "#1e293b", strokeWidth: "97%" },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -2,
            fontSize: "20px",
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
        gradientToColors: ["#10b981"],
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: "#f43f5e", opacity: 1 },
          { offset: 100, color: "#10b981", opacity: 1 },
        ],
      },
    },
    labels: [label],
  };

  return (
    <div className="bg-[#0b101d] border border-slate-800 rounded-xl p-3 flex flex-col items-center w-full">
      <span className="text-slate-400 font-bold mb-1 uppercase text-[10px] tracking-widest">
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
        className={`text-base font-black uppercase mt-1 ${isBuy ? "text-emerald-500" : "text-rose-500"}`}
      >
        {isBuy ? "Comprar" : "Vender"}
      </div>

      <div className="flex justify-between w-full mt-2 border-t border-slate-800 pt-2 text-[9px] font-bold">
        <div className="text-rose-500 text-center leading-tight">
          VENDER
          <br />
          <span className="text-white text-xs">9</span>
        </div>
        <div className="text-slate-600 text-center self-end pb-1 italic">9/14</div>
        <div className="text-emerald-500 text-center leading-tight">
          COMPRAR
          <br />
          <span className="text-white text-xs">14</span>
        </div>
      </div>
    </div>
  );
}