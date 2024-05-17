import historyItems from "@/utils/historyItems";
import milestones from "@/public/milestones.svg";
import Image from "next/image";

function HistoryAbout() {
  return (
    <div className="bg-gray-950 py-8 md:py-16 px-4 md:px-48">
      <h2 className="text-gray-300 text-center text-2xl md:text-4xl font-bold mb-12">
        Our History
      </h2>
      <div className="overflow-x-auto">
        <div className="flex md:grid md:grid-cols-2 gap-8 min-w-96 md:min-w-0">
          {historyItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-80 md:w-auto flex-shrink-0"
            >
              <Image
                src={item.image}
                alt={`History ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-gray-300 mt-4 text-xs md:text-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={milestones}
        alt="company-milestones"
        className="pt-12 w-full h-auto"
      />
    </div>
  );
}

export default HistoryAbout;
