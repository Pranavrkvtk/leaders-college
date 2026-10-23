import heroImage from '../assets/img1.jpeg'; // <-- Fixed path

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

      <div className="hero-image">
        <img 
          src={heroImage} 
          alt="Logistics professional course poster" 
        />
      </div>

      <div className="hero-bottom">
        <span className="anim-text learn">Learn Today</span>
        <span className="anim-text lead">Lead Tomorrow</span>
      </div>
    </section>
  );
}