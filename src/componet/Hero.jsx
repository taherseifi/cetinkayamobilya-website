import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {

  const slides = [
    "/images/slide1.webp",
    "/images/slide2.webp",
    "/images/slide3.webp",
    "/images/slide4.webp",
    "/images/slide5.webp",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // اسلاید اتوماتیک
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* hero text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold uppercase">
          Çetinkaya Mobilya
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Eviniz İçin Modern Mobilyalar
        </p>
      </div>

      {/* prev button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      {/* next button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full"
      >
        <ChevronRight />
      </button>

    </section>
  );
}
