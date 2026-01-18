import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-hero">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-container">
        {/* Main Heading */}
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome Home
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="home-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Buy • Sell • Rent • Invest
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Discover verified properties, trusted agents, and smart pricing
          to make confident real estate decisions.
        </motion.p>

        {/* Trust Line */}
        <motion.p
          className="home-trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Trusted by thousands of home buyers across India 🇮🇳
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link to="/listings">
            <button className="home-button">Browse Properties</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
