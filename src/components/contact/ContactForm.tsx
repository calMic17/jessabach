import { useState } from "react";

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
    console.log(form);
    alert("Message sent!");
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

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;