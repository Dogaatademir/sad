# SAD — Finansal Yeniden Yapılandırma

React + Vite + TypeScript ile hazırlanmış siyah-beyaz kurumsal web sitesi.

## Çalıştırma

```sh
npm install
npm run dev
```

## Üretim

```sh
npm run build
npm run preview
```

FYY tanıtımı, dört aşamalı yaklaşım, açılır sık sorulan sorular, mobil menü ve ayrı `/iletisim/` sayfasında telefon, ofis adresi, harita bağlantısı ve ilk görüşme başlıkları içerir. Menüdeki İletişim ve ana sayfadaki Konuşalım bağlantıları bu sayfaya yönlenir. Vite çok sayfalı derlemesi sayesinde `dist/iletisim/index.html` doğrudan açılabilir. İletişim sayfasında yalnızca görsel amaçlı bir iletişim formu bulunur; gönderim düğmesi devre dışıdır, sunucuya veya e-postaya veri gönderilmez. Gerçek iletişim telefon ve harita bağlantılarıyla sağlanır. Footer’da sağlanan Ankara adresi, tıklanabilir telefon numarası (0312 400 05 62) ve adres aramasına giden harita bağlantısı bulunur. E-posta adresi henüz eklenmedi. Finansal kuruluş onayı, başarı oranı veya müşteri referansı iddiası kullanılmadı.

Bilgi kaynakları:
- https://www.cfofinans.com/finansal-yeniden-yapilandirma-fyy/
- https://www.tbb.org.tr/finansal-yeniden-yapilandirma

Metinler özgün olarak özetlendi. Güncel eşik tutarları, yasal süreler ve oylama oranları siteye eklenmedi. Yayın öncesi şirketin hizmet kapsamı ve mevzuat metinleri şirket tarafından teyit edilmelidir. Tipografi Google Fonts üzerinden yüklenir; çevrimdışı Arial kullanılır. Soyut görsel CSS ile oluşturulur.

Navigasyon: Anasayfa (`/`), Hakkımızda (`/hakkimizda/`), FYY Nedir (`/fyy-nedir/`), İletişim (`/iletisim/`). Hakkımızda sayfası, kurucunun Ekim 2026 tarihli CV’sine göre hazırlanmış kuruluş anlatısı, kurucu biyografisi, mesleki zaman çizelgesi ve çalışma yaklaşımı içerir. Fotoğraf CV’den alınmıştır. CV’deki özel adres, kişisel telefon ve referans iletişim bilgileri eklenmedi. FYY Nedir sayfası tanım, kapsam, uygunluk, dört aşamalı süreç, ilk görüşme hazırlığı ve açılır soru-cevap bölümlerini içerir. Kapanış ve kaynak alanı ana sayfadaki Konuşalım bölümüyle aynı koyu arka planı kullanır.

## Mobil doğrulama

Dört sayfa 320, 375, 430, 600, 601, 768 ve 1280 piksel tarayıcı genişliklerinde kontrol edildi; yatay taşma saptanmadı. Mobil menüde 48 piksel link alanları, Escape ve dışarı tıklamayla kapanma, ekran genişleyince kapanma ve sayfa geçişi doğrulandı. Mobil form yazıları 16 piksel; not indirme akışı kontrol edildi. Dar ekranlarda footer tek sütuna geçer. Üretim derlemesi ve temiz tarayıcı konsolu doğrulandı. Testler tarayıcı boyutlandırmasıyla yapıldı.

## Bileşen yapısı

`src/layout.tsx`, ortak navbar, mobil menü davranışı, içeriğe geç bağlantısı ve footer’ı içerir. Üst ve alt menü bağlantıları aynı listeden üretilir. `src/App.tsx` sayfayı seçip Layout’a children olarak verir. Ana sayfa içeriği `src/HomePage.tsx` içindedir; Hakkımızda ve İletişim kendi bileşenlerindedir.

Telefon ve adres `src/contactDetails.ts` üzerinden hem ortak layout hem iletişim sayfasında yönetilir. İletişim sayfasındaki Ana sayfa dönüş bağlantısı ve ek kapanış sloganları kaldırılmıştır. Yeni sayfa 320–1280 piksel arasında altı genişlikte taşma açısından kontrol edilmiştir.
