import React from "react";
import "./contact.css";
import QrCode from "../assets/qr.jpeg";

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">About Me</h2>
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email:</h3>
              <p>callmeanish05@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>LinkedIn:</h3>
              <a
                href="https://www.linkedin.com/in/anish-butt-42a2312aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                Visit My LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="contact-image">
            <h3>Instagram</h3>
            <img src={QrCode} alt="Instagram QR Code" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
