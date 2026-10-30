# SAD — güvenlik işletimi ve hesap sahibinin tamamlayacağı işler

31 Ekim 2026. Bu dosya teknik işletim kaydıdır; otomatik silme, bildirim veya sağlayıcı hesabı yapılandırması yapmaz.

## Kodda hazır olanlar

- Bütün form yanıtları sunucuda oluşturulan request ID taşır. Hata ekranındaki Referans değeri Netlify fonksiyon loglarıyla eşleştirilir.
- JSON logları: UTC timestamp, servis, olay, seviye, request ID, HTTP durumu, süre; hatalarda sınırlı hata sınıfı ve varsa Resend HTTP durumu. Ad, e-posta, IP, telefon, mesaj, anahtar, webhook adresi, sağlayıcı yanıt gövdesi ve exception mesajı uygulama loguna yazılmaz. Platform kendi erişim kayıtlarını ayrıca tutabilir.
- Hata sınıfları: configuration_missing, provider_http_error, provider_invalid_response, timeout, network_error. Sunucu hatalarında alert=true bulunur.
- HTTP başlıkları build sırasında dist/_headers olarak üretilir. CSP bütün sabit inline script/JSON-LD içerikleri için SHA-256 özetleri üretir; unsafe-inline ve unsafe-eval açılmaz. Fonksiyon kendi güvenlik başlıklarını döndürür.
- Uygulama izleme/kampanya sistemi eklenmedi. Fontlar aynı kökenden sunulur.

## Otomatik hata uyarısını açma

Varsayılan olarak dış uyarı kapalıdır. SECURITY_ALERT_WEBHOOK_URL boşsa hiçbir alarm isteği yapılmaz. Otomatik uyarı formun çalışması için gerekli değildir; kurulması isteğe bağlıdır. Uyarı yoksa arızanın fark edilmesi manuel kontrole bağlıdır. Aşağıdaki adımlar yalnızca uyarı açılmak istendiğinde uygulanır.

1. Teknik sorumluların eriştiği özel bir alarm kanalı belirleyin. Hazır bağlantı Slack incoming webhook'unun `{ "text": "..." }` biçimiyle uyumludur. Bu seçimi ve hesap bağlantısını hesap sahibi yapmalıdır; üretim anahtarını sohbete göndermeyin.
2. HTTPS webhook adresini Netlify Environment variables içinde SECURITY_ALERT_WEBHOOK_URL adıyla **Functions / Production** kapsamına ekleyin. VITE_ öneki kullanmayın; URL'yi Git'e yazmayın. Adres kullanıcı adı/şifre içermemeli; yönlendirmeler takip edilmez.
3. Yeni deploy gerekir. Bu değişken e-posta alıcısı değildir. Alarm yalnızca hata sınıfı, HTTP durumu, rastgele request ID ve UTC zamanını içerir.
4. Her 5xx form hatası bir uyarı dener; otomatik toplulaştırma veya kalıcı tekrar bastırma yoktur. Gerekirse seçilen izleme servisinde `event=contact.failed` ve son 5 dakikada en az 3 hata eşiği tanımlayın. Başlangıç ayarı: configuration_missing için ilk olayda kritik, diğerleri için 3/5 dakika, 15 dakika tekrar bastırma.
5. Alarm başarısızsa contact.alert_delivery_failed loglanır; kullanıcıya gönderim hatası yanıtı yine döner. Uyarı isteğinin zaman aşımı 2 saniye, e-posta sağlayıcısınınki 10 saniyedir.
6. Gerçek test, sahibin onayladığı test ortamı/alıcıyla yapılmalı. Mevcut müşteri posta kutusuna test göndermeyin. Yerel testler tüm fetch isteklerini taklit eder; gerçek kanal veya e-posta servisine bağlanmaz.

Webhook, sitenin tamamen kapalı kalmasını veya fonksiyonun başlamadan çökmesini tespit edemez. Bunun için hesap sahibi mevcut izleme servisinde GET ana sayfa/robots/sitemap erişim kontrolü ve log kaynağında uyarı tanımlamalı. Üretim iletişim endpoint'ine otomatik POST kontrolü kurmayın; e-posta tetikler.

## 31 Ekim 2026 kontrolü

