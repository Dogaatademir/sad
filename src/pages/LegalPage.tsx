import { legalDocuments, legalDetails, type LegalDocument } from '../data/legalContent';
import { contactDetails } from '../data/contactDetails';
import { ArrowIcon } from '../components/ArrowIcon';

export function LegalPage({ document }: { document: LegalDocument }) {
  return <main id="main" tabIndex={-1} className="legal-page">
    <header className="legal-hero">
      <span className="eyebrow">SAD / BİLGİLENDİRME</span>
      <h1>{document.title.split('\n').map((line, index) => <span key={line}>{index > 0 && ' '}{line}</span>)}</h1>
      <p className="legal-description">{document.description}</p>
      <p className="legal-date">Son güncelleme: <time dateTime={legalDetails.updatedAt}>{legalDetails.updatedLabel}</time></p>
    </header>
    <div className="legal-layout">
      <nav className="legal-toc" aria-label="Bu belgenin içeriği">
        <span className="eyebrow">BU BELGEDE</span>
        {document.sections.map((section, index) => <a key={section.id} href={`#${section.id}`}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{section.title}</a>)}
      </nav>
      <article className="legal-content" aria-label={document.label}>
        {document.sections.map(section => <section id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
        </section>)}
        <section className="legal-contact" aria-labelledby="legal-contact-heading">
          <h2 id="legal-contact-heading">İletişim bilgileri</h2>
          <p>Veri sorumlusu: {legalDetails.controller}<br/>SAD — Sıtkı Arslan Danışmanlık</p>
          <address>{contactDetails.street}<br/>{contactDetails.building}<br/>{contactDetails.district}</address>
          <a href={`mailto:${legalDetails.email}`}>{legalDetails.email}</a>
          <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
          <p className="legal-small-note">Yazılı başvurularınızı veri sorumlusu Sıtkı Arslan’a bu adresten iletebilirsiniz. KVKK başvurularında, Aydınlatma Metni’nde açıklanan yöntemleri kullanın.</p>
        </section>
        {document.sources && <aside className="legal-sources" aria-label="Resmi bilgi kaynakları"><h2>Resmi bilgi kaynakları</h2>{document.sources.map(source => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label}<ArrowIcon /></a>)}</aside>}
      </article>
    </div>
    <nav className="legal-related" aria-label="Diğer hukuki bilgilendirmeler">
      {legalDocuments.filter(item => item.path !== document.path).map(item => <a key={item.path} href={item.path}>{item.label}<ArrowIcon /></a>)}
    </nav>
  </main>;
}
