import { usePageMotion } from '../hooks/usePageMotion';
import { ArrowIcon } from '../components/ArrowIcon';

const services = [
  ['Analiz', 'Borç yapısı, ödeme takvimi ve nakit akışının birlikte incelenmesi.'],
  ['Planlama', 'İşletmenin faaliyet döngüsünü esas alan ödeme senaryolarının hazırlanması.'],
  ['Başvuru', 'Finansal projeksiyonların ve başvuru dosyasının bir araya getirilmesi.'],
  ['Takip', 'Alacaklı kuruluşlarla görüşmelerin ve planın uygulanmasının takibi.'],
];


export function HomePage() {
  usePageMotion('.section-heading, .fyy-explanation, .balance-art, .process-heading, .process-steps', 'reveal', 'visible');
  return <main id="main" tabIndex={-1} className="home-page">
      <section className="image-hero" aria-labelledby="hero-heading">
        <img className="hero-image" src="/hero-sad.webp" alt="" width="1672" height="940" fetchPriority="high" decoding="async"/>
        <div className="hero-top"><span className="eyebrow"></span><span className="hero-index">SITKI ARSLAN DANIŞMANLIK</span></div>
        <div className="hero-content">
          <h1 id="hero-heading"><span className="hero-line">Finansal Yönetim</span><span className="hero-line">Danışmanlığı.</span></h1>
          <div className="hero-message">
            <p>Kredi geri ödemelerinde güçlük yaşayan veya yaşama ihtimali olan işletmelerin ödeme kapasitesini yeniden kazanmasına ve faaliyetlerini sürdürmesine destek olmayı amaçlıyoruz.</p>
            <a className="hero-cta" href="/iletisim/">Bizimle iletişime geçin <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-bottom">
          <p>25 yılı aşan bankacılık deneyimi.</p>
         </div>
      </section>
      <section id="fyy" className="work-section">
        <div className="section-heading"><h2 className="eyebrow home-section-label">01 / FYY NEDİR?</h2><span className="eyebrow muted"></span></div>
        <div className="fyy-grid">
          <div className="fyy-explanation"><h3>İşiniz devam etsin.<br/><span>Planınız yenilensin.</span></h3><p>Finansal Yeniden Yapılandırma (FYY), işletmelerin finansal sektöre (bankalar, finansal kiralama şirketleri, faktoring şirketleri ve finansman şirketleri) olan kredi borçlarına ilişkin olarak, çerçeve anlaşma ve sözleşmeleri kapsamında alınacak tedbirlerle, geri ödeme yükümlülüklerini yerine getirebilmelerine ve istihdama katkıda bulunmaya devam etmelerine imkân verilmesini sağlayan özel bir uygulamadır.</p><p></p><a href="/fyy-nedir/" className="text-link">FYY hakkında bilgi edinin <ArrowIcon /></a></div>
          <div className="balance-art" role="img" aria-label="Denge ve finansal sürdürülebilirliği temsil eden soyut mimari kompozisyon; finansal performans grafiği değildir."><span className="eyebrow">SAD / PERSPEKTİF</span><div className="balance-structure" aria-hidden="true"><div className="balance-beam"><div className="balance-circle"/></div><div className="balance-pillar"/><div className="balance-ground"/></div><div className="balance-caption"><span>DENGE,<br/>YENİDEN.</span><span>FİNANSAL<br/>SÜRDÜRÜLEBİLİRLİK İÇİN.</span></div></div>
        </div>
      </section>
      <section id="yaklasim" className="approach approach-process" aria-labelledby="approach-heading">
        <div className="process-heading">
          <h2 className="eyebrow home-section-label">02 / YAKLAŞIMIMIZ</h2>
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
    </main>;
}
