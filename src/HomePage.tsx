import { useEffect } from 'react';
import { ArrowIcon } from './ArrowIcon';
import { ContactCallout } from './ContactCallout';

const services = [
  ['Finansal durum analizi', 'Borç yapısı, ödeme takvimi ve nakit akışının birlikte incelenmesi.'],
  ['Yapılandırma planı', 'İşletmenin faaliyet döngüsünü esas alan ödeme senaryolarının hazırlanması.'],
  ['Başvuru hazırlığı', 'Finansal projeksiyonların ve başvuru dosyasının bir araya getirilmesi.'],
  ['Müzakere & takip', 'Alacaklı kuruluşlarla görüşmelerin ve planın uygulanmasının takibi.'],
];
const questions = [
  ['FYY nedir?', 'Finansal yeniden yapılandırma; ticari kredi borçlarının, ilgili finansal kuruluşlarla çerçeve anlaşmaları kapsamında yeniden düzenlenmesidir. Amaç, işletmenin geri ödeme kapasitesi ile borç takvimini uyumlu hale getirmektir.'],
  ['Kimler için değerlendirilebilir?', 'Finansal kuruluşlara kredi borcu bulunan ve geri ödemede geçici güçlük yaşayan veya yaşaması beklenen ticari işletmeler için değerlendirilebilir. Uygunluk; mali durum, alacaklı kuruluşlar ve geçerli çerçeve anlaşması üzerinden incelenir.'],
  ['Hangi seçenekler gündeme gelebilir?', 'Vade uzatımı, kredilerin yenilenmesi ve koşulları karşılandığında ilave finansman gibi seçenekler değerlendirilebilir. Her seçenek işletmeye, ilgili anlaşmaya ve alacaklıların kararına bağlıdır.'],
  ['İlk görüşmeye nasıl hazırlanmalıyım?', 'Güncel mali tablolar, kredi ve teminat dökümü ile nakit akışı öngörüsü başlangıç için yararlı olur. İlk değerlendirmede ihtiyaç duyulacak belgeler netleştirilir.'],
];

export function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <main id="main">
      <section className="hero sad-hero" aria-labelledby="hero-heading">
        <div className="hero-top"><span className="eyebrow">FİNANSAL YENİDEN YAPILANDIRMA</span><span className="hero-index">SAD / KURUMSAL FİNANS</span></div>
        <h1 id="hero-heading">Yeni bir denge.<br/><span>Güçlü bir yarın.</span></h1>
        <div className="hero-bottom"><p><span className="hero-copy-desktop">Bugünün yükümlülüklerini,<br/>yarının <strong>olanaklarıyla</strong> birlikte ele alıyoruz.<br/>İşletmeniz için finansal yeniden yapılandırma.</span><span className="hero-copy-mobile">İşletmenizin finansal geleceği için net ve uygulanabilir bir yol haritası.</span></p><span className="vertical-note">SAD / FYY</span></div>
      </section>
      <section id="fyy" className="work-section">
        <div className="section-heading reveal"><h2><span className="tiny-number">01 /</span> Yeniden yapılanmak, ileriye bakmaktır.</h2><span className="eyebrow muted">FİNANSAL BİR YOL HARİTASI</span></div>
        <div className="fyy-grid">
          <div className="fyy-explanation reveal"><span className="eyebrow muted">FYY NEDİR?</span><h3>İşiniz devam etsin.<br/><span>Planınız yenilensin.</span></h3><p>Finansal yeniden yapılandırma, kredi borçlarının finansal kuruluşlarla çerçeve anlaşmaları kapsamında yeniden düzenlenmesidir.</p><p>Ödeme güçlüğü yaşayan veya yaşaması beklenen işletmelerde, borç takviminin geri ödeme kapasitesiyle uyumlu hale getirilmesini amaçlar.</p><a href="#yaklasim" className="text-link">Süreci tanıyın <ArrowIcon /></a></div>
          <div className="balance-art reveal" role="img" aria-label="Denge ve devamlılığı temsil eden soyut mimari kompozisyon; finansal performans grafiği değildir."><span className="eyebrow">SAD / PERSPEKTİF</span><div className="balance-structure" aria-hidden="true"><div className="balance-circle"/><div className="balance-beam"/><div className="balance-pillar"/><div className="balance-ground"/></div><div className="balance-caption"><span>DENGE,<br/>YENİDEN.</span><span>FİNANSAL<br/>DEVAMLILIK İÇİN.</span></div></div>
        </div>
      </section>
      <section id="yaklasim" className="approach">
        <div className="approach-intro reveal"><h2 className="eyebrow">02 / YAKLAŞIMIMIZ</h2></div>
        <div className="approach-content reveal"><h3>Önce anlayalım.<br/><span>Sonra planlayalım.</span></h3><div className="approach-description"><p>Her işletmenin finansal dengesi farklıdır. SAD’ın yaklaşımı; mevcut durumu görünür kılmak, seçenekleri netleştirmek ve uygulanabilir bir yol haritası oluşturmaktır.</p><p>Finansal yeniden yapılandırmayı tek bir işlem olarak değil; analizden uygulamaya uzanan, bütünlüklü bir süreç olarak ele alıyoruz.</p></div><div className="services sad-services">{services.map(([service, description], index) => <div key={service}><span>0{index + 1}</span><div><h4>{service}</h4><p>{description}</p></div><ArrowIcon /></div>)}</div></div>
      </section>
      <section id="sorular" className="faq-section reveal"><div className="faq-heading"><h2 className="eyebrow">03 / SIK SORULAN SORULAR</h2><p>Doğru sorular.<br/><span>Net bir başlangıç.</span></p></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}<div className="source-note">FYY hakkında: <a href="https://www.cfofinans.com/finansal-yeniden-yapilandirma-fyy/" target="_blank" rel="noreferrer">CFO Finans bilgilendirmesi <ArrowIcon /></a> · <a href="https://www.tbb.org.tr/fyy/buyukolcekli-072021.pdf" target="_blank" rel="noreferrer">TBB çerçeve anlaşması <ArrowIcon /></a><p>Genel bilgilendirmedir. Başvuru koşulları ve uygulanabilecek seçenekler, güncel mevzuat ve ilgili çerçeve anlaşması kapsamında ayrıca değerlendirilir.</p></div></div></section>
      <ContactCallout />
    </main>;
}
