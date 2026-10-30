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

Sayfalar: `/`, `/hakkimizda/`, `/fyy-nedir/`, `/sik-sorulan-sorular/`, `/iletisim/`. Kaynakta yalnızca bir `index.html` bulunur. Derleme bütün kurumsal ve hukuki sayfaların içeriklerini ve ayrı `404.html` çıktısını üretir. Geliştirme sunucusu TSX sayfalarını açar; üretim davranışını kontrol etmek için `npm run build` ardından `npm run preview` kullanın. Önizleme bilinmeyen adreslerde 404 durum koduyla SAD hata ekranını sunar; bilinen adresleri sondaki `/` içeren canonical adreslere yönlendirir.

Barındırma, üretilen dosyaları adreslerinde sunmalı ve bilinmeyen adreslerde `404.html` içeriğini **HTTP 404** ile döndürmelidir. Bütün adresleri ana sayfaya yönlendiren SPA fallback kullanılmamalıdır. Gerçek barındırma davranışı yayın aşamasında ayrıca doğrulanmalıdır.

## İletişim formu

Form `POST /api/contact` üzerinden `netlify/functions/contact.mjs` işlevine gider. Resend REST API kullanılır; ek SDK gerekmez. Alıcı sunucuda sabit `bilgi@sitkiarslan.com`, yanıt adresi formu dolduran kişinin e-postasıdır. Telefon ve harita bağlantıları `src/data/contactDetails.ts` üzerinden yönetilir.

Netlify → Project configuration → Environment variables altında **Functions** kapsamına (kapsam seçimi yoksa tüm kapsamlara), üretim ortamı için ekleyin:

- `RESEND_API_KEY`: Resend’in Email Sending yetkili API anahtarı. Domain kısıtlıysa gönderici domainiyle eşleşmeli.
- `CONTACT_FROM_EMAIL`: Resend’de doğrulanmış alan adındaki gönderici; örneğin opsiron.com doğrulandıysa `Sıtkı Arslan Danışmanlık <info@opsiron.com>`.

Bu değerler `VITE_` öneki taşımaz; tarayıcıya gönderilmez. Gerçek anahtarı Git’e, sohbet mesajına veya `netlify.toml` içine yazmayın. `.env.example` yalnızca boş kurulum şablonudur. Değişkenleri kaydettikten sonra yeni deploy gerekir. Resend’e giriş e-postası gönderici doğrulaması değildir; Resend Domains bölümünde gönderici domaini Verified olmalıdır. `onboarding@resend.dev` üretim için kullanılmaz (test alıcısı kısıtları vardır).

`netlify.toml` build, dist ve functions dizinini tanımlar. Alan adı yönlendirmesi veya SPA fallback eklemez. Her iki domainin www ve kök adresleri ile mevcut Netlify adresi kabul edilir. Yeni bir alan adı eklenirse sunucu origin listesi de güncellenmelidir. Sunucu istek boyutunu ve alanları doğrular, görünmez bot alanını kontrol eder. Platform kuralı IP/domain başına 120 saniyede 5 istek sınırlar; deploy loglarında rate-limit kuralının uygulandığı doğrulanmalı. Origin kontrolü ve bot alanı tek başına bot engelleme garantisi değildir. İstemci ve Resend idempotency anahtarı aynı gönderimin belirsiz ağ hatası sonrası yeniden denenmesinde tekrar e-posta üretimini önler. E-posta, SAD kimliğine uygun tablo tabanlı ve satır içi stiller kullanan HTML şablonu ile düz metin alternatifini birlikte taşır. Şablon `netlify/lib/contact-email.mjs` içinde yönetilir; ziyaretçinin bütün alanları HTML karakterlerinden arındırılarak güvenli biçimde gösterilir. Navbar logosunun kırpılmış 528×150 PNG türevi `netlify/lib/email-logo.mjs` içinde tutulur ve CID eki olarak HTML içinde 264×75 ölçüsünde gösterilir. Böylece görsel için canlı siteye veya localhost adresine istek gerekmez. Kaynak logo değişirse bu türev de yenilenmelidir. Harici yazı tipi veya izleme pikseli içermez. İşlev içerik veya API anahtarı loglamaz.

