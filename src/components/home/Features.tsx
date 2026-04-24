import "../../styles/_features.scss";

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from world-class musicians with years of professional experience.",
    icon: "🎵"
  },
  {
    title: "Flexible Learning",
    description: "Choose between in-person or online sessions that fit your busy schedule.",
    icon: "📅"
  },
  {
    title: "Custom Curriculum",
    description: "Our lessons are tailored to your unique goals and musical interests.",
    icon: "🎼"
  }
];

function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;