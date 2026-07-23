export type ProductCategory = 'semua' | 'siap-makan' | 'frozen' | 'pedas' | 'paket-hemat';

export interface ProductVariant {
  id: string;
  name: string; // e.g. "Isi 5 Pcs (Goreng)", "Isi 10 Pcs (Frozen Pack)", "Besek Hampers (20 Pcs)"
  price: number;
  unit: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  shortDesc: string;
  price: number; // Base price
  rating: number;
  reviewCount: number;
  image: string;
  isPopular?: boolean;
  isBestSeller?: boolean;
  isFrozen?: boolean;
  spicyLevel?: number; // 0: non spicy, 1: sedang, 2: pedas, 3: ekstra pedas
  variants: ProductVariant[];
  ingredients: string[];
  servingTips: string;
}

export interface CartItem {
  id: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  productName: string;
  verifiedOrder: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'Resep' | 'Tips Penyajian' | 'Penyimpanan' | 'Info UMKM';
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: {
    intro: string;
    ingredients?: string[];
    steps?: string[];
    tips?: string[];
    conclusion: string;
  };
  recommendedProductId?: string;
}

export interface OrderForm {
  customerName: string;
  phoneNumber: string;
  deliveryMethod: 'pickup' | 'instant' | 'expedition';
  address: string;
  notes: string;
  paymentMethod: 'qris' | 'transfer' | 'cod';
}
