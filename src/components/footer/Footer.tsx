import { Link } from "react-router-dom";
import { CONTACT_INFO, BRAND_NAME } from "../Helpers/CommonConstans";
import "../../styles/_footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">{BRAND_NAME}</h2>
          <p className="footer-description">
            Providing professional music education and instruments in the Netherlands.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>Email: {CONTACT_INFO.EMAIL}</p>
          <p>Location: {CONTACT_INFO.LOCATION}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {BRAND_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;