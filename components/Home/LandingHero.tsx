import heroImg1 from "@/public/hero1.png";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 font-maximus">
          SNSVTeK Computer Inc.
        </h1>
        <p className="text-lg mb-4">World-Leading GPU Manufacturer</p>
        <Link
          href="/products"
          className="btn-anim px-4 py-2 bg-blue-600 text-white text-sm md:text-base font-bold rounded hover:bg-blue-700"
        >
          Explore Products
        </Link>
      </div>

      <Image src={heroImg1} alt="company banner" className="w-full h-auto" />
    </div>
  );
}

export default Hero;
