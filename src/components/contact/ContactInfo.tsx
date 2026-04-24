import { CONTACT_INFO, CONTACT_STRINGS } from "./healpers/constants";

function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>{CONTACT_STRINGS.CONTACT_INFO}</h3>
      <p>{CONTACT_STRINGS.EMAIL}: {CONTACT_INFO.EMAIL}</p>
      <p>{CONTACT_STRINGS.PHONE}: {CONTACT_INFO.PHONE}</p>
      <p>{CONTACT_STRINGS.LOCATION}: {CONTACT_INFO.LOCATION}</p>
    </div>
  );
}

export default ContactInfo;