Yerel backend testleri: `node --test tests/contact.test.mjs`. Testler Resend’i taklit eder; gerçek e-posta göndermez. Vite `npm run dev` / `npm run preview` tek başına Netlify işlevlerini çalıştırmaz. Uçtan uca yerel test için Netlify CLI ile `netlify dev` (localhost:8888), gerçek ortam değişkenleri ve doğrulanmış gönderici gerekir. Üretimde her iki alan adından gönderim, Resend teslim kaydı, Gmail gelen kutusu/spam ve Yanıtla adresi ayrıca kontrol edilmelidir. API’nin başarılı cevabı posta kutusuna teslim garantisi değildir.

Form iletileri müşterinin bilgi@sitkiarslan.com adresine gider. Kullanıcının açık talimatı gereği bu alıcıya test e-postası gönderilmedi; yeni bir açık gönderim talimatı olmadan gönderilmemelidir. Bu uygulama e-posta kayıtlarını otomatik olarak bir yıl sonunda silmez.

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

Navbar `public/SAD LOGO NAVBAR.png`, footer ise `public/SAD LOGO FOOTER.png` görselini kullanır. Şeffaf kenar boşlukları `src/styles/brand-logo.css` ile görünümde kırpılır; kaynak görseller değiştirilmez. Kullanıcının sağladığı favicon görselinden oluşturulan `favicon.ico` (16/32/48 px), `favicon-32x32.png`, `favicon-192x192.png` ve `apple-touch-icon.png` (180 px) açık zeminde siyah logoyu gösterir. İkon bağlantıları ortak `index.html` şablonundadır; sürüm parametresi önceki favicon önbelleğini yeniler.

`public/sitki-arslan-restored.jpg`, kullanıcının sağladığı CV’deki fotoğraftan AI ile netleştirilmiştir. Orijinal fotoğraf kullanıcının kaynak CV’sindedir. Site fotoğrafa CSS ile siyah-beyaz görünüm uygular. Denge kompozisyonu CSS ile çizilir. Ana sayfanın tam ekran hero’su `public/hero-sad.webp` görselini kullanır. Bu görsel SAD’ın koyu nötr ve mavi tonlarıyla, finansal denge ve sürdürülebilirliği soyut mimari bir kompozisyonla anlatmak üzere AI ile üretilmiştir. Hero stilleri `src/styles/hero.css` içindedir; ana sayfa navbarı başlangıçta görselin üzerinde şeffaf, kaydırmada açık renklidir.

DM Sans, `public/fonts/dm-sans-variable.ttf` dosyasından yerel olarak yüklenir; Google Fonts’a harici istek gönderilmez. SIL Open Font License metni `public/fonts/OFL.txt` içindedir. Yedek yazı tipi Arial’dır.

## İçerik kaynakları

FYY metinleri genel bilgilendirme amaçlıdır. Kaynak bağlantıları `src/data/sourceLinks.ts` içinde tutulur:

