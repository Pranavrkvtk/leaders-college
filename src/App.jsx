import Hero from "./components/Hero.jsx";
import CourseCard from "./components/CourseCard.jsx";
import InfoGrid from "./components/InfoGrid.jsx";
import Contact from "./components/Contact.jsx";
import Testimonials from "./components/Testimonials.jsx";

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

export default function App() {
  return (
    <main>
      <Hero />

      <section className="section courses-section" id="courses">
        <div className="section-intro">
          <p className="kicker">FIND YOUR NEXT STEP</p>
          <h2>Choose your <em>course</em></h2>
          <p>Practical, career-focused training designed to help you build in-demand skills.</p>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.number} course={course} />
          ))}
        </div>
      </section>

      <InfoGrid />
      <Testimonials />
      <Contact />

      <footer>
        <span>LEADERS COLLEGE</span>
        <span>Learn from industry experts · Build your future</span>
      </footer>
    </main>
  );
}