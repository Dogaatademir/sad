# SAD — Yayın öncesi hukuki içerik incelemesi

Durum: **Taslak / doğrulanacak işletme ve sağlayıcı bilgileri var**. Tarih: 21 Ekim 2026.

Bu belge işletme sahibinin ve hukuki danışmanının son metinleri tamamlamasına yardımcı olur. Taslak sayfaları doğrudan yayına uygunluk onayı olarak değerlendirmeyin. Sitenin önceki yayınlanmama talimatı devam eder.

## Teknik olarak doğrulanan mevcut durum

- İletişim formu gönderime kapalı; uygulama bir sunucuya form verisi göndermez.
- Üyelik, ödeme, dosya yükleme, reklam pikseli ve analitik entegrasyonu yok.
- Reklam/analitik çerezi yok. İlk ziyaret bildiriminin “Kabul et” ve “Reddet” seçenekleri, kullanıcı talebiyle `sad:cookie-notice:v2` kaydını sessionStorage’a yazar (sürüm, hatırlama seçimi). Tercih sekme oturumu boyunca geçerlidir; kalıcı gün bazlı saklama yoktur. Önceki kalıcı tercih kaydı ilk açılışta silinir. Tarayıcının oturum geri yükleme davranışı sessionStorage yaşam süresini etkileyebilir. Kayıt sunucuya gönderilmez. Her iki seçenek de aynı sekme oturumu boyunca bildirimin kapatıldığını hatırlar. Footer’da bildirim düğmesi bulunmaz. Bu işlem izleme için açık rıza olarak kaydedilmez.
- Yazı tipleri ve görseller yerel; gömülü harita/video yok. Harita ve kaynak siteler yalnızca dış bağlantı.
- KVKK, gizlilik, çerez ve kullanım koşulları sayfaları hazır HTML olarak üretilir. Taslak durumları görünür; noindex ve sitemap dışı.
- Footer ve form üzerinden bilgilendirmelere ulaşılabilir. Hizmet almak için pazarlama rızası istenmez.

## İşletme sahibinden alınacak ve doğrulanacak bilgiler

1. Kullanıcı, Sıtkı Arslan adına şahıs işletmesi olduğunu doğruladı. Veri sorumlusu Sıtkı Arslan, işletme markası SAD — Sıtkı Arslan Danışmanlık olarak yazıldı.
2. Yazılı başvuruların gerçekten alınabildiği adres, varsa kurumsal e-posta/KEP ve başvuruları yanıtlayacak sorumlu.
3. Telefon görüşmeleri kaydediliyor mu? Talep bilgileri nerede tutuluyor? Kaydedilmediği varsayılmamalı.
4. Formun gerçek alıcıları, e-posta hizmeti ve çalışanların/tedarikçilerin erişimi.
5. Teknik erişim kayıtları, iletişim talepleri ve hak başvuruları için gerçek saklama ve silme süreleri ile dayanakları.
6. Her amaç/veri kategorisi için geçerli hukuki sebep ve gerekiyorsa meşru menfaat değerlendirmesi.

## Squarespace / GitHub / Netlify ve olası Resend planı

- Henüz kesin yayına alınmış altyapı olarak açıklanmaz. Nihai domain ve sağlayıcılar seçildikten sonra metinler güncellenmeli.
- GitHub yalnızca kaynak kod deposu olmalı; ziyaretçi mesajı, CV aslı, kimlik bilgileri veya sırlar depoya konulmamalı.
- Netlify hosting erişim/güvenlik kayıtları ve seçilecek form/e-posta sağlayıcısı için veri kategorisi, işleyen/alıcı, alt işleyen, erişim ülkeleri ve saklama bilgileri resmi sağlayıcı belgeleri ve ayarlar üzerinden tespit edilmeli. Kullanıcı form için muhtemelen Resend kullanılacağını belirtti; Resend aktif/nihai sağlayıcı olarak açıklanmıyor. Resend kullanılırsa API anahtarı yalnızca sunucu tarafında tutulmalı, alıcı adresi ve kullanıcı girdileri sunucuda doğrulanmalı; mesajların Resend kayıtları, alıcı posta kutusu ve varsa Netlify fonksiyon logları birlikte değerlendirilmelidir.
- Yurt dışına aktarım varsa KVKK m.9 mekanizması, gerekli sözleşmeler ve bildirim yükümlülükleri hukuki danışmanla doğrulanmalı. Genel bir checkbox veya sağlayıcının GDPR sözleşmesi tek başına Türk hukuku açısından yeterli kabul edilmemeli.
- Domain kaydının müşteri bilgilerinin işlenmesi ile web ziyaretçisi verilerinin işlenmesi birbirine karıştırılmamalı.
- Ziyaretçi verisini yurt dışında işlemek uygun biçimde düzenlenemiyorsa, form/veri işleme için uygun bir alternatif seçilmeli.

## Form aktif edilmeden önce

- Güncel aydınlatma form alanlarından önce veya veri elde edilirken erişilebilir olmalı; amaç, veri, alıcı ve hukuki sebepler gerçek süreçle eşleşmeli.
- Talep yanıtlamak için zorunlu olmayan reklam/pazarlama rızası hizmetin ön şartı olmamalı. Ayrı bir işleme için rıza gerekiyorsa aydınlatmadan ayrılmalı; önceden işaretlenmemeli.
- Başvuru verileri için gereksiz kimlik belgesi veya hassas mali belge istenmemeli.
- Spam koruması, alıcı yetkileri, gönderim testi ve veriyi silme süreci doğrulanmalı. CAPTCHA eklenirse veri aktarımı/çerez envanteri de yeniden değerlendirilir.

## Gerçek domain üzerinden son kontrol

- İlk yüklemede ve iç gezinmede çerezler, tarayıcı depoları, ağ istekleri ve varsa barındırma oturumu doğrulanmalı.
- İsteğe bağlı izleme eklenmişse izin öncesinde yüklenmediği, eşit erişilebilir ret ve kabul seçenekleri ve geri alma mekanizması test edilmeli.
- Sağlayıcı çerezleri varsa gerçek ad, amaç, sağlayıcı ve süre eklenmeli; tahmini cookie isimleri yazılmamalı.
- Sağlayıcı işleyişi ve saklama/aktarım düzeni netleşince metinlerdeki taslak açıklamaları güncellenmeli. Yalnızca bildirimi kaldırmak yeterli değildir.
- Veri sorumlusunun gerçek ticari faaliyetlerine göre diğer kurumsal yükümlülükler (örneğin VERBİS kapsamı) ayrıca değerlendirilir; web sayfası eklemek bunları yerine getirmez.

## Esas alınan resmi kaynaklar

- https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-
- https://www.kvkk.gov.tr/Icerik/4132/aydinlatma-yukumlulugunun-yerine-getirilmesinde-uyulacak-usul-ve-esaslar-hakkinda-teblig
- https://www.kvkk.gov.tr/Icerik/2036/Ilgili-Kisinin-Haklari
- https://www.kvkk.gov.tr/Icerik/2046/Ilgili-Kisiler-Tarafindan-Yapilan-Basvurularin-Cevaplanmasi-Yukumlulugu
- https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber
- https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim
