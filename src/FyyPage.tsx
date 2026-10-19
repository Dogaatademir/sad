import { ArrowIcon } from './ArrowIcon';
import { ContactCallout } from './ContactCallout';

const options = [
  ['Ödeme takviminin düzenlenmesi', 'Kredi vadelerinin uzatılması ve geri ödemelerin işletmenin nakit akışıyla birlikte değerlendirilmesi.'],
  ['Kredilerin yenilenmesi', 'Mevcut kredi borçlarının, ilgili çerçeve anlaşması ve alacaklı kuruluşlarla sağlanacak mutabakat kapsamında yeniden ele alınması.'],
  ['Finansman seçeneklerinin incelenmesi', 'İlgili uygulamanın izin verdiği ve alacaklıların uygun gördüğü koşullarda ilave finansman seçeneklerinin değerlendirilmesi.'],
];
const steps = [
  ['Mevcut durumu anlamak', 'Mali tablolar, kredi bakiyeleri, teminatlar ve ödeme takvimi bir araya getirilir. İşletmenin faaliyetleri ve finansman ihtiyacı değerlendirilir.'],
  ['Uygulanabilir bir plan hazırlamak', 'Nakit akışı öngörüleri ve geri ödeme senaryoları çalışılır. Yapılandırma sonrasında borç ödeme kapasitesinin nasıl oluşacağı ortaya konur.'],
  ['Başvuru ve görüşmeleri yürütmek', 'İlgili alacaklı kuruluşa başvuru yapılır. Dosya değerlendirilir; koşullar ve ödeme planı alacaklı kuruluşlarla görüşülür.'],
  ['Mutabakatı uygulamak ve izlemek', 'Gerekli onaylar sağlanırsa sözleşme imzalanır. Ödeme planı ve sözleşmedeki yükümlülükler uygulama boyunca takip edilir.'],
];
const questions = [
  ['FYY, tüm borçları kapsar mı?', 'FYY’nin odağında ilgili finansal kuruluşlara olan kredi borçları bulunur. Her borcun kendiliğinden kapsama girdiği varsayılamaz; kapsam, alacaklılar ve geçerli anlaşma üzerinden belirlenir.'],
  ['Başvuru, yapılandırmanın kabul edildiği anlamına gelir mi?', 'Hayır. Başvuru değerlendirme sürecinin bir adımıdır. Yapılandırma, işletmenin mali durumuna ve ilgili alacaklı kuruluşların gerekli onaylarına bağlıdır.'],
  ['Borç indirimi veya yeni kredi kesin midir?', 'Hayır. Borçtan vazgeçme ya da ilave kredi sağlama zorunluluğu yoktur. Seçenekler, ilgili uygulamanın koşulları ve alacaklıların kararları kapsamında değerlendirilir.'],
  ['Süreç ne kadar sürer?', 'Takvim; uygulanacak çerçeve anlaşmasına, dosyanın niteliğine ve alacaklı kuruluşların değerlendirmelerine göre şekillenir. İşletmenin belgelerinin hazır olması planlamayı kolaylaştırır.'],
];

