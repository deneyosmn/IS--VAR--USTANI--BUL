// Hizmet Verileri
const services = {
  'temizlik': [
    { id: 1, name: 'Ev Temizliği Uzmanı', provider: 'Ayşe Temizlik Ltd.', rating: 4.8, reviews: 342, price: '₺250', image: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=400&h=300&fit=crop', category: 'Temizlik', description: 'Profesyonel ev temizliği hizmeti' },
    { id: 2, name: 'Dış Cephe Temizliği', provider: 'İstanbul Temizlik', rating: 4.6, reviews: 215, price: '₺500', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop', category: 'Temizlik', description: 'Bina dış cephe ve pencere temizliği' },
    { id: 3, name: 'Moquette Temizliği', provider: 'Halı Temizlik Pro', rating: 4.7, reviews: 180, price: '₺300', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop', category: 'Temizlik', description: 'Profesyonel halı ve moquette temizliği' },
    { id: 4, name: 'Soğuk Su Basınçlı Yıkama', provider: 'YıkamaPro', rating: 4.9, reviews: 298, price: '₺400', image: 'https://images.unsplash.com/photo-1581092918484-8987c1d64718?w=400&h=300&fit=crop', category: 'Temizlik', description: 'Dış alanlar için basınçlı yıkama' },
  ],
  'tadilat': [
    { id: 5, name: 'Boya Badana Ustası', provider: 'Boya Ustası Mehmet', rating: 4.7, reviews: 421, price: '₺3500', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop', category: 'Tadilat', description: 'Cephe ve iç boya badana işleri' },
    { id: 6, name: 'Kapı Pencere Tasarımı', provider: 'Kapı Pencereciler Ltd.', rating: 4.5, reviews: 156, price: '₺8000', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', category: 'Tadilat', description: 'Özel kapı ve pencere tasarımı' },
    { id: 7, name: 'Duvar Kağıdı Yapıştırma', provider: 'Duvar Tasarım', rating: 4.6, reviews: 203, price: '₺2500', image: 'https://images.unsplash.com/photo-1589939705066-5470d592d48b?w=400&h=300&fit=crop', category: 'Tadilat', description: 'Modern duvar kağıdı uygulaması' },
    { id: 8, name: 'Seramik Fayans Döşeme', provider: 'Fayans Ustası Ahmet', rating: 4.8, reviews: 289, price: '₺5000', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop', category: 'Tadilat', description: 'Profesyonel seramik ve fayans işçiliği' },
  ],
  'nakliyat': [
    { id: 9, name: 'Evden Eve Nakliyat', provider: 'Metro Nakliye', rating: 4.9, reviews: 512, price: '₺2000', image: 'https://images.unsplash.com/photo-1578774219295-41e0a8fe5a91?w=400&h=300&fit=crop', category: 'Nakliyat', description: 'İhtiyatlı ve güvenli evden eve taşıma' },
    { id: 10, name: 'Ofis Taşıma Hizmeti', provider: 'Kurumsal Taşıma', rating: 4.7, reviews: 187, price: '₺5000', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', category: 'Nakliyat', description: 'Ofis ve iş yeri taşıma hizmeti' },
    { id: 11, name: 'Eşya Depolama', provider: 'Depo Yönetimi', rating: 4.6, reviews: 145, price: '₺500/ay', image: 'https://images.unsplash.com/photo-1586880244406-556ebe169603?w=400&h=300&fit=crop', category: 'Nakliyat', description: 'Güvenli ve iklimlendirilmiş depo' },
    { id: 12, name: 'Beyaz Eşya Kurulumu', provider: 'Beyaz Eşya Pro', rating: 4.8, reviews: 276, price: '₺800', image: 'https://images.unsplash.com/photo-1584622275492-5714a3fb3752?w=400&h=300&fit=crop', category: 'Nakliyat', description: 'Bulaşık, çamaşır ve diğer eşya kurulumu' },
  ],
  'tamir': [
    { id: 13, name: 'Kombi Servisi ve Tamiri', provider: 'Kombi Uzmanı', rating: 4.9, reviews: 634, price: '₺500', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop', category: 'Tamir', description: '24/7 kombi ve ısıtma sistemi servisi' },
    { id: 14, name: 'Buzdolabı Tamir', provider: 'Beyaz Eşya Tamir', rating: 4.7, reviews: 298, price: '₺400', image: 'https://images.unsplash.com/photo-1584879694636-cff13d4baf0e?w=400&h=300&fit=crop', category: 'Tamir', description: 'Tüm marka buzdolabı tamir hizmeti' },
    { id: 15, name: 'Klima Bakım ve Tamir', provider: 'KlimaPro', rating: 4.8, reviews: 445, price: '₺600', image: 'https://images.unsplash.com/photo-1545259741-2ea3ebfed5e9?w=400&h=300&fit=crop', category: 'Tamir', description: 'Klima temizliği, bakımı ve onarımı' },
    { id: 16, name: 'Elektrik Tamir ve Bakım', provider: 'Elektrik Mühendisi', rating: 4.6, reviews: 203, price: '₺350', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop', category: 'Tamir', description: 'Elektrik arızaları ve tesisat tamiratı' },
  ],
  'ozel-ders': [
    { id: 17, name: 'Matematik Ders - Lise', provider: 'Prof. Cemil', rating: 4.9, reviews: 523, price: '₺250/saat', image: 'https://images.unsplash.com/photo-1635350736475-c8cef4b21906?w=400&h=300&fit=crop', category: 'Özel Ders', description: 'Lise matematik dersim' },
    { id: 18, name: 'İngilizce Konuşma Kursu', provider: 'Native Speaker John', rating: 4.8, reviews: 387, price: '₺300/saat', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop', category: 'Özel Ders', description: 'Native speaker ile ingilizce konuşma' },
    { id: 19, name: 'Yazılım Programlama', provider: 'Code Master Ali', rating: 4.7, reviews: 245, price: '₺400/saat', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop', category: 'Özel Ders', description: 'Python, JavaScript ve Web Development' },
    { id: 20, name: 'Müzik (Gitar) Dersleri', provider: 'Gitar Öğretmeni Mert', rating: 4.6, reviews: 178, price: '₺200/saat', image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop', category: 'Özel Ders', description: 'Başlangıç ve ileri gitar dersleri' },
  ],
  'organizasyon': [
    { id: 21, name: 'Düğün Organizasyonu', provider: 'Dream Wedding Org.', rating: 4.9, reviews: 412, price: '₺15000', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop', category: 'Organizasyon', description: 'Rüya düğün organizasyonu' },
    { id: 22, name: 'Doğum Günü Partisi', provider: 'Party Time', rating: 4.7, reviews: 234, price: '₺2000', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop', category: 'Organizasyon', description: 'Çocuk ve yetişkin doğum günü partisi' },
    { id: 23, name: 'Korporatif Etkinlik', provider: 'Corp Events Pro', rating: 4.8, reviews: 189, price: '₺8000', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', category: 'Organizasyon', description: 'Profesyonel şirket etkinlikleri' },
    { id: 24, name: 'Söz Ünüveri ve Kına', provider: 'Gelintaç', rating: 4.6, reviews: 267, price: '₺5000', image: 'https://images.unsplash.com/photo-1492602898657-f85bf4d1d3cb?w=400&h=300&fit=crop', category: 'Organizasyon', description: 'Söz, ünüveri ve kına gecesi organizasyonu' },
  ]
};

// Sayfa İçeriği Şablonları
const pages = {
  anasayfa: `
    <!-- HERO BÖLÜMü -->
    <div class="hero-gradient text-white pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl font-black mb-4 leading-tight">
            Hizmet mi lazım?<br>Hemen Bul!
          </h1>
          <p class="text-xl text-emerald-100 max-w-2xl mx-auto">
            Binlerce güvenilir hizmet veren arasından seçin, teklif al ve işini bitir
          </p>
        </div>
        
        <!-- ARAMA BÖLÜMÜ -->
        <div class="max-w-2xl mx-auto mb-8">
          <div class="flex flex-col sm:flex-row gap-3">
            <div class="flex-grow">
              <input type="text" id="search-input" placeholder="Hangi hizmeti arıyorsunuz? (temizlik, tadilat, nakliyat...)" class="w-full px-6 py-4 rounded-xl text-slate-900 font-semibold focus:outline-none search-input text-base">
            </div>
            <button onclick="searchServices()" class="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold transition">
              <i class="fas fa-search mr-2"></i>ARA
            </button>
          </div>
        </div>

        <!-- KATEGORİLER (ROW ŞEKLINDE) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          <a href="#kategori/temizlik" class="bg-emerald-700/50 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-center font-bold transition text-sm">
            <i class="fas fa-broom text-lg block mb-1"></i> Temizlik
          </a>
          <a href="#kategori/tadilat" class="bg-emerald-700/50 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-center font-bold transition text-sm">
            <i class="fas fa-hammer text-lg block mb-1"></i> Tadilat
          </a>
          <a href="#kategori/nakliyat" class="bg-emerald-700/50 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-center font-bold transition text-sm">
            <i class="fas fa-truck text-lg block mb-1"></i> Nakliyat
          </a>
          <a href="#kategori/tamir" class="bg-emerald-700/50 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-center font-bold transition text-sm">
            <i class="fas fa-wrench text-lg block mb-1"></i> Tamir
          </a>
          <a href="#kategori/ozel-ders" class="bg-emerald-700/50 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-center font-bold transition text-sm">
            <i class="fas fa-graduation-cap text-lg block mb-1"></i> Ders
          </a>
          <a href="#kategori/organizasyon" class="bg-emerald-700/50 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-center font-bold transition text-sm">
            <i class="fas fa-cake-candles text-lg block mb-1"></i> Org.
          </a>
        </div>
      </div>
    </div>

    <!-- ÖZELLIKLER BÖLÜMü -->
    <div class="bg-white py-16 border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="font-bold text-xl mb-2">İş Var Garantisi</h3>
            <p class="text-slate-600 text-sm">Eğer memnun değilseniz, para geri iadesi garantisi</p>
          </div>
          <div class="text-center">
            <div class="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              <i class="fas fa-star"></i>
            </div>
            <h3 class="font-bold text-xl mb-2">Gerçek Yorumlar</h3>
            <p class="text-slate-600 text-sm">Doğrulanmış müşteri yorumları ve puanları</p>
          </div>
          <div class="text-center">
            <div class="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              <i class="fas fa-headset"></i>
            </div>
            <h3 class="font-bold text-xl mb-2">24/7 Destek</h3>
            <p class="text-slate-600 text-sm">Soruların için her zaman yanınızdayız</p>
          </div>
        </div>
      </div>
    </div>

    <!-- POPÜLERHİZMETLER BÖLÜMü -->
    <div class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-black mb-12 text-slate-900">Popüler Hizmetler</h2>
        <div id="popular-services" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- JS ile Doldurulacak -->
        </div>
      </div>
    </div>
  `,

  kategori: (cat) => `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="mb-8">
        <h1 class="text-4xl font-black text-slate-900 mb-2 capitalize">${cat} Hizmetleri</h1>
        <p class="text-slate-600">En iyi ${cat} hizmet verenler</p>
      </div>
      <div id="category-services" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- JS ile Doldurulacak -->
      </div>
    </div>
  `,

  detay: (serviceId) => `
    <div class="max-w-4xl mx-auto px-4 py-12">
      <div id="service-detail">
        <!-- JS ile Doldurulacak -->
      </div>
    </div>
  `,

  admin: `
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="bg-white rounded-2xl p-8 shadow-lg">
        <h1 class="text-4xl font-black mb-8 text-slate-900">Admin Paneli</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div class="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-200">
            <div class="text-3xl font-black text-emerald-600 mb-2">24</div>
            <p class="text-slate-600">Aktif Hizmet Veren</p>
          </div>
          <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <div class="text-3xl font-black text-blue-600 mb-2">156</div>
            <p class="text-slate-600">Toplam Siparişler</p>
          </div>
          <div class="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
            <div class="text-3xl font-black text-yellow-600 mb-2">₺45.230</div>
            <p class="text-slate-600">Bu Ayki Gelir</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <div class="text-3xl font-black text-purple-600 mb-2">4.8</div>
            <p class="text-slate-600">Genel Puan</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 class="text-2xl font-bold mb-4">Ödemeler & Bakiye</h2>
            <div class="space-y-4">
              <div class="bg-slate-50 p-4 rounded-xl">
                <p class="text-sm text-slate-600">Bakiyeniz</p>
                <p class="text-3xl font-bold text-emerald-600">₺8.950</p>
              </div>
              <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition">
                Para Çek (Banka Hesabına)
              </button>
              <div class="text-xs text-slate-500 bg-blue-50 p-3 rounded-xl border border-blue-200">
                <i class="fas fa-info-circle mr-2"></i> Minimum çekim tutarı: ₺100
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">Banka Hesapları</h2>
            <div class="space-y-3">
              <div class="bg-slate-50 p-4 rounded-xl">
                <p class="text-sm text-slate-600 mb-1">IBAN</p>
                <p class="font-mono font-bold text-slate-900">TR33 0006 1000 0006 8844 7778</p>
              </div>
              <div class="bg-slate-50 p-4 rounded-xl">
                <p class="text-sm text-slate-600 mb-1">Hesap Sahibi</p>
                <p class="font-bold">Admin İnsan</p>
              </div>
              <button class="w-full border-2 border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-xl transition">
                Hesap Bilgisini Güncelle
              </button>
            </div>
          </div>
        </div>

        <div class="mt-12 bg-red-50 border-2 border-red-200 p-6 rounded-xl">
          <h3 class="text-lg font-bold text-red-600 mb-2">Tehlikeli Bölüm</h3>
          <p class="text-sm text-red-700 mb-4">Bu işlemler geri alınamaz!</p>
          <button class="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg transition">
            Hesabı Sil
          </button>
        </div>
      </div>
    </div>
  `,

  panel: `
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="bg-white rounded-2xl p-8 shadow-lg">
        <h1 class="text-3xl font-black mb-6 text-slate-900">Kullanıcı Paneli</h1>
        <div class="bg-emerald-50 border-2 border-emerald-200 p-6 rounded-xl text-center">
          <i class="fas fa-user-circle text-6xl text-emerald-600 mb-4"></i>
          <p class="text-xl font-bold text-slate-900 mb-2">Hoş Geldiniz!</p>
          <p class="text-slate-600 mb-6">Profil bilgilerinizi görüntüleyin ve düzenleyin</p>
          <button onclick="logout()" class="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition">
            Çıkış Yap
          </button>
        </div>
      </div>
    </div>
  `,

  yardim: `
    <div class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-black mb-12">Sıkça Sorulan Sorular</h1>
      
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-xl border-2 border-slate-200">
          <h3 class="text-xl font-bold text-slate-900 mb-3">İş Var Garantisi Nedir?</h3>
          <p class="text-slate-600">İş Var garantisi, eğer seçtiğiniz hizmet verenle memnun kalmazsanız, ödediğiniz tutarın geri iadesi anlamına gelir.</p>
        </div>

        <div class="bg-white p-6 rounded-xl border-2 border-slate-200">
          <h3 class="text-xl font-bold text-slate-900 mb-3">Nasıl Ödeme Yapabilirim?</h3>
          <p class="text-slate-600">Kredi kartı, banka transferi ve dijital cüzdan ile ödeme yapabilirsiniz. Tüm işlemler SSL şifrelemesi ile korunur.</p>
        </div>

        <div class="bg-white p-6 rounded-xl border-2 border-slate-200">
          <h3 class="text-xl font-bold text-slate-900 mb-3">Hizmet Veren Olarak Nasıl Kayıt Olurum?</h3>
          <p class="text-slate-600">Sağ üst köşedeki "Hizmet Ver" butonuna tıklayarak başvuru formunu doldurun. Uygunluk kontrolünden sonra onaylanırsınız.</p>
        </div>

        <div class="bg-white p-6 rounded-xl border-2 border-slate-200">
          <h3 class="text-xl font-bold text-slate-900 mb-3">İptal Politikası Nedir?</h3>
          <p class="text-slate-600">Çalışma başlamadan önce %100 iade yapılır. Çalışma başladıktan sonra %50 iade uygulanır.</p>
        </div>
      </div>
    </div>
  `
};

// Hizmet Kartı Oluştur
function createServiceCard(service) {
  return `
    <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl service-card cursor-pointer transition" onclick="viewService(${service.id})">
      <div class="relative h-48 overflow-hidden bg-slate-200">
        <img src="${service.image}" alt="${service.name}" class="w-full h-full object-cover">
        <div class="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          ₺${service.price.split('₺')[1]}
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-lg text-slate-900 mb-1">${service.name}</h3>
        <p class="text-sm text-slate-600 mb-3">${service.provider}</p>
        <div class="flex items-center mb-3">
          <span class="stars text-lg mr-2">★★★★★</span>
          <span class="text-sm font-bold text-slate-900">${service.rating}</span>
          <span class="text-xs text-slate-500 ml-1">(${service.reviews})</span>
        </div>
        <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition text-sm">
          Detay Gör
        </button>
      </div>
    </div>
  `;
}

// Ana Sayfa Yükle
function loadPage(route) {
  const appContent = document.getElementById('app-content');
  let content = '';

  if (route === 'anasayfa' || route === '') {
    content = pages.anasayfa;
    appContent.innerHTML = content;
    
    // Popüler hizmetleri göster
    const popularServicesDiv = document.getElementById('popular-services');
    const allServices = Object.values(services).flat().slice(0, 8);
    popularServicesDiv.innerHTML = allServices.map(s => createServiceCard(s)).join('');
  } 
  else if (route.startsWith('kategori/')) {
    const category = route.split('/')[1];
    content = pages.kategori(category);
    appContent.innerHTML = content;
    
    // Kategori hizmetlerini göster
    const categoryServicesDiv = document.getElementById('category-services');
    const categoryServices = services[category] || [];
    categoryServicesDiv.innerHTML = categoryServices.map(s => createServiceCard(s)).join('');
  }
  else if (route.startsWith('detay/')) {
    const serviceId = parseInt(route.split('/')[1]);
    const service = Object.values(services).flat().find(s => s.id === serviceId);
    
    if (service) {
      content = `
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="${service.image}" alt="${service.name}" class="w-full h-96 object-cover rounded-xl">
            </div>
            <div class="p-8">
              <h1 class="text-4xl font-black text-slate-900 mb-2">${service.name}</h1>
              <p class="text-xl text-emerald-600 font-bold mb-4">${service.provider}</p>
              
              <div class="flex items-center mb-6">
                <span class="stars text-2xl mr-2">★★★★★</span>
                <span class="text-xl font-bold text-slate-900">${service.rating}</span>
                <span class="text-slate-600 ml-2">(${service.reviews} Yorum)</span>
              </div>

              <div class="bg-emerald-50 p-6 rounded-xl mb-6">
                <p class="text-sm text-slate-600 mb-2">Fiyat</p>
                <p class="text-4xl font-black text-emerald-600">${service.price}</p>
              </div>

              <p class="text-slate-700 text-lg mb-8 leading-relaxed">${service.description}</p>

              <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition mb-3">
                <i class="fas fa-check-circle mr-2"></i> Teklif Al
              </button>
              <button class="w-full border-2 border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-4 px-6 rounded-xl transition">
                <i class="fas fa-heart mr-2"></i> Favorilerime Ekle
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8">
            <h2 class="text-2xl font-bold mb-6">Hizmet Hakkında</h2>
            <ul class="space-y-4">
              <li class="flex items-center"><i class="fas fa-check text-emerald-600 mr-3 font-bold"></i> <span class="text-slate-700">Profesyonel İşçi</span></li>
              <li class="flex items-center"><i class="fas fa-check text-emerald-600 mr-3 font-bold"></i> <span class="text-slate-700">Kalite Garantili</span></li>
              <li class="flex items-center"><i class="fas fa-check text-emerald-600 mr-3 font-bold"></i> <span class="text-slate-700">Hızlı Hizmet</span></li>
              <li class="flex items-center"><i class="fas fa-check text-emerald-600 mr-3 font-bold"></i> <span class="text-slate-700">24/7 Destek</span></li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-8">
            <h2 class="text-2xl font-bold mb-6">Müşteri Yorumları</h2>
            <div class="space-y-4">
              <div class="border-b pb-4">
                <div class="flex items-center mb-2">
                  <span class="stars text-lg">★★★★★</span>
                  <span class="text-sm text-slate-600 ml-2">Çok memnun kaldım!</span>
                </div>
                <p class="text-slate-700 text-sm">Profesyonel ve hızlı hizmet. Kesinlikle tavsiye ederim.</p>
                <p class="text-xs text-slate-500 mt-2">- Ayşe K.</p>
              </div>
              <div class="border-b pb-4">
                <div class="flex items-center mb-2">
                  <span class="stars text-lg">★★★★★</span>
                  <span class="text-sm text-slate-600 ml-2">Harika</span>
                </div>
                <p class="text-slate-700 text-sm">Beklentimizin üzerinde bir hizmet aldık.</p>
                <p class="text-xs text-slate-500 mt-2">- Mehmet A.</p>
              </div>
            </div>
          </div>
        </div>
      `;
      appContent.innerHTML = content;
    }
  }
  else if (route === 'admin') {
    appContent.innerHTML = pages.admin;
  }
  else if (route === 'panel') {
    appContent.innerHTML = pages.panel;
  }
  else if (route === 'yardim') {
    appContent.innerHTML = pages.yardim;
  }
}

// Fonksiyonlar
function viewService(serviceId) {
  window.location.hash = `#detay/${serviceId}`;
}

function searchServices() {
  const input = document.getElementById('search-input').value.toLowerCase();
  if (input) {
    window.location.hash = `#kategori/${input}`;
  }
}

function openAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}

function handleUserAuth(event) {
  event.preventDefault();
  const username = document.getElementById('auth-username').value;
  const password = document.getElementById('auth-password').value;

  if (username === 'admin.admin' && password === 'admin123') {
    localStorage.setItem('user', JSON.stringify({ username, isAdmin: true }));
    document.getElementById('auth-btn-text').textContent = '✓ Admin';
    document.getElementById('user-auth-btn').classList.add('hidden');
    document.getElementById('user-panel-link').classList.remove('hidden');
    closeAuthModal();
    loadPage('admin');
    window.location.hash = '#admin';
  } else {
    localStorage.setItem('user', JSON.stringify({ username, isAdmin: false }));
    document.getElementById('auth-btn-text').textContent = username;
    document.getElementById('user-auth-btn').classList.add('hidden');
    document.getElementById('user-panel-link').classList.remove('hidden');
    closeAuthModal();
  }
}

function logout() {
  localStorage.removeItem('user');
  document.getElementById('auth-btn-text').textContent = 'Giriş Yap';
  document.getElementById('user-auth-btn').classList.remove('hidden');
  document.getElementById('user-panel-link').classList.add('hidden');
  window.location.hash = '#anasayfa';
  loadPage('anasayfa');
}

function sharePlatform() {
  document.getElementById('share-modal').classList.remove('hidden');
}

function copyShareLink() {
  const input = document.getElementById('share-link-input');
  input.select();
  document.execCommand('copy');
  
  const toast = document.getElementById('copy-toast');
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2000);
}

// Sayfa Yönlendirmesi
function handleRouting() {
  const route = window.location.hash.slice(1) || 'anasayfa';
  loadPage(route);

  // Kullanıcı durumunu kontrol et
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    document.getElementById('auth-btn-text').textContent = user.username;
    document.getElementById('user-auth-btn').classList.add('hidden');
    document.getElementById('user-panel-link').classList.remove('hidden');
  }
}

// Hash değiştiğinde yenile
window.addEventListener('hashchange', handleRouting);

// İlk Yükleme
document.addEventListener('DOMContentLoaded', handleRouting);
