import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/ContactUs";
import Hero from "../components/Hero";

function PageSelect() {

  return (
    <Routes>
      {/*to show the Hero on initial load */}
      <Route path="/" element={<Hero />} />

      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* Fallback: redirect any unknown paths to Home or Hero */}
      <Route path="*" element={<Navigate to="/home" />} />
      
    </Routes>
  );
}

export default PageSelect;