const testimonials = [
  {
    id: 1,
    name: "Anjali Menon",
    course: "Advanced AI",
    quote:
      "The Advanced AI course gave me hands-on experience with real datasets. Within two months of finishing, I landed a junior ML role at a startup in Kochi.",
    rating: 5,
    accent: "blue",
  },
  {
    id: 2,
    name: "Rahul Krishnan",
    course: "AI Essential + Advanced AI",
    quote:
      "Coming from a non-tech background, the foundation module made everything click. The mock interviews and resume support were genuinely career-changing.",
    rating: 5,
    accent: "purple",
  },
  {
    id: 3,
    name: "Fathima Rasheed",
    course: "Digital Marketing with AI",
    quote:
      "The two-month internship was the best part. I built real campaign dashboards using AI tools — my portfolio got me three interview calls in one week.",
    rating: 5,
    accent: "pink",
  },
  {
    id: 4,
    name: "Arjun Nair",
    course: "Logistics & Supply Chain Management",
    quote:
      "The FIATA certification is recognised internationally. The faculty brought live industry case studies, and the schedule worked perfectly alongside my job.",
    rating: 4,
    accent: "orange",
  },
  {
    id: 5,
    name: "Sneha Thomas",
    course: "AI Essential – Foundation with Python",
    quote:
      "Perfect starting point. Python basics, practical notebooks, and mentors who actually respond. I'm now continuing into the Advanced AI track.",
    rating: 5,
    accent: "cyan",
  },
];

function Stars({ count }) {
  return (
    <span className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-intro">
        <p className="kicker">STUDENT STORIES</p>
        <h2>
          What our <em>learners</em> say
        </h2>
        <p>
          Real outcomes from students who turned short-term training into
          long-term careers.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <article key={t.id} className={`testimonial-card ${t.accent}`}>
            <div className="testimonial-top">
              <div className="testimonial-avatar" aria-hidden="true">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3>{t.name}</h3>
                <p className="testimonial-course">{t.course}</p>
              </div>
            </div>
            <Stars count={t.rating} />
            <blockquote>“{t.quote}”</blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}