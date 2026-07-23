import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { X, ShoppingBag, MessageCircle, Star, Flame, Snowflake, Check, Heart, ShieldCheck, Clock } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number, notes?: string) => void;
  onDirectWAOrder: (product: Product, variant: ProductVariant, quantity: number, notes?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onDirectWAOrder,
}) => {
  if (!product) return null;

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleAddToCartSubmit = () => {
    onAddToCart(product, selectedVariant, quantity, notes);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 800);
  };

  const handleWASubmit = () => {
    onDirectWAOrder(product, selectedVariant, quantity, notes);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {product.category === 'frozen' ? 'Frozen Pack' : 'Detail Tahu Bakso'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            
            {/* Image */}
            <div className="relative aspect-square bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isBestSeller && (
                <span className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-xs font-black px-2.5 py-1 rounded-lg shadow-sm uppercase">
                  BEST SELLER
                </span>
              )}
            </div>

            {/* Title & Desc */}
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-black text-stone-900 leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-1.5 text-xs">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-stone-900">{product.rating}</span>
                  </div>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-500">{product.reviewCount} ulasan pembeli</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Badges List */}
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-stone-600">
                <span className="bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Sapi Murni
                </span>
                <span className="bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  Dibuat Fresh Setiap Hari
                </span>
              </div>
            </div>

          </div>

          {/* Variant Selector */}
          <div className="space-y-2 border-t border-stone-200 pt-5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-stone-700 block">
              Pilih Varian & Ukuran Kemasan:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.variants.map((variant) => {
                const isSelected = selectedVariant.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50/80 ring-2 ring-amber-500/20'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                    }`}
                  >
                    <div>
                      <p className={`text-xs font-bold ${isSelected ? 'text-amber-900' : 'text-stone-800'}`}>
                        {variant.name}
                      </p>
                      <p className="text-[11px] text-stone-500 mt-0.5">{variant.unit}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-amber-800">
                        {formatRupiah(variant.price)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ingredients & Serving Tips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
            <div>
              <p className="font-bold text-stone-900 mb-1">Bahan Utama:</p>
              <p className="text-stone-600 leading-relaxed">
                {product.ingredients.join(', ')}
              </p>
            </div>
            <div>
              <p className="font-bold text-stone-900 mb-1">Saran Penyajian:</p>
              <p className="text-stone-600 leading-relaxed">
                {product.servingTips}
              </p>
            </div>
          </div>

          {/* Quantity & Custom Notes */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                Jumlah Pesanan:
              </span>
              <div className="flex items-center gap-3 bg-stone-100 border border-stone-200 rounded-xl p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-stone-200 font-bold text-stone-700 hover:bg-stone-50 flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center font-black text-stone-900 text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-lg bg-white border border-stone-200 font-bold text-stone-700 hover:bg-stone-50 flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-600 block mb-1">
                Catatan Pesanan Khusus (Opsional):
              </label>
              <input
                type="text"
                placeholder="Contoh: Minta cabai rawit ekstra, goreng garing, dll."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-stone-400 font-bold uppercase block">Total Harga</span>
            <span className="text-xl font-black text-amber-800">
              {formatRupiah(selectedVariant.price * quantity)}
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* Direct WA Order */}
            <button
              onClick={handleWASubmit}
              className="flex-1 sm:flex-none px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Beli via WA</span>
            </button>

            {/* Add To Cart */}
            <button
              onClick={handleAddToCartSubmit}
              className={`flex-1 sm:flex-none px-5 py-3 font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-600 hover:bg-amber-700 text-white active:scale-95'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Berhasil Masuk Keranjang!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>+ Masuk Keranjang</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
