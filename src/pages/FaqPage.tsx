import { fyyQuestions } from '../data/faqContent';
import { sourceLinks } from '../data/sourceLinks';
import { usePageMotion } from '../hooks/usePageMotion';

export function FaqPage() {
  usePageMotion('.faq-list');
  return <main id="main" tabIndex={-1} className="fyy-page faq-page">
    <section className="fyy-page-hero" aria-labelledby="faq-page-heading">
      <div className="hero-top"><span className="eyebrow">SAD / SIK SORULAN SORULAR</span><span className="hero-index">FYY HAKKINDA</span></div>
      <h1 id="faq-page-heading">Sık sorulan<br/><span>sorular.</span></h1>
    </section>
    <section className="fyy-page-section" aria-label="FYY soruları ve yanıtları">
      <div className="about-section-intro"><span className="eyebrow">FYY / SORULAR VE YANITLAR</span><h2><br/><span></span></h2></div>
      <div className="faq-list">{fyyQuestions.map(([question, answer, link]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}{link && <> <a className="faq-answer-link" href={link.href} target="_blank" rel="noreferrer">{link.label}</a></>}</p></details>)}<div className="source-note"><p>Genel bilgilendirmedir. Başvuru uygunluğu ve uygulanabilecek koşullar işletme özelinde değerlendirilir.</p><a href={sourceLinks.tbb} target="_blank" rel="noreferrer">Türkiye Bankalar Birliği / FYY dokümanları</a></div></div>
    </section>
  </main>;
}
