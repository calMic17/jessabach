import { useState } from 'react';
import Button from './Button';
import '../styles/_navBar.scss';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="app-wrapper">
      <nav className="navbar">
        <h1 className="logo">JessaBach</h1>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {/* <li>Servises</li> */}
          <li>About</li>
          <li>Servises</li>
          <li>Contact</li>
          <Button variant="enroll">Enroll Now</Button>
        </ul>
      </nav>
      
      {/* <main className="hero">
        <h2>Where Tradition Meets Technique.</h2>
        <p>Start your musical journey with JessaBach Music Academy.</p>
      </main> */}

    </div>
    
  );
}

export default NavigationBar;