import { CONTACT_STRINGS } from "./healpers/constants";

function ContactHeader() {
  return (
    <div className="contact-header">
      <h1>{CONTACT_STRINGS.CONTACT_US_HEADER}</h1>
      <p>{CONTACT_STRINGS.CONTACT_US_BODY}</p>
    </div>
  );
}

export default ContactHeader;