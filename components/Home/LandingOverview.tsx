import overviewItems from "@/utils/overviewItems";
import overviewImg4 from "@/public/overviewimg4.webp";
import Image from "next/image";

function Overview() {
  return (
    <div className="px-10 md:px-36 py-8 text-gray-300 bg-gray-950">
      {overviewItems.overviewGrid.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 gap-4 pb-4 md:pb-0 md:grid-cols-2 ${
            index === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 text-blue-500">
              {item.title}
            </h2>
            <p className="text-xs md:text-md lg:text-lg">{item.description}</p>
          </div>
          <Image
            src={item.image}
            alt={item.alt}
            width={500}
            height={500}
            className={`w-full h-auto ${index === 1 ? "md:order-first" : ""}`}
          />
        </div>
      ))}

      <div className="py-4 px-6 md:px-16 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-100 bg-gray-950">
        <div className="col-span-2 md:col-span-2">
          <h2 className="text-lg md:text-4xl lg:text-7xl font-semibold pb-2">
            What We Do?
          </h2>
          <Image
            src={overviewImg4}
            alt="Product Image"
            width={1280}
            height={950}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col justify-center">
          <ul className="list-outside pl-4 md:space-y-10 text-sm md:text-lg lg:text-2xl text-gray-300 font-bold">
            {overviewItems.overviewProductItems.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;
