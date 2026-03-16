import { useState } from "react";
import { X } from "lucide-react";

export default function Projects() {
  const images = [
    "/images/bath1.webp",
    "/images/bath2.webp",
    "/images/bath3.webp",
    "/images/bath4.webp",
    "/images/bath5.webp",
    "/images/bath6.webp",
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
    "/images/kapi.webp",
    "/images/kapi1.webp",
    "/images/kitchen1.webp",
    "/images/kitchen2.webp",
    "/images/kitchen3.webp",
    "/images/kitchen4.webp",
    "/images/kitchen5.webp",
    "/images/kitchen6.webp",
    "/images/kitchen7.webp",
    "/images/kitchen8.webp",
    "/images/kitchen9.webp",
    "/images/kitchen10.webp",
    "/images/kitchen11.webp",
    "/images/kitchen12.webp",
    "/images/p1.webp",
    "/images/p2.webp",
    "/images/p3.webp",
    "/images/p5.webp",
    "/images/p6.webp",
    "/images/yatak1.webp",
    "/images/yatak2.webp",
    "/images/yatak3.webp",
    "/images/yatak4.webp",
    "/images/yatak5.webp",
    "/images/yatak6.webp",
    "/images/yatak7.webp",
    "/images/yatak9.webp",
    "/images/tv1.webp",
    "/images/tv2.webp",
    "/images/tv3.webp",
    "/images/tv4.webp",
    
    
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
            "url('/images/slide4.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <h1 className="relative z-10 tracking-widest uppercase">projelerimiz
</h1>
      </div>

         {/* Title */}
      <div className="text-center max-w-4xl mx-auto pt-10">

        <h2 className="text-3xl md:text-4xl font-bold">
        Projelerimizle Yaşam Alanlarınıza Değer Katıyoruz!
        </h2>

        <p className="mt-6 text-gray-600 leading-8">
        Çetinkaya Mobilya olarak her projede estetik, kalite ve işlevselliği bir araya getiriyoruz. Mutfak dolaplarından TV ünitelerine, kapılardan özel tasarım mobilyalara kadar birçok alanda müşterilerimizin ihtiyaçlarına uygun çözümler üretiyoruz.
        </p>

        <p className="mt-4 text-gray-600">
          Siz de hayalinizdeki yaşam alanını gerçeğe dönüştürmek için projelerimizi inceleyebilir ve bizimle iletişime geçebilirsiniz.
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