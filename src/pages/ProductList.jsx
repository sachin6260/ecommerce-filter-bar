import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import LoadingSkeleton from "../components/LoadingSkeleton";
import productsData from "../data/products.json";
 
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(""); // For category filtering
  const [sortOption, setSortOption] = useState(""); // For price sorting

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1000);  
  }, []);

  // Handle filter changes for category
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Handle sort changes for price
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // Filter products based on category
  const filteredProducts = filter
    ? products.filter((product) =>
        product.category.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  // Sort products based on price (low to high or high to low)
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "highToLow") {
      return b.price - a.price;
    }
    return 0; // No sorting applied
  });

  return (
    <div>
      <h1>Product List</h1>
      <FilterBar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <div className="grid-container">
        {loading
          ? Array.from({ length: 8 }, (_, i) => <LoadingSkeleton key={i} />)
          : sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products available</p>
            )}
      </div>
    </div>
  );
};

export default ProductList;
