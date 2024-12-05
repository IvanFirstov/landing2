import React from "react";
import "./Hero.css";
import bikeImage from "../../assets/cowboy-4-black-1488x840.png"; // путь к изображению

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Bike</h1>
        <p>Explore our collection of high-quality bicycles.</p>
        <div className="">
        <img src={bikeImage} alt="Bicycle" className="hero-image" />
        </div>
        <button className="buy-button">Buy Now</button>
      </div>
    </section>
  );
}

export default Hero;
