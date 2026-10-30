# SAD — veri ihlali için teknik müdahale planı

Hazırlanma: 31 Ekim 2026. Durum: teknik iş akışı hazır; kişi atamaları ve iletişim zinciri işletme tarafından tamamlanacak. Bu dosya web sitesinde yayınlanmaz. Kişisel müşteri verisi veya anahtar eklemeyin.

## Görev ve iletişim zinciri

| Rol | Görev | Atanacak kişi / yedek |
| --- | --- | --- |
| SAD olay koordinatörü | İşletme adına kararları, dış bildirim hazırlığını ve takvimi yönetir | SAD tarafından doldurulacak |
| Opsiron teknik sorumlusu | Teknik tespit, erişim sınırlandırma, kanıt toplama ve kurtarma | Kullanıcı (Opsiron); teknik müdahaleyi üstlendi. Yedek bekleniyor |
| Posta / sağlayıcı yöneticisi | Netlify, Resend, posta hizmeti ve gerekiyorsa Enpama ile kayıt/erişim işlemleri | Netlify, GitHub, GoDaddy ve Resend kullanıcı kontrolünde; Google Workspace erişim rolleri ve yedek teyit edilecek |
| Bildirim yetkilisi | SAD’ın onayladığı bildirimleri iletir; teslim kanıtını olay kaydına ekler | SAD tarafından doldurulacak |

İsim, telefon ve alternatif iletişim adreslerini erişimi sınırlı işletme belgesinde tutun. Birincil posta hesabının etkilendiği durumda kullanılacak bağımsız telefon/iletişim kanalı belirleyin. Kritik olayda ana sorumluya bir saat ulaşılamazsa yedeğe aktarın.

## Tetikleyiciler

- Anahtar veya hesaba yetkisiz erişim; beklenmeyen Resend gönderimleri/alıcıları.
- Form içeriğinin veya posta kutusunun yetkisiz erişime açılması.
- Sağlayıcıdan gelen güvenlik bildirimi, doğrulanmış kod/dağıtım değişikliği.
- Hata artışı tek başına veri ihlali kanıtı değildir; önce teknik inceleme başlatır.

## Zaman çizelgesi

T0: şüphenin ilk kayıt zamanı. Tarihleri UTC ve Türkiye saatiyle kaydedin. Aşağıdaki 72 saat bir hazırlık/işletim hedefidir; takvimi olay koordinatörü izler.

| Hedef | Teknik ve operasyonel iş | Çıktı / sorumlu |
| --- | --- | --- |
| T0–1 saat | Olay numarası aç; ilk tespit zamanını, hizmetleri ve ilk belirtileri yaz; koordinatör ve teknik sorumluya ulaş | Olay kaydı / ilk tespit eden kişi |
| İlk 4 saat | Gerekli logları silmeden koru; gerekiyorsa etkilenen erişimi durdur, formu geçici kapat veya güvenli sürüme dön. Sızan anahtarı iptal/yenile; etkilenen hesabın oturumlarını incele | Müdahale ve erişim değişikliği kaydı / teknik sorumlu |
| İlk 24 saat | Veri türü, dönem, etkilenen sistem/kişi kapsamını ve sağlayıcıları araştır; doğrulanmış olgularla belirsizlikleri ayır | İlk kapsam raporu / teknik sorumlu + sağlayıcı yöneticisi |
| 24–48 saat | Olay özeti, ilk öğrenme zamanı, etkiler, alınan önlemler ve iletişim sorumlularını bildirim hazırlığı için topla | İncelemeye hazır dosya / SAD koordinatörü |
| 48–60 saat | KVKK’ya ve ilgili diğer muhataplara yapılacak bildirim için yetkili kişiye dosyayı teslim et; açık eksikleri ve takvimi kontrol et | Devir/inceleme kaydı / SAD koordinatörü |
| 60–72 saat | Yetkili kişinin belirlediği bildirim işlemlerini tamamlamasını takip et; gönderim tarihi, kullanılan kanal ve alındı belgesini kaydet. Gecikme varsa aynı gün yedeğe/koordinatöre yükselt | Bildirim takip kaydı / bildirim yetkilisi |
| Kurtarma sonrası | Güvenli yapılandırmayı doğrula; erişim listesini, anahtarları ve dağıtımı kontrol et; takip süresi belirle | Kapanış raporu ve iyileştirme işleri / teknik sorumlu |

Bu plan otomatik dış bildirim veya müşteri e-postası göndermez. Bildirim ve üretim değişiklikleri yetkili kişi tarafından yürütülür.

## Kanıt toplama

- Netlify request ID, ilgili fonksiyon/erişim kayıtları, deploy kimliği ve Git commit'i.
- Resend olay/gönderim kimlikleri ve hesap erişim kayıtları; posta sağlayıcısı kayıtları.
- Her dosya için kaynak, toplama zamanı, toplayan kişi ve SHA-256 özeti.
- Mümkünse salt okunur kopya; şifreli, erişimi sınırlı işletme depolaması. Kaynak logları körlemesine silmeyin.
- Ham form içeriği, şifre, API anahtarı ve kişisel verileri Git deposuna, herkese açık issue'ya veya genel alarm kanalına koymayın.
- Log bulunamıyorsa yokluğunu ve sağlayıcıya yapılan talebi kaydedin; eksik bilgiyi tahminle doldurmayın.

## Olay kaydı şablonu

Olay numarası · T0 · son güncelleme · koordinatör/yedek · etkilenen servisler · veri kategorileri · doğrulanan kapsam · belirsizlikler · request/deploy kimlikleri · kanıt konumu · yapılan müdahaleler · bildirim hazırlık durumu · teslim/alındı bilgileri · sonraki kontrol zamanı · kapanış ve takip işleri.

Gerçek kayıt, erişimi sınırlı işletme depolamasında tutulur; bu depoda kişisel olay dosyası tutulmaz.

## Test ve gözden geçirme

- Sorumlular atandıktan sonra gerçek müşteri verisi kullanmadan masa başı senaryo yapın.
- Test anahtarı sızıntısı, form hatası ve posta hesabı erişim kaybı senaryolarını görüşün.
- İletişim zincirini ve kanıt erişimini kontrol edin; sağlayıcı veya hesap sorumlusu değişince planı güncelleyin.
- Müşterinin bilgi@sitkiarslan.com adresine yeni açık talimat olmadan test e-postası gönderilmez.
