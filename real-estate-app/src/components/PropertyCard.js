import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img
        src={property.image}
        alt={property.title}
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop
          e.target.src = "https://placehold.co/600x400?text=No+Image";
        }}
      />

      <h3>{property.title}</h3>

      <p>📍 {property.location}</p>

      <p>
        <strong>₹ {property.price}</strong>
      </p>

      <p>{property.description}</p>
    </div>
  );
};

export default PropertyCard;
