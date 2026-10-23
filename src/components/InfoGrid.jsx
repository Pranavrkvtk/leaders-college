export default function InfoGrid() {
  return (
    <section className="info-grid section">
      <div className="info-card">
        <span className="info-icon">✦</span>
        <h3>Additional career support</h3>
        <ul>
          <li>Resume preparation</li>
          <li>Mock interview practice</li>
          <li>Placement assistance</li>
        </ul>
      </div>
      <div className="info-card">
        <span className="info-icon">◷</span>
        <h3>Class schedule</h3>
        <p><strong>Morning</strong><br />9:00 AM – 12:00 Noon</p>
        <p><strong>Afternoon</strong><br />1:00 PM – 4:00 PM</p>
      </div>
      <div className="info-card">
        <span className="info-icon">₹</span>
        <h3>Payment options</h3>
        <p>Initial payment: ₹10,000</p>
        <p>Single-payment discount may be available.</p>
        <p>Ask our admissions team about EMI options.</p>
      </div>
    </section>
  );
}
