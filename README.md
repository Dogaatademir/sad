# SAD — Finansal Yeniden Yapılandırma

React, Vite ve TypeScript ile hazırlanmış kurumsal web sitesi.

## Çalıştırma

```sh
npm ci
npm run dev
```

## Derleme ve önizleme

```sh
npm run build
npm run preview
```

`npm run build`, çıktıdaki içerikleri, tekil başlıkları, canonical ve robots etiketlerini, JSON-LD / soru-cevap tutarlılığını ve yerel bağlantıları otomatik doğrular. Mevcut çıktıyı yeniden denetlemek için `npm run check:seo` kullanılabilir.

Derleme, TypeScript kontrolünden sonra tek kaynak `index.html` şablonunu ve TSX sayfalarını kullanarak her adres için hazır HTML üretir. `dist/` içindeki HTML dosyaları otomatik çıktıdır; elle düzenlenmez. Geliştirme ve derleme komutları kendiliğinden yayın yapmaz.

## Yapı

```text
src/
├── App.tsx                 # Sayfa seçimi ve ortak layout
├── main.tsx                # Tarayıcı girişi ve hydration
├── entry-server.tsx        # Derleme için sunucu render girişi
├── pages/                  # Kurumsal sayfalar, hukuki bilgi şablonu ve 404
├── layouts/                # Ortak navbar, mobil menü ve footer
├── components/             # Ok ikonu, iletişim çağrısı ve form
├── hooks/                  # Sayfa hareketleri ve metadata hook’ları
├── data/                   # İletişim, kaynak bağlantıları ve soru-cevaplar
├── seo/                    # Sayfa metadata ve JSON-LD üretimi
└── styles/                 # Sıralı CSS girişi ve stil dosyaları
```

`src/styles/index.css` bütün stillerin sıralı girişidir; import sırası korunmalıdır. `scripts/prerender.mjs`, TSX sayfalarını derleme sırasında HTML’e dönüştürür. `public/` kullanılan görselleri, favicon’u ve paylaşım görselini içerir. `.openai/hosting.json` mevcut Sites proje kimliğini ve statik yayın ayarını tutar.

Sayfalar: `/`, `/hakkimizda/`, `/fyy-nedir/`, `/iletisim/`. Kaynakta yalnızca bir `index.html` bulunur. Derleme bütün kurumsal ve hukuki sayfaların içeriklerini ve ayrı `404.html` çıktısını üretir. Geliştirme sunucusu TSX sayfalarını açar; üretim davranışını kontrol etmek için `npm run build` ardından `npm run preview` kullanın. Önizleme bilinmeyen adreslerde 404 durum koduyla SAD hata ekranını sunar; bilinen adresleri sondaki `/` içeren canonical adreslere yönlendirir.

Barındırma, üretilen dosyaları adreslerinde sunmalı ve bilinmeyen adreslerde `404.html` içeriğini **HTTP 404** ile döndürmelidir. Bütün adresleri ana sayfaya yönlendiren SPA fallback kullanılmamalıdır. Gerçek barındırma davranışı yayın aşamasında ayrıca doğrulanmalıdır.

## İletişim formu

Form yalnızca görseldir. Gönderim düğmesi devre dışıdır; sunucuya veya e-postaya veri göndermez. Telefon ve harita bağlantıları `src/data/contactDetails.ts` üzerinden yönetilir.

## SEO ve yapay zekâ aramalarında bulunabilirlik (GEO)

Sayfa başlıkları ve açıklamalar `src/seo/siteMetadata.ts` içinde yönetilir. Her sayfanın metni, canonical bağlantısı, Open Graph / Twitter etiketleri ve JSON-LD bilgileri ilk HTML yanıtında bulunur; JavaScript çalıştırmayan okuyucular da içeriğe ulaşır. React aynı verileri kullanır. 404 çıktısı `noindex` taşır, canonical ve JSON-LD içermez; sitemap’e dahil edilmez.

`vite.config.ts`, aynı sayfa listesinden `sitemap.xml` ve `robots.txt` üretir. Robots dosyası arama motorlarını engellemez; erişim kontrolü veya indeksleme garantisi değildir. Yapılandırılmış veriler yalnızca sayfalarda görünen kurum, kurucu, adres, telefon, FYY hizmeti ve soru yanıtlarını tarif eder. Sahte değerlendirme, lisans, başarı oranı veya uzman onayı eklenmez. FAQ işaretlemesi özel bir arama görünümü garantisi taşımaz.

Paylaşım görseli `public/social/sad-share.png` dosyasındadır (1200 × 630 px). Açık tanımlar, soru-cevap metinleri, kurucu bilgileri, iç bağlantılar ve TBB kaynakları insanların ve makinelerin içeriği anlamasını destekler. Google’ın AI özellikleri için ayrıca `llms.txt` veya özel bir AI şeması gerekmez.

### Yayına geçerken tamamlanacaklar

- Nihai alan adı belirlendiğinde `src/seo/siteMetadata.ts` içindeki `siteOrigin` değerini değiştirip yeniden derleyin. Canonical, sitemap, paylaşım adresleri ve JSON-LD birlikte güncellenir.
- Site herkese açık olmalı; oturum açma veya özel izleyici kısıtı arama botlarının erişimini engeller. Erişim ayarları bu yerel çalışmada değiştirilmez.
- Gerçek alan adında 200/301/404 yanıtlarını, robots, sitemap, paylaşım görseli ve ham HTML içeriklerini doğrulayın.
- Alan adı sahibi Google Search Console ve Bing Webmaster Tools mülkiyet doğrulamasını tamamlayıp sitemap’i göndermeli. Doğrulama kodu veya DNS kaydı olmadan bu işlemler yapılmaz.
- Ankara yerel aramaları için gerçek Google İşletme Profili ile sitedeki kurum adı, adres ve telefon aynı tutulmalı.

