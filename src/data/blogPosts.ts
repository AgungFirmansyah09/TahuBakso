import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Cara Menggoreng Tahu Bakso Frozen Agar Tetap Juicy & Tidak Keras',
    slug: 'cara-menggoreng-tahu-bakso-frozen-juicy',
    summary: 'Sering mengalami tahu bakso frozen jadi keras atau gosong di luar tapi dingin di dalam? Simak trik menggoreng tepat di sini!',
    category: 'Tips Penyajian',
    readTime: '3 min',
    date: '18 Juli 2026',
    author: 'Chef Ratna - Dapur Nusantara',
    image: '/assets/img/Tahu-bakso-Forzeen.png',
    content: {
      intro: 'Tahu bakso frozen adalah penyelamat saat lapar melanda atau butuh cemilan cepat untuk tamu. Namun, kesalahan teknis saat menggoreng sering kali membuat tekstur tahunya terlalu keras atau isian daging baksonya masih dingin di dalam.',
      tips: [
        'Lakukan Thawing (Defrost) Sempurna: Keluarkan tahu bakso dari freezer dan diamkan di suhu ruang selama 15-20 menit hingga bunga es meleleh dan tahu tidak kaku.',
        'Gunakan Minyak Cukup (Deep Frying): Pastikan minyak merendam setidaknya setengah bagian tahu bakso agar panas terdistribusi merata.',
        'Atur Api Sedang: Jangan gunakan api terlalu besar karena akan membuat kulit tahu luar cepat gosong hitam padahal isian dalam belum hangat.',
        'Tiriskan dengan Posisi Berdiri: Setelah diangkat berwarna kuning keemasan, tiriskan di atas kertas minyak dengan posisi berdiri agar sisa minyak menetes sempurna.'
      ],
      conclusion: 'Dengan mengikuti langkah sederhana ini, Tahu Bakso Frozen Anda akan menghasilkan kulit tahu yang renyah renyah gurih dengan isian daging sapi yang empuk, hangat, dan juicy!'
    },
    recommendedProductId: 'tb-02'
  },
  {
    id: 'blog-2',
    title: 'Resep Sup Tahu Bakso Kuah Ceker Gurih Segar untuk Musim Hujan',
    slug: 'resep-sup-tahu-bakso-kuah-ceker',
    summary: 'Kombinasi kuah kaldu sapi bening dengan gurihnya tahu bakso dan lembutnya ceker ayam. Nikmat disajikan hangat!',
    category: 'Resep',
    readTime: '5 min',
    date: '12 Juli 2026',
    author: 'Ibu Maryam',
    image: '/assets/img/tips-tahu-bakso-ceker.png',
    content: {
      intro: 'Saat cuaca dingin atau hujan turun, tidak ada yang lebih nikmat selain menyantap semangkuk sup berkuah hangat dengan aroma bawang putih tumis yang harum.',
      ingredients: [
        '10 pcs Tahu Bakso Sapi Original (dipotong dua atau utuh)',
        '250 gr Ceker Ayam (bersihkan & rebus empuk)',
        '1.5 Liter Kaldu Sapi / Air',
        '4 Siung Bawang Putih (geprek dan tumis harum)',
        '1 Batang Daun Bawang & Seledri (iris halus)',
        '1 sdt Lada Bubuk, Garam, & Kaldu Jamur secukupnya',
        'Bawang Goreng untuk taburan'
      ],
      steps: [
        'Didihkan air kaldu di panci, masukkan ceker ayam yang sudah direbus empuk.',
        'Tumis bawang putih geprek hingga harum dan kekuningan, lalu masukkan ke dalam kuah kaldu mendidih.',
        'Bumbui dengan garam, lada bubuk, dan kaldu jamur. Koreksi rasa.',
        'Masukkan Tahu Bakso Sapi Original. Masak selama 3-5 menit hingga tahu bakso mengapung dan bumbu meresap.',
        'Matikan api, masukkan irisan daun bawang, seledri, dan taburan bawang goreng renyah.',
        'Sajikan hangat bersama sambal rawit dan perasan jeruk nipis!'
      ],
      conclusion: 'Hidangan sup tahu bakso ini sangat cocok untuk menu makan siang atau malam keluarga. Praktis dan kaya gizi!'
    },
    recommendedProductId: 'tb-01'
  },
  {
    id: 'blog-3',
    title: 'Kreasi Tahu Bakso Bakar Bumbu Kacang Pedas Manis',
    slug: 'kreasi-tahu-bakso-bakar-bumbu-kacang',
    summary: 'Bosan dengan tahu bakso goreng biasa? Coba olah jadi Tahu Bakso Bakar ala angkringan dengan olesan bumbu manis gurih!',
    category: 'Resep',
    readTime: '4 min',
    date: '05 Juli 2026',
    author: 'Chef Dika',
    image: '/assets/img/Tahu-bakso-bakar.png',
    content: {
      intro: 'Tahu bakso tidak hanya enak digoreng atau dikukus, tetapi juga luar biasa lezat jika dibakar di atas teflon atau arang dengan olesan bumbu manis pedas gurih.',
      ingredients: [
        '10 pcs Tahu Bakso Sapi (Kukus sebentar)',
        'Tusuk sate kayu secukupnya',
        '3 sdm Kecap Manis Premium',
        '2 sdm Bumbu Kacang Halus Siap Pakai',
        '1 sdm Saus Sambal Pedas',
        '1 sdm Margarin untuk mengoles'
      ],
      steps: [
        'Tusuk tahu bakso yang sudah dikukus menggunakan tusuk sate (1 tusuk isi 2-3 pcs).',
        'Campurkan kecap manis, bumbu kacang, saus sambal, dan sedikit air hangat hingga kental.',
        'Panaskan panggangan teflon, olesi dengan margarin tipis-tipis.',
        'Panggang tahu bakso sambil dioles bumbu secara merata hingga harum beraroma smoky kecokelatan.',
        'Angkat dan sajikan di atas piring dengan taburan bawang goreng dan potongan cabai rawit.'
      ],
      conclusion: 'Tahu bakso bakar bumbu kacang ini pas banget jadi sajian malam hari atau acara barbekyu santai bersama teman!'
    },
    recommendedProductId: 'tb-05'
  },
  {
    id: 'blog-4',
    title: 'Panduan Menyimpan Tahu Bakso Frozen Agar Tahan Hingga 1 Bulan',
    slug: 'panduan-menyimpan-tahu-bakso-frozen',
    summary: 'Ketahui cara penyimpanan terbaik agar kualitas rasa, aroma, dan tekstur kenyal tahu bakso tidak rusak di dalam freezer.',
    category: 'Penyimpanan',
    readTime: '3 min',
    date: '28 Juni 2026',
    author: 'Tim Quality Control UMKM',
    image: '/assets/img/tips-tahu-bakso-frozeen.png',
    content: {
      intro: 'Sebagai produk olahan tanpa bahan pengawet sintesis, cara penyimpanan tahu bakso sangat menentukan daya simpan dan kesegarannya.',
      tips: [
        'Suhu Freezer Stabil (-18°C): Pastikan freezer Anda berada di suhu beku konstan agar bakteri tidak dapat berkembang.',
        'Jangan Buka Tutup Kemasan Jika Belum Digunakan: Kemasan vacuum sealed kami menjaga kehampaan udara dari luar.',
        'Gunakan Container Kedap Udara Jika Sudah Dibuka: Jika hanya menggunakan sebagian isi pack, sisanya masukkan ke wadah kotak plastik tertutup rapat sebelum masuk freezer kembali.',
        'Metode First In First Out (FIFO): Dahulukan memasak kemasan yang dibeli lebih awal.'
      ],
      conclusion: 'Dengan penyimpanan yang benar, Tahu Bakso Vacuum Frozen kami tetap segar dan lezat diproses kapan saja!'
    },
    recommendedProductId: 'tb-02'
  }
];
