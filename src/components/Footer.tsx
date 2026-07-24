import React from 'react';
import { ShoppingBag, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-24 lg:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                TB
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight block leading-none">
                  TAHU BAKSO BERKAH
                </span>
                <span className="text-[11px] text-amber-400 font-semibold">
                  Resep Sapi Warisan Nusantara
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Pelopor Tahu Bakso Sapi Super Padat & Juicy. Diproses secara higienis menggunakan 100% daging sapi murni tanpa bahan pengawet.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 bg-stone-800/80 px-3 py-1.5 rounded-xl border border-stone-700/60 w-fit">
              <ShieldCheck className="w-4 h-4" />
              {/* <span>Sertifikat Halal MUI & P-IRT</span> */}
              <span>Sertifikat Halal</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li>
                <button onClick={() => onNavClick('katalog')} className="hover:text-amber-400 transition-colors">
                  Katalog Produk & Varian
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('resep')} className="hover:text-amber-400 transition-colors">
                  Blog & Resep Tahu Bakso
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('testimoni')} className="hover:text-amber-400 transition-colors">
                  Testimoni Pelanggan
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('lokasi')} className="hover:text-amber-400 transition-colors">
                  Lokasi Toko & Pengiriman
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Produk Unggulan */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Produk Favorit
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li>Tahu Bakso Sapi Original Premium</li>
              <li>Tahu Bakso Frozen Vacuum Pack</li>
              <li>Risol Mayoness Ayam Suwir Pedas</li>
              <li>Risol Mayoness Ayam Suir Original</li>
              <li>Tahu Bakso Ayam</li>
            </ul>
          </div>

          {/* Col 4: Pembayaran & Kurir */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Metode Pembayaran
            </h4>
            <p className="text-xs text-stone-400">
              QRIS, Transfer BCA/Mandiri/BRI, OVO, GoPay, ShopeePay, & COD.
            </p>

            <h4 className="font-bold text-white text-sm uppercase tracking-wider pt-2">
              Layanan Kurir
            </h4>
            <p className="text-xs text-stone-400">
              Antar ke Rumah mu, Takeaway & Paxel Cold-Chain (Luar Kota).
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <p>© 2026 Tahu Bakso Berkah UMKM. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan rasa bangga untuk UMKM Indonesia</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
