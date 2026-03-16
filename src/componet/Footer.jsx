import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-green-500 text-2xl font-bold">
              ÇETİNKAYA
            </div>
            <span className="text-sm text-green-400">MOBİLYA</span>
          </div>

          <p className="text-sm text-gray-300 leading-6">
            1967 yılında İçerenköy mahallesinde küçük 30 m2 bir atölye ile
            üretime başlayan Çetinkaya Mobilya, 1980 yılında 80 m2 olan öz
            malı olan atölyesine geçmiştir.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 tracking-wider">
            BİZİ ZİYARET EDİN
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex gap-3">
              <FiMapPin className="mt-1 text-white" />
              <p>
                Ataşehir Ferhatpaşa Mahallesi, Karadeniz Cd. No:52,
                34888 Ataşehir / İstanbul
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone />
              <span>0216 471 91 82</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMail />
              <span>info@cetinkayamobilya.com.tr</span>
            </div>
          </div>
        </div>

        {/* Social + Subscribe */}
        <div>
          <div className="flex gap-3 mb-6">
            <a className="bg-blue-600 p-3 rounded">
              <FaFacebookF />
            </a>
            <a className="bg-sky-500 p-3 rounded">
              <FaTwitter />
            </a>
            <a href="https://wa.me/905336102514" className="bg-green-500 p-3 rounded">
            <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/cetinkayamobilya?igsh=bDNpbHAyOGowN25v" className="bg-white text-red-500 p-3 rounded">
              <FaInstagram />
            </a>
          </div>

          <div className="flex w-full">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent border-b border-gray-500 outline-none px-2 py-2 text-sm"
            />
            <button className="ml-4 text-sm font-semibold tracking-wider">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-900 text-center py-4 text-sm">
        © Bilgileri Çetinkaya Mobilya’da Saklıdır.
      </div>
    </footer>
  );
}