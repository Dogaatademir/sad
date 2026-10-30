# SAD — veri akışı, sağlayıcı envanteri ve silme iş akışı

31 Ekim 2026. Teknik taslak; sağlayıcı hesabındaki gerçek değerleri hesap sahibi tamamlayacak. Bu dosyaya gerçek kişi verisi, hesap parolası veya anahtar eklemeyin.

## Envanter

| Akış | Veri | Sistem / alıcı | Saklama ve erişim için tamamlanacak bilgi |
| --- | --- | --- | --- |
| Web sayfası ve yerel font/görseller | IP ve teknik erişim bilgileri platformda oluşabilir | Netlify CDN | Plan bazında log türü/süresi, erişim rolleri, işleme bölgeleri ve alt sağlayıcılar |
| Form gönderimi | Ad, e-posta, isteğe bağlı şirket/telefon, mesaj | Aynı kökende /api/contact → Netlify Function → Resend → Google Workspace / bilgi@sitkiarslan.com | Resend hesabı/paket saklama ayarı; Google Workspace depolama bölgeleri, yetkililer ve silme yöntemi |
| Uygulama tanılama kaydı | Rastgele request ID, zaman, süre, durum ve hata kodu | Netlify Function logs | Hesap sahibinin doğrulayacağı saklama/erişim düzeni |
| İsteğe bağlı hata uyarısı | Teknik hata kodu, request ID ve zaman; form içeriği yok | Henüz seçilmemiş özel webhook kanalı | Varsayılan kapalı. Açılmadan önce sağlayıcı, yetkililer, bölge ve silme süresi envantere eklenmeli |
| Çerez bildirimi tercihi | Sürüm, kabul/ret ve kapatma bilgisi | Tarayıcı localStorage; engelliyse sessionStorage yedeği | Otomatik sona erme yok; kullanıcı site verilerini silebilir. Sunucuya gönderilmez |
| Telefon / ses kaydı | Arama ve talep bilgileri; kullanıcı beyanına göre ses | Enpama ve SAD | Kayıt amacı, tam sağlayıcı unvanı, sistem/ülke, yetkililer, süre, yedek ve silme yöntemi teyit edilmeli |

Harita/TBB/Opsiron bağlantıları kullanıcı tıklayana kadar gömülü içerik yüklemez. Aynı kökenden font sunmak, Netlify üzerinden sunulan sayfanın ağ/erişim verilerini ortadan kaldırmaz. 31 Ekim 2026 kullanıcı beyanı: alıcı posta kutusunda Google Workspace, form gönderiminde Resend kullanılıyor. Hesap rolleri, yönlendirmeler, saklama ve yedek ayarları ayrıca doğrulanacak.

## Hizmete dönüşmeyen yazılı talepler

İşletmenin benimsediği üst sınır: son iletişimden itibaren bir yıl. Bu kod, posta sağlayıcısına erişmediği için otomatik e-posta silmez.

1. SAD, kayıt sorumlusu ve yedeğini belirler. Müşteri ilişkisi kurulan dosyalar ve SAD'ın ayrıca saklanmasına karar verdiği kayıtlar ayrı iş akışına alınır.
2. Sorumlu, her ay en az bir kez hizmete dönüşmeyen kayıtları inceler. Bir yıllık sınırı aşmamak için **11 ayı dolmuş** kayıtları inceleme/silme kuyruğuna alır; sonraki kontrolü bekleyerek bir yıllık sınırı aşırmaz.
3. Son iletişim tarihi tüm yazışma dizisine göre belirlenir. Yeni iletişim varsa tarih güncellenir; yalnızca ilk mesajın tarihine bakılmaz.
4. Uygun kayıt, ilgili posta kutuları ve bilinen kopyalardan temizlenir. Çöp kutusu, arşiv, dışa aktarımlar ve sağlayıcı/yedek kayıtlarının davranışı doğrulanır. Geri döndürülemez silme, sorumlu kişinin kontrol/onayıyla yürütülür.
5. Resend kayıtlarının gerçek saklama süresi ve silme imkânı hesaptan/sağlayıcıdan teyit edilir; otomatik kaybolduğu varsayılmaz. Netlify teknik loglarına aynı bir yıl otomatik uygulanmaz.
6. Ses kayıtları bu bir yıllık yazılı talep iş akışına dahil edilmez; Enpama için ayrı süre ve yöntem belirlenir.
7. Her işlem erişimi sınırlı işletme tablosuna kaydedilir. Takip alanları: anonim dosya ID, son iletişim, son silme hedefi, kayıt sistemi, işlem tarihi, uygulayan/kontrol eden kişi, sağlayıcı teyidi ve varsa açıklama. Bu tablonun gerçek verilerini Git'te tutmayın.

## Müşteriden / hesap sahibinden istenecekler

- Google Workspace içindeki bilgi@sitkiarslan.com posta kutusuna kimler erişiyor? Dış yönlendirme veya ortak posta kutusu var mı?
- Netlify Free planı panelden doğrulandı; trafik görünümü son 24 saatle sınırlı. Resend planı/saklama süresi ve iki sağlayıcının altyapı kayıtlarının silinme düzeni ayrıca doğrulanacak.
- Enpama ses kayıtları kaç gün/ay tutuluyor; nerede ve kimlerin erişiminde? Silme talebi nasıl uygulanıyor?
- Yedeklerin ömrü ve silinen kayıtların yedeklerden temizlenme düzeni nedir?
- Aylık inceleme/silme sorumlusu ve yedeği kim? Başlangıç kontrol tarihi ne?

Bu bilgiler tamamlanınca teknik envanter ve ilgili bilgilendirme metinleri gerçek ayarlara göre güncellenir. Gerçek kişi kayıtları doğrulanmadan otomatik veya toplu silme komutu çalıştırılmaz.
