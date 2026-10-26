import { sourceLinks } from '../data/sourceLinks';
import { usePageMotion } from '../hooks/usePageMotion';
import { ArrowIcon } from '../components/ArrowIcon';

const options = [
  ['Vadelerin uzatılması', 'Söz konusu kredi borçlarının vadelerini uzatmak.'],
  ['Kredilerin yenilenmesi', 'Borçluların kredilerini yenilemek.'],
  ['İlave kredi verilmesi', 'Borçlulara ilave kredi vermek.'],
  ['Alacakların indirilmesi veya bunlardan vazgeçilmesi', 'Anapara, faiz, temerrüt faizi ve kâr payları ile kredi ilişkisinden doğan diğer her türlü alacağı indirmek veya bunlardan vazgeçmek.'],
  ['Alacakların dönüştürülmesi, devri ve tasfiyesi', 'Anapara, faiz veya kâr payı alacaklarını; kısmen veya tamamen iştirake çevirmek, aynî, nakdî ya da tahsil şartına bağlı bir bedel karşılığı devir veya temlik etmek, borçlu ya da üçüncü kişilere ait aynî değerler karşılığında kısmen veya tamamen tasfiye etmek, satmak, bilanço dışına çıkarmak.'],
  ['Ortak protokoller yapılması', 'Diğer bankalarla ve alacaklılarla birlikte hareket ederek protokoller yapmak.'],
];
const eligibility = [
  'Yükümlülüklerinin önemli bölümü piyasaya değil, finansal sektöre olan,',
  'Finansal sektöre olan ödemelerinde gecikmeye düşen ya da gecikmeye düşme ihtimali bulunan,',
  'Finansal sektöre olan yükümlülükleri farklı nedenlerle kısa vadeye yığılmış olan,',
  'İşletmenin ve/veya işletmenin dahil olduğu risk grubunun öz varlığı toplam yükümlülüklerini karşılayabilen,',
  'Çerçeve anlaşmalar kapsamında alınacak tedbirler ve imzalanacak bir Finansal Yeniden Yapılandırma Sözleşmesi ile finansal güçlüğünü aşacak somut bir “çıkış planına” sahip,',
  'Borçlarını iyi niyetle ödeme ve istihdama devam etme iradesi olan işletmeler.',
];
const steps = [
  ['Mevcut durumu değerlendirmek', 'Mali tablolar, kredi ödeme planları ve teminatlar göz önüne alınarak bilanço içi ve dışı varlık ve yükümlülükler bir bütün olarak değerlendirilir.'],
  ['Uygulanabilir bir plan hazırlamak', 'Bilanço içi ve dışı tüm varlıklar ve nakit akış tabloları dikkate alınarak alternatif senaryolar çalışılır ve uygulanabilir bir plan hazırlanır.'],
  ['Başvuru ve görüşmeleri yürütmek', 'FYY için uygun kriterlere sahip olunduğu teyit edildiğinde mevzuat çerçevesinde ilgili alacaklı kuruluşa usulünce başvuru yapılır. FYY anlaşması imzalama süreci sonuçlanana kadar alacaklı kuruluşla veya kuruluşlarla müzakerelere aktif destek sağlanır.'],
];


