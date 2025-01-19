import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
 
const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="card">
      <LazyLoadImage
        src={product.image} 
        alt={product.name}
        className="product-image"
        effect="blur" // Fade-in effect
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="add-to-cart"   onClick={handleAddToCart}>
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
