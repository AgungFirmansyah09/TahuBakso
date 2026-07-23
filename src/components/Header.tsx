import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, MapPin, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'katalog', label: 'Katalog Produk' },
    { id: 'resep', label: 'Resep & Tips' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'lokasi', label: 'Lokasi Toko' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('katalog')}>
            <div className="w-11 h-11 rounded-2xl bg-amber-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-amber-600/20 ring-2 ring-amber-500/30">
              TB
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-stone-900 text-lg tracking-tight leading-none">
                  TAHU BAKSO
                </span>
                <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider border border-red-200">
                  BERKAH
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium tracking-wide">
                Resep Sapi Warisan • Premium UMKM
              </p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Cari Tahu Bakso (Original, Pedas, Frozen)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-stone-100/80 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === item.id
                    ? 'text-amber-700 bg-amber-100/60'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions: Direct WA & Cart Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/6281315607547?text=Halo%20Admin%20Tahu%20Bakso%20Berkah,%20saya%20ingin%20tanya%20stok%20produk"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-3 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/80 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>Chat Admin</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              id="cart-button-header"
              className="relative flex items-center justify-center p-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-md shadow-amber-600/20 active:scale-95 transition-all"
              aria-label="Keranjang Belanja"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3 pt-1">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Cari varian Tahu Bakso..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-stone-100 border border-stone-200 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-b border-stone-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === item.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Hubungi Admin WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
