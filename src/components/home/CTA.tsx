// src/components/Home/CTA.tsx
import Button from '../Button';
import "../../styles/_cta.scss";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Start Your Musical Journey?</h2>
        <p>Book your first lesson today and discover the joy of making music.</p>
        <Button variant="enroll">Book a Free Trial</Button>
      </div>
    </section>
  );
}

export default CTA;