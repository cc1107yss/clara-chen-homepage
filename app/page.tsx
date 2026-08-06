const intentions = [
  {
    label: "Making",
    text: "Work shaped with curiosity, clarity, and a stubborn eye for detail.",
  },
  {
    label: "Noticing",
    text: "Small observations, useful references, and ideas worth returning to.",
  },
  {
    label: "Becoming",
    text: "A personal corner of the internet, deliberately left room to evolve.",
  },
];

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Clara Chen — home">
          <span className="wordmark-seal" aria-hidden="true">
            C
          </span>
          <span className="wordmark-copy">
            <strong>Clara Chen</strong>
            <small>Personal index</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#index">Index</a>
          <a href="#about">About</a>
        </nav>

        <div className="live-status" aria-label="Website status: online">
          <span className="status-dot" aria-hidden="true" />
          <span>Los Angeles</span>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta" aria-hidden="true">
          <span>clarachen.dev</span>
          <span>36.05° N · 118.24° W</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">
            <span>Edition 001</span>
            <span className="eyebrow-line" />
            <span>Est. 2026</span>
          </p>
          <h1 id="hero-title">
            A quiet place
            <span className="hero-title-accent">for loud ideas.</span>
          </h1>
          <div className="hero-intro-row">
            <p className="intro">
              Clara Chen&apos;s living index for work, notes, and all the ideas
              still finding their form.
            </p>
            <a className="enter-link" href="#index">
              <span>Enter the index</span>
              <span className="enter-arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </div>

        <div className="portrait-mark" aria-label="Clara Chen monogram artwork">
          <span className="mark-index mark-index-one" aria-hidden="true">
            01
          </span>
          <span className="mark-index mark-index-two" aria-hidden="true">
            26
          </span>
          <div className="mark-plane mark-plane-back" aria-hidden="true" />
          <div className="mark-plane mark-plane-front" aria-hidden="true" />
          <div className="monogram" aria-hidden="true">
            <span>C</span>
            <span>C</span>
          </div>
          <p className="mark-caption">A personal signal, still in motion.</p>
        </div>

        <p className="hero-side-note" aria-hidden="true">
          Scroll to unfold · Scroll to unfold · Scroll to unfold
        </p>
      </section>

      <section className="index-section" id="index" aria-labelledby="index-title">
        <div className="section-heading">
          <p className="section-kicker">The index</p>
          <h2 id="index-title">
            An archive of things
            <em>in progress.</em>
          </h2>
          <p>
            Not a finished portfolio. A growing record of what catches the eye,
            holds attention, and becomes worth making.
          </p>
        </div>

        <div className="intention-list">
          {intentions.map((item, index) => (
            <article className="intention" key={item.label}>
              <span className="intention-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
              <span className="intention-glyph" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <p className="about-orbit" aria-hidden="true">
          Curious by nature · precise by choice · always becoming ·
        </p>
        <div className="about-copy">
          <p className="section-kicker">About this place</p>
          <h2 id="about-title">Online, but unhurried.</h2>
          <p>
            The best personal spaces feel less like a feed and more like a room.
            This one is being furnished slowly—with thought, texture, and only
            the things that deserve to stay.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <span className="footer-mark">C²</span>
          <p>Clara Chen</p>
        </div>
        <p>A small place with room to grow.</p>
        <p>© 2026 · clarachen.dev</p>
      </footer>
    </main>
  );
}
