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
      <div className="hero-image" role="img" aria-label="Student with laptop and AI learning graphics">
        <img src="/college-poster.jpeg" alt="Leaders College short-term courses poster" />
      </div>
      <div className="hero-bottom">
        <span>Learn Today</span>
        <span>Lead Tomorrow</span>
      </div>
    </section>
  );
}