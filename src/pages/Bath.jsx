import { useState } from "react";
import { X } from "lucide-react";

export default function Bath() {
  const images = [
    "/images/bath1.webp",
    "/images/bath2.webp",
    "/images/bath3.webp",
    "/images/bath4.webp",
    "/images/bath5.webp",
    "/images/bath6.webp",
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
            "url('/images/slide1.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <h1 className="relative z-10 tracking-widest">BANYO</h1>
      </div>

         {/* Title */}
      <div className="text-center max-w-4xl mx-auto pt-10">

        <h2 className="text-3xl md:text-4xl font-bold">
          Banyonuzda Şıklık ve Konfor!
        </h2>

        <p className="mt-6 text-gray-600 leading-8">
          Çetinkaya Mobilya olarak banyolarınızı estetik ve fonksiyonellikle
          buluşturuyoruz. Kaliteli malzemeler, özel tasarımlar ve dayanıklı
          çözümlerle banyonuza yeni bir dokunuş katıyoruz. Modern, klasik veya
          minimal tarzda banyo dolapları ve aksesuarlarla yaşam alanınızı
          güzelleştiriyoruz.
        </p>

        <p className="mt-4 text-gray-600">
          Siz de banyonuza şıklık katmak için bizimle iletişime geçin!
        </p>

      </div>

      {/* Image Grid */}
       <div className="grid md:grid-cols-3 gap-6 mt-14">

        {images.map((img, index) => (
          <img
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