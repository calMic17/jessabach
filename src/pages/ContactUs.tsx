import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";
import ContactSocials from "../components/contact/ContactSocials";
import "../styles/_contactUs.scss";

function ContactUs() {
  return (
    <div className="contact-page">
      <ContactHeader />
      <div className="contact-layout">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <ContactSocials />
    </div>
  );
}

export default ContactUs;