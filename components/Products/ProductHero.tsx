import heroImg3 from "@/public/hero3.webp";
import Image from "next/image";

function ProductHero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8 text-white">
        <h1 className="text-xl md:text-5xl font-bold mb-4 font-maximus">
          #1 Best-Selling GPU
        </h1>
        <p className="text-xs md:text-sm md:mb-4">
          Discover SNSV&lsquo;Next-Generation GPU Technology
        </p>
        <p className="text-[10px] md:text-lg md:mb-4 italic">
          Gaming GPUs | Professional GPUs | Data Center GPUs
        </p>
      </div>
      <Image src={heroImg3} alt="company banner" className="w-full h-auto" />
    </div>
  );
}

export default ProductHero;
