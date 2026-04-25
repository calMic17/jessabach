import Button from '../Button';
import '../../styles/_hero.scss';
import { useEffect, useState } from 'react';

function Hero() {

  const BASE_URL = "/jessabach"; // Base URL for gallery images - Dont forget to update this when deploying to production!

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {/* {!isMobile && <div className="abstract-shape"></div>} */}
        {!isMobile && <div> <img src={ `${BASE_URL}/HomePage/piano-illu.jpg` } alt="" /></div>}
      </div>
    </section>
  );
}

export default Hero;