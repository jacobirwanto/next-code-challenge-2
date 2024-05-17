import statisticsData from "@/utils/statisticData";
import { IconType } from "react-icons";

interface Statistic {
  id: number;
  label: string;
  value: string;
  icon: IconType;
}

function Card({ statistic }: { statistic: Statistic }) {
  const IconComponent = statistic.icon;
  return (
    <div
      key={statistic.id}
      className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-center min-w-[150px] max-w-[200px]"
    >
      <IconComponent className="w-12 h-12 mb-4 text-blue-500" />
      <p className="text-xl font-semibold text-gray-100">{statistic.label}</p>
      <p className="text-lg font-light text-gray-300">{statistic.value}</p>
    </div>
  );
}

function Statistics() {
  return (
    <div className="overflow-x-auto bg-gray-950 py-8">
      <div className="px-8 lg:px-8">
        <div className="flex flex-nowrap lg:flex-wrap justify-start gap-4 lg:justify-center">
          {statisticsData.map((statistic) => (
            <Card key={statistic.id} statistic={statistic} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
