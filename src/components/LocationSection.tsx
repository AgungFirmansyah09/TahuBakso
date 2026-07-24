import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ChevronDown, ShieldCheck, Truck, Store, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Di mana lokasi fisik kedai/toko Tahu Bakso Berkah?',
      a: 'Kedai utama kami berlokasi di Perumahan Puri Permai 2 Blok A3 No. 8, Pete, Kec. Tigaraksa, Kabupaten Tangerang, Banten 15720',
    },
    {
      q: 'Berapa lama daya tahan Tahu Bakso Frozen Pack?',
      a: 'Dalam kemasan vacuum sealed beku (-18°C), tahu bakso kami tahan hingga 1 bulan di freezer tanpa mengubah cita rasa atau tekstur. Di suhu ruang tahan 2-3 hari perjalanan ekspedisi.',
    },
    {
      q: 'Bagaimana cara pemesanan untuk luar kota?',
      a: 'Untuk luar kota (Bandung, Surabaya, Malang, Bali, dll), kami menggunakan layanan kurir pendingin Paxel / JNE YES agar produk tiba dalam kondisi beku segar sehari sampai.',
    },
    {
      q: 'Apakah menerima pemesanan jumlah besar untuk acara/hampers?',
      a: 'Sangat bisa! Kami melayani pesanan partai besar untuk konsumsi arisan, pengajian, rapat kantor, pernikahan, atau hampers besek etnik. Silakan kontak WhatsApp admin kami minimal H-2.',
    },
  ];

  return (
    <section id="lokasi" className="py-12 sm:py-16 bg-gradient-to-b from-stone-50 to-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Lokasi Toko & Pengiriman</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Kunjungi Kedai atau Pesan Dari Rumah
          </h2>
          <p className="text-stone-500 text-sm mt-1">
            Siap melayani pembelian langsung di outlet maupun pengiriman instan & luar kota.
          </p>
        </div>

        {/* Main Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-xs space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-amber-600" />
                <h3 className="font-black text-stone-900 text-lg">Outlet Utama Tahu Bakso Berkah</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Puri Permai 2 Blok A3 No. 8, Pete, Kec. Tigaraksa, Kabupaten Tangerang, Banten 15720
              </p>
            </div>

            <div className="space-y-3 border-t border-stone-100 pt-4 text-xs sm:text-sm">
              
              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Jam Operasional Toko:</p>
                  <p className="text-stone-600">Senin - Minggu: 08.00 - 20.00 WIB</p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">● Buka Setiap Hari (Termasuk Hari Libur)</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Kontak & Order WhatsApp:</p>
                  <p className="text-stone-600">+62 813-1560-7547</p>
                </div>
              </div>

              {/* Services */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Layanan Tersedia:</p>
                  <p className="text-stone-600"> Antar ke Rumah mu, Takeaway</p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href="https://maps.app.goo.gl/7i1FWegXRu3zvmSR7"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah Google Maps</span>
              </a>

              <a
                href="https://wa.me/6281315607547?text=Halo%20Admin,%20mau%20tanya%20lokasi%20dan%20stok%20tahu%20bakso"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                <span>Chat Admin WA</span>
              </a>
            </div>

          </div>

          {/* Right Map Visual Box */}
          <div className="lg:col-span-7 bg-white p-4 rounded-3xl border border-stone-200/80 shadow-xs">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-stone-100 rounded-2xl overflow-hidden border border-stone-200">
              
              {/* Map Canvas Visual Placeholder */}
              {/* <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.404746685108!2d110.4082236!3d-6.9850406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4f17df66e3%3A0x2d3a3f5a2a22543d!2sSemarang%20Central!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                className="w-full h-full border-0 grayscale opacity-90 contrast-125"
                loading="lazy"
              /> */}

              <iframe 
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.082988506573!2d106.4590267!3d-6.252795999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e420741153fad47%3A0xf7e0764f2b6af87c!2s!5e0!3m2!1sid!2sid!4v1784779518590!5m2!1sid!2sid"
              className="w-full h-full border-0 grayscale opacity-90 contrast-125"
              loading="lazy" >
              </iframe>

              {/* Location Tag Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-stone-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold shadow-sm">
                    <MapPin className="w-5 h-5 animate-bounce" />
                  </div>
                  <div>
                    <p className="font-extrabold text-stone-900 text-xs">Kedai Tahu Bakso Berkah</p>
                    <p className="text-[11px] text-stone-500">Perumahan • Puri Permai 2</p>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/7i1FWegXRu3zvmSR7"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-[11px] font-bold rounded-xl flex items-center gap-1 shadow-sm shrink-0"
                >
                  <span>Buka Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-stone-200">
          <h3 className="text-xl font-black text-stone-900 text-center mb-6">
            Pertanyaan Yang Sering Diajukan (FAQ)
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-stone-900 flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
