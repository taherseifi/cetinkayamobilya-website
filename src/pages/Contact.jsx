import { useForm, ValidationError } from "@formspree/react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
  const [state, handleSubmit] = useForm("maqpelzy"); // جایگزین با Form ID خودت

  return (
    <section className="w-full mt-25">

      {/* Hero */}
      <div
        className="max-w-7xl mx-auto h-[220px] flex items-center justify-center text-white text-3xl font-semibold bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/kitchen1.webp')" }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <h1 className="relative z-10 tracking-widest">İLETİŞİM</h1>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* Left Contact Info */}
        <div className="space-y-6 text-gray-800">
          <div className="flex items-start gap-4">
            <FiMapPin className="text-green-600 text-xl mt-1" />
            <p>
              Ataşehir Ferhatpaşa Mahallesi, Karadeniz Cd. No:52,
              34888 Ataşehir / İstanbul
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FiPhone className="text-green-600 text-xl" />
            <span>0216 471 91 82</span>
          </div>

          <div className="flex items-center gap-4">
            <FiMail className="text-green-600 text-xl" />
            <span>info@cetinkayamobilya.com.tr</span>
          </div>
        </div>

        {/* Contact Form  formspree.io*/}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ad ve Soyad"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-green-500"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-green-500"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-green-500"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-3 rounded-md transition"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>

          {state.succeeded && (
            <p className="text-green-700 font-medium text-center mt-2">
             Mesajınız başarıyla gönderildi!
            </p>
          )}

        </form>
      </div>

      {/* Google Map */}
      <div className="w-full h-[450px]">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Ataşehir%20Ferhatpaşa%20Mahallesi%20Karadeniz%20Cd.%20No:52%20Istanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
}
