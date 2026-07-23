import React, { useState, useMemo } from 'react';
import { Product, ProductCategory, ProductVariant } from '../types';
import { ShoppingBag, Star, Flame, Snowflake, Check, Eye, MessageCircleCode, Sparkles } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number, notes?: string) => void;
  onDirectWAOrder: (product: Product, variant: ProductVariant) => void;
  searchQuery: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onDirectWAOrder,
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('semua');
  const [sortBy, setSortBy] = useState<'populer' | 'harga-rendah' | 'harga-tinggi' | 'rating'>('populer');
  const [addedMap, setAddedMap] = useState<{ [key: string]: boolean }>({});

  const categories: { id: ProductCategory; label: string; icon?: string }[] = [
    { id: 'semua', label: 'Semua Produk' },
    { id: 'siap-makan', label: 'Goreng & Siap Makan' },
    { id: 'frozen', label: 'Frozen Pack (Vacuum)' },
    { id: 'pedas', label: 'Pedas Mercon 🔥' },
    { id: 'paket-hemat', label: 'Paket Besek & Hampers' },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'semua' || product.category === selectedCategory;
        const matchesSearch =
          !searchQuery ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'harga-rendah') return a.price - b.price;
        if (sortBy === 'harga-tinggi') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default: Populer / BestSeller
        return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultVariant = product.variants[0];
    onAddToCart(product, defaultVariant, 1);

    // Show temporary feedback animation
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="katalog" className="py-12 sm:py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>Menu Favorit Nusantara</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              Katalog Tahu Bakso Berkah
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              Pilih varian favoritmu dalam porsi matang hangat atau kemasan beku praktis!
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-semibold text-stone-500 shrink-0">Urutkan:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-stone-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500/40 cursor-pointer shadow-xs"
            >
              <option value="populer">Paling Populer & Best Seller</option>
              <option value="rating">Rating Tertinggi</option>
              <option value="harga-rendah">Harga Terendah</option>
              <option value="harga-tinggi">Harga Tertinggi</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200/80'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 max-w-md mx-auto my-8">
            <p className="text-stone-400 font-semibold mb-2">Tidak ada produk yang cocok</p>
            <p className="text-stone-500 text-xs">Coba ubah kata kunci pencarian atau ganti kategori filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isAdded = addedMap[product.id];

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        {product.isBestSeller && (
                          <span className="bg-amber-500 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded-md shadow-xs uppercase tracking-wider">
                            BEST SELLER
                          </span>
                        )}
                        {product.isFrozen && (
                          <span className="bg-sky-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                            <Snowflake className="w-3 h-3" />
                            Frozen
                          </span>
                        )}
                      </div>

                      {/* Spicy Level Badge */}
                      {product.spicyLevel && product.spicyLevel > 0 ? (
                        <div className="absolute top-3 right-3 bg-red-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                          <Flame className="w-3 h-3 fill-white" />
                          <span>{'🔥'.repeat(product.spicyLevel)}</span>
                        </div>
                      ) : null}

                      {/* Quick Eye View Hover overlay */}
                      <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-stone-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Lihat Detail Varian</span>
                        </span>
                      </div>
                    </div>

                    {/* Body Area */}
                    <div className="p-5 space-y-3">
                      {/* Rating & Review */}
                      <div className="flex items-center justify-between text-xs text-stone-500">
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span className="text-stone-900">{product.rating}</span>
                          <span className="text-stone-400 font-normal">({product.reviewCount} ulasan)</span>
                        </div>
                        <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200/60">
                          Stok Tersedia
                        </span>
                      </div>

                      {/* Title & Short Desc */}
                      <div>
                        <h3 className="font-extrabold text-stone-900 text-base group-hover:text-amber-700 transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                          {product.shortDesc}
                        </p>
                      </div>

                      {/* Variants options count */}
                      <div className="text-[11px] text-stone-400 font-medium">
                        Pilihan: {product.variants.map((v) => v.unit).join(' • ')}
                      </div>
                    </div>
                  </div>

                  {/* Footer Price & Action */}
                  <div className="px-5 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase font-bold block">Mulai Dari</span>
                      <span className="text-lg font-black text-amber-800">
                        {formatRupiah(product.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Direct WA Order */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDirectWAOrder(product, product.variants[0]);
                        }}
                        title="Beli Langsung via WA"
                        className="p-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all"
                      >
                        <MessageCircleCode className="w-4 h-4" />
                      </button>

                      {/* Add to Cart */}
                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`px-3.5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-600 hover:bg-amber-700 text-white active:scale-95'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Masuk!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>+ Keranjang</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
