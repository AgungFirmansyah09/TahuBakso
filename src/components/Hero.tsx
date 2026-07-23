import React from 'react';
import { ShoppingBag, Flame, ShieldCheck, Truck, Star, ArrowRight, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
  onDirectWA: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onDirectWA }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/80 via-stone-50 to-stone-100/60 pt-6 pb-12 sm:pt-10 sm:pb-20 border-b border-stone-200/60">
      
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200/80 rounded-full px-3.5 py-1.5 shadow-sm text-xs font-bold text-amber-900 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping" />
              <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>Cita Rasa Daging Sapi Murni Warisan UMKM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
              Nikmati Gurihnya <span className="text-amber-700 underline decoration-amber-400 decoration-wavy decoration-2">Tahu Bakso</span> Sapi Super Padat & Juicy!
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dibuat dari tahu pong pilihan yang diisi penuh olahan 100% daging sapi segar tanpa pengawet. Tersedia varian Siap Makan hangat, Pedas Mercon, & Frozen Pack Vacuum untuk stok rumah.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-7 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-extrabold rounded-2xl shadow-lg shadow-amber-600/25 hover:shadow-amber-600/35 active:scale-98 transition-all flex items-center justify-center gap-2 text-base"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Pilih & Pesan Produk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDirectWA}
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl shadow-md shadow-emerald-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 text-base"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Pesan Cepat via WhatsApp</span>
              </button>
            </div>

            {/* Key Value Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-stone-200/80">
              <div className="flex items-center gap-2.5 p-2.5 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-900">100% Halal MUI</p>
                  <p className="text-[11px] text-stone-500">Bahan Pilihan Segar</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-900">Tanpa Pengawet</p>
                  <p className="text-[11px] text-stone-500">Sehat & Alami</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-2.5 bg-white/80 rounded-xl border border-stone-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-900">Kirim Indonesia</p>
                  <p className="text-[11px] text-stone-500">Paxel Cold Chain</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-900/10 group">
              <img
                // src="/img/tahu-bakso-sapi.png"
                src="/img/tahu-bakso-sapi.png"
                alt="Tahu Bakso Sapi Warm & Crispy"
                className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

              {/* Floating Rating Pill */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-amber-200/50">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-xs font-bold text-stone-900">4.9 / 5.0</span>
                <span className="text-[10px] text-stone-500">(250+ Ulasan UMKM)</span>
              </div>

              {/* Frozen Pack Badge */}
              <div className="absolute top-4 right-4 bg-amber-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-amber-400/30 backdrop-blur-md">
                Bisa Kirim Frozen
              </div>

              {/* Bottom Card Overlay Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                    BEST SELLER
                  </span>
                  <span className="text-xs text-amber-200 font-medium">Olahan Sapi Segar Khas Warisan</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
                  Tahu Bakso Sapi Original & Frozen Pack
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-2">
                  Dagingnya berasa, tahunya renyah gurih. Siap goreng kapan saja di rumah!
                </p>
                <div className="pt-1 flex items-center justify-between border-t border-white/20">
                  <span className="text-sm font-semibold text-amber-300">Mulai Rp 25.000 / pack</span>
                  <span className="text-xs underline font-bold cursor-pointer text-white hover:text-amber-200" onClick={onExploreCatalog}>
                    Lihat Pilihan Varian →
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