- Kullanıcı teknik müdahaleyi üstlendi. Netlify, GitHub, GoDaddy ve Resend hesaplarının kendi kontrolünde olduğunu belirtti. Bu beyan MFA'nın açık olduğunu veya bütün erişimlerin denetlendiğini doğrulamaz.
- Alıcı posta kutusu Google Workspace; Resend form e-postasını gönderen servistir. Google Workspace erişim rolleri ve kurtarma ayarları teyit bekliyor.
- Netlify Usage & billing panelinde kredi tabanlı **Free** plan doğrulandı.
- Observability tarih menüsünde son 24 saat kullanılabilir; son 7 gün Pro ve son 30 gün Enterprise seçenekleri kapalı. Bu, panelde inceleme aralığıdır; sağlayıcının bütün altyapı kayıtlarını 24 saatte sildiği anlamına gelmez.
- Resmî Functions logs belgesinde fonksiyon kayıtları için en az 24 saat, belirli planlarda 7 gün belirtiliyor. Bu kontrol Free hesap için 7 günlük kayıt garantisi vermez.
- Functions logları CLI ile JSON Lines olarak alınabilir; Log Drains resmî belgede Enterprise özelliğidir. Harici depo veya otomatik dışa aktarım kurulmadı.
- Olay fark edildiğinde ilgili kayıtları gecikmeden erişimi sınırlı depolamaya alın. Otomatik alarm kapalı kalacaksa düzenli manuel log kontrolü planlayın; kısa inceleme aralığında olayların geç fark edilmesi mümkündür.
- Hesap ayarı değiştirilmedi, üretim formuna POST yapılmadı ve e-posta gönderilmedi.

## Netlify ve hesap erişimi

| İş | İstenen çıktı |
| --- | --- |
| Netlify altyapı kayıtlarının silinme düzenini ayrıca teyit et | Free plan ve 24 saatlik Observability aralığı doğrulandı; bütün kayıt türlerinin silinme süresi henüz doğrulanmadı |
| Gerekirse log dışa aktarma/Log Drains imkânını ve ücretini kontrol et | Seçilen depo, silme süresi, maliyet ve erişim sorumlusu |
| Netlify, GitHub, Resend ve posta hesabı kullanıcılarını gözden geçir | Asıl/yedek yönetici, gereksiz erişimlerin kaldırılması |
| MFA ve kurtarma kanallarını doğrula | Kontrol tarihi ve sorumlusu; kurtarma kodları güvenli işletme kasasında |
| Resend API anahtarını Email Sending ve doğru gönderici domainiyle sınırla | Anahtarın adı/yetki kapsamı, son yenileme tarihi; gerçek değeri kaydetmeyin |
| Anahtar yenileme/devir yöntemini belirle | Eski anahtarın iptali, yeni değişken, deploy ve onaylı test sırası |
| İstenirse alarm kanalını belirle | Şimdilik kapalı; webhook tanımlamak isteğe bağlı |

Saklama süresini yalnızca panelde görünen zaman aralığından çıkarmayın. Uygulama kaydı ile altyapı erişim kaydı farklı veri kümeleridir.

## Dağıtım ve kontrol

`npm run test:security` gerçek ağ erişimi yapmayan testleri çalıştırır. `npm run build` SEO ve güvenlik kontrollerini çalıştırır. Netlify deploy sonrası:

- Ana sayfa, beş kurumsal sayfa, hukuki sayfalar, Google doğrulama dosyası ve gerçek 404 davranışı kontrol edilir.
- Yanıtlarda CSP, nosniff, DENY, Referrer-Policy ve Permissions-Policy görülmeli; tarayıcı konsolunda CSP ihlali olmamalı.
- Menü, SSS, çerez tercihi ve yenilemede başa dönüş çalışmalı.
- Netlify deploy logunda IP/domain başına 120 saniyede 5 istek kuralının uygulandığı doğrulanmalı.
- CSP'yi genişletmek yerine yeni bir kaynağın neden gerektiğini kontrol edin. Yeni bir inline betik veya JSON-LD değişikliğinde build özetleri yeniden hesaplar. Netlify üzerinden sonradan betik enjekte edilmesi CSP tarafından engellenebilir.

Kaynaklar: https://docs.netlify.com/manage/routing/headers/ · https://docs.netlify.com/build/functions/logs/ · https://docs.netlify.com/manage/monitoring/observability/overview/
