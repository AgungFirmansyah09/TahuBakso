import React from 'react';
import { SPECIAL_PROMO } from '../data/products';
import { Sparkles, MessageCircleCode } from 'lucide-react';

interface PromoBannerProps {
  onOpenCatalog: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenCatalog }) => {
  return (
    <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-red-700 text-white text-xs sm:text-sm py-2 px-4 shadow-sm relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="bg-amber-300 text-amber-950 font-bold px-2 py-0.5 rounded-full text-[10px] sm:text-xs uppercase tracking-wider flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3 fill-amber-950" />
            Promo UMKM
          </span>
          <p className="font-medium text-amber-50">
            {SPECIAL_PROMO.subtitle} <span className="hidden md:inline text-amber-200 underline font-semibold cursor-pointer" onClick={onOpenCatalog}>(Gunakan Kode: {SPECIAL_PROMO.code})</span>
          </p>
        </div>
        <button
          onClick={onOpenCatalog}
          className="text-amber-100 hover:text-white underline font-medium text-xs flex items-center gap-1 transition-colors shrink-0"
        >
          <span>Pesan Sekarang</span>
          <MessageCircleCode className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