export function FyyPage() {
  return <main id="main" className="fyy-page">
    <section className="fyy-page-hero" aria-labelledby="fyy-heading">
      <div className="hero-top"><span className="eyebrow">SAD / FYY NEDİR?</span><span className="hero-index">İŞLETMENİZİN GELECEĞİ İÇİN</span></div>
      <h1 id="fyy-heading">Finansal yeniden<br/><span>yapılandırma.</span></h1>
      <div className="fyy-page-definition"><span className="eyebrow">FYY’YE YAKINDAN BAKIŞ</span><div><p>Finansal Yeniden Yapılandırma (FYY), işletmelerin banka ve ilgili finansal kuruluşlara olan kredi borçlarının çerçeve anlaşmaları ve sözleşmeler kapsamında yeniden düzenlenmesidir.</p><p>Amaç, geri ödemede güçlük yaşayan veya yaşaması beklenen işletmelerin ödeme kapasitesini yeniden kazanmasına ve faaliyetlerini sürdürmesine destek olmaktır.</p></div></div>
      <nav className="fyy-page-anchors" aria-label="Sayfa içi gezinme"><a href="#kapsam">Kapsam <ArrowIcon direction="down" /></a><a href="#surec">Süreç <ArrowIcon direction="down" /></a><a href="#fyy-sorular">Sık sorulan sorular <ArrowIcon direction="down" /></a></nav>
    </section>
    <section id="kapsam" className="fyy-page-section" aria-labelledby="scope-heading"><div className="about-section-intro"><span className="eyebrow">01 / KAPSAM</span><h2 id="scope-heading">Neler<br/><span>değerlendirilebilir?</span></h2></div><div className="fyy-options">{options.map(([title, text], index) => <article key={title}><span className="fyy-item-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}<p className="fyy-small-note">Uygulanabilecek seçenekler her işletmede aynı değildir. İşletmenin durumu, ilgili çerçeve anlaşması ve alacaklıların kararları birlikte belirleyicidir.</p></div></section>
    <section className="fyy-page-section" aria-labelledby="eligibility-heading"><div className="about-section-intro"><span className="eyebrow">02 / UYGUNLUK</span><h2 id="eligibility-heading">İşletmeniz için<br/><span>uygun mu?</span></h2></div><div className="fyy-editorial-copy"><p>İlgili finansal kuruluşlara kredi borcu bulunan ticari işletmeler için değerlendirilebilir. Başlangıç noktası; borç yapısının, alacaklı kuruluşların ve işletmenin mali durumunun incelenmesidir.</p><p>Yapılandırmanın ardından geri ödeme kapasitesinin oluşabileceğinin değerlendirilmesi önemlidir. Başvuru koşulları ve kapsam dışı durumlar, geçerli mevzuat ve ilgili çerçeve anlaşması üzerinden kontrol edilir.</p></div></section>
    <section id="surec" className="fyy-page-section" aria-labelledby="process-heading"><div className="about-section-intro"><span className="eyebrow">03 / SÜREÇ</span><h2 id="process-heading">Analizden<br/><span>uygulamaya.</span></h2><p className="fyy-section-caption">SAD’ın süreci ele alma yaklaşımı.</p></div><ol className="fyy-process">{steps.map(([title, text], index) => <li key={title}><span className="fyy-item-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <section className="fyy-page-section fyy-preparation" aria-labelledby="preparation-heading"><div className="about-section-intro"><span className="eyebrow">04 / HAZIRLIK</span><h2 id="preparation-heading">İlk görüşme için<br/><span>bir başlangıç.</span></h2></div><div className="fyy-editorial-copy"><p>İhtiyacı anlamak ve görüşmeyi somut verilerle ilerletmek için aşağıdaki belgeler yararlı bir başlangıç oluşturur.</p><ul className="fyy-document-list"><li>Güncel mali tablolar</li><li>Kredi bakiyeleri ve ödeme takvimi</li><li>Teminat ve kefalet bilgileri</li><li>Nakit akışı öngörüsü ve faaliyet planı</li></ul><p className="fyy-small-note">İhtiyaç duyulan belgeler işletmenizin durumuna göre ilk değerlendirmede netleştirilir.</p></div></section>
    <section id="fyy-sorular" className="fyy-page-section" aria-labelledby="faq-heading"><div className="about-section-intro"><span className="eyebrow">05 / SIK SORULAN SORULAR</span><h2 id="faq-heading">Karar vermeden<br/><span>önce.</span></h2></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <div className="fyy-closing">
    <ContactCallout />
    <aside className="fyy-page-sources" aria-label="Bilgi kaynakları"><span className="eyebrow">BİLGİ KAYNAKLARI</span><div><a href="https://www.tbb.org.tr/finansal-yeniden-yapilandirma" target="_blank" rel="noreferrer">Türkiye Bankalar Birliği / FYY dokümanları <ArrowIcon /></a><a href="https://www.cfofinans.com/finansal-yeniden-yapilandirma-fyy/" target="_blank" rel="noreferrer">CFO Finans / FYY bilgilendirmesi <ArrowIcon /></a><p>Bu sayfa genel bilgilendirme amacı taşır. Başvuru uygunluğu ve uygulanabilecek koşullar, güncel mevzuat ve ilgili çerçeve anlaşmasına göre işletme özelinde değerlendirilir.</p></div></aside>
    </div>
  </main>;
}
