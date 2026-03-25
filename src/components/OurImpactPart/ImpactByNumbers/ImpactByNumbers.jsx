import React from "react";
import "../../../styles/ImpactByNumbers/impact-by-numbers.css";

const ImpactSection = () => {
  const impactStats = [
    {
      number: "8,000+",
      title: "Scholarships Awarded",
      description:
        "Thousands of students have received financial support through KEI, enabling them to pursue their education without barriers.",
    },
    {
      number: "1600+",
      title: "Digital Devices Provided",
      description:
        "Access to digital learning tools has empowered students to stay connected, learn effectively, and thrive in a modern academic environment.",
    },
    {
      number: "500+",
      title: "Career Workshops Conducted",
      description:
        "Workshops and sessions designed to guide students in career planning, skill-building, and making informed academic decisions.",
    },
    {
      number: "96%",
      title: "Scholars Graduate With Distinction",
      description:
        "A remarkable success rate showcasing the academic excellence and dedication of KEI-supported scholars.",
    },
    {
      number: "2000+",
      title: "Alumni Network",
      description:
        "A growing community of alumni who continue to inspire, mentor, and contribute back to the ecosystem.",
    },
    {
      number: "Countless",
      title: "Lives Transformed",
      description:
        "Beyond numbers, KEI’s impact is reflected in the confidence, growth, and success stories of every scholar supported.",
    },
  ];

  return (
    <section className="section-impact">
      <div className="impact-container">
        <div className="impact-header">
          <span className="impact-label">IMPACT BY NUMBERS</span>
          <h2>Measuring Change, One Scholar at a Time</h2>
          <p>
            Every number reflects a real journey of resilience, opportunity,
            and transformation made possible through KEI’s support.
          </p>
        </div>

        <div className="impact-stats-grid">
          {impactStats.map((item, index) => (
            <div className="impact-stat-card" key={index}>
              <h3>{item.number}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;