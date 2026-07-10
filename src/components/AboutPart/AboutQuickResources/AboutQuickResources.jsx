import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/About/about.css";

const AboutQuickResources = () => {
  return (
    <section className="section-about-quick-resources">
      <div className="about-quick-resources-container">
        <p className="about-quick-resources-title">Quick Resources &amp; Updates</p>
        <div className="about-quick-resources-links">
          <Link to="/events-and-announcements" className="about-outline-btn">
            Events &amp; Announcements
          </Link>
          <Link to="/faq" className="about-outline-btn">
            View FAQ
          </Link>
          <a href="mailto:info@kashmirei.org" className="about-filled-btn">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutQuickResources;
