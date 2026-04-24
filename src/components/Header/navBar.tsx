import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import NavBarHamburger from "./navBarHamburger";
import "../../styles/_navBar.scss";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 👇 close menu when clicking a link (mobile UX improvement)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="app-wrapper">
      <nav className="navbar">
        {/* Logo (kept same class) */}
        <h1 className="logo"><Link to="/home" className="no-underline text-inherit">JessaBach</Link></h1>

        {/* Hamburger */}
        <NavBarHamburger isOpen={isMenuOpen} toggle={toggleMenu} />

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          
          {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className="no-underline text-inherit"
                >
                  {item.name}
                </Link>
              </li>
            ))}

          {/* Keep your custom Button */}
            <Button
              variant="enroll"
              className="nav-button"
              onClick={handleLinkClick}
            >
              Enroll Now
            </Button>

        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;