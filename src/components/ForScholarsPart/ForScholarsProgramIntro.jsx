import React from "react";
import "../../styles/For-Scholars/forscholars.css";
import "../../styles/For-Scholars/forscholars-programs.css";

const competencies = [
  {
    title: "Functional Competency",
    description:
      "KEI strengthens the foundational knowledge every scholar needs to succeed — proficiency in language, math, and science, fluency with technology, financial literacy to make sound decisions, and the civic and cultural understanding to engage meaningfully with the world.",
  },
  {
    title: "Operational Competency",
    description:
      "KEI equips scholars with the skills to think and work effectively — critical thinking to evaluate information, problem solving to navigate challenges, creativity to find new approaches, and the communication and collaboration skills to work with others and lead teams.",
  },
  {
    title: "Character Competency",
    description:
      "KEI nurtures the personal qualities that sustain long-term success — persistence and grit to see difficult goals through, initiative and curiosity to keep learning, and the adaptability, social awareness, and leadership to serve their communities and beyond.",
  },
];

const ForScholarsProgramIntro = () => {
  return (
    <section className="forscholars-program-intro-section">
      <div className="forscholars-container">
        <div className="forscholars-program-intro-content">
          <span className="wwd-section-label">SUPPORT FOR SCHOLARS</span>
          <p className="forscholars-program-intro-lead">
            KEI supports its scholars with academic help and beyond. Academic merit opens the door, but success in the 21st century is defined by competencies that schools rarely teach. KEI&apos;s programs are built to develop these across three dimensions:
          </p>

          <div className="forscholars-program-intro-grid">
            {competencies.map((item) => (
              <div key={item.title} className="forscholars-program-intro-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForScholarsProgramIntro;
