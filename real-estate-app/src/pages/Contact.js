import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "bb2e55b8-c821-4bbe-9c27-c80bd20d45ce" // your Web3Forms key
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setResult("❌ Network error. Please try later.");
    }
  };

  return (
    <div className="contact-container">
      {/* Animated Heading */}
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch ✉️
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        We'd love to hear from you! Fill out the form below and our team will
        reach out soon.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="contact-form"
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Type your message..."
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="contact-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {/* Result Message */}
        {result && <p className="form-result">{result}</p>}
      </motion.form>

      {/* Contact Info */}
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>📍 NIMS University, Jaipur, India</p>
        <p>📞 +91 6299361809</p>
        <p>📧 rupakk746@gmail.com</p>
      </motion.div>
    </div>
  );
};

export default Contact;
