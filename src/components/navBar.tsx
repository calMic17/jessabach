import { useState } from 'react';

function App() {
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
          {/* <li className="btn-enroll">Enroll Now</li> */}
        </ul>
      </nav>
      
      {/* <main className="hero">
        <h2>Where Tradition Meets Technique.</h2>
        <p>Start your musical journey with JessaBach Music Academy.</p>
      </main> */}

    </div>
    
  );
}

export default App;