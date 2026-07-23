import React from 'react';
import { ShoppingBag, Store, BookOpen, MessageSquare, MapPin } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
}) => {
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        
        {/* Katalog */}
        <button
          onClick={() => handleNavClick('katalog')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'katalog' ? 'text-amber-700 font-extrabold' : 'text-stone-500 font-medium'
          }`}
        >
          <Store className="w-5 h-5" />
          <span className="text-[10px]">Katalog</span>
        </button>

        {/* Resep */}
        <button
          onClick={() => handleNavClick('resep')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'resep' ? 'text-amber-700 font-extrabold' : 'text-stone-500 font-medium'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px]">Resep</span>
        </button>

        {/* Floating Cart Center Highlight */}
        <button
          onClick={onOpenCart}
          className="relative -mt-6 bg-amber-600 hover:bg-amber-700 text-white p-3.5 rounded-full shadow-xl ring-4 ring-white active:scale-90 transition-all flex items-center justify-center"
        >
          <ShoppingBag className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
              {cartCount}
            </span>
          )}
        </button>

        {/* Testimoni */}
        <button
          onClick={() => handleNavClick('testimoni')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'testimoni' ? 'text-amber-700 font-extrabold' : 'text-stone-500 font-medium'
          }`}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px]">Testimoni</span>
        </button>

        {/* Lokasi */}
        <button
          onClick={() => handleNavClick('lokasi')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === 'lokasi' ? 'text-amber-700 font-extrabold' : 'text-stone-500 font-medium'
          }`}
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px]">Lokasi</span>
        </button>

      </div>
    </nav>
  );
};
