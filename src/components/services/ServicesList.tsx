import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Music Teaching",
    description: "Personalized lessons for all skill levels, focusing on technique, theory, and performance.",
    icon: "🎷",
    tags: ["Clarinet", "Trumpet", "Saxophone", "Guitar", "Keyboard", "Violin", "Drums"]
  },
  {
    title: "Online Classes",
    description: "Learn from anywhere in the world with our interactive digital classroom experience.",
    icon: "🌐"
  },
  {
    title: "Instrument Service",
    description: "Professional repairs and routine servicing to keep your instruments in peak condition.",
    icon: "🛠️"
  },
  {
    title: "Music Producing",
    description: "Full-scale production services to bring your original compositions to life.",
    icon: "🎚️"
  },
  {
    title: "Sheet Music Writing",
    description: "Expert transcription and arrangement services for composers and performers.",
    icon: "📝"
  }
];

function ServicesList() {
  return (
    <div className="services-grid">
      {services.map((s, i) => (
        <ServiceCard key={i} {...s} />
      ))}
    </div>
  );
}
export default ServicesList;