function ContactMap() {
  return (
    <div className="contact-map">
      <h3>Find Us</h3>
      <div className="map-placeholder">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.86888189474752!2d80.1023478943999!3d13.105387473459421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1776994767047!5m2!1sen!2sin" 
          loading="lazy"
          width="100%"
          height="100%"
          >
        </iframe>
      </div>
    </div>
  );
}

export default ContactMap;