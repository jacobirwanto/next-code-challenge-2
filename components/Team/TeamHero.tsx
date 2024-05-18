import heroImg4 from "@/public/hero4.png";
import Image from "next/image";

function TeamHero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8 text-white">
        <h1 className="text-xl md:text-5xl font-bold mb-4 font-maximus">
          Meet the Innovators
        </h1>
        <p className="text-xs md:text-lg md:mb-4">
          Passionate Minds Driving the Future of GPU Technology
        </p>
      </div>
      <Image src={heroImg4} alt="company banner" className="w-full h-auto" />
    </div>
  );
}

export default TeamHero;
