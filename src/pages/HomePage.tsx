import { homeQuestions } from '../data/faqContent';
import { sourceLinks } from '../data/sourceLinks';
import { usePageMotion } from '../hooks/usePageMotion';
import { ArrowIcon } from '../components/ArrowIcon';
import { ContactCallout } from '../components/ContactCallout';

const services = [
  ['Analiz', 'Borç yapısı, ödeme takvimi ve nakit akışının birlikte incelenmesi.'],
  ['Planlama', 'İşletmenin faaliyet döngüsünü esas alan ödeme senaryolarının hazırlanması.'],
  ['Başvuru', 'Finansal projeksiyonların ve başvuru dosyasının bir araya getirilmesi.'],
  ['Takip', 'Alacaklı kuruluşlarla görüşmelerin ve planın uygulanmasının takibi.'],
];


export function HomePage() {
  usePageMotion('.section-heading, .fyy-explanation, .balance-art, .process-heading, .process-steps, .faq-section', 'reveal', 'visible');
  return <main id="main" tabIndex={-1} className="home-page">
      <section className="image-hero" aria-labelledby="hero-heading">
        <img className="hero-image" src="/hero-architecture.jpg" alt="" width="1586" height="992" fetchPriority="high" decoding="async"/>
        <div className="hero-top"><span className="eyebrow">İŞLETMELER İÇİN FYY DANIŞMANLIĞI</span><span className="hero-index">SITKI ARSLAN DANIŞMANLIK</span></div>
        <div className="hero-content">
          <h1 id="hero-heading"><span className="hero-line">Finansal yeniden</span><span className="hero-line">yapılandırma.</span></h1>
          <div className="hero-message">
            <p>Kredi geri ödemelerinde güçlük yaşayan işletmelere; borç analizi, yapılandırma planı ve alacaklı kuruluşlarla görüşme süreçlerinde danışmanlık sunuyoruz.</p>
            <a className="hero-cta" href="/iletisim/">Bizimle iletişime geçin <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-bottom">
          <p>25 yılı aşan bankacılık deneyimi.</p>
          <span className="hero-signature">SAD / FYY</span>
        </div>
      </section>
      <section id="fyy" className="work-section">
        <div className="section-heading"><h2><span className="tiny-number">01 /</span> Yeniden yapılanmak, ileriye bakmaktır.</h2><span className="eyebrow muted">FİNANSAL BİR YOL HARİTASI</span></div>
        <div className="fyy-grid">
          <div className="fyy-explanation"><span className="eyebrow muted">FYY NEDİR?</span><h3>İşiniz devam etsin.<br/><span>Planınız yenilensin.</span></h3><p>Finansal yeniden yapılandırma, kredi borçlarının finansal kuruluşlarla çerçeve anlaşmaları kapsamında yeniden düzenlenmesidir.</p><p>Ödeme güçlüğü yaşayan veya yaşaması beklenen işletmelerde, borç takviminin geri ödeme kapasitesiyle uyumlu hale getirilmesini amaçlar.</p><a href="/fyy-nedir/" className="text-link">FYY hakkında bilgi edinin <ArrowIcon /></a></div>
          <div className="balance-art" role="img" aria-label="Denge ve devamlılığı temsil eden soyut mimari kompozisyon; finansal performans grafiği değildir."><span className="eyebrow">SAD / PERSPEKTİF</span><div className="balance-structure" aria-hidden="true"><div className="balance-circle"/><div className="balance-beam"/><div className="balance-pillar"/><div className="balance-ground"/></div><div className="balance-caption"><span>DENGE,<br/>YENİDEN.</span><span>FİNANSAL<br/>DEVAMLILIK İÇİN.</span></div></div>
        </div>
      </section>
      <section id="yaklasim" className="approach approach-process" aria-labelledby="approach-heading">
        <div className="process-heading">
          <h2 className="eyebrow">02 / YAKLAŞIMIMIZ</h2>
          <div className="process-intro">
            <h3 id="approach-heading">Önce anlayalım.<br/><span>Sonra planlayalım.</span></h3>
            <p>Sıtkı Arslan tarafından kurulan SAD’da, 25 yılı aşan bankacılık deneyimini işletmenizin finansal ihtiyaçlarıyla buluşturuyoruz. Analizden uygulamaya uzanan bir yol haritası oluşturuyoruz.</p>
          </div>
        </div>
        <ol className="process-steps">
          {services.map(([service, description], index) => <li className="process-step" key={service}>
            <span className="process-number" aria-hidden="true">0{index + 1}</span>
            <h4>{service}</h4>
            <p>{description}</p>
          </li>)}
        </ol>
      </section>
      <section id="sorular" className="faq-section"><div className="faq-heading"><h2 className="eyebrow">03 / SIK SORULAN SORULAR</h2><p>Doğru sorular.<br/><span>Net bir başlangıç.</span></p></div><div className="faq-list">{homeQuestions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}<div className="source-note">FYY hakkında: <a href={sourceLinks.tbb} target="_blank" rel="noreferrer">Türkiye Bankalar Birliği / FYY dokümanları <ArrowIcon /></a><p>Genel bilgilendirmedir. Başvuru koşulları ve uygulanabilecek seçenekler, güncel mevzuat ve ilgili çerçeve anlaşması kapsamında ayrıca değerlendirilir.</p></div></div></section>
      <ContactCallout />
    </main>;
}