- [Türkiye Bankalar Birliği / FYY dokümanları](https://www.tbb.org.tr/finansal-yeniden-yapilandirma)

## Hukuki bilgilendirmeler

`src/data/legalContent.ts`, `/kvkk-aydinlatma-metni/`, `/gizlilik-politikasi/`, `/cerez-politikasi/` ve `/kullanim-kosullari/` sayfalarının metinlerini içerir. `src/pages/LegalPage.tsx` ortak şablondur. Footer’ın ayrı hukuki gezinmesi ve iletişim formunun bilgilendirme bağlantıları bu sayfalara gider. Aydınlatma bağlantısı açık rıza kutusu olarak sunulmaz.

Dört hukuki sayfa 26 Ekim 2026 tarihinde mevcut uygulama için yeniden yazıldı; görünür taslak bildirimi kaldırıldı. Veri sorumlusu Sıtkı Arslan, başvuru e-postası `bilgi@sitkiarslan.com`, yazılı başvuru adresi Konutkent adresidir. Telefon görüşmeleri Enpama telefon yanıtlama ve sekreterlik hizmeti kapsamında kaydedilir ve kayıt öncesi anons yapıldığı kullanıcı tarafından doğrulanmıştır. Kayıt amacı, hukuki sebep, saklama süresi, sağlayıcının tam ticari unvanı ve kayıtların tutulduğu altyapı bilinmiyor; kullanıcı bunların henüz bilinmediğini bildirdi. Bu bilgiler tamamlanmadan ses kaydına ilişkin aydınlatmanın tamamlandığı kabul edilmez. Hizmete dönüşmeyen talepler için son iletişimden itibaren en geç bir yıllık silme süresi işletme adına benimsendi. Form backend’i 27 Ekim 2026 tarihinde Netlify Functions ve Resend için eklendi; alıcı bilgi@sitkiarslan.com adresidir; kullanıcı beyanına göre posta kutusu Google Workspace üzerindedir; erişim, yönlendirme ve saklama ayarları teyit edilmelidir. Metinler bu akışa göre güncellendi. Canlı gönderim için ortam değişkenleri, doğrulanmış gönderici ve deploy gerekir; yurt dışına aktarım düzeninin tamamlandığı iddia edilmez. Netlify barındırması ve yurt dışında teknik veri işlenmesi metinde açıklanır; KVKK m.9 aktarım düzeninin tamamlandığı iddia edilmez. Sayfalar `noindex` taşır ve sitemap dışındadır; bu arama görünürlüğü tercihidir. Sayfa metinleri tek başına işletmenin bütün KVKK yükümlülüklerini yerine getirmez. Uygulamaya ilişkin kalan işler `LEGAL-REVIEW.md` dosyasındadır.

Mevcut uygulama reklam/analitik çerezi veya izleyicisi kullanmaz. `src/components/CookieNotice.tsx` ilk ziyarette bilgilendirme gösterir. “Reddet” ve “Kabul et” bildirimi kapatır; `sad:cookie-notice:v2` adlı localStorage kaydına sürüm, hatırlama bilgisi ve kabul/ret seçimi yazılır. Kayıt otomatik süre sonu olmadan sonraki ziyaretlerde de geçerlidir; tarayıcının site verileri temizlenirse yeniden sorulur. Her köken (alan adı, protokol ve port) kendi kaydını tutar. Önceki geçerli sessionStorage kaydı localStorage’a taşınır; eski v1 kaydı temizlenir. localStorage engelliyse sessionStorage yedeği denenir; depolamanın tamamen engellenmesi bildirimin kapatılmasını engellemez. Bu kayıt izleme izni değildir ve sunucuya gönderilmez. İlk açılış klavye odağını değiştirmez. Tercih anahtarı ve kayıt biçimi `src/data/cookieNotice.ts` içinde tek yerden yönetilir; politika da aynı verileri kullanır. Yayın platformunun güvenlik/oturum çerezleri gerçek domain üzerinden ayrıca denetlenmelidir. Yeni bir izleme aracı eklenirse, gereken kategoriler için izin alınmadan yüklenmemesi ve izin geri alma işlemi uygulanmalıdır. Search Console’a domain doğrulaması eklemek siteye otomatik olarak analitik kodu eklemek anlamına gelmez.


## Güvenlik işletimi

`npm run test:security` e-posta ve webhook göndermeden taklit ağ testlerini çalıştırır. Build sırasında `scripts/write-security-headers.mjs`, statik HTML'deki inline betik/JSON-LD içeriklerinden SHA-256 özetleri çıkarıp `dist/_headers` üretir; CSP, nosniff, çerçeveleme, referrer ve izin başlıkları uygulanır. `scripts/check-security.mjs` başlıkları, özetleri ve derleme çıktısındaki anahtar biçimlerini kontrol eder. Vite üretim önizlemesi aynı başlıkları uygular; geliştirme/HMR sunucusu ayrı tutulur.

Form yanıtları rastgele sunucu request ID'si içerir; 5xx durumunda kullanıcıya Referans olarak gösterilir. Uygulama JSON logları kişisel form içeriği veya anahtar taşımaz. İsteğe bağlı `SECURITY_ALERT_WEBHOOK_URL` yalnızca Functions ortamında ayarlanır; varsayılan boş ve dış alarm kapalıdır. Yapılandırılırsa her 5xx hata için teknik bilgi içeren Slack uyumlu HTTPS webhook isteği denenir. Aktif alarm kanalı, log saklama veya MFA'nın tamamlandığı varsayılmaz.

Teknik müdahale planı: `docs/veri-ihlali.md`. Alarm kurulumu ve hesap sahibinin işleri: `docs/guvenlik-isletim.md`. Sağlayıcı envanteri ve manuel silme iş akışı: `docs/veri-envanteri-ve-silme.md`. Gerçek kanala veya müşteri posta kutusuna test, kullanıcıdan yeni açık gönderim talimatı olmadan yapılmaz.
