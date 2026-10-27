# SAD hukuki metinler ve uygulama kaydı

Güncelleme: 27 Ekim 2026. Bu dosya geliştirme notudur; web sitesinde gösterilmez.

## Tamamlanan içerik

- KVKK Aydınlatma Metni, Gizlilik Politikası, Çerez Politikası ve Kullanım Koşulları mevcut site için yeniden yazıldı. Görünür taslak etiketi kaldırıldı; tarih “Son güncelleme” olarak gösterilir.
- İşletme sahibi kullanıcı tarafından Sıtkı Arslan adına şahıs işletmesi olarak doğrulandı. Başvuru e-postası bilgi@sitkiarslan.com; Konutkent adresi yazılı başvuru için geçerli.
- Kullanıcı önceki bilgiyi düzeltti: telefon görüşmeleri ses kaydına alınıyor. Bu gerçek web metinlerine işlendi; kayıt amacı, hukuki sebebi, sağlayıcının tam unvanı/erişim ülkeleri ve saklama süresi henüz doğrulanmadı. Kullanıcı Enpama telefon yanıtlama ve sekreterlik hizmetinin kullanıldığını ve kayıt öncesinde anons yapıldığını doğruladı. Ses kayıtlarına ilişkin açıklama tamamlanmış kabul edilemez. Yazılı talepler için benimsenen bir yıl, ses kayıtlarına otomatik uygulanmaz.
- Kullanıcı, hizmet ilişkisine dönüşmeyen taleplerin son iletişimden itibaren en geç bir yılda silinmesi uygulamasını benimsedi. İşletme bu süreyi gerçek kayıtlarında ve yedeklerinde uygulamalıdır; site bu silmeyi otomatik yapan bir müşteri sistemi içermez.
- Form backend’i Netlify Functions ve Resend ile eklendi. Alıcı kullanıcı talebiyle bilgi@sitkiarslan.com olarak değiştirildi; sağlayıcı teyit edilmedi. Kullanıcı bu müşteri adresine hiçbir e-posta gönderilmemesini açıkça istedi. Bu adrese test yapılmadı; yeni açık gönderim talimatı olmadan test gönderilmemeli. Web metinleri gönderim akışını, sağlayıcıları ve yetkili alıcı kategorisini açıklıyor. Canlı aktivasyon için API anahtarı ve doğrulanmış gönderici ortam değişkenleri ile deploy gerekiyor; Önceki geliştirici adresiyle yerel gönderimler doğrulandı; müşteri adresine gönderim yapılmadı.
- Uygulamada analitik, reklam pikseli, üyelik, ödeme veya dosya yükleme yok. Yazı tipleri ve görseller yerel; harita ve kaynaklar dış bağlantı.
- Her iki bildirim düğmesi sad:cookie-notice:v2 anahtarını sessionStorage’a yazar. Kayıt kullanıcı kimliği veya izleme izni içermez. Sekme oturumu; eski v1 localStorage kaydı kaldırılır.
- Hukuki sayfaların noindex ve sitemap dışı olması arama görünürlüğü tercihi olarak korundu; bunlar taslak statüsü değildir.

## Yayın ve sağlayıcı düzeninde kalan işler

1. **Netlify / KVKK m.9:** Kullanıcı mevcut Netlify hizmetini varsayılan koşullarla kullandığını, ayrıca Türk hukuku kapsamında bir aktarım düzenlemesi yapmadığını bildirdi. Netlify’nin 9 Haziran 2026 tarihli DPA’sı standart sözleşmesinin parçası olabilir; bu durum tek başına KVKK m.9 için uygun güvencenin tamamlandığı anlamına gelmez. DPA, geçerli hizmet hesabı/sözleşme tarafı, alt işleyenler ve aktarım mekanizması işletme tarafından değerlendirilmelidir. Genel çerez kabulü bu işlemi karşılamaz. Site metinleri bir aktarım güvencesinin kurulmuş olduğunu iddia etmez.
2. **Teknik kayıtlar:** Netlify planı ve güvenlik süreçlerinin gerçek saklama düzeni doğrulanmalı. Observability’de görünen tarih aralığı bütün sağlayıcı kayıtlarının silinme süresiyle eş tutulmamalı. Teknik kayıtlara iletişim talepleri için benimsenen bir yıllık süre otomatik uygulanmaz.
3. **Form:** Resend artık seçilen gönderim sağlayıcısı; alıcı müşterinin bilgi@sitkiarslan.com adresi. Gönderim içeriği Netlify sunucu işlevinden Resend’e ve alıcı posta hizmetine gider. Posta kutusu sağlayıcısı ayrıca teyit edilmeli. İşlev kişisel içerik loglamaz; sağlayıcılar kendi kayıtlarını tutar. Gerçek posta kutusu erişim yetkileri, sağlayıcı hesapları, imha süreleri ve KVKK m.9 aktarım mekanizması işletme tarafından tamamlanmalı. Resend güvenlik sayfası verilerin ABD’de saklandığını ve Türkiye KVKK standart sözleşmesi imzalamadığını söylüyor; AB gönderim bölgesi depolamayı AB’ye taşımıyor. Standart EU SCC tek başına Türk hukuku kapsamında uygun güvence onayı değildir. Bilgilendirme metni bu eksikleri ortadan kaldırmaz. Müşteri adresine gönderim kullanıcı tarafından yasaklandı; gerçek teslim ve Yanıtla testi yalnızca yeni açık gönderim talimatından sonra yapılabilir.
4. **Başvuru e-postası:** bilgi@sitkiarslan.com posta kutusunun açılması, alım/gönderim testleri ve e-posta sağlayıcısının veri işleme düzeni teslim öncesinde doğrulanmalı. İşletme kullanıcı hakları başvurularını ve silme taleplerini fiilen karşılayabilmeli.
5. **Operasyon:** İletişim kayıtlarının erişim yetkileri, imhası, hizmet dosyaları için ayrı aydınlatma ve işletmeye uygulanabilecek diğer KVKK yükümlülükleri fiilen yürütülmeli. Metin yazılması bunların yerine geçmez.

Kaynaklar:
- https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-
- https://www.kvkk.gov.tr/Icerik/2036/Ilgili-Kisinin-Haklari
- https://kvkk.gov.tr/SharedFolderServer/CMSFiles/0517c528-a43d-49f5-b1eb-33dc666cb938.pdf
- https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim
- https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber
- https://www.netlify.com/pdf/netlify-dpa.pdf
- https://docs.netlify.com/manage/monitoring/observability/overview/

Bu dosyada hukuki uygunluk onayı verildiği veya sözleşmelerin imzalandığı iddia edilmez. Değişiklikler kullanıcı ayrıca istemedikçe pushlanmaz/yayımlanmaz.

## Ses kaydı için beklenen bilgiler

Kullanıcı kayıt amacını, saklama süresini ve sözleşmedeki tam unvanı bilmediğini bildirdi. Bilinen sağlayıcı adı Enpama; kayıt öncesinde anons yapılır. Kullanıcı https://www.enpama.com adresindeki sekreter hizmetini kullandığını doğruladı. Resmî hizmet sayfası çağrı yanıtlama, talep notu alma, yönlendirme ve SAD’a bilgi iletmeyi açıklıyor. Buradaki “kayıt” ifadesi tek başına ses kaydının kapsamını, amacını veya saklama süresini doğrulamaz. Ses kaydı alındığı bilgisi kullanıcının beyanına dayanır. Anonsun tam içeriği ve varsa rıza yöntemi doğrulanmadı. Kayıt amacı, kayıt alınmasının zorunluluğu ve geçerli hukuki sebep; kayıtların tutulduğu altyapı/ülke, erişen kişiler ve aktarım; kesin saklama/silme süresi işletme ve sağlayıcıdan teyit edilmeli. Eksik bilgiler uydurulmayacak. Ses kaydına ilişkin aydınlatmanın tamamlandığı veya mevcut anonsun tek başına yeterli olduğu iddia edilmeyecek. Bu eksik açık kaldığı sürece KVKK/gizlilik sayfalarının hukuki tamamlanma onayı verilemez; kullanıcı ayrıca istemedikçe push/yayın yapılmaz.

Resend referansları (backend entegrasyonu eklendi; canlı gönderim kurulumu bekliyor):
- https://resend.com/security
- https://resend.com/legal/dpa

Enpama hizmet kaynağı: https://www.enpama.com/sekreter-hizmeti (26 Ekim 2026 tarihinde incelendi). Tam ticari unvan ve SAD’a uygulanan sözleşme/paket koşulları açık sayfalardan doğrulanamadı.