Teknik uygunluk; Google’da sıralama, indekslenme veya yapay zekâ yanıtlarında kaynak gösterilme garantisi değildir. Yayından sonra tarama ve sorgu performansı Search Console üzerinden izlenmelidir.

## Görseller ve yazı tipi

Navbar `public/sad-2.png`, footer ise `public/sad.png` görselini kullanır. Şeffaf kenar boşlukları `src/styles/brand-logo.css` ile görünümde kırpılır; kaynak görseller değiştirilmez. `favicon.ico` (16/32/48 px), `favicon-32x32.png`, `favicon-192x192.png` ve `apple-touch-icon.png` (180 px), `sad-2.png` logosunu `#1c1d1b` koyu zeminde gösterir. İkon bağlantıları ortak `index.html` şablonundadır; sürüm parametresi önceki favicon önbelleğini yeniler.

`public/sitki-arslan-restored.jpg`, kullanıcının sağladığı CV’deki fotoğraftan AI ile netleştirilmiştir. Orijinal fotoğraf kullanıcının kaynak CV’sindedir. Site fotoğrafa CSS ile siyah-beyaz görünüm uygular. Denge kompozisyonu CSS ile çizilir. Ana sayfanın tam ekran hero’su `public/hero-architecture.jpg` görselini kullanır. Hero stilleri `src/styles/hero.css` içindedir; ana sayfa navbarı başlangıçta görselin üzerinde şeffaf, kaydırmada açık renklidir.

DM Sans, `public/fonts/dm-sans-variable.ttf` dosyasından yerel olarak yüklenir; Google Fonts’a harici istek gönderilmez. SIL Open Font License metni `public/fonts/OFL.txt` içindedir. Yedek yazı tipi Arial’dır.

## İçerik kaynakları

FYY metinleri genel bilgilendirme amaçlıdır. Kaynak bağlantıları `src/data/sourceLinks.ts` içinde tutulur:

- [Türkiye Bankalar Birliği / FYY dokümanları](https://www.tbb.org.tr/finansal-yeniden-yapilandirma)

## Hukuki bilgilendirmeler

`src/data/legalContent.ts`, `/kvkk-aydinlatma-metni/`, `/gizlilik-politikasi/`, `/cerez-politikasi/` ve `/kullanim-kosullari/` sayfalarının metinlerini içerir. `src/pages/LegalPage.tsx` ortak şablondur. Footer’ın ayrı hukuki gezinmesi ve iletişim formunun bilgilendirme bağlantıları bu sayfalara gider. Aydınlatma bağlantısı açık rıza kutusu olarak sunulmaz.

Metinler **yayın öncesi inceleme taslağıdır**. Veri sorumlusu Sıtkı Arslan’ın şahıs işletmesi olduğu kullanıcı tarafından doğrulanmıştır. Form için Resend düşünülmektedir; kesin sağlayıcılar, alıcı e-posta, veri kategorileri, süreler ve yurt dışına aktarım mekanizmaları henüz netleşmemiştir. Yazılı KVKK başvuruları mevcut posta adresi üzerinden tarif edilir. Sayfalardaki taslak bildirimi görünürdür; `noindex` taşırlar ve sitemap’e alınmazlar. Tamamlanmadan nihai hukuki belge olarak yayımlanmamalıdırlar. Ayrıntılı kalan işler `LEGAL-REVIEW.md` içindedir. Hukuki sayfa sayısı veya metin eklemek tek başına KVKK uyumu sağlamaz.

Mevcut uygulama reklam/analitik çerezi veya izleyicisi kullanmaz. `src/components/CookieNotice.tsx` ilk ziyarette bilgilendirme gösterir. “Reddet” yalnızca o sayfa için kapatır ve varsa kaydı siler; “Kabul et” `sad:cookie-notice:v2` adlı sessionStorage kaydına sürüm ve hatırlama seçimini yazar; tercih yalnızca sekme oturumunda geçerlidir. Önceki kalıcı `sad:cookie-notice:v1` kaydı ilk açılışta temizlenir. Bu kayıt izleme izni değildir ve sunucuya gönderilmez. Sabit gün sayısıyla saklama yapılmaz; tarayıcının oturum geri yükleme davranışı sessionStorage ömrünü etkileyebilir. Depolama engelliyse bildirim yine kapatılabilir. İlk açılış klavye odağını değiştirmez. Tercih anahtarı ve kayıt biçimi `src/data/cookieNotice.ts` içinde tek yerden yönetilir; politika da aynı verileri kullanır. Yayın platformunun güvenlik/oturum çerezleri gerçek domain üzerinden ayrıca denetlenmelidir. Yeni bir izleme aracı eklenirse, gereken kategoriler için izin alınmadan yüklenmemesi ve izin geri alma işlemi uygulanmalıdır. Search Console’a domain doğrulaması eklemek siteye otomatik olarak analitik kodu eklemek anlamına gelmez.
