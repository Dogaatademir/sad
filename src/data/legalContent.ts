import { COOKIE_NOTICE_KEY } from './cookieNotice';

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalDocument = {
  path: string;
  label: string;
  title: string;
  description: string;
  sections: LegalSection[];
  sources?: { label: string; href: string }[];
};

// Controller identity is user-confirmed; processors and retention periods still need verification.
export const legalReview = {
  status: 'draft' as const,
  controller: 'Sıtkı Arslan',
  updatedAt: '2026-10-21',
  updatedLabel: '21 Ekim 2026',
};

export const legalDocuments: LegalDocument[] = [
  {
    path: '/kvkk-aydinlatma-metni/', label: 'KVKK Aydınlatma Metni',
    title: 'Kişisel verileriniz\nhakkında.',
    description: 'Web sitesinin kullanımı ve SAD ile iletişim sırasında kişisel verilerin işlenmesine ilişkin bilgilendirme.',
    sections: [
      { id: 'kapsam', title: 'Veri sorumlusu ve kapsam', paragraphs: [
        'Veri sorumlusu, SAD — Sıtkı Arslan Danışmanlık adıyla faaliyet gösteren şahıs işletmesinin sahibi Sıtkı Arslan’dır. Bu metin web sitesini ziyaret eden ve SAD ile iletişime geçen kişiler için hazırlanmıştır. Danışmanlık hizmeti kapsamında ayrıca elde edilen mali belgeler ve müşteri kayıtları bu web sitesi metninin kapsamı dışındadır; ilgili süreçlerde ayrıca aydınlatma yapılmalıdır.',
        'İletişim formunun sağlayıcısı, teknik kayıtlar, alıcılar ve saklama süreleri henüz kesinleşmediğinden bu belge yayın öncesi taslaktır. Aşağıdaki içerik, nihai veri işleme envanteriyle eşleştirilerek tamamlanacaktır.',
      ] },
      { id: 'veriler', title: 'Veriler ve toplama yöntemleri', paragraphs: [
        'Web sitesindeki iletişim formu şu anda gönderime kapalıdır. Alanlara yazılan bilgiler uygulama tarafından sunucuya gönderilmez veya tarayıcı depolamasına kaydedilmez. Uygulamada üyelik, dosya yükleme, pazarlama takibi ve analitik kodu bulunmaz.',
        'Telefon veya yazılı iletişim yoluyla ilettiğiniz ad, iletişim bilgileri ve talebinizin içeriği, talebin ele alınması sırasında işlenebilir. Web erişimi sırasında barındırma katmanında oluşan teknik kayıtların kapsamı, alıcıları ve süreleri nihai sağlayıcı seçimiyle doğrulanacaktır.',
      ] },
      { id: 'amac-hukuki-sebep', title: 'Amaçlar ve hukuki sebepler', paragraphs: [
        'Danışmanlık sözleşmesinin kurulmasına yönelik olarak doğrudan ilettiğiniz taleplerde gerekli kimlik, iletişim ve talep verileri için Kanun’un 5/2-c maddesindeki sözleşmenin kurulması veya ifası şartı değerlendirilir. Genel iletişim taleplerinin yönetiminde, ilgili kişinin temel hak ve özgürlüklerine zarar vermemek koşuluyla meşru menfaat şartı (5/2-f) ayrıca değerlendirilmelidir.',
        'Kanuni yükümlülüklerin yerine getirilmesi gereken hallerde 5/2-ç; bir hakkın tesisi, kullanılması veya korunması için gerekli kayıtlar bakımından 5/2-e maddesi uygulanabilir. Her veri kategorisi yalnızca somut işlem için geçerli olan hukuki sebebe dayanmalıdır. Bu taslak, bütün işleme şartlarının her işlem için birlikte geçerli olduğu anlamına gelmez.',
      ] },
      { id: 'aktarim', title: 'Alıcılar ve yurt dışına aktarım', paragraphs: [
        'Yetkili kamu kurumlarına yapılacak açıklamalar ilgili kanuni yükümlülükle sınırlı olmalıdır. Barındırma, iletişim formu ve e-posta hizmet sağlayıcılarının kimliği, hangi verilere eriştikleri ve aktarım amaçları yayın öncesinde bu metinde somutlaştırılmalıdır.',
        'Yurt dışındaki barındırma veya form hizmetlerinin kullanılması teknik kayıtların ya da mesaj içeriğinin yurt dışına aktarımına yol açabilir. Bu durumda Kanun’un 9. maddesindeki uygun aktarım mekanizması ve hizmet sağlayıcı sözleşmeleri ayrıca değerlendirilmelidir. Bu sayfanın görüntülenmesi veya genel bir onay kutusu bu değerlendirmelerin yerine geçmez.',
      ] },
      { id: 'saklama', title: 'Saklama ve silme', paragraphs: [
        'Veriler, ilgili amaç ve uygulanabilir kanuni saklama yükümlülükleri için gerekli süreyle sınırlı tutulmalıdır. İşleme şartları ortadan kalktığında ilgili kayıtlar silinmeli, yok edilmeli veya anonim hale getirilmelidir. Teknik kayıtlar, iletişim talepleri ve hukuki başvurular için gerçek saklama süreleri işletmenin kayıtları ve sağlayıcı ayarları üzerinden doğrulanacaktır.',
      ] },
      { id: 'haklar', title: 'Kanun’un 11. maddesi kapsamındaki haklarınız', items: [
        'Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi isteme.',
        'İşleme amacını ve verilerin amacına uygun kullanılıp kullanılmadığını öğrenme; yurt içindeki veya yurt dışındaki alıcıları bilme.',
        'Eksik veya yanlış verilerin düzeltilmesini, kanuni şartları oluştuğunda silinmesini veya yok edilmesini ve bu işlemlerin verilerin aktarıldığı kişilere bildirilmesini isteme.',
        'Yalnızca otomatik analiz sonucunda aleyhinize ortaya çıkan sonuca itiraz etme ve hukuka aykırı işleme nedeniyle uğradığınız zararın giderilmesini talep etme.',
      ] },
      { id: 'basvuru', title: 'Başvuru ve iletişim', paragraphs: [
        'Kanun kapsamındaki taleplerinizi Sıtkı Arslan’a (SAD — Sıtkı Arslan Danışmanlık) aşağıdaki adresten yazılı olarak veya Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’deki diğer geçerli yöntemlerle iletebilirsiniz. Telefon, başvuru süreci hakkında bilgi almak içindir; tek başına yazılı KVKK başvurusu yerine geçmez.',
        'Başvuruda kimliğinizi ve talebinizi değerlendirmek için gerekli bilgiler bulunmalıdır. Genel iletişim formuna kimlik belgesi veya hassas mali belge eklemeyin. Başvuruların niteliğine göre en kısa sürede ve en geç 30 gün içinde yanıtlanması gerekir; ayrıca maliyet doğuran işlemlerde Kurulun belirlediği tarife uygulanabilir.',
      ] },
    ],
    sources: [
      { label: 'KVKK / Aydınlatma yükümlülüğü', href: 'https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-' },
      { label: 'KVKK / İlgili kişinin hakları', href: 'https://www.kvkk.gov.tr/Icerik/2036/Ilgili-Kisinin-Haklari' },
      { label: 'KVKK / Yurt dışına aktarım', href: 'https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim' },
    ],
  },
  {
    path: '/gizlilik-politikasi/', label: 'Gizlilik Politikası',
    title: 'Gizliliğe\naçık bir yaklaşım.',
    description: 'SAD web sitesinin veri kullanımı, dış bağlantılar ve iletişim kanalları hakkında bilgi.',
    sections: [
      { id: 'site', title: 'Web sitesinin kapsamı', paragraphs: [
        'Bu web sitesi SAD’ın finansal yeniden yapılandırma danışmanlığını tanıtır. Site üzerinden üyelik oluşturulmaz, ödeme alınmaz ve belge yüklenmez. Kişisel verilerin işlenmesine ilişkin ayrıntılar KVKK Aydınlatma Metni’nde yer alır.',
      ] },
      { id: 'iletisim', title: 'İletişim ve bilgi paylaşımı', paragraphs: [
        'İletişim formu şu anda aktif değildir; formdaki alanlar uygulama tarafından gönderilmez veya kalıcı olarak kaydedilmez. Telefon görüşmesi veya daha sonra açılacak bir iletişim kanalı üzerinden yalnızca talebinizin ele alınması için gerekli bilgileri paylaşın.',
        'İlk iletişimde şifre, kimlik belgesi, banka hesap erişim bilgisi, sağlık bilgisi veya üçüncü kişilere ait kişisel veri göndermeyin. Danışmanlık için gereken mali belgelerin paylaşım yöntemi hizmet sürecinde ayrıca belirlenmelidir.',
      ] },
      { id: 'teknik', title: 'Teknik hizmetler ve güvenlik', paragraphs: [
        'Uygulama kodunda ziyaretçi profillemesi, reklam pikseli veya analitik izleme bulunmaz. Çerez bildirimini kapattığınız bilgisi, kabul veya ret seçiminizden sonra aynı sekme oturumu boyunca tarayıcınızda hatırlanır; sunucuya gönderilmez. Yazı tipleri, logo ve sayfa görselleri sitenin kendi adresinden yüklenir. Barındırma ve ağ hizmetleriyle ilgili teknik kayıtlar, sağlayıcının gerçek işleyişine göre KVKK metninde açıklanmalıdır.',
        'Hiçbir internet hizmeti için mutlak güvenlik sözü verilemez. Şüpheli bir durum veya yanlış kişiye ulaşmış bir mesaj fark ederseniz iletişim sayfasındaki telefon üzerinden SAD’a ulaşın.',
      ] },
      { id: 'baglantilar', title: 'Dış bağlantılar', paragraphs: [
        'Harita ve bilgi kaynakları, bağlantıya tıkladığınızda ilgili üçüncü tarafın sitesinde açılır. Bu hizmetler kendi gizlilik ve çerez koşullarına tabidir. Sayfada gömülü harita veya otomatik yüklenen üçüncü taraf sosyal medya bileşeni bulunmaz.',
      ] },
      { id: 'guncellemeler', title: 'Değişiklikler ve sorular', paragraphs: [
        'Form, analiz aracı, yeni bir hizmet sağlayıcı veya farklı bir veri işleme faaliyeti devreye alınmadan önce ilgili bilgilendirmeler güncellenmelidir. Yeni bir işleme faaliyeti için gerekiyorsa ayrıca uygun hukuki şart sağlanır. Bu metnin okunması açık rıza verildiği anlamına gelmez.',
      ] },
    ],
  },
  {
    path: '/cerez-politikasi/', label: 'Çerez Politikası',
    title: 'Çerezler hakkında\nşeffaf bilgi.',
    description: 'SAD uygulamasındaki çerez, tarayıcı depolaması ve izleme araçlarının mevcut durumu.',
    sections: [
      { id: 'tanim', title: 'Çerez nedir?', paragraphs: [
        'Çerezler, bir web sitesi ziyaret edildiğinde tarayıcıda saklanan küçük kayıtlardır. Benzer amaçlarla tarayıcının yerel depolama alanı veya farklı izleme teknolojileri de kullanılabilir. Kullanım amacı ve gerçek teknik davranış, uygulanacak bilgilendirme ve izin sürecini belirler.',
      ] },
      { id: 'mevcut-durum', title: 'Bu sitedeki mevcut durum', items: [
        'SAD uygulama kodu reklam veya analitik çerezi oluşturmaz. Bildirimin kapatıldığı bilgisi, kullanıcı “Kabul et” veya “Reddet” seçeneğine bastığında sessionStorage alanına kaydedilir. Yeni tercih için localStorage kullanılmaz.',
        'Analitik, reklam, yeniden pazarlama ve sosyal medya takip kodu bulunmaz.',
        'Yazı tipleri ve görseller yerelden sunulur; gömülü harita ve video kullanılmaz.',
        'Barındırma katmanının çerezleri veya güvenlik kayıtları bu uygulama envanterinden ayrıdır. Nihai domain ve barındırma üzerinden ayrıca doğrulanacaktır.',
      ] },
      { id: 'tercihler', title: 'İzin ve tercihler', paragraphs: [
        'İlk ziyarette bir çerez bilgilendirmesi gösterilir. “Reddet” ve “Kabul et” seçeneklerinin ikisi de bildirimi kapatır. Bildirimin kapatıldığı bilgisi, aynı sekme oturumu boyunca tekrar gösterilmemesi için sessionStorage’da tutulur. Bu seçimler reklam veya analitik araçlarına izin anlamına gelmez.',
        'Gelecekte açık rıza gerektiren bir teknoloji eklenirse izin verilmeden yüklenmemeli; kabul, ret ve sonradan tercihi değiştirme seçenekleri birlikte sunulmalıdır. Ziyaret etmeye devam etmek tek başına açık rıza olarak değerlendirilmez. Tarayıcı ayarlarınızdan saklanan çerezleri görebilir, silebilir veya sınırlandırabilirsiniz. Harici bir bağlantıyı açtığınızda o sitenin tercihleri geçerlidir.',
      ] },
      { id: 'envanter', title: 'Çerez envanteri ve güncellemeler', paragraphs: [
        `Uygulamanın tarayıcı depolama kaydı: ${COOKIE_NOTICE_KEY}. Sağlayıcı: SAD (birinci taraf). Amaç: talep ettiğiniz bildirim gizleme tercihini hatırlamak. Depolama: sessionStorage. İçerik: bildirim sürümü ve hatırlama seçimi. Süre: sekme oturumu; sabit gün sayısıyla kalıcı saklama yapılmaz. Kayıt sunucuya gönderilmez, kullanıcı kimliği içermez ve izleme amacıyla kullanılmaz. Tarayıcının oturum geri yükleme davranışı kaydın yaşam süresini etkileyebilir. Tarayıcınızın site verilerini temizleyerek bu kaydı daha önce de silebilirsiniz.`,
        'Yayın ortamında farklı bir çerez tespit edilirse sağlayıcısı, amacı, kategorisi ve süresi doğrulanarak envantere eklenmelidir. Barındırma sağlayıcısı veya kullanılan araçlar değiştiğinde bu sayfa da güncellenmelidir.',
      ] },
    ],
    sources: [{ label: 'KVKK / Çerez Uygulamaları Hakkında Rehber', href: 'https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber' }],
  },
  {
    path: '/kullanim-kosullari/', label: 'Kullanım Koşulları',
    title: 'Bilgilendirme ve\nkullanım koşulları.',
    description: 'SAD web sitesindeki bilgilerin kapsamı, danışmanlık ilişkisinin kurulması ve içerik kullanımı.',
    sections: [
      { id: 'bilgilendirme', title: 'İçeriğin niteliği', paragraphs: [
        'Sitedeki FYY ve finansal danışmanlık açıklamaları genel bilgilendirme amacı taşır. Belirli bir işletmenin mali, hukuki veya vergisel durumuna ilişkin kişisel değerlendirme yerine geçmez. Güncel mevzuat, çerçeve anlaşmaları ve ilgili alacaklı kuruluşların koşulları somut olayda ayrıca incelenmelidir.',
      ] },
      { id: 'hizmet', title: 'Danışmanlık ilişkisi ve sonuçlar', paragraphs: [
        'Siteyi ziyaret etmek veya ilk iletişimi kurmak tek başına danışmanlık sözleşmesi oluşturmaz. Hizmetin kapsamı, ücreti, tarafların sorumlulukları ve belge paylaşım yöntemleri ayrıca belirlenir.',
        'Sitedeki açıklamalar yapılandırma başvurusunun kabulü, borç indirimi, yeni kredi, belirli bir takvim veya ticari sonuç taahhüdü içermez.',
      ] },
      { id: 'icerik', title: 'İçerik ve kaynaklar', paragraphs: [
        'SAD’a ait metin ve tasarımların kullanımı, ilgili fikri mülkiyet hükümlerine tabidir. Üçüncü taraf içerik ve yazılımlar kendi hak ve lisanslarına tabidir; site bunların tamamı üzerinde münhasır hak iddia etmez.',
        'Bilgi kaynaklarına verilen bağlantılar dış sitelere yönlendirir. Dış sitelerin içerik ve koşullarını ilgili sağlayıcı üzerinden inceleyin. Hatalı veya güncelliğini yitirmiş bir bilgi fark ederseniz SAD’a bildirebilirsiniz.',
      ] },
      { id: 'haklar', title: 'Kanuni haklar ve iletişim', paragraphs: [
        'Bu açıklamalar, emredici mevzuattan doğan haklarınızı veya SAD’ın kanunen kaldırılamayan sorumluluklarını ortadan kaldırmaz. Kişisel verilerinizle ilgili talepler için KVKK Aydınlatma Metni’ndeki başvuru açıklamalarını inceleyin.',
      ] },
    ],
  },
];
