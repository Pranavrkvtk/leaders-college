export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="brand-mark">
          LEADERS <span>COLLEGE</span><sup>®</sup>
        </div>
        <div className="approval">APPROVED BY AICTE</div>
        <p className="eyebrow">JOB-ORIENTED</p>
        <h1>SHORT-TERM <em>COURSES</em></h1>
        <p className="hero-description">
          Build skills. Gain certifications. Get placed.
        </p>
        <div className="hero-pills">
          <span>✦ Practical learning</span>
          <span>◉ Career-focused</span>
          <span>↗ Career growth</span>
        </div>
      </div>

      {/* NEW CSS POSTER GRAPHIC */}
      <div className="hero-image" role="img" aria-label="AI and Tech learning graphic">
        <div className="poster-graphic">
          <div className="poster-grid"></div>
          <div className="poster-circle"></div>
          <div className="poster-content">
            <span className="poster-tag">FUTURE READY</span>
            <h2 className="poster-title">AI & TECH</h2>
            <p className="poster-subtitle">Master the skills of tomorrow.</p>
            <div className="poster-bars">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>Learn Today</span>
        <span>Lead Tomorrow</span>
      </div>
    </section>
  );
}