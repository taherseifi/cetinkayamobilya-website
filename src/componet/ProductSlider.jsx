import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSlider({ title, images, reverse }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-[95%] mx-auto my-10 rounded-2xl overflow-hidden flex flex-col md:flex-row">

      {/* Title */}
      <div
        className={`flex items-center justify-center bg-teal-500 text-white text-3xl font-bold uppercase p-12 md:w-1/3 ${
          reverse ? "order-2" : ""
        }`}
      >
        {title}
      </div>

      {/* Slider */}
      <div className="relative bg-yellow-600 p-4 md:w-2/3">

        <div className="grid grid-cols-3 gap-4">
          {images.slice(current, current + 3).map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-[200px] object-cover rounded-lg"
            />
          ))}
        </div>

        {/* arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>

      </div>
    </div>
  );
}
