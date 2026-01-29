import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, image, inStock }) {
    return ( 
        <div className = "card" >
        
        <img src = { image }
        alt = { name }
        className = "product-img" />

        
        <h3 > { name } </h3>
        <p className = "price" > ₹{ price } </p>

        
        <p className = { inStock ? "stock in" : "stock out" } > { inStock ? "In Stock" : "Out of Stock" }
        </p>

        
        <button disabled = {!inStock } > { inStock ? "Buy Now" : "Unavailable" }
        </button>
        </div>
    );
}

export default ProductCard;