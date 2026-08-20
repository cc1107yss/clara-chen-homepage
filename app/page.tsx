import { ArtworkBack, ArtworkFront, ArtworkStructure } from "./components/home/HomeArtwork";
import { homeContent } from "./home-content";

function ClaraMonogram() {
  return (
    <a className="cc-monogram" href="#home" aria-label="Clara Chen — home">
      <span aria-hidden="true">C</span>
      <span aria-hidden="true">C</span>
    </a>
  );
}

function EditorialHeader() {
  return (
    <header className="cc-header">
      <ClaraMonogram />
      <nav className="cc-nav" aria-label="Main navigation">
        {homeContent.nav.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <a className="cc-menu" href="mailto:clarachen07@foxmail.com">Contact</a>
      <span className="cc-header-rule" aria-hidden="true" />
    </header>
  );
}

function LeftRail() {
  return (
    <div className="cc-left-rail" aria-hidden="true">
      <span className="cc-left-rail-line" />
      <p>Math is the poetry of logic.</p>
    </div>
  );
}

function HeroName() {
  return (
    <h1 className="cc-hero-name" id="home-title" aria-label="Clara Chen">
      <span className="cc-hero-first">{homeContent.name.first}</span>
      <span className="cc-hero-last">{homeContent.name.last}</span>
      <span className="cc-hero-dot" aria-hidden="true" />
    </h1>
  );
}

function PersonalStatement() {
  return (
    <aside className="cc-statement" id="about" aria-label="Introduction">
      <span className="cc-statement-bar" aria-hidden="true" />
      <p className="cc-statement-body">
        {homeContent.statement.map((line) => <span key={line}>{line}</span>)}
      </p>
      <p className="cc-statement-roles">
        {homeContent.roles.map((line) => <span key={line}>{line}</span>)}
      </p>
    </aside>
  );
}

function TraitCluster() {
  return (
    <div className="cc-traits" id="thoughts">
      {homeContent.traits.map((trait) => <span key={trait}>{trait}</span>)}
      <i aria-hidden="true" />
    </div>
  );
}

function ManifoldLabels() {
  return (
    <div className="cc-manifold-labels" aria-hidden="true">
      <span>Input Space</span>
      <span>Latent<br />Manifold</span>
      <span>Abstraction<br />Layers</span>
      <span>Output Space</span>
    </div>
  );
}

function IntegralGlyph() {
  return (
    <div className="cc-integral" aria-hidden="true">
      <span>∫</span><i>X</i>
    </div>
  );
}

function ExploreWorkCTA() {
  return (
    <a
      className="cc-cta"
      href="https://github.com/cc1107yss"
      id="work"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="cc-cta-dot" aria-hidden="true" />
      <span className="cc-cta-rule" aria-hidden="true" />
      <span className="cc-cta-label">{homeContent.cta}</span>
      <span className="cc-cta-arrow" aria-hidden="true" />
    </a>
  );
}

function SocialLinks() {
  return (
    <nav className="cc-socials" aria-label="Social and contact links">
      <span className="cc-socials-label" aria-hidden="true">Connect</span>
      {homeContent.socials.map((item) => (
        <a
          key={item.label}
          href={item.href}
          {...(item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default function Home() {
  return (
    <main className="cc-home-shell">
      <section className="cc-home-artboard" id="home" aria-labelledby="home-title">
        <ArtworkBack />
        <EditorialHeader />
        <LeftRail />
        <HeroName />
        <ArtworkStructure />
        <ArtworkFront />
        <ManifoldLabels />
        <PersonalStatement />
        <TraitCluster />
        <IntegralGlyph />
        <ExploreWorkCTA />
        <SocialLinks />
        <span className="cc-contact-anchor" id="contact" aria-hidden="true" />
      </section>
    </main>
  );
}
