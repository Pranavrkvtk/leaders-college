import "./App.css";

const courses = [
  {
    number: "01",
    title: "AI Essential – Basic / Foundation with Python",
    duration: "2 Months",
    schedule: "3 Days per Week",
    fee: "₹20,000",
    certification: "Leaders Certification",
    theme: "blue",
  },
  {
    number: "02",
    title: "Advanced AI",
    duration: "4 Months",
    schedule: "3 Days per Week",
    fee: "₹40,000",
    certification: "IBM Certification + Leaders Certification",
    theme: "cyan",
  },
  {
    number: "03",
    title: "AI Essential + Advanced AI",
    duration: "5 Months",
    schedule: "3 Days per Week",
    fee: "₹50,000",
    certification: "IBM Certification + Leaders Certification",
    theme: "purple",
  },
  {
    number: "04",
    title: "Logistics & Supply Chain Management",
    duration: "6 Months + optional 2-month internship",
    schedule: "Contact admissions",
    fee: "₹60,000",
    certification: "FIATA Certification",
    theme: "orange",
  },
  {
    number: "05",
    title: "Digital Marketing with AI",
    duration: "6-month diploma",
    schedule: "4 months training + 2 months internship",
    fee: "₹60,000",
    certification: "Course completion certification",
    theme: "pink",
  },
];

function CourseCard({ course }) {
  return (
    <article className={`course-card ${course.theme}`}>
      <div className="course-heading">
        <span className="course-number">{course.number}</span>
        <h3>{course.title}</h3>
      </div>
      <div className="course-details">
        <p><span>◷</span><strong>Duration:</strong> {course.duration}</p>
        <p><span>▦</span><strong>Schedule:</strong> {course.schedule}</p>
        <p><span>₹</span><strong>Fee:</strong> {course.fee}</p>
        <p><span>✦</span><strong>Certification:</strong> {course.certification}</p>
        <a className="course-link" href="#contact">Enquire about this course ↗</a>
      </div>
    </article>
  );
}

function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="brand-mark">LEADERS <span>COLLEGE</span><sup>®</sup></div>
          <div className="approval">APPROVED BY AICTE</div>
          <p className="eyebrow">JOB-ORIENTED</p>
          <h1>SHORT-TERM <em>COURSES</em></h1>
          <p className="hero-description">Build skills. Gain certifications. Get placed.</p>
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

      <section className="section courses-section" id="courses">
        <div className="section-intro">
          <p className="kicker">FIND YOUR NEXT STEP</p>
          <h2>Choose your <em>course</em></h2>
          <p>Practical, career-focused training designed to help you build in-demand skills.</p>
        </div>
        <div className="course-grid">
          {courses.map((course) => <CourseCard key={course.number} course={course} />)}
        </div>
      </section>

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

      <section className="contact section" id="contact">
        <div>
          <p className="kicker">READY TO GET STARTED?</p>
          <h2>Your future starts <em>here.</em></h2>
          <p>Contact the admissions team for course details, eligibility and the latest fee information.</p>
        </div>
        <div className="contact-actions">
          <a href="tel:+919995657956">Call 99956 57956</a>
          <a href="tel:+919633826040">Call 96338 26040</a>
          <a href="tel:+918911155656">Call 88911 55656</a>
        </div>
      </section>

      <footer>
        <span>LEADERS COLLEGE</span>
        <span>Learn from industry experts · Build your future</span>
      </footer>
    </main>
  );
}

export default App;
