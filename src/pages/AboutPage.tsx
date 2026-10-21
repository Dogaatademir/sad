import { usePageMotion } from '../hooks/usePageMotion';
import { ContactCallout } from '../components/ContactCallout';

const career = [
  { date: '1998 — 2007', title: 'Denetim ve mali analiz', text: 'Türkiye İş Bankası Teftiş Kurulu’nda müfettiş yardımcılığı ve müfettişlik; şube ve genel müdürlük birimlerinde denetim çalışmaları.' },
  { date: '2007 — 2019', title: 'Ticari bankacılık ve yönetim', text: 'Başkent Şubesi’nde müdür yardımcılığı; Anafartalar, Ostim ve Ostim Ticari şubelerinde müdürlük. Ardından Ankara 2. Bölge Satış Müdürlüğü.' },
  { date: '2019 — 2024', title: 'Kredi tahsisi ve izleme', text: 'KOBİ Kredileri Tahsis Ankara 1. ve 2. Bölge Müdürlükleri ile Krediler İzleme Ankara Bölge Müdürlüğü. Kredi tekliflerinin değerlendirilmesi ve portföy yönetimi.' },
  { date: '2024’TEN BUGÜNE', title: 'SAD ve kurumsal danışmanlık', text: 'Haziran 2024’te SAD – Sıtkı Arslan Danışmanlık ile finansal hizmetler ve FYY süreç danışmanlığı. Eğitim sektöründe Mayıs 2024–Ocak 2025, makine sektöründe Şubat 2025–Temmuz 2026 dönemlerinde yönetim kurulu danışmanlığı.' },
];

export function AboutPage() {
  usePageMotion('.founder-portrait, .founder-biography, .about-section-intro, .career-list article, .about-principles-copy, .contact-callout');
  return <main id="main" tabIndex={-1} className="about-page">
    <section className="about-hero" aria-labelledby="about-heading">
      <div className="hero-top"><span className="eyebrow">SAD / HAKKIMIZDA</span><span className="hero-index">DENEYİMDEN GELECEĞE</span></div>
      <h1 id="about-heading">Deneyimle şekillenen<br/><span>bir bakış.</span></h1>
      <div className="about-introduction"><span className="eyebrow">SITKI ARSLAN DANIŞMANLIK</span><div><p>SAD, Sıtkı Arslan tarafından Haziran 2024’te, bankacılık ve finans alanındaki birikimini işletmelerin finansal kararlarına taşımak amacıyla kuruldu. Finansal hizmetler danışmanlığı ve özellikle Finansal Yeniden Yapılandırma (FYY) süreçleri üzerine çalışıyoruz.</p><p>İşletmelerin finansal durumunu, faaliyetlerini ve ödeme kapasitesini birlikte ele alıyoruz. Hedefimiz; mevcut tabloyu anlaşılır kılmak, seçenekleri değerlendirmek ve işletmenin koşullarına uygun bir yol haritası oluşturmaktır.</p></div></div>
    </section>
    <section className="founder-section" aria-labelledby="founder-heading">
      <div className="founder-portrait"><img src="/sitki-arslan-restored.jpg" alt="SAD kurucusu Sıtkı Arslan" width="436" height="369" loading="lazy"/><span className="eyebrow">KURUCUMUZ</span></div>
      <div className="founder-biography"><span className="eyebrow">01 / KURUCUMUZ</span><h2 id="founder-heading">Sıtkı Arslan</h2><p className="founder-role">SAD Kurucusu · Finansal Danışman</p><p>Sıtkı Arslan, 1998 yılında ODTÜ İşletme Bölümü’nden mezun oldu. 2003 yılında Londra’daki The City University’de Bankacılık ve Finans yüksek lisansını “Distinction” derecesiyle, bölüm ikincisi olarak tamamladı.</p><p>1998’de Türkiye İş Bankası Teftiş Kurulu’nda başlayan kariyeri boyunca denetim, ticari bankacılık, şube yönetimi, bölge satış yönetimi, kredi tahsisi ve kredi izleme alanlarında görev aldı. Nisan 2024’te bankadan emekli olmadan önce Krediler İzleme Ankara Bölge Müdürü olarak çalıştı.</p><p>Bankacılıkta 25 yılı aşan deneyimini bugün SAD çatısı altında finansal yeniden yapılandırma ve finansal danışmanlık süreçlerine aktarıyor. Yönetim kurulu danışmanlığı deneyimi ise finansal değerlendirmeleri şirketlerin yönetim ve operasyon ihtiyaçlarıyla birlikte ele alan yaklaşımını tamamlıyor.</p><div className="founder-education"><div><span>ODTÜ</span><p>İşletme · Lisans, 1998</p></div><div><span>THE CITY UNIVERSITY · LONDRA</span><p>Bankacılık ve Finans · Yüksek Lisans, 2003</p></div></div></div>
    </section>
    <section className="about-experience" aria-labelledby="experience-heading"><div className="about-section-intro"><span className="eyebrow">02 / MESLEKİ BİRİKİM</span><h2 id="experience-heading">Sahadan gelen<br/><span>bir perspektif.</span></h2></div><div className="career-list">{career.map(item => <article key={item.date}><span className="career-date">{item.date}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>
    <section className="about-principles" aria-labelledby="principles-heading"><div className="about-section-intro"><span className="eyebrow">03 / ÇALIŞMA YAKLAŞIMIMIZ</span><h2 id="principles-heading">Her işletmeyi<br/><span>kendi koşullarıyla.</span></h2></div><div className="about-principles-copy"><p>Finansal bir kararın etkisi, yalnızca bilanço üzerinde görülmez. Nakit akışı, operasyonlar ve işletmenin gelecek planları da bu kararın parçasıdır.</p><p>Bu nedenle sürece işletmeyi dinleyerek başlıyoruz. Verileri ve borç yapısını inceliyor, varsayımları netleştiriyor ve alternatifleri birlikte değerlendiriyoruz. Analizden müzakereye, planlamadan takibe kadar açık iletişimi ve uygulanabilirliği esas alıyoruz.</p></div></section>
    <div className="about-contact-callout"><ContactCallout /></div>
  </main>;
}
