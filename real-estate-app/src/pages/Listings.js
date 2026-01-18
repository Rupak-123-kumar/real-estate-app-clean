import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";
import "./Listings.css";

const Listings = () => {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
  });

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Fetch properties (default + filtered)
  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5000/api/properties", {
        params: {
          location: filters.location || undefined,
          price: filters.price || undefined,
        },
      })
      .then((res) => {
        // backend may return { properties }
        const data = res.data.properties || res.data;
        setProperties(data);
      })
      .catch((err) => console.error("API ERROR:", err))
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <motion.div
      className="listings-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="listings-heading"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        🏘 Available Properties
      </motion.h2>

      <FilterBar filters={filters} onFilterChange={handleFilterChange} />

      {/* Status */}
      <p style={{ marginTop: "15px", color: "#555" }}>
        {loading
          ? "Loading properties..."
          : `${properties.length} properties found`}
      </p>

      {/* Results */}
      <div className="property-grid">
        {!loading && properties.length === 0 && (
          <p style={{ gridColumn: "1 / -1", color: "#999" }}>
            ❌ No properties available
          </p>
        )}

        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </motion.div>
  );
};

export default Listings;
