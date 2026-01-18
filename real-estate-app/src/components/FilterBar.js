import React from "react";

const FilterBar = ({ onFilterChange, filters }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        name="location"
        placeholder="Search by location..."
        value={filters.location}
        onChange={onFilterChange}
      />

      <select
        name="price"
        value={filters.price}
        onChange={onFilterChange}
      >
        <option value="">All Prices</option>
        <option value="10000000">Below ₹1 Cr</option>
        <option value="20000000">Below ₹2 Cr</option>
      </select>
    </div>
  );
};

export default FilterBar;
