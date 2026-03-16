import { Monitor ,Wrench ,Hammer ,HardHat  } from "lucide-react";
export default function AboutSection() {
  return (
    <section className="w-[90%] mx-auto py-16">

      {/* Stats Section */}
      <div
        className="relative rounded-lg overflow-hidden mb-16"
        style={{
          backgroundImage: "url('/images/slide2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 text-center text-white py-12 gap-8">

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">1,539</h3>
            <p className="uppercase text-sm mt-2">Projelerimiz</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">528</h3>
            <p className="uppercase text-sm mt-2">Kurumsal</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">1,011</h3>
            <p className="uppercase text-sm mt-2">Ev Müşterilerimiz</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">1,539</h3>
            <p className="uppercase text-sm mt-2">Mutlu Müşteriler</p>
          </div>

        </div>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/images/abut.webp"
          className="rounded-2xl shadow-lg"
        />

        <p className="text-gray-600 leading-8">
          1967 yılında İçerenköy mahallesinde küçük 30 m² bir atölye ile
          üretime başlayan Çetinkaya Mobilya, 1980 yılında 80 m² olan öz
          malı olan atölyesine geçmiştir. 1967 yılından bu güne, özel
          imalat mobilya sektöründe hizmet veren Çetinkaya Mobilya kalitesi
          ve müşteri memnuniyetini ön planda tutarak varlığını günümüze
          kadar sürdürmektedir.

          <br /><br />

          Sektöre küçük bir atölyede ve az sayıda makine ile giren
          firmamız günümüzde 1100 m²’lik imalat alanı ve gelişen teknolojik
          makine parkuru ile müşterilerimize hizmet vermektedir. 2008
          yılında ikinci kuşağın yönetimine geçen Çetinkaya Mobilya,
          geçmişten gelen bilgi ve birikimini günümüz teknolojisi ile
          harmanlayarak binlerce işletmeye ve on binlerce aileye hizmet
          vermiştir.

          <br /><br />

          Müşterilerimizin ihtiyaçlarını en üst düzeyde karşılayabilmek için
          gelişen teknoloji olanaklarını kullanarak daha kaliteli ürün ve
          kusursuz müşteri memnuniyeti ilkesi ile sektörde varlığımızı
          sürdürmekteyiz.
        </p>

      </div>

        
      <div className="grid md:grid-cols-2 gap-10 mt-17">

        {/* Ücretsiz Keşif */}
        <div className="text-center rounded-2xl shadow-2xl">
          <Monitor  className="mx-auto text-green-500 w-14 h-14" />

          <h3 className="text-2xl font-bold text-green-600 mt-4 uppercase">
            Ücretsiz Keşif
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            İster dekorasyon isterse tadilat işleriniz olsun online ücretsiz
            keşif formu üzerinden resim veya video yollasanız bile bu
            fiyatlandırma veya yapılabilecekler ile ilgili fikir vermekte
            zorlanabilir, bu nedenle mimar ya da ustalarımız tarafından
            randevu alarak faydalanabileceğiniz ücretsiz keşif hizmetimiz
            hakkında bazı bilgiler vermek isteriz.
          </p>
        </div>

        {/* Üretim */}
        <div className="text-center p-8 rounded-2xl shadow-2xl ">
          <Wrench   nch className="mx-auto text-green-500 w-14 h-14" />

          <h3 className="text-2xl font-bold text-green-600 mt-4 uppercase">
            Üretim
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Ücretsiz keşif hizmetinden faydalandınız, proje için gereken
            kontrolleri sağladınız varsa istenilen değişiklikleri projeye
            eklettiniz, şimdi sırada tabiki üretim aşaması var.
          </p>
        </div>

        {/* Projelendirme */}
        <div className="text-center rounded-2xl shadow-2xl">
          <Hammer  className="mx-auto text-green-500 w-14 h-14" />

          <h3 className="text-2xl font-bold text-green-600 mt-4 uppercase">
            Projelendirme
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Projelendirme aşamasında size sunulan projenin ön izlemesi ölçüleri
            özelliklerini tam olarak size sunulduğu aşamadır, bu aşamada
            projenin çizimi kullanılacak malzemenin dokusu ve projenin fiyatını
            öğrenir ve karar verirsiniz veya istediğiniz değişiklikleri
            projeye ekler veya çıkarabilirsiniz.
          </p>
        </div>

        {/* Montaj */}
        <div className="text-center rounded-2xl shadow-2xl">
          <HardHat   className="mx-auto text-green-500 w-14 h-14" />

          <h3 className="text-2xl font-bold text-green-600 mt-4 uppercase">
            Montaj
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Üretim aşaması ve test süreçlerini başarıyla geçen ürünler
            sözleşmenizde vaadedilen sürede teslimi ve montaj için randevu
            talebinde bulunulur, müşterinin istediği tarih ve saatte
            mutabakat sağlanmasından sonra proje montaj aşamasına geçer.
          </p>
        </div>

      </div>

    </section>
  );
}
