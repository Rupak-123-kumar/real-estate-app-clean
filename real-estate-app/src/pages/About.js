import React from "react";
import "./About.css";
import { Home, MapPin, Building2, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate(); // ✅ define navigate

  return (
    <div className="about-container">
      {/* Animated Heading */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Home className="icon" /> About RealEstatePro
      </motion.h2>

      {/* Description */}
      <motion.p
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Welcome to <strong>RealEstatePro</strong> — your trusted companion for
        finding premium properties across India. Search, filter, and compare
        homes, apartments, and commercial spaces effortlessly.
      </motion.p>

      {/* Features Section */}
      <div className="features-grid">
        <FeatureCard
          icon={<MapPin className="icon" />}
          title="Smart Location Filters"
          desc="Easily explore properties based on city, area, or pin code."
        />
        <FeatureCard
          icon={<Building2 className="icon" />}
          title="Verified Listings"
          desc="All properties are verified to ensure trust and transparency."
        />
        <FeatureCard
          icon={<Users className="icon" />}
          title="Agent Connect"
          desc="Connect directly with trusted agents and property owners."
        />
        <FeatureCard
          icon={<Home className="icon" />}
          title="Virtual Tours"
          desc="Experience 3D tours and property videos from your home."
        />
      </div>

      {/* Call to Action */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="explore-btn"
        onClick={() => navigate("/listings")}
      >
        Explore Properties
      </motion.button>
    </div>
  );
};

// Reusable feature card component
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div className="feature-card" whileHover={{ y: -5 }}>
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-desc">{desc}</p>
  </motion.div>
);

export default About;
