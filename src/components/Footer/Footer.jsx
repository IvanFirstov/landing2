import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [phone, setPhone] = useState("");


  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5")
      .slice(0, 18); 
    setPhone(formattedValue);
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <form className="contact-form">
          <h3>Contact Us</h3>
          <input type="text" placeholder="Your Name" required />
          <input
            type="tel"
            placeholder="+X (XXX) XXX-XX-XX"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
        <p>© 2024 COWBOY. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
