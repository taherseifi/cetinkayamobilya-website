import { useState } from "react";
import { X } from "lucide-react";

export default function Wardrobe() {
  const images = [
   "/images/gardolab1.webp",
    "/images/gardolab2.webp",
    "/images/gardolab3.webp",
    "/images/gardolab4.webp",
    "/images/gardolab5.webp",
    "/images/gardolab6.webp",
    "/images/gardolab7.webp",
    "/images/gardolab8.webp",
    "/images/gardolab9.webp",
    "/images/gardolab10.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="w-full bg-gray-100 py-16 mt-10">

      
      <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}
      <div
        className="w-full h-[220px] flex items-center justify-center text-white text-3xl font-semibold bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('/images/slide2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <h1 className="relative z-10 tracking-widest uppercase">gardolap</h1>
      </div>

         {/* Title */}
      <div className="text-center max-w-4xl mx-auto pt-10">

        <h2 className="text-3xl md:text-4xl font-bold">
        Şık ve Fonksiyonel Gardırop Çözümleri!
        </h2>

        <p className="mt-6 text-gray-600 leading-8">
         Çetinkaya Mobilya olarak, gardıroplarınızı estetik ve kullanım kolaylığıyla buluşturuyoruz. İhtiyacınıza özel tasarlanan geniş iç hacimli, şık ve dayanıklı gardırop modellerimizle yatak odalarınıza düzen ve zarafet katıyoruz. Sürgülü, kapaklı ve özel ölçü seçenekleriyle her mekâna uyum sağlayan çözümler sunuyoruz.
        </p>

        <p className="mt-4 text-gray-600">
          Evinize özel gardırop tasarımları için bizimle iletişime geçin!
        </p>

      </div>

      {/* Image Grid */}
       <div className="grid md:grid-cols-3 gap-6 mt-14">

        {images.map((img, index) => (
          <img
          loading="lazy"
            key={index}
            src={img}
            onClick={() => setSelectedImage(img)}
            className="w-full h-[260px] object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
          />
        ))}

      </div>

      {/* popup modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >

          {/* close button */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          {/* image */}
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

      </div>
    </section>
  );
}