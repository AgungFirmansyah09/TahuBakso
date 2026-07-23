import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { TESTIMONIALS } from './data/testimonials';
import { Product, ProductVariant, CartItem, Testimonial } from './types';
import { Header } from './components/Header';
import { PromoBanner } from './components/PromoBanner';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { TestimonialSection } from './components/TestimonialSection';
import { BlogSection } from './components/BlogSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('katalog');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tb_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem('tb_testimonials');
      return saved ? JSON.parse(saved) : TESTIMONIALS;
    } catch {
      return TESTIMONIALS;
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tb_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Sync testimonials to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tb_testimonials', JSON.stringify(testimonials));
    } catch (e) {
      console.error(e);
    }
  }, [testimonials]);

  const handleAddToCart = (
    product: Product,
    variant: ProductVariant,
    quantity: number,
    notes?: string
  ) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.variant.id === variant.id
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        if (notes) updated[existingIndex].notes = notes;
        return updated;
      } else {
        const newItem: CartItem = {
          id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          product,
          variant,
          quantity,
          notes,
        };
        return [...prevItems, newItem];
      }
    });
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddTestimonial = (newTestimonial: Testimonial) => {
    setTestimonials((prev) => [newTestimonial, ...prev]);
  };

  const handleDirectWAOrder = (
    product: Product,
    variant: ProductVariant,
    quantity = 1,
    notes = ''
  ) => {
    const storeNumber = '6281315607547';
    const message = `Halo Admin *Tahu Bakso Berkah*, saya mau pesan langsung:

• *Produk:* ${product.name}
• *Varian:* ${variant.name}
• *Jumlah:* ${quantity} pack
• *Harga:* Rp ${(variant.price * quantity).toLocaleString('id-ID')}
${notes ? `• *Catatan:* ${notes}\n` : ''}
Mohon info ketersediaan stok & total ongkir ke alamat saya ya. Terima kasih!`;

    const url = `https://wa.me/${storeNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased selection:bg-amber-200 selection:text-amber-900">
      
      {/* Top Announcement Banner */}
      <PromoBanner
        onOpenCatalog={() => {
          setActiveTab('katalog');
          document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Header Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Section */}
      <Hero
        onExploreCatalog={() => {
          setActiveTab('katalog');
          document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onDirectWA={() => {
          window.open(
            'https://wa.me/6281315607547?text=Halo%20Admin%20Tahu%20Bakso%20Berkah,%20saya%20ingin%20pesan%20tahu%20bakso%20sekarang',
            '_blank'
          );
        }}
      />

      {/* Main Content Sections */}
      <main>
        {/* Product Catalog */}
        <ProductCatalog
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
          onDirectWAOrder={handleDirectWAOrder}
          searchQuery={searchQuery}
        />

        {/* Recipe & Cooking Tips Blog */}
        <BlogSection
          onSelectProductToCart={(product) => setSelectedProduct(product)}
        />

        {/* Testimonials */}
        <TestimonialSection
          testimonials={testimonials}
          onAddTestimonial={handleAddTestimonial}
        />

        {/* Location & Delivery Info */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={(tab) => {
          setActiveTab(tab);
          document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Mobile Sticky Navigation Bar */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onDirectWAOrder={handleDirectWAOrder}
      />

      {/* Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
