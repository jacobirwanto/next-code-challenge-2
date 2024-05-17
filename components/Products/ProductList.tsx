"use client";

import productGpuItems from "@/utils/productGpuItems";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

interface GPU {
  id: number;
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
}

interface ProductCardProps {
  gpu: GPU;
  onViewDetails: (gpu: GPU) => void;
}

function ProductCard({ gpu, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <Image
        src={gpu.image}
        alt={gpu.name}
        className="w-full h-40 object-contain object-center"
      />
      <div className="p-4">
        <h3 className="text-gray-300 text-xl font-semibold mb-2">{gpu.name}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {gpu.description}
        </p>
        <p className="text-gray-300 text-lg font-semibold mb-2">{gpu.price}</p>
        <button
          onClick={() => onViewDetails(gpu)}
          className="btn-anim bg-blue-600 hover:bg-blue-700 text-gray-100 text-xs py-2 px-2 rounded-full focus:outline-none"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

interface ProductSectionProps {
  title: string;
  gpus: GPU[];
  onViewDetails: (gpu: GPU) => void;
}

function ProductSection({ title, gpus, onViewDetails }: ProductSectionProps) {
  return (
    <section>
      <h2 className="text-gray-100 text-center text-2xl md:text-4xl font-bold mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gpus.map((gpu) => (
          <ProductCard key={gpu.id} gpu={gpu} onViewDetails={onViewDetails} />
        ))}
      </div>
    </section>
  );
}

function ProductList() {
  const [selectedGPU, setSelectedGPU] = useState<GPU | null>(null);

  function handleViewDetails(gpu: GPU) {
    setSelectedGPU(gpu);
  }

  function handleCloseModal() {
    setSelectedGPU(null);
  }

  const productSections = [
    { title: "Gaming GPUs", gpus: productGpuItems.gamingGPUs },
    { title: "Professional GPUs", gpus: productGpuItems.professionalGPUs },
    { title: "Data Center GPUs", gpus: productGpuItems.dataCenterGPUs },
  ];

  return (
    <div className="bg-gray-950 px-2 flex flex-col gap-8 py-8 md:px-14">
      {productSections.map((section) => (
        <ProductSection
          key={section.title}
          title={section.title}
          gpus={section.gpus}
          onViewDetails={handleViewDetails}
        />
      ))}

      {selectedGPU && (
        <div className="px-8 fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-gray-950 p-8 max-w-md rounded-lg">
            <h2 className="text-white text-xl font-semibold mb-4">
              {selectedGPU.name}
            </h2>
            <p className="text-white text-sm mb-4">{selectedGPU.description}</p>
            <p className="text-white text-lg font-semibold mb-4">
              {selectedGPU.price}
            </p>
            <Image
              src={selectedGPU.image}
              alt={selectedGPU.name}
              className="w-full h-40 object-contain object-center mb-4"
            />
            <CgClose
              size={25}
              className="btn-anim hover:scale-150 text-white"
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
