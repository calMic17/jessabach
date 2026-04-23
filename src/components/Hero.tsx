import Button from './Button';
import '../styles/_hero.scss';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-subtitle">Premium Music Education</span>
        <h2 className="hero-title">Where Tradition Meets Technique.</h2>
        <p className="hero-description">
          Unlock your musical potential with world-class instructors. From classical 
          foundations to contemporary mastery, start your journey with JessaBach today.
        </p>
        <div className="hero-actions">
          <Button variant="enroll">Enroll Now</Button>
          <Button variant="dark">Explore Courses</Button>
        </div>
      </div>
      <div className="hero-visual">
        {/* You can replace this with an <img> tag for a piano or instrument */}
        <div className="abstract-shape"></div>
      </div>
    </section>
  );
}

export default Hero;