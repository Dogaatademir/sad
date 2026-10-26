# SAD hukuki metinler ve uygulama kaydı

Güncelleme: 26 Ekim 2026. Bu dosya geliştirme notudur; web sitesinde gösterilmez.

## Tamamlanan içerik

- KVKK Aydınlatma Metni, Gizlilik Politikası, Çerez Politikası ve Kullanım Koşulları mevcut site için yeniden yazıldı. Görünür taslak etiketi kaldırıldı; tarih “Son güncelleme” olarak gösterilir.
- İşletme sahibi kullanıcı tarafından Sıtkı Arslan adına şahıs işletmesi olarak doğrulandı. Başvuru e-postası bilgi@sitkiarslan.com; Konutkent adresi yazılı başvuru için geçerli.
- Kullanıcı önceki bilgiyi düzeltti: telefon görüşmeleri ses kaydına alınıyor. Bu gerçek web metinlerine işlendi; kayıt amacı, hukuki sebebi, sağlayıcının tam unvanı/erişim ülkeleri ve saklama süresi henüz doğrulanmadı. Kullanıcı Enpama telefon yanıtlama ve sekreterlik hizmetinin kullanıldığını ve kayıt öncesinde anons yapıldığını doğruladı. Ses kayıtlarına ilişkin açıklama tamamlanmış kabul edilemez. Yazılı talepler için benimsenen bir yıl, ses kayıtlarına otomatik uygulanmaz.
- Kullanıcı, hizmet ilişkisine dönüşmeyen taleplerin son iletişimden itibaren en geç bir yılda silinmesi uygulamasını benimsedi. İşletme bu süreyi gerçek kayıtlarında ve yedeklerinde uygulamalıdır; site bu silmeyi otomatik yapan bir müşteri sistemi içermez.
- Form kapalıdır. Metinler form alanlarının sunucuya gönderilmediğini açıkça söyler. Henüz seçilmeyen bir form sağlayıcısı aktif alıcı olarak yazılmadı.
- Uygulamada analitik, reklam pikseli, üyelik, ödeme veya dosya yükleme yok. Yazı tipleri ve görseller yerel; harita ve kaynaklar dış bağlantı.
- Her iki bildirim düğmesi sad:cookie-notice:v2 anahtarını sessionStorage’a yazar. Kayıt kullanıcı kimliği veya izleme izni içermez. Sekme oturumu; eski v1 localStorage kaydı kaldırılır.
- Hukuki sayfaların noindex ve sitemap dışı olması arama görünürlüğü tercihi olarak korundu; bunlar taslak statüsü değildir.

## Yayın ve sağlayıcı düzeninde kalan işler

1. **Netlify / KVKK m.9:** Kullanıcı mevcut Netlify hizmetini varsayılan koşullarla kullandığını, ayrıca Türk hukuku kapsamında bir aktarım düzenlemesi yapmadığını bildirdi. Netlify’nin 9 Haziran 2026 tarihli DPA’sı standart sözleşmesinin parçası olabilir; bu durum tek başına KVKK m.9 için uygun güvencenin tamamlandığı anlamına gelmez. DPA, geçerli hizmet hesabı/sözleşme tarafı, alt işleyenler ve aktarım mekanizması işletme tarafından değerlendirilmelidir. Genel çerez kabulü bu işlemi karşılamaz. Site metinleri bir aktarım güvencesinin kurulmuş olduğunu iddia etmez.
2. **Teknik kayıtlar:** Netlify planı ve güvenlik süreçlerinin gerçek saklama düzeni doğrulanmalı. Observability’de görünen tarih aralığı bütün sağlayıcı kayıtlarının silinme süresiyle eş tutulmamalı. Teknik kayıtlara iletişim talepleri için benimsenen bir yıllık süre otomatik uygulanmaz.
3. **Form:** Kullanıcı formu daha sonra açacağını ve sağlayıcı bilgilerini paylaşacağını söyledi. Form devreye alınmadan önce gerçek sağlayıcılar, alıcı posta kutusu, sunucu logları, saklama/silme ve aktarım düzeni metinlere işlenmeli. Kullanıcı Resend’i kuvvetli aday olarak belirtti; kesin seçim veya entegrasyon yapılmadı. Resend seçilirse e-posta içeriği ve günlükler bakımından ABD’de depolama ve KVKK m.9 düzeni değerlendirilmelidir; AB gönderim bölgesi seçmek depolamayı AB’ye taşımıyor. Henüz Resend/Netlify Forms entegrasyonu yapılmadı; bu iş kapsamında form açılmadı.
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

Resend referansları (olası kullanım; henüz aktif değil):
- https://resend.com/security
- https://resend.com/legal/dpa

Enpama hizmet kaynağı: https://www.enpama.com/sekreter-hizmeti (26 Ekim 2026 tarihinde incelendi). Tam ticari unvan ve SAD’a uygulanan sözleşme/paket koşulları açık sayfalardan doğrulanamadı.
