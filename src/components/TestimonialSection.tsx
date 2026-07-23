import React, { useState } from 'react';
import { Testimonial } from '../types';
import { Star, MessageSquarePlus, CheckCircle, Quote, ThumbsUp, X, Sparkles } from 'lucide-react';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  onAddTestimonial: (testimonial: Testimonial) => void;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
  onAddTestimonial,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [productName, setProductName] = useState('Tahu Bakso Sapi Original');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newTestimonial: Testimonial = {
      id: `t-user-${Date.now()}`,
      name,
      city: city || 'Indonesia',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200`,
      rating,
      date: 'Baru saja',
      comment,
      productName,
      verifiedOrder: true,
    };

    onAddTestimonial(newTestimonial);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setName('');
      setCity('');
      setComment('');
    }, 1500);
  };

  return (
    <section id="testimoni" className="py-12 sm:py-16 bg-gradient-to-b from-stone-50 via-stone-100/50 to-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>Kepercayaan & Kepuasan Pembeli</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              Testimoni Pelanggan Setia
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              Dengarkan langsung ulasan dan pengalaman nikmat dari pembeli Tahu Bakso Berkah di berbagai kota.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="self-start md:self-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all active:scale-95"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Tulis Ulasan Anda</span>
          </button>
        </div>

        {/* Rating Summary Banner */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs mb-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-stone-100 pb-4 md:pb-0 md:pr-6">
            <span className="text-4xl font-black text-stone-900">4.9</span>
            <span className="text-stone-400 font-bold text-lg"> / 5.0</span>
            <div className="flex items-center justify-center md:justify-start text-amber-400 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-stone-500">Berdasarkan 250+ ulasan terverifikasi</p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
              <p className="text-xl font-black text-amber-800">99%</p>
              <p className="text-[11px] text-stone-500">Puasa Rasa & Daging Padat</p>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
              <p className="text-xl font-black text-amber-800">100%</p>
              <p className="text-[11px] text-stone-500">Kemasan Vacuum Higienis</p>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3 bg-stone-50 rounded-xl border border-stone-100">
              <p className="text-xl font-black text-amber-800">Fast</p>
              <p className="text-[11px] text-stone-500">Respon WA & Pengiriman</p>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between"
            >
              <div>
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-amber-100 absolute top-4 right-4 pointer-events-none" />

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal mb-4">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-200"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-extrabold text-xs text-stone-900">{t.name}</p>
                      {t.verifiedOrder && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" title="Pembeli Terverifikasi" />
                      )}
                    </div>
                    <p className="text-[11px] text-stone-400">{t.city} • {t.productName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-stone-400 font-medium">
                  <ThumbsUp className="w-3 h-3 text-amber-600" />
                  <span>Suka</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-stone-200 space-y-4">
            
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="font-extrabold text-stone-900 text-base">Tulis Ulasan & Testimoni</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-stone-400 hover:text-stone-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <p className="font-bold text-stone-900">Terima kasih atas ulasan Anda!</p>
                <p className="text-xs text-stone-500">Testimoni Anda telah dipublikasikan di halaman ini.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rina Wijaya"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Kota / Wilayah
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Semarang / Jakarta"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Produk Yang Dibeli
                  </label>
                  <select
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 font-medium"
                  >
                    <option value="Tahu Bakso Sapi Original Premium">Tahu Bakso Sapi Original Premium</option>
                    <option value="Tahu Bakso Frozen Vacuum Pack">Tahu Bakso Frozen Vacuum Pack</option>
                    <option value="Risol Mayoness Ayam Suwir Pedas">Risol Mayoness Ayam Suwir Pedas</option>
                    <option value="Risol Mayoness Ayam Suir Original">Risol Mayoness Ayam Suir Original</option>
                    <option value="Tahu Bakso Ayam">Tahu Bakso Ayam</option>
                    <option value="Tahu Bakso Ayam">Hampers Besek Tahu Bakso Besek Etnik (20 Pcs)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Rating Bintang
                  </label>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        onClick={() => setRating(star)}
                        className={`w-6 h-6 cursor-pointer transition-transform hover:scale-110 ${
                          star <= rating ? 'fill-amber-400' : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Ulasan & Pengalaman Anda <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Ceritakan rasa tahu bakso, kepuasan kemasan, atau pelayanan kami..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 text-xs font-bold text-stone-600 hover:bg-stone-100 rounded-xl"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md"
                  >
                    Kirim Ulasan
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
