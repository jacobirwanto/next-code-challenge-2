import visionMissionItems from "@/utils/visionMissionItems";
import Link from "next/link";

function LandingCulture() {
  const culture = visionMissionItems[2];

  return (
    <div className="bg-gray-900 py-4 px-4 md:px-36 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="p-6 rounded-lg flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-left max-w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              {culture.title}
            </h2>
            <p className="text-xs md:text-lg text-gray-300 whitespace-pre-line line-clamp-2">
              {culture.description}
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
            <Link
              href="/about"
              className="font-semibold rounded-lg bg-blue-600 py-4 px-9 hover:bg-blue-700 text-white"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCulture;
