import React from "react";
 
const FilterBar = ({ onFilterChange, onSortChange }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="accessories">Accessories</option>
        <option value="home & kitchen">Home & Kitchen</option>
      </select>

      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
