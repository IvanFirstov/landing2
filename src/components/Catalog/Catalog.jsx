import React from "react";
import "./Catalog.css";
import bike1 from "../../assets/bike1.webp";

function Catalog() {
  const products = [
    { id: 1, name: "Mountain Bike", price: "$500", image: bike1, },
    { id: 2, name: "Road Bike", price: "$700", image: bike1 },
    { id: 3, name: "Hybrid Bike", price: "$600", image: bike1 },
  ];

  return (
    <section id="catalog" className="catalog">
      <h2>Our Bikes</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalog;
