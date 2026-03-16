export default function AboutSection() {
  return (
    <section className="w-full bg-gray-100 py-16 mt-10">

      
      <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}
      <div
        className="w-full h-[220px] flex items-center justify-center text-white text-3xl font-semibold bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('/images/kitchen3.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <h1 className="relative z-10 tracking-widest">BİZKİMİZ</h1>
      </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

          {/* Image */}
          <div className="bg-[#3b2b28] rounded-3xl p-16 flex justify-center items-center">
            <img
              src="/images/logo.png"
              alt="Çetinkaya Mobilya"
              className="max-w-[250px]"
            />
          </div>

          {/* Text */}
          <div className="text-gray-800 leading-8 text-[15px]">
            <p>
              1967 yılında İçerenköy mahallesinde küçük 30 m2 bir atölye ile
              üretime başlayan Çetinkaya Mobilya, 1980 yılında 80 m2 olan öz
              malı olan atölyesine geçmiştir. 1967 yılından bu güne, özel
              imalat mobilya sektöründe hizmet veren Çetinkaya Mobilya kaliteyi
              ve müşteri memnuniyetini ön planda tutarak varlığını günümüze
              kadar sürdürmektedir.
            </p>

            <p className="mt-4">
              Sektöre küçük bir atölyede ve az sayıda makine ile giren firmamız
              günümüzde 1100 m2lik imalat alanı ve gelişen teknolojik makine
              parkuru ile müşterilerimize hizmet vermektedir.
            </p>

            <p className="mt-4">
              2008 yılında ikinci kuşağın yönetimine geçen Çetinkaya Mobilya,
              geçmişten gelen bilgi ve birikimini günümüz teknolojisi ile
              harmanlayarak binlerce işletmeye ve on binlerce aileye hizmet
              vermiştir.
            </p>

            <p className="mt-4">
              Müşterilerimizin ihtiyaçlarını en üst düzeyde karşılayabilmek için
              gelişen teknoloji olanaklarını kullanarak daha kaliteli ürün ve
              kusursuz müşteri memnuniyeti ilkesi ile sektörde varlığımızı
              sürdürmekteyiz.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}