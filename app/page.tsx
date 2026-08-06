export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Clara Chen home">
          <span className="wordmark-mark">cc</span>
          <span>clarachen.dev</span>
        </a>
        <div className="live-status" aria-label="Website status: online">
          <span className="status-dot" />
          online
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Personal domain · established 2026</p>
          <h1>
            A new address for
            <span>whatever comes next.</span>
          </h1>
          <p className="intro">
            This is Clara Chen&apos;s personal corner of the internet. The door
            is open; the rooms are still taking shape.
          </p>
          <div className="address-line">
            <span>Now arriving at</span>
            <strong>clarachen.dev</strong>
          </div>
        </div>

        <div className="signal" aria-hidden="true">
          <div className="signal-orbit signal-orbit-outer" />
          <div className="signal-orbit signal-orbit-inner" />
          <div className="signal-core">
            <span>c</span>
          </div>
          <div className="signal-label signal-label-top">01 / live</div>
          <div className="signal-label signal-label-bottom">HTTPS · active</div>
        </div>
      </section>

      <footer className="site-footer">
        <p>Clara Chen</p>
        <p>A small place with room to grow.</p>
        <p>© 2026</p>
      </footer>
    </main>
  );
}
