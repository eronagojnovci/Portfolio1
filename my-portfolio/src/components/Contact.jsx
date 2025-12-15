import React, { useState } from "react";
import "../styles/main.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConfigured) {
      setStatus("Email service not configured. Add your EmailJS keys.");
      return;
    }

    setStatus("");
    setIsSending(true);

    const formData = new FormData(e.target);
    const payload = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
      },
      
    };
console.log("Payload to EmailJS:", payload);

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("Message sent. I’ll get back to you soon.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Email send error", err);
      setStatus("Could not send right now. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <div className="contact-wrapper">
          <h2>Let's Connect</h2>
          <p className="contact-sub">
            Whether you want to collaborate, have a project in mind, or just want to say hi —
            my inbox is always open.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="contact-btn" disabled={isSending || !isConfigured}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {!isConfigured && (
              <p className="form-status error">
                Add EmailJS keys in .env: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
              </p>
            )}
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
      <div className="contact-right">
        <img src="/src/assets/contact.png" alt="Contact" className="contact-photo" />
      </div>
    </section>
  );
};

export default Contact;
