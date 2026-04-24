import { useState } from "react";
// import emailjs from '@emailjs/browser';
import { CONTACT_INFO, CONTACT_STRINGS } from "./healpers/constants";


function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Sender Email: ${form.email}\n\nMessage: ${form.message}`);
    
    // This triggers the user's local email client
    window.location.href = `mailto:${CONTACT_INFO.EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
      />

      <button type="submit">{CONTACT_STRINGS.SEND_MESSAGE}</button>
    </form>
  );
}

export default ContactForm;