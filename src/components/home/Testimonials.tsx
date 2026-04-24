// src/components/Home/Testimonials.tsx
import "../../styles/_testimonials.scss";

const testimonials = [
  {
    name: "Emma Wilson",
    role: "Guitar Student",
    text: "The instructors at JessaBach are incredibly patient. I've improved more in three months than I did in a year of self-teaching!"
  },
  {
    name: "Liam De Jong",
    role: "Piano Student",
    text: "Professional, encouraging, and deeply knowledgeable. I highly recommend them to anyone looking to master an instrument."
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Students Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{t.text}"</p>
            <h4 className="student-name">{t.name}</h4>
            <span className="student-role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;