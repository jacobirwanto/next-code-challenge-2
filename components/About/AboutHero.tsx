import heroImg2 from "@/public/hero2.png";
import Image from "next/image";

function AboutHero() {
  return (
    <div className="bg-gray-950">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8 text-white">
          <h2 className="text-sm md:text-4xl lg:text-5xl font-bold mb-4 font-maximus">
            Explore the SNSV Journey
          </h2>
          <p className="text-xs md:text-lg md:mb-4">
            Building Dreams, Crafting Tomorrow
          </p>
        </div>
        <Image src={heroImg2} alt="company banner" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default AboutHero;
