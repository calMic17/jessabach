// src/pages/Home.tsx
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Testimonials from "../components/Home/Testimonials";
import CTA from "../components/Home/CTA";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default Home;