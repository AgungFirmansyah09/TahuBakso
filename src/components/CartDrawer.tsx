import React, { useState } from 'react';
import { CartItem, OrderForm } from '../types';
import { X, Trash2, ShoppingBag, Send, Tag, Truck, Store, MapPin, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { SPECIAL_PROMO } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [orderForm, setOrderForm] = useState<OrderForm>({
    customerName: '',
    phoneNumber: '',
    deliveryMethod: 'instant',
    address: '',
    notes: '',
    paymentMethod: 'qris',
  });

  const [promoCode, setPromoCode] = useState<string>('');
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.variant.price * item.quantity,
    0
  );

  const shippingCost =
    orderForm.deliveryMethod === 'pickup'
      ? 0
      : orderForm.deliveryMethod === 'instant'
      ? 15000
      : 25000;

  const totalPayment = subtotal + shippingCost;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === SPECIAL_PROMO.code) {
      setPromoApplied(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Kode promo tidak valid');
    }
  };

  const handleCheckoutWA = (e: React.FormEvent) => {
    e.preventDefault();

    if (!orderForm.customerName.trim()) {
      setErrorMessage('Mohon isi nama pemesan terlebih dahulu.');
      return;
    }
    if (!orderForm.phoneNumber.trim()) {
      setErrorMessage('Mohon isi nomor WhatsApp Anda.');
      return;
    }
    if (orderForm.deliveryMethod !== 'pickup' && !orderForm.address.trim()) {
      setErrorMessage('Mohon isi alamat lengkap pengiriman.');
      return;
    }

    setErrorMessage('');

    // Format WhatsApp message
    const storeNumber = '6281315607547'; // Admin WhatsApp
    let itemDetailsText = '';

    cartItems.forEach((item, index) => {
      itemDetailsText += `${index + 1}. *${item.product.name}*\n   - Varian: ${item.variant.name}\n   - Qty: ${item.quantity} x ${formatRupiah(item.variant.price)}\n   - Subtotal: ${formatRupiah(item.variant.price * item.quantity)}${item.notes ? `\n   - Catatan: ${item.notes}` : ''}\n\n`;
    });

    const deliveryMethodLabel =
      orderForm.deliveryMethod === 'pickup'
        ? 'Ambil Langsung di Toko (Pickup)'
        : orderForm.deliveryMethod === 'instant'
        ? 'Kurir Instan (Gojek / Grab / ShopeeFood)'
        : 'Ekspedisi Cold Chain Paxel (Luar Kota)';

    const paymentLabel =
      orderForm.paymentMethod === 'qris'
        ? 'QRIS All Payment'
        : orderForm.paymentMethod === 'transfer'
        ? 'Transfer Bank (BCA/Mandiri)'
        : 'COD (Bayar Saat Diterima)';

    const promoBonusText = promoApplied
      ? `\n🎉 *PROMO DIAKTIFKAN:* Free 1 Botol Sambal Kecap (${SPECIAL_PROMO.code})`
      : subtotal >= 80000
      ? `\n🎉 *BONUS OTOMATIS:* Belanja >80rb (Gratis Sambal Kecap)`
      : '';

    const fullMessage =
`Halo Admin *Tahu Bakso Berkah*, saya mau pesan Tahu Bakso via Website:

📋 *DETAIL PESANAN:*
${itemDetailsText}
----------------------------------
💵 Subtotal Produk: *${formatRupiah(subtotal)}*
🚚 Biaya Kirim (${orderForm.deliveryMethod.toUpperCase()}): *${formatRupiah(shippingCost)}*${promoBonusText}
💰 *TOTAL PEMBAYARAN:* *${formatRupiah(totalPayment)}*

👤 *DATA PEMESAN:*
• Nama: *${orderForm.customerName}*
• No. WhatsApp: *${orderForm.phoneNumber}*
• Metode Pengiriman: *${deliveryMethodLabel}*
• Alamat / Patokan: *${orderForm.deliveryMethod === 'pickup' ? 'Ambil di Toko' : orderForm.address}*
• Metode Pembayaran: *${paymentLabel}*
${orderForm.notes ? `• Catatan Khusus: _${orderForm.notes}_` : ''}

Mohon diproses & dikirimkan rincian pembayaran/QRIS ya Kak. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const waUrl = `https://wa.me/${storeNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-stone-200 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-extrabold text-stone-900 text-base">Keranjang Belanja</h2>
                <p className="text-xs text-stone-500">{cartItems.length} Jenis Produk dipilih</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-1 rounded hover:bg-red-50"
                >
                  Kosongkan
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="font-bold text-stone-800 text-base">Keranjang Belanja Masih Kosong</p>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Silakan pilih varian Tahu Bakso favoritmu dari katalog produk untuk mulai memesan!
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 bg-amber-600 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-amber-700"
                >
                  Lihat Katalog Produk
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  <span className="text-xs font-black uppercase text-stone-400 tracking-wider">
                    Daftar Produk:
                  </span>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-stone-50 rounded-2xl border border-stone-200 flex items-start gap-3"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-xl object-cover border border-stone-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-bold text-xs text-stone-900 truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-stone-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-stone-500">{item.variant.name}</p>
                        
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-extrabold text-xs text-amber-800">
                            {formatRupiah(item.variant.price * item.quantity)}
                          </span>

                          <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-2 py-0.5">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="text-xs font-bold text-stone-600 hover:text-stone-900"
                            >
                              -
                            </button>
                            <span className="text-xs font-bold text-stone-900 w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="text-xs font-bold text-stone-600 hover:text-stone-900"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input */}
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-900 flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-amber-600" />
                      Kode Promo / Kupon
                    </span>
                    <span className="text-[11px] text-amber-700">Kode: {SPECIAL_PROMO.code}</span>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Masukkan kode promo..."
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-white border border-amber-200 rounded-xl text-xs uppercase font-mono font-bold focus:outline-none"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-3 py-1.5 bg-amber-600 text-white font-bold text-xs rounded-xl hover:bg-amber-700"
                    >
                      Klaim
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Promo Berhasil! Gratis 1 Botol Sambal Kecap Spesial.
                    </p>
                  )}
                </div>

                {/* Checkout Order Form */}
                <form onSubmit={handleCheckoutWA} className="space-y-4 pt-2 border-t border-stone-200">
                  <span className="text-xs font-black uppercase text-stone-400 tracking-wider block">
                    Form Pemesanan & Alamat:
                  </span>

                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Customer Name */}
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Nama Pemesan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={orderForm.customerName}
                      onChange={(e) => setOrderForm({ ...orderForm, customerName: e.target.value })}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Nomor WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      value={orderForm.phoneNumber}
                      onChange={(e) => setOrderForm({ ...orderForm, phoneNumber: e.target.value })}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                    />
                  </div>

                  {/* Delivery Method */}
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Opsi Pengiriman
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
                      <button
                        type="button"
                        onClick={() => setOrderForm({ ...orderForm, deliveryMethod: 'pickup' })}
                        className={`p-2 rounded-xl border font-bold flex flex-col items-center gap-1 transition-all ${
                          orderForm.deliveryMethod === 'pickup'
                            ? 'bg-amber-100 border-amber-600 text-amber-900'
                            : 'bg-stone-50 border-stone-200 text-stone-600'
                        }`}
                      >
                        <Store className="w-4 h-4 text-amber-600" />
                        <span className="text-[10px]">Ambil Toko</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrderForm({ ...orderForm, deliveryMethod: 'instant' })}
                        className={`p-2 rounded-xl border font-bold flex flex-col items-center gap-1 transition-all ${
                          orderForm.deliveryMethod === 'instant'
                            ? 'bg-amber-100 border-amber-600 text-amber-900'
                            : 'bg-stone-50 border-stone-200 text-stone-600'
                        }`}
                      >
                        <Truck className="w-4 h-4 text-amber-600" />
                        <span className="text-[10px]">Kurir Instan</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrderForm({ ...orderForm, deliveryMethod: 'expedition' })}
                        className={`p-2 rounded-xl border font-bold flex flex-col items-center gap-1 transition-all ${
                          orderForm.deliveryMethod === 'expedition'
                            ? 'bg-amber-100 border-amber-600 text-amber-900'
                            : 'bg-stone-50 border-stone-200 text-stone-600'
                        }`}
                      >
                        <MapPin className="w-4 h-4 text-amber-600" />
                        <span className="text-[10px]">Cold Chain</span>
                      </button>
                    </div>
                  </div>

                  {/* Address */}
                  {orderForm.deliveryMethod !== 'pickup' && (
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Alamat Pengiriman & Patokan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Contoh: Jl. Pemuda No. 45, RT 02/03, Dekat Masjid Agung, Semarang..."
                        value={orderForm.address}
                        onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                        className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                      />
                    </div>
                  )}

                  {/* Payment Method */}
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Metode Pembayaran
                    </label>
                    <select
                      value={orderForm.paymentMethod}
                      onChange={(e) => setOrderForm({ ...orderForm, paymentMethod: e.target.value as any })}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 font-medium focus:outline-none"
                    >
                      <option value="qris">QRIS (Gopay, OVO, Dana, ShopeePay, LinkAja)</option>
                      <option value="transfer">Transfer Bank (BCA / Mandiri / BRI)</option>
                      <option value="cod">COD (Bayar Tunai di Tempat saat diterima)</option>
                    </select>
                  </div>

                  {/* Special Delivery Note */}
                  <div>
                    <label className="text-xs font-semibold text-stone-600 block mb-1">
                      Catatan Tambahan untuk Admin (Opsional):
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Tolong kirim sebelum jam 3 sore"
                      value={orderForm.notes}
                      onChange={(e) => setOrderForm({ ...orderForm, notes: e.target.value })}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none"
                    />
                  </div>

                </form>
              </>
            )}

          </div>

          {/* Drawer Footer Summary & Submit */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
              <div className="space-y-1 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal Produk</span>
                  <span className="font-bold text-stone-900">{formatRupiah(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ongkos Kirim ({orderForm.deliveryMethod})</span>
                  <span className="font-bold text-stone-900">{formatRupiah(shippingCost)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Bonus Promo</span>
                    <span>Free Sambal Kecap</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-black text-stone-900">
                  <span>Total Bayar</span>
                  <span className="text-amber-800 text-lg">{formatRupiah(totalPayment)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckoutWA}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Kirim Pesanan via WhatsApp</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
