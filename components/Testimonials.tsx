import testimonialItems from "../utils/testimonialItems";
import Image, { StaticImageData } from "next/image";

interface Testimonial {
  id: number;
  company: {
    name: string;
    logo: StaticImageData;
  };
  review: string;
}

function Card({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg flex flex-col w-full h-full">
      <div className="flex items-center mb-4">
        <Image
          src={testimonial.company.logo}
          alt={testimonial.company.name}
          className="w-12 h-12 rounded-lg object-contain bg-transparent"
        />
        <h3 className="ml-4 text-xl font-semibold text-blue-500">
          {testimonial.company.name}
        </h3>
      </div>
      <p className="text-lg italic text-gray-300 flex-grow">
        &ldquo;{testimonial.review}&rdquo;
      </p>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="px-8 md:px-24 pb-8 md:py-8 bg-gray-950">
      <h2 className="text-3xl font-bold py-8 text-center text-gray-300">
        What they say about SNSV?
      </h2>
      <div className="overflow-x-auto">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonialItems.map((testimonial) => (
            <Card key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
