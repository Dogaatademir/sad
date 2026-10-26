import { usePageMotion } from '../hooks/usePageMotion';

const career = [
  { date: '1998 — 2007', title: 'Denetim', text: 'Türkiye İş Bankası Teftiş Kurulu’nda Müfettiş Yardımcılığı ve Müfettişlik; Şube ve Genel Müdürlük birimlerinde denetim çalışmaları.' },
  { date: '2007 — 2016', title: 'Şube Müdürlüğü', text: 'Anafartalar, Ostim ve Ostim Ticari şubelerinde müdürlük.' },
  { date: '2016 — 2019', title: 'Bölge Satış Yönetimi', text: 'Ankara 2. Bölge Satış Müdürlüğü.' },
  { date: '2019 — 2024', title: 'Kredi Tahsis ve İzleme', text: 'KOBİ Kredileri Tahsis Ankara 1. ve 2. Bölge Müdürlükleri ile Krediler İzleme Ankara Bölge Müdürlüğü.' },
  { date: '2024’TEN BUGÜNE', title: 'SAD ve Kurumsal Danışmanlık', text: 'Haziran 2024’ten bu yana SAD – Sıtkı Arslan Danışmanlık ile finansal yönetim ve FYY süreç danışmanlığı.' },
];

export function AboutPage() {
  usePageMotion('.founder-portrait, .founder-biography, .about-section-intro, .career-list article, .about-principles-copy');
  return <main id="main" tabIndex={-1} className="about-page">
    <section className="about-hero" aria-labelledby="about-heading">
      <div className="hero-top"><span className="eyebrow">SAD / HAKKIMIZDA</span><span className="hero-index">DENEYİMDEN GELECEĞE</span></div>
      <h1 id="about-heading">Deneyimle şekillenen<br/><span> bütünsel bir bakış.</span></h1>
      <div className="about-introduction"><span className="eyebrow">SITKI ARSLAN DANIŞMANLIK</span><div><p>SAD, Sıtkı Arslan tarafından Haziran 2024’te, bankacılık, finans ve kurumsal yönetim alanındaki birikimini işletmelerin karar süreçlerine yansıtmak amacıyla kuruldu. SAD, finansal yönetim danışmanlığı ve özellikle Finansal Yeniden Yapılandırma (FYY) süreçleri üzerine uzmanlaşmış durumdadır.</p></div></div>
    </section>
    <section className="founder-section" aria-labelledby="founder-heading">
      <div className="founder-portrait"><img src="/sitki-arslan-restored.jpg" alt="SAD kurucusu Sıtkı Arslan" width="436" height="369" loading="lazy"/><span className="eyebrow">KURUCUMUZ</span></div>
      <div className="founder-biography"><span className="eyebrow">01 / KURUCUMUZ</span><h2 id="founder-heading">Sıtkı Arslan</h2><p className="founder-role">SAD Kurucusu · Finansal Yönetim Danışmanı</p><p>Sıtkı Arslan, 1998 yılında ODTÜ İşletme Bölümü’nden mezun oldu. 2003 yılında Londra City Üniversitesi’nden Bankacılık ve Finans alanında yüksek lisans derecesi aldı.</p><p>1998’de Türkiye İş Bankası Teftiş Kurulu’nda başlayan kariyerinin devamında 3 Şube Müdürlüğü ve 3 farklı alanda 4 Bölge Müdürlüğü görevlerinde bulundu. Nisan 2024’te İş Bankası’ndan emekli olmadan önce son olarak Krediler İzleme Ankara Bölge Müdürlüğü görevini yürütüyordu.</p><div className="founder-education"><div><span>ODTÜ</span><p>İşletme · Lisans, 1998</p></div><div><span>THE CITY UNIVERSITY · LONDRA</span><p>Bankacılık ve Finans · Yüksek Lisans, 2003</p></div></div></div>
    </section>
    <section className="about-experience" aria-labelledby="experience-heading"><div className="about-section-intro"><span className="eyebrow">02 / MESLEKİ BİRİKİM</span><h2 id="experience-heading">Sahadan gelen<br/><span>bir perspektif.</span></h2></div><div className="career-list">{career.map(item => <article key={item.date}><span className="career-date">{item.date}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>
    <section className="about-principles" aria-labelledby="principles-heading"><div className="about-section-intro"><span className="eyebrow">03 / YAKLAŞIMIMIZ</span><h2 id="principles-heading">Her işletmeyi<br/><span>kendi koşullarıyla.</span></h2></div><div className="about-principles-copy"><p>Finansal bir kararın etkisi, yalnızca bilanço üzerinde görülmez. Nakit akışı, operasyonlar ve işletmenin gelecek planları da bu kararın parçasıdır.</p><p>Bu nedenle sürece işletmeyi dinleyerek başlıyoruz. Verileri ve borç yapısını inceliyor, varsayımları netleştiriyor ve alternatifleri birlikte değerlendiriyoruz. Analizden müzakereye, planlamadan takibe kadar açık iletişimi ve uygulanabilirliği esas alıyoruz.</p></div></section>
  </main>;
}
