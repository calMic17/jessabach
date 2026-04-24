import { CONTACT_STRINGS } from "./healpers/constants";

function ContactSocials() {
  return (
    <div className="contact-socials">
      <h3>{CONTACT_STRINGS.FOLLOW_US}</h3>
      <div className="icons">
        <a href="#">{CONTACT_STRINGS.INSTAGRAM}</a>
        <a href="#">{CONTACT_STRINGS.TWITTER}</a>
        <a href="#">{CONTACT_STRINGS.FACEBOOK}</a>
      </div>
    </div>
  );
}

export default ContactSocials;