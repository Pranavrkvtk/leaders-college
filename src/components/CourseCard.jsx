export default function CourseCard({ course }) {
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