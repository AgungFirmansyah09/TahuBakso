import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogPost, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { BookOpen, Clock, User, ArrowRight, X, ChefHat, Sparkles, ShoppingBag } from 'lucide-react';

interface BlogSectionProps {
  onSelectProductToCart: (product: Product) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectProductToCart }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="resep" className="py-12 sm:py-16 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
            <ChefHat className="w-3.5 h-3.5 text-amber-600" />
            <span>Blog & Resep Masakan UMKM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Tips Penyajian & Kreasi Resep Tahu Bakso
          </h2>
          <p className="text-stone-500 text-sm mt-1">
            Inspirasi olahan tahu bakso lezat, panduan cara menggoreng garing, hingga teknik penyimpanan frozen tahan lama.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedArticle(post)}
              className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-stone-900/80 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-stone-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-extrabold text-stone-900 text-sm sm:text-base group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read Action Footer */}
              <div className="px-5 pb-4 pt-1 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full uppercase">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Scroll */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Article Header */}
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-stone-400 font-medium mt-2">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-stone-500" />
                    {selectedArticle.author}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Intro Text */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {selectedArticle.content.intro}
              </p>

              {/* Ingredients List if Recipe */}
              {selectedArticle.content.ingredients && (
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
                  <h4 className="font-extrabold text-amber-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <ChefHat className="w-4 h-4 text-amber-700" />
                    Bahan-Bahan Yang Dibutuhkan:
                  </h4>
                  <ul className="list-disc list-inside text-xs text-stone-700 space-y-1">
                    {selectedArticle.content.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Step By Step Instructions */}
              {selectedArticle.content.steps && (
                <div className="space-y-3">
                  <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">
                    Langkah-Langkah Memasak:
                  </h4>
                  <div className="space-y-2">
                    {selectedArticle.content.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                        <span className="w-5 h-5 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-stone-700 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tips list if any */}
              {selectedArticle.content.tips && (
                <div className="space-y-3">
                  <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">
                    Tips Kunci Dari Chef:
                  </h4>
                  <div className="space-y-2">
                    {selectedArticle.content.tips.map((tip, idx) => (
                      <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Conclusion */}
              <p className="text-xs sm:text-sm text-stone-600 italic bg-stone-100 p-4 rounded-2xl border border-stone-200">
                "{selectedArticle.content.conclusion}"
              </p>

            </div>

            {/* Modal Footer CTA */}
            <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-3">
              <span className="text-xs text-stone-500 font-medium hidden sm:inline">
                Siap mencoba resep ini di rumah?
              </span>
              <button
                onClick={() => {
                  const targetProd = PRODUCTS.find((p) => p.id === selectedArticle.recommendedProductId) || PRODUCTS[0];
                  onSelectProductToCart(targetProd);
                  setSelectedArticle(null);
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pesan Bahan Tahu Bakso Sekarang</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
