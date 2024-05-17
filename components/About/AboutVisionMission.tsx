import visionMissionItems from "@/utils/visionMissionItems";

function VisionMission() {
  return (
    <div className="bg-gray-950 py-4 px-4 md:px-36">
      <div className="max-w-4xl mx-auto">
        {visionMissionItems.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold text-gray-100 mb-4 text-center">
              {item.title}
            </h2>
            <div className="border-b-2 border-gray-300 mb-4"></div>
            <p className="text-xs md:text-lg text-gray-300 text-center whitespace-pre-line">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisionMission;
