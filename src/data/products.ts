import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'tb-01',
    name: 'Tahu Bakso Sapi Original Premium',
    category: 'siap-makan',
    shortDesc: 'Tahu cokelat gurih padat isi olahan daging sapi segar 100% tanpa pengawet.',
    description: 'Tahu Bakso Sapi Original khas resep warisan. Menggunakan tahu pong cokelat renyah di luar dengan isian daging sapi murni bertekstur padat, kenyal, dan juicy. Disajikan hangat lengkap dengan cabai rawit hijau segar.',
    price: 10000,
    rating: 4.9,
    reviewCount: 184,
    image: '../../assets/img/tahu-bakso-sapi.png',
    isPopular: true,
    isBestSeller: true,
    spicyLevel: 0,
    variants: [
      { id: 'v1-1', name: 'Pack Isi 6 Pcs (Goreng Matang)', price: 10000, unit: '6 pcs' },
      { id: 'v1-2', name: 'Pack Isi 12 Pcs (Goreng Matang)', price: 20000, unit: '12 pcs' },
      { id: 'v1-3', name: 'Pack Isi 12 Pcs (Kukus Warm)', price: 20000, unit: '12 pcs' },
    ],
    ingredients: ['Tahu Pong Cokelat', 'Daging Sapi Murni', 'Tepung Tapioka Super', 'Bawang Putih', 'Lada Putih', 'Rempah Spesial', 'Garam & Kaldu Alami'],
    servingTips: 'Enak dimakan langsung selagi hangat bersama cabai rawit atau dicelupkan ke sambal kecap manis gurih.'
  },
  {
    id: 'tb-02',
    name: 'Tahu Bakso Frozen Vacuum Pack',
    category: 'frozen',
    shortDesc: 'Kemasan kedap udara (vacuum sealed). Tahan simpan 1 bulan di freezer.',
    description: 'Solusi praktis untuk stok cemilan di rumah atau oleh-oleh luar kota. Dikemas menggunakan mesin vacuum hampa udara sehingga tetap higienis, segar, dan terjaga kelezatannya tanpa menggunakan bahan pengawet.',
    price: 12000,
    rating: 4.95,
    reviewCount: 230,
    image: '../../assets/img/Tahu-bakso-forzeen.png',
    isPopular: true,
    isBestSeller: true,
    isFrozen: true,
    spicyLevel: 0,
    variants: [
      { id: 'v2-1', name: 'Vacuum Pack Isi 10 Pcs Original', price: 12000, unit: '10 pcs' },
      { id: 'v2-2', name: 'Vacuum Pack Isi 20 Pcs (Family Size)', price: 25000, unit: '20 pcs' },
      { id: 'v2-3', name: 'Vacuum Pack Isi 50 Pcs (Special Offer)', price: 55000, unit: '50 pcs' },
    ],
    ingredients: ['Tahu Pilihan', 'Daging Sapi Segar', 'Bumbu Rempah Nusantara', 'Kemasan Vacuum Food-Grade'],
    servingTips: 'Thawing (defrost) 15-20 menit di suhu ruang sebelum digoreng dengan api sedang hingga berwarna kuning keemasan renyah.'
  },
  { 
  id: 'tb-03', 
  name: 'Risol Mayoness Ayam Suwir Pedas', 
  category: 'pedas', 
  shortDesc: 'Spesial pecinta pedas! Isian ayam suwir melimpah dibalut saus mayones gurih dengan irisan cabai rawit merah.', 
  description: 'Sensasi pedas gurih yang bikin ketagihan! Suwiran daging ayam pilihan yang dimasak meresap dengan bumbu rempah, dipadukan melimpah bersama saus mayones yang lumer di mulut dan irisan cabai rawit merah segar. Setiap gigitan memberikan tekstur renyah di luar dan kelezatan yang padat di dalam.', 
  price: 5000, 
  rating: 4.88, 
  reviewCount: 142, 
  image: '../../assets/img/risol-mayo-pedas.png', 
  isPopular: true, 
  spicyLevel: 3, 
  variants: [ 
    { id: 'v3-1', name: 'Pack Isi 3 Pcs (Goreng Matang)', price: 5000, unit: '3 pcs' }, 
    { id: 'v3-2', name: 'Pack Isi 10 Pcs (Goreng Matang)', price: 15000, unit: '10 pcs' }, 
    { id: 'v3-3', name: 'Frozen Vacuum Pack Isi 10 Pcs', price: 17000, unit: '10 pcs' }, 
  ], 
  ingredients: ['Daging Ayam Suwir', 'Cabai Rawit Merah', 'Bawang Merah & Putih', 'Mayones', 'Susu Kental Manis', 'Tepung Terigu', 'Tepung Panir'], 
  servingTips: 'Paling cocok dinikmati selagi hangat bersama es teh manis atau minuman dingin favorit Anda untuk menyeimbangkan rasa pedasnya.' 
  },
 { 
  id: 'tb-04', 
  name: 'Risol Mayoness Ayam Suir Original', 
  category: 'siap-makan', 
  shortDesc: 'Nikmat dan mengenyangkan! Isian daging ayam suwir premium yang melimpah dipadukan dengan saus mayones klasik yang lumer.', 
  description: 'Varian favorit keluarga yang menggabungkan kelembutan daging ayam suwir pilihan dengan saus mayones original yang creamy dan gurih. Dibungkus dengan kulit risol yang tipis dan lentur, lalu dilapisi tepung panir renyah. Setiap gigitan memberikan perpaduan tekstur garing di luar dan lumer di dalam tanpa rasa pedas, sangat cocok untuk segala usia.', 
  price: 5000, 
  rating: 4.85, 
  reviewCount: 96, 
  image: '../../assets/img/risol-mayo-biasa.png', 
  isPopular: false, 
  spicyLevel: 0, 
  variants: [ 
    { id: 'v4-1', name: 'Pack Isi 3 Pcs (Goreng Matang)', price: 5000, unit: '3 pcs' }, 
    { id: 'v4-2', name: 'Pack Isi 10 Pcs (Goreng Matang)', price: 15000, unit: '10 pcs' }, 
    { id: 'v4-3', name: 'Frozen Vacuum Pack Isi 10 Pcs', price: 17000, unit: '10 pcs' }, 
  ], 
  ingredients: ['Daging Ayam Suwir', 'Mayones Original', 'Telur Rebus', 'Bumbu Rempah Gurih', 'Tepung Terigu', 'Tepung Panir'], 
  servingTips: 'Sajikan selagi hangat bersama cocolan saus tomat atau saus sambal botolan sesuai selera untuk menambah kelezatan.' 
  },
  { 
  id: 'tb-05', 
  name: 'Tahu Bakso Ayam', 
  category: 'siap-makan', 
  shortDesc: 'Kombinasi tahu pong premium dan adonan daging ayam juicy yang padat, gurih, dan lezat.', 
  description: 'Camilan tradisional yang selalu bikin kangen! Dibuat dari tahu cokelat pilihan yang diisi penuh dengan adonan daging ayam giling segar berkualitas tinggi dan bumbu rempah rahasia. Memiliki tekstur bakso ayam yang kenyal padat di dalam serta tahu yang lembut di luar, memberikan rasa gurih alami yang disukai seluruh anggota keluarga.', 
  price: 10000, 
  rating: 4.82, 
  reviewCount: 78, 
  image: '../../assets/img/tahu-bakso-ayam.png', 
  isPopular: false, 
  spicyLevel: 0, 
  variants: [ 
    { id: 'v5-1', name: 'Pack Isi 8 Pcs (Goreng Matang)', price: 10000, unit: '6 pcs' },
    { id: 'v5-2', name: 'Pack Isi 16 Pcs (Goreng Matang)', price: 20000, unit: '12 pcs' },
    { id: 'v5-3', name: 'Pack Isi 16 Pcs (Kukus Warm)', price: 20000, unit: '12 pcs' },
  ], 
  ingredients: ['Tahu Cokelat Pilihan', 'Daging Ayam Fillet', 'Tepung Tapioka', 'Bawang Putih & Merah', 'Daun Bawang Iris', 'Bumbu Rempah Alami'], 
  servingTips: 'Sangat nikmat disantap selagi hangat bersama cocolan sambal kecap pedas, cabai rawit hijau segar, atau saus sambal favorit Anda.' 
  },
  {
    id: 'tb-06',
    name: 'Hampers Besek Tahu Bakso Besek Etnik (20 Pcs)',
    category: 'paket-hemat',
    shortDesc: 'Kemasan besek bambu tradisional estetik. Cocok untuk hadiah, oleh-oleh, & hantaran.',
    description: 'Paket hampers eksklusif dengan wadah besek bambu ramah lingkungan bertema tradisional Nusantara. Dilengkapi dengan pita cantik, kartu ucapan custom, serta 2 jenis sambal botol gratis (Sambal Kecap & Sambal Bawang).',
    price: 50000,
    rating: 4.98,
    reviewCount: 310,
    image: '../../assets/img/tahu-bakso-besek.png',
    isPopular: true,
    isBestSeller: true,
    spicyLevel: 1,
    variants: [
      { id: 'v6-1', name: 'Besek Hemat isi 50 Pcs (Goreng)', price: 50000, unit: '50 pcs' },
      { id: 'v6-2', name: 'Besek Standard isi 100 pcs (Goreng)', price: 105000, unit: '100 pcs' },
      { id: 'v6-3', name: 'Besek Jumbo isi 1000 pcs (Goreng)', price: 1000000, unit: '1000 pcs' },
    ],
    ingredients: ['Tahu Bakso Sapi Original & Pedas', 'Wadah Besek Bambu', 'Sambal Kecap Botol 100ml', 'Sambal Bawang Botol 100ml', 'Pita & Hangtag Card'],
    servingTips: 'Dapat langsung disajikan saat acara kumpul keluarga, arisan, rapat kantor, atau sebagai buah tangan hangat.'
  }
];

export const SPECIAL_PROMO = {
  title: 'PROMO SPESIAL BUKA WARUNG!',
  subtitle: 'Gratis 1 Botol Sambal Kecap Pedas Manis Setiap Pembelian Minimal Rp 80.000',
  code: 'FREESAMBAL',
  whatsappNumber: '6281315607547'
};
