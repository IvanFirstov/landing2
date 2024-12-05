import React from "react";
import "./Header.css";
import logoimage from "../../assets/Logo.png";
function Header() {
  return (
    <header className="header">
                <img src={logoimage} alt="Bicycle" className="logo" />
      <nav>
        <a href="#hero">Home</a>
        <a href="#catalog">Catalog</a>
        <a href="#footer">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
