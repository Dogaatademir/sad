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

// Keep these disclosures aligned with the deployed contact providers.
export const legalDetails = {
  controller: 'Sıtkı Arslan',
  email: 'bilgi@sitkiarslan.com',
  updatedAt: '2026-10-28',
  updatedLabel: '28 Ekim 2026',
};

export const legalDocuments: LegalDocument[] = [
  {
    "path": "/kvkk-aydinlatma-metni/",
    "label": "KVKK Aydınlatma Metni",
    "title": "Kişisel verileriniz\nhakkında.",
    "description": "Web sitesini ziyaret ettiğinizde ve SAD ile iletişim kurduğunuzda kişisel verilerinizin nasıl işlendiğine ilişkin bilgilendirme.",
    "sections": [
      {
        "id": "veri-sorumlusu",
        "title": "Veri sorumlusu ve kapsam",
        "paragraphs": [
          "6698 sayılı Kişisel Verilerin Korunması Kanunu (Kanun) kapsamında veri sorumlusu, SAD markasıyla finansal yönetim ve yeniden yapılandırma danışmanlığı sunan şahıs işletmesi sahibi Sıtkı Arslan’dır.",
          "Bu metin web sitesi ziyaretçileri, bilgi talep eden kişiler ve potansiyel müşterilerin temsilcileri için hazırlanmıştır. Danışmanlık hizmeti kapsamında teslim edilecek mali belgeler ve müşteri dosyaları için, ilgili hizmetin kapsamına göre ayrıca bilgilendirme yapılır."
        ]
      },
      {
        "id": "veriler",
        "title": "İşlenen veriler ve elde edilme yöntemleri",
        "paragraphs": [
          "Telefon, e-posta veya yazılı başvuru yoluyla bizimle doğrudan paylaştığınız ad ve soyadı, iletişim bilgileri, şirket ve görev bilgileri ile talebinizin içeriği; iletişim kurulması ve talebin değerlendirilmesi sırasında işlenir. Telefon görüşmeleri, Enpama tarafından sağlanan telefon yanıtlama ve sekreterlik hizmeti kapsamında ses kaydına alınır. Kayıt başlamadan önce arayan kişiye anonsla bilgi verilir; görüşmenin ses içeriği de kişisel veri olarak elde edilir.",
          "Web sitesine erişim sırasında IP adresi, istenen sayfa, erişim zamanı, tarayıcı ve cihaz bilgileri gibi teknik veriler, barındırma ve ağ altyapısı tarafından otomatik yöntemlerle işlenebilir. Bu işlemler, iletişim formuna bilgi girilip girilmemesinden bağımsızdır.",
          "İletişim formunu gönderdiğinizde ad ve soyadınız, e-posta adresiniz, isteğe bağlı şirket ve telefon bilgileriniz ile mesajınız Netlify üzerindeki sunucu işlevi tarafından doğrulanır ve Resend e-posta hizmeti üzerinden SAD’ın bilgi@sitkiarslan.com posta kutusuna iletilir. Form içeriği tarayıcı depolamasına veya SAD’a ait ayrı bir veritabanına kaydedilmez. Sitede üyelik, ödeme veya dosya yükleme işlemi bulunmaz."
        ]
      },
      {
        "id": "amac-hukuki-sebep",
        "title": "İşleme amaçları ve hukuki sebepler",
        "paragraphs": [
          "Danışmanlık hizmeti hakkında teklif alınması veya sözleşme kurulması amacıyla doğrudan ilettiğiniz kimlik, iletişim ve talep bilgileri, sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması ve gerekli olması koşuluyla Kanun’un 5/2-c maddesine dayanılarak işlenir.",
          "Genel soruların yanıtlanması, iletişimin takibi ve web sitesinin güvenli, kesintisiz çalışmasının sağlanması için gerekli veriler, temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaat hukuki sebebine (5/2-f) dayanılarak işlenir.",
          "Kanuni yükümlülüklerin yerine getirilmesi için gerekli veriler 5/2-ç; hukuki başvuruların yönetimi ve bir hakkın tesisi, kullanılması veya korunması için gerekli kayıtlar 5/2-e maddesine dayanılarak işlenir. Bir veri, yalnızca ilgili işlem için geçerli olan hukuki sebep ve amaçla sınırlı olarak kullanılır. İletişim bilgileriniz, ayrı bir hukuki dayanak olmadan reklam veya pazarlama listesine eklenmez."
        ]
      },
      {
        "id": "alici",
        "title": "Verilerin paylaşılması ve barındırma",
        "paragraphs": [
          "Web sitesi Netlify, Inc. tarafından sağlanan barındırma ve içerik dağıtım altyapısı üzerinden sunulur. Siteye erişim ve güvenlik işlemleri için gereken teknik veriler bu altyapıda işlenebilir. SAD uygulaması reklam veya analitik sağlayıcılarına ziyaretçi profili göndermez. Telefon iletişiminde Enpama’dan telefon yanıtlama ve sekreterlik hizmeti alınır. Aramanın yanıtlanması, talebin alınması ve SAD’a yönlendirilmesi için gereken ad, telefon ve talep içeriği bu hizmet kapsamında işlenebilir.",
          "Bir kanuni yükümlülüğün yerine getirilmesi veya hukuki bir hakkın korunması gerektiğinde, ilgili kayıtlar yalnızca gerekli kapsamda yetkili kamu kurumlarına, yargı mercilerine ve hukuki danışmanlara aktarılabilir. Form taleplerinin iletilmesinde Resend (Plus Five Five, Inc.) ve alıcı e-posta hizmeti kullanılır; formdaki bilgiler ve mesaj içeriği bu sağlayıcılar ile talebi karşılayan yetkili kişiye iletilir. E-posta ile kendinizin başlattığı iletişimde de mesajın iletilmesi için kullanılan posta hizmetleri iletişimin teknik taraflarıdır."
        ]
      },
      {
        "id": "yurt-disi",
        "title": "Yurt dışındaki teknik altyapı",
        "paragraphs": [
          "Netlify yurt dışında yerleşik bir hizmet sağlayıcısıdır ve dağıtık altyapı kullanır. Bu nedenle siteye erişim sırasında oluşan teknik veriler Türkiye dışındaki sistemlerde işlenebilir. Bu barındırma hizmetinin kullanılması, verilerin yalnızca Türkiye’de tutulduğu anlamına gelmez. Form gönderiminde kullanılan Resend, depolanan verileri ABD’de tutar. Alıcı posta hizmetinin altyapısına bağlı olarak da yurt dışında veri işlenmesi söz konusu olabilir; bu kapsam formda paylaştığınız kimlik, iletişim ve mesaj bilgilerini de kapsar.",
          "Bu bilgilendirme, web sitesinin kullanılması veya çerez bildirimindeki bir düğmeye basılması, yurt dışına veri aktarımı için açık rıza alındığı anlamına gelmez. Kanun’un 9. maddesindeki aktarım şartları, aydınlatma yükümlülüğünden ayrı olarak uygulanır."
        ]
      },
      {
        "id": "saklama",
        "title": "Saklama ve silme",
        "paragraphs": [
          "Bir danışmanlık hizmetine dönüşmeyen yazılı bilgi ve iletişim talepleri, son iletişim tarihinden itibaren en geç bir yıl içinde silinir veya anonim hale getirilir. Bu süre telefon ses kayıtları için belirlenmiş bir saklama süresi değildir. Bir uyuşmazlık ya da kanuni saklama yükümlülüğü varsa yalnızca bunun için gerekli kayıtlar, ilgili yükümlülük veya hakkın korunması için gereken süre boyunca saklanır.",
          "Hizmet ilişkisi kurulursa hizmet, sözleşme ve muhasebe kayıtları kendi kanuni saklama süreleri ve hizmete ilişkin bilgilendirme kapsamında değerlendirilir. Web erişimine ilişkin teknik kayıtlar Netlify altyapısındaki hizmet ve güvenlik süreçlerine tabidir; bunlar için iletişim taleplerine ait bir yıllık süre uygulanmaz. SAD uygulaması ayrıca bir ziyaretçi kayıt veritabanı oluşturmaz ve form içeriğini sunucu işlevi günlüklerine yazmaz. E-postanın iletilmesi ve saklanması sırasında Resend ve alıcı posta hizmetinde kayıt oluşur; bu kayıtların silinmesi ve erişim yetkileri de ilgili sağlayıcılardaki işlemlerle yönetilir.",
          "Çerez bildirimi tercihiniz, tarayıcınızın site verileri silinene kadar localStorage içinde saklanır; uygulama bu kayıt için otomatik süre sonu belirlemez. İşleme şartları ortadan kalkan kişisel veriler, kanuni yükümlülükler gözetilerek silinir, yok edilir veya anonim hale getirilir."
        ]
      },
      {
        "id": "haklar",
        "title": "Kanun’un 11. maddesi kapsamındaki haklarınız",
        "items": [
          "Kişisel verilerinizin işlenip işlenmediğini öğrenme; işlenmişse buna ilişkin bilgi talep etme.",
          "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme.",
          "Yurt içinde veya yurt dışında verilerinizin aktarıldığı üçüncü kişileri bilme.",
          "Eksik veya yanlış işlenen verilerinizin düzeltilmesini isteme.",
          "Kanuni şartları oluştuğunda verilerinizin silinmesini veya yok edilmesini isteme.",
          "Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme.",
          "Verilerinizin yalnızca otomatik sistemlerle analiz edilmesi sonucunda aleyhinize bir sonucun ortaya çıkmasına itiraz etme.",
          "Verilerinizin kanuna aykırı işlenmesi nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme."
        ]
      },
      {
        "id": "basvuru",
        "title": "Haklarınız için başvuru",
        "paragraphs": [
          "Taleplerinizi Sıtkı Arslan’a, aşağıdaki iletişim bölümünde yer alan Konutkent adresine imzalı yazılı başvuru ile iletebilirsiniz. Daha önce SAD’a bildirdiğiniz ve SAD kayıtlarında bulunan e-posta adresinizi kullanarak bilgi@sitkiarslan.com adresine de başvurabilirsiniz. Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’de düzenlenen diğer geçerli başvuru yöntemleri saklıdır.",
          "Başvuruda ad ve soyadınız, yazılı başvuruda imzanız, Türkiye Cumhuriyeti vatandaşları için T.C. kimlik numarası; yabancılar için uyruğu, pasaport numarası veya varsa kimlik numarası, tebligata esas adresiniz ve talep konunuz bulunmalıdır. Varsa bildirime esas e-posta adresinizi ve telefon numaranızı da ekleyebilirsiniz. Kimlik doğrulaması için gerekenden fazla belge göndermeyin.",
          "Başvurular, niteliğine göre en kısa sürede ve en geç 30 gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulunun belirlediği tarife uygulanabilir. Telefon, başvuru hakkında bilgi almak içindir; tek başına yazılı başvuru yerine geçmez."
        ]
      }
    ],
    "sources": [
      {
        "label": "KVKK / Aydınlatma yükümlülüğü",
        "href": "https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-"
      },
      {
        "label": "KVKK / İlgili kişinin hakları",
        "href": "https://www.kvkk.gov.tr/Icerik/2036/Ilgili-Kisinin-Haklari"
      },
      {
        "label": "KVKK / Yurt dışına aktarım",
        "href": "https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim"
      },
      {
        "label": "Netlify / Veri işleme sözleşmesi",
        "href": "https://www.netlify.com/pdf/netlify-dpa.pdf"
      },
      {
        "label": "Resend / Güvenlik ve veri işleme",
        "href": "https://resend.com/security"
      }
    ]
  },
  {
    "path": "/gizlilik-politikasi/",
    "label": "Gizlilik Politikası",
    "title": "Gizliliğe\naçık bir yaklaşım.",
    "description": "SAD web sitesinin iletişim, teknik altyapı ve gizlilik uygulamaları.",
    "sections": [
      {
        "id": "kapsam",
        "title": "Bu politikanın kapsamı",
        "paragraphs": [
          "Bu politika, Sıtkı Arslan tarafından işletilen SAD web sitesini kapsar. Site, finansal yönetim ve yeniden yapılandırma danışmanlığı hakkında bilgi verir. Üyelik, online ödeme ve belge yükleme hizmeti sunmaz. Kişisel verilerin işlenmesine ilişkin amaçlar, hukuki sebepler ve haklarınız KVKK Aydınlatma Metni’nde açıklanır."
        ]
      },
      {
        "id": "iletisim",
        "title": "Bizimle paylaştığınız bilgiler",
        "paragraphs": [
          "Telefon ve e-posta üzerinden yalnızca talebinizin değerlendirilmesi için gerekli bilgileri paylaşın. Telefon görüşmeleri, Enpama tarafından sağlanan telefon yanıtlama ve sekreterlik hizmeti kapsamında ses kaydına alınır. Kayıt başlamadan önce arayan kişiye anonsla bilgi verilir; görüşmenin ses içeriği de kişisel veri olarak elde edilir. İletişim formundaki bilgiler, gönderim düğmesine bastığınızda Netlify sunucu işlevi ve Resend aracılığıyla SAD’ın bilgi@sitkiarslan.com posta kutusuna iletilir. Gönderim tamamlanmadan formdaki bilgileri kontrol edebilirsiniz; uygulama form içeriğini tarayıcı depolamasında saklamaz.",
          "İlk iletişimde şifre, banka hesabına erişim bilgisi, kimlik belgesi, özel nitelikli kişisel veri veya üçüncü kişilere ait gereksiz bilgiler göndermeyin. Danışmanlık için gereken mali belgelerin paylaşım yöntemi, hizmetin kapsamı belirlendiğinde ayrıca kararlaştırılır."
        ]
      },
      {
        "id": "teknik",
        "title": "Teknik altyapı ve izleme",
        "paragraphs": [
          "Web sitesi Netlify barındırma ve içerik dağıtım altyapısını kullanır. Siteye erişim sırasında teknik veriler bu altyapı tarafından işlenebilir. Form iletimi için ayrıca Resend ve alıcı e-posta hizmeti kullanılır. Resend depolanan verileri ABD’de tutar; Netlify ve alıcı posta hizmetinin altyapısı da yurt dışında veri işlenmesini içerebilir. Ayrıntılar KVKK Aydınlatma Metni’nde yer alır.",
          "SAD uygulamasında reklam pikseli, ziyaretçi profillemesi ve analitik izleme aracı bulunmaz. Yazı tipleri ve görseller sitenin kendi adresinden sunulur. Bildirime ilişkin tercihiniz tarayıcınızdaki localStorage alanında sonraki ziyaretler için hatırlanır; SAD sunucusuna gönderilmez."
        ]
      },
      {
        "id": "saklama",
        "title": "Erişim, saklama ve güvenlik",
        "paragraphs": [
          "İletişim kayıtları, talebin ele alınması için gerekli kapsamda kullanılır. Hizmete dönüşmeyen yazılı talepler son iletişimden itibaren en geç bir yıl içinde silinir veya anonim hale getirilir; bu süre telefon ses kayıtlarını kapsamaz; kanuni saklama yükümlülükleri ve hukuki hakların korunması için gerekli kayıtlar bu süreye istisnadır.",
          "Kişisel verilerin korunmasında veri miktarının sınırlandırılması ve yetkisiz erişimin önlenmesi esas alınır. Bununla birlikte internet üzerinden gerçekleştirilen iletişim için mutlak güvenlik garantisi verilmez. Güvenlik şüphenizi bilgi@sitkiarslan.com adresine iletebilirsiniz."
        ]
      },
      {
        "id": "dis-baglantilar",
        "title": "Harita ve diğer dış bağlantılar",
        "paragraphs": [
          "Harita, TBB kaynakları ve diğer dış siteler ancak ilgili bağlantıya tıkladığınızda açılır. Sitede gömülü harita, video veya sosyal medya takip bileşeni bulunmaz. Açtığınız dış siteler, kendi gizlilik ve çerez politikaları kapsamında veri işleyebilir."
        ]
      },
      {
        "id": "degisiklikler",
        "title": "Güncellemeler ve iletişim",
        "paragraphs": [
          "Veri işleme faaliyetleri veya kullanılan hizmetler değiştiğinde ilgili bilgilendirme metinleri de güncellenir. Form veya yeni bir veri işleme aracı devreye alındığında, kullanılmaya başlamadan önce buna ilişkin bilgilendirme sağlanır. Bu politika, bir açık rıza metni değildir.",
          "Sorularınız için bilgi@sitkiarslan.com adresinden veya aşağıdaki iletişim kanallarından bize ulaşabilirsiniz."
        ]
      }
    ]
  },
  {
    "path": "/cerez-politikasi/",
    "label": "Çerez Politikası",
    "title": "Çerezler hakkında\nşeffaf bilgi.",
    "description": "Bu sitede çerezlerin ve tarayıcı depolamasının nasıl kullanıldığına ilişkin açıklama.",
    "sections": [
      {
        "id": "tanim",
        "title": "Çerez ve tarayıcı depolaması nedir?",
        "paragraphs": [
          "Çerezler, web siteleri tarafından tarayıcınızda tutulabilen küçük kayıtlardır. localStorage ise tarayıcıda ziyaretler arasında kalabilen bir depolama alanıdır; HTTP çerezi ile aynı teknoloji değildir. Bu sayfa, sitemizdeki bildirim kaydını da şeffaflık amacıyla açıklar."
        ]
      },
      {
        "id": "kullanim",
        "title": "Bu sitede neler kullanılıyor?",
        "paragraphs": [
          "SAD uygulaması reklam, analitik veya sosyal medya takibi için çerez oluşturmaz. Google Analytics, reklam pikseli ve benzeri ziyaretçi izleme araçları kullanılmaz. Yazı tipleri ve görseller kendi adresimizden sunulur; gömülü harita ve video bulunmaz.",
          "Barındırma ve ağ altyapısında erişim ve güvenlik amacıyla teknik veri işlenmesi, reklam veya analitik çerez kullanımından farklıdır. Site Netlify üzerinden sunulur; teknik verilere ilişkin bilgiler KVKK Aydınlatma Metni’nde yer alır."
        ]
      },
      {
        "id": "bildirim",
        "title": "Bildirimi kapatma tercihi",
        "paragraphs": [
          "Çerez bilgilendirmesindeki “Kabul et” ve “Reddet” düğmelerinin ikisi de bildirimi kapatır. Seçiminiz tarayıcınızdaki localStorage alanında saklanır; aynı tarayıcı ve site adresindeki sonraki ziyaretlerinizde bildirim yeniden gösterilmez. Düğmelerden herhangi birine basmanız reklam, analitik veya yurt dışına veri aktarımı için açık rıza verdiğiniz anlamına gelmez.",
          "Bu kayıt kişisel kimlik, e-posta, telefon, mesaj veya kullanıcı hareketi içermez. Kayıt SAD sunucusuna gönderilmez ve ziyaretçi profili oluşturmak için kullanılmaz."
        ]
      },
      {
        "id": "envanter",
        "title": "Tarayıcı depolama kaydı",
        "items": [
          `Kayıt adı: ${COOKIE_NOTICE_KEY}.`,
          "Sağlayıcı: SAD; kayıt sitenin kendi kökenindeki tarayıcı depolama alanında tutulur.",
          "Amaç: tercih yapıldıktan sonra bilgilendirmeyi sonraki ziyaretlerde tekrar göstermemek.",
          "Teknoloji: localStorage. İçerik: bildirim sürümü, kapatma bilgisi ve kabul/ret tercihi.",
          "Süre: tarayıcının site verileri silinene kadar. Uygulama tarafından gün veya ay bazında otomatik süre sonu uygulanmaz.",
          "Önceki sürümden kalan geçerli sekme oturumu kaydı varsa localStorage alanına taşınır. localStorage kullanılamıyorsa yalnızca mevcut sekme oturumu için sessionStorage kullanılmaya çalışılır."
        ]
      },
      {
        "id": "yonetim",
        "title": "Tercihinizi nasıl yönetebilirsiniz?",
        "paragraphs": [
          "Tarayıcınızın site verilerini temizleyerek bildirim kaydını silebilirsiniz. Site verilerini silerseniz, farklı tarayıcı veya cihaz kullanırsanız ya da farklı alan adından girerseniz bildirim yeniden gösterilebilir. Tarayıcı depolamasını engellemeniz halinde tercih kalıcı hatırlanamayabilir; site içeriğine erişiminiz buna bağlı değildir.",
          "Harici bağlantılarla ziyaret ettiğiniz sitelerdeki çerezler, ilgili sitenin koşullarına tabidir. Sitemize yeni bir izleme teknolojisi eklenirse bu sayfa güncellenir ve gerektiğinde teknoloji çalıştırılmadan önce ayrı bir tercih mekanizması sunulur."
        ]
      }
    ],
    "sources": [
      {
        "label": "KVKK / Çerez Uygulamaları Hakkında Rehber",
        "href": "https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber"
      }
    ]
  },
  {
    "path": "/kullanim-kosullari/",
    "label": "Kullanım Koşulları",
    "title": "Bilgilendirme ve\nkullanım koşulları.",
    "description": "SAD web sitesindeki bilgilerin niteliği ve web sitesinin kullanım esasları.",
    "sections": [
      {
        "id": "isletmeci",
        "title": "Web sitesinin işletmecisi",
        "paragraphs": [
          "Bu web sitesi, SAD markasıyla faaliyet gösteren şahıs işletmesi sahibi Sıtkı Arslan tarafından sunulur. İşletme ve iletişim bilgileri aşağıda yer alır. Site üzerinden online hizmet satın alma, ödeme veya üyelik işlemi yapılmaz."
        ]
      },
      {
        "id": "bilgi",
        "title": "İçeriğin niteliği",
        "paragraphs": [
          "Finansal yönetim, Finansal Yeniden Yapılandırma (FYY) ve sık sorulan sorulara ilişkin açıklamalar genel bilgilendirme amacı taşır. Belirli bir işletmenin mali, hukuki veya vergisel durumu hakkında hazırlanmış kişisel görüş veya değerlendirme yerine geçmez.",
          "Bir işletmenin FYY’ye uygunluğu, kullanılabilecek tedbirler ve süreç, güncel mevzuat, ilgili çerçeve anlaşması, işletmenin koşulları ve alacaklı kuruluşların değerlendirmeleri doğrultusunda belirlenir. Site içeriğine dayanarak işletmenize özel değerlendirme yapılmaksızın karar verilmemelidir."
        ]
      },
      {
        "id": "danismanlik",
        "title": "Danışmanlık ilişkisi ve sonuçlar",
        "paragraphs": [
          "Siteyi ziyaret etmek, telefon etmek veya bilgi talebi iletmek tek başına danışmanlık sözleşmesi oluşturmaz. Hizmetin kapsamı, ücretlendirme, tarafların sorumlulukları ve belge paylaşım yöntemi ayrıca belirlenir.",
          "Sitedeki açıklamalar başvurunun kabulü, borç indirimi, ek kredi tahsisi, belirli bir tamamlanma süresi veya ticari sonuç garantisi değildir. İlk iletişim aşamasında yalnızca görüşmenin yapılması için gerekli bilgileri paylaşın."
        ]
      },
      {
        "id": "kullanim",
        "title": "Uygun kullanım",
        "paragraphs": [
          "Siteyi hukuka aykırı amaçlarla, başkalarının haklarını ihlal etmek, yetkisiz erişim sağlamak, zararlı yazılım iletmek veya hizmetin çalışmasını engellemek için kullanmayın. İletişim kanallarından paylaştığınız bilgilerin doğru ve paylaşmaya yetkili olduğunuz bilgiler olması gerekir."
        ]
      },
      {
        "id": "fikri-haklar",
        "title": "İçerik ve fikri haklar",
        "paragraphs": [
          "SAD’a ait logo, özgün metin ve tasarımlar ilgili fikri mülkiyet mevzuatı kapsamında korunur. Kanunen izin verilen kullanımlar ve alıntı hakları saklıdır; bunların dışında çoğaltma veya ticari kullanım için hak sahibinin izni gerekir. Üçüncü taraf yazılım ve içeriklerin hakları ilgili sahiplerine aittir."
        ]
      },
      {
        "id": "dis-kaynak",
        "title": "Dış kaynaklar ve güncellik",
        "paragraphs": [
          "TBB, resmî kurumlar, harita hizmetleri ve diğer dış sitelere verilen bağlantılar ilgili hizmetlere yönlendirir. Bu sitelerin içerikleri ve koşulları kendi sağlayıcılarına aittir. Finansal uygulamalar ve mevzuat değişebileceği için bir işlem öncesinde güncel resmî kaynaklar esas alınmalıdır.",
          "Sitede hata veya güncelliğini yitirmiş bir bilgi fark ederseniz bilgi@sitkiarslan.com adresine bildirebilirsiniz."
        ]
      },
      {
        "id": "sorumluluk",
        "title": "Kanuni haklar ve sorumluluk",
        "paragraphs": [
          "Web sitesinin her zaman kesintisiz veya hatasız çalışacağı garanti edilmez. Bu koşullar SAD’ın kanunen kaldırılamayan sorumluluklarını, emredici mevzuattan doğan yükümlülüklerini veya kullanıcıların kanuni haklarını ortadan kaldırmaz.",
          "Kişisel verilerinize ilişkin haklarınız ve başvuru yöntemleri KVKK Aydınlatma Metni’nde; teknik gizlilik ve depolama uygulamaları Gizlilik Politikası ile Çerez Politikası’nda açıklanır."
        ]
      }
    ]
  }
];
