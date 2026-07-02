import React from "react";
import "../../../styles/About/about.css";

const AboutVision = () => {
  return (
    <section className="section-about-vision">
      <div className="about-vision-watermark">KEI</div>
      <div className="about-vision-container">

        <div className="about-vision-col">
          <span className="about-label about-label--light">OUR VISION</span>
          <blockquote className="about-vision-quote">
            "To make education the primary imperative in the empowerment
                and development of individuals, institutions, and communities."
          </blockquote>
        </div>

        <div className="about-vision-divider" />

        <div className="about-vision-col">
          <span className="about-label about-label--light">OUR MISSION</span>
          <p className="about-vision-mission">
            "To provide bright but at risk students a supportive and leadership oriented
                educational environment so that these scholars can bring about a positive 
                change in their families and communities."
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutVision;