export function FyyPage() {
  usePageMotion('.about-section-intro, .fyy-options article, .fyy-editorial-copy, .fyy-process li, .fyy-page-sources');
  return <main id="main" tabIndex={-1} className="fyy-page">
    <section className="fyy-page-hero" aria-labelledby="fyy-heading">
      <div className="hero-top"><span className="eyebrow">SAD / FYY NEDİR?</span><span className="hero-index">İŞLETMENİZİN FİNANSAL SÜRDÜRÜLEBİLİRLİĞİ İÇİN</span></div>
      <h1 id="fyy-heading">Finansal Yeniden<br/><span>Yapılandırma.</span></h1>
      <div className="fyy-page-definition"><span className="eyebrow">FYY’YE YAKINDAN BAKIŞ</span><div><p>Finansal Yeniden Yapılandırma (FYY), işletmelerin finansal sektöre (bankalar, finansal kiralama şirketleri, faktoring şirketleri ve finansman şirketleri) olan kredi borçlarına ilişkin olarak, çerçeve anlaşma ve sözleşmeleri kapsamında alınacak tedbirlerle, geri ödeme yükümlülüklerini yerine getirebilmelerine ve istihdama katkıda bulunmaya devam etmelerine imkân verilmesini sağlayan özel bir uygulamadır.</p><p>5411 sayılı Bankacılık Kanunu’nun geçici 32. maddesi kapsamında düzenlenen Finansal Yeniden Yapılandırma ile ilgili mevzuata <a href={sourceLinks.tbb} target="_blank" rel="noreferrer">Türkiye Bankalar Birliği’nin FYY sayfasından</a> ulaşabilirsiniz.</p><p>Amaç, geri ödemede güçlük yaşayan veya yaşama ihtimali olan işletmelerin ödeme kapasitesini yeniden kazanmasına ve faaliyetlerini sürdürmesine destek olmaktır.</p></div></div>
      <nav className="fyy-page-anchors" aria-label="Sayfa içi gezinme"><a href="#kapsam">Kapsam <ArrowIcon direction="down" /></a><a href="#uygunluk">Uygunluk <ArrowIcon direction="down" /></a><a href="#surec">Süreç <ArrowIcon direction="down" /></a><a href="#hazirlik">Hazırlık <ArrowIcon direction="down" /></a></nav>
    </section>
    <section id="kapsam" className="fyy-page-section" aria-labelledby="scope-heading"><div className="about-section-intro"><span className="eyebrow">01 / KAPSAM</span><h2 id="scope-heading">Öngörülen<br/><span>tedbirler.</span></h2></div><div className="fyy-options"><p className="fyy-options-intro">Çerçeve anlaşmaları ve sözleşmeleri kapsamında aşağıdaki tedbirler alınabilir:</p>{options.map(([title, text], index) => <article key={title}><span className="fyy-item-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}<p className="fyy-small-note">Uygulanabilecek seçenekler her işletmede aynı değildir. İşletmenin durumu, ilgili çerçeve anlaşması ve alacaklıların kararları birlikte belirleyicidir.</p></div></section>
    <section id="uygunluk" className="fyy-page-section" aria-labelledby="eligibility-heading"><div className="about-section-intro"><span className="eyebrow">02 / UYGUNLUK</span><h2 id="eligibility-heading">İşletmeniz için<br/><span>uygun mu?</span></h2></div><div className="fyy-editorial-copy"><p>Her işletmenin durumu kendi iç dinamikleri ile ayrıntılı olarak değerlendirilmek zorunda olsa da, FYY’nin ruhuna uygun işletme profilinin aşağıdaki kriterleri taşıdığını söylemek mümkündür:</p><ul className="fyy-document-list">{eligibility.map(item => <li key={item}>{item}</li>)}</ul><p className="fyy-small-note">Başvuru uygunluğu, güncel mevzuat ve ilgili çerçeve anlaşması kapsamında işletme özelinde değerlendirilir.</p></div></section>
    <section id="surec" className="fyy-page-section" aria-labelledby="process-heading"><div className="about-section-intro"><span className="eyebrow">03 / SÜREÇ</span><h2 id="process-heading">Analizden<br/><span>uygulamaya.</span></h2><p className="fyy-section-caption">SAD’ın süreci ele alma yaklaşımı.</p></div><ol className="fyy-process">{steps.map(([title, text], index) => <li key={title}><span className="fyy-item-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <section id="hazirlik" className="fyy-page-section fyy-preparation" aria-labelledby="preparation-heading"><div className="about-section-intro"><span className="eyebrow">04 / HAZIRLIK</span><h2 id="preparation-heading">İlk görüşme için<br/><span>bir başlangıç.</span></h2></div><div className="fyy-editorial-copy"><p>İhtiyacı anlamak ve görüşmeyi somut verilerle ilerletmek için aşağıdaki belgeler yararlı bir başlangıç oluşturur.</p><ul className="fyy-document-list"><li>Güncel mali tablolar</li><li>Kredi bakiyeleri ve ödeme takvimi</li><li>Teminat ve kefalet bilgileri</li><li>Nakit akışı öngörüsü ve faaliyet planı</li></ul><p className="fyy-small-note">İşletmeniz özelinde ihtiyaç duyulabilecek diğer belgeler ilk değerlendirmenin ardından netleştirilir.</p></div></section>

    <aside className="fyy-page-sources" aria-label="Bilgi kaynakları"><span className="eyebrow">BİLGİ KAYNAKLARI</span><div><a href={sourceLinks.tbb} target="_blank" rel="noreferrer">Türkiye Bankalar Birliği / FYY dokümanları <ArrowIcon /></a><p>Bu sayfa genel bilgilendirme amacı taşır. Başvuru uygunluğu ve uygulanabilecek koşullar, güncel mevzuat ve ilgili çerçeve anlaşmasına göre işletme özelinde değerlendirilir.</p></div></aside>
  </main>;
}
