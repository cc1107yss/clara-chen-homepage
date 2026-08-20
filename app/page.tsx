import { ArtworkBack, ArtworkStructure } from "./components/home/HomeArtwork";
import { homeContent } from "./home-content";

function HeroName() {
  return (
    <h1 className="cc-hero-name" id="home-title" aria-label="Clara Chen">
      <span className="cc-hero-first">{homeContent.name.first}</span>
      <span className="cc-hero-last">{homeContent.name.last}</span>
      <span className="cc-hero-dot" aria-hidden="true" />
    </h1>
  );
}

function EditorialLines() {
  return (
    <>
      <span className="cc-header-rule" aria-hidden="true" />
      <div className="cc-left-rail" aria-hidden="true">
        <span className="cc-left-rail-line" />
      </div>
    </>
  );
}

function SocialLinks() {
  return (
    <nav className="cc-socials" aria-label="Social and contact links">
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
        <HeroName />
        <ArtworkStructure />
        <EditorialLines />
        <SocialLinks />
      </section>
    </main>
  );
}
