import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      "bb2e55b8-c821-4bbe-9c27-c80bd20d45ce"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setResult("❌ Something went wrong.");
      }
    } catch (err) {
      setResult("❌ Network error. Try again later.");
    }
  };

  return (
    <div className="contact-container">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Get in Touch ✉️
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We'd love to hear from you. Fill out the form and we’ll reach out soon.
      </motion.p>

      <motion.form
        className="contact-form"
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" required />
        </div>

        <motion.button
          type="submit"
          className="contact-button"
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {result && <p className="form-result">{result}</p>}
      </motion.form>

      <div className="contact-info">
        <p>📍 NIMS University, Jaipur</p>
        <p>📞 +91 6299361809</p>
        <p>📧 rupakk746@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
