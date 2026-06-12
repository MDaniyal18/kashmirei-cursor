import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../../styles/For-Scholars/forscholars-programs.css";
import { programs } from "../../data/programs";

const scrollToProgram = (id) => {
  const el = document.getElementById(`program-${id}`);
  if (el) {
    const offset = 90; // header height offset
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const objectives = [
  "Empower students with 21st-century skills and global competitiveness.",
  "Provide academic, financial, and strategic mentorship checkpoints.",
  "Bridge the geographical and economic divide in secondary and tertiary education.",
  "Cultivate a lifelong network of leadership-driven professionals returning value to Kashmir."
];

const AllPrograms = () => {
  const location = useLocation();
  const [activeProgram, setActiveProgram] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#program-", "");
      // Wait for DOM rendering
      const timer = setTimeout(() => {
        scrollToProgram(id);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="all-programs-page">
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="wwd-rainbow-section" style={{ padding: "140px 40px 40px", backgroundColor: "#f4f8fb" }}>
        <div className="wwd-rainbow-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "24px" }}>
            <Link 
              to="/for-scholars" 
              className="button-outline"
              style={{
                backgroundColor: "transparent",
                borderColor: "#47BFDA",
                borderWidth: "1.5px",
                borderStyle: "solid",
                color: "#47BFDA",
                padding: "8px 20px",
                fontSize: "13px",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "600",
                textDecoration: "none"
              }}
            >
              ← Back to For Scholars
            </Link>
          </div>
          <span className="wwd-section-label">OUR PROGRAMS</span>
          <h1 className="wwd-rainbow-heading" style={{ fontSize: "36px", fontWeight: "700", color: "#0f1b24", marginTop: "10px" }}>
            Empowering Kashmir's Scholars
          </h1>
          <p className="wwd-rainbow-sub" style={{ fontSize: "15px", color: "#555", marginTop: "12px", lineHeight: "1.8" }}>
            Explore our eight specialized programs working together to support every scholar from high school to university and beyond.
          </p>
        </div>
      </section>

      {/* ── 8 Program Sections ────────────────────────────────────── */}
      <div className="programs-list-wrap">
        {programs.map((prog, i) => {
          const isEven = i % 2 === 1; // alternating layouts
          return (
            <section
              key={prog.id}
              id={`program-${prog.id}`}
              className={`wwd-prog-section ${isEven ? "wwd-prog-flip" : ""}`}
              style={{ padding: "80px 40px", borderBottom: "1px solid #eef2f5" }}
            >
              <div className="wwd-prog-container">
                {/* Image column */}
                <div className="wwd-prog-image-col">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveProgram(prog);
                    }}
                    className="wwd-prog-section-link"
                  >
                    <div
                      className="wwd-prog-img-wrap"
                      style={{ "--prog-color": prog.color }}
                    >
                      <img src={prog.image} alt={prog.title} />
                    </div>
                  </a>
                </div>

                {/* Content column */}
                <div className="wwd-prog-content-col">
                  <div className="wwd-prog-number" style={{ color: prog.color }}>
                    {prog.number}
                  </div>
                  <span
                    className="wwd-prog-badge"
                    style={{ background: prog.color }}
                  />
                  
                  {/* Clickable Title */}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveProgram(prog);
                    }}
                    className="wwd-prog-section-link"
                  >
                    <h3 className="wwd-prog-title" style={{ transition: "color 0.2s" }}>
                      {prog.title}
                    </h3>
                  </a>

                  <p className="wwd-prog-subtitle">{prog.subtitle}</p>
                  <p className="wwd-prog-desc">{prog.description}</p>

                  {/* View Details Link */}
                  <div style={{ marginBottom: "28px" }}>
                    <a 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveProgram(prog);
                      }}
                      className="button-outline"
                      style={{ 
                        backgroundColor: prog.color,
                        borderColor: prog.color,
                        color: "#fff",
                        padding: "8px 20px",
                        fontSize: "13px",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                    >
                      View Program Details →
                    </a>
                  </div>

                  {/* Program stats */}
                  <div className="wwd-prog-stats">
                    {prog.stats.map((s) => (
                      <div
                        key={s.label}
                        className="wwd-prog-stat"
                        style={{ "--stat-color": prog.color }}
                      >
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Program Details Side Drawer ────────────────────────────────── */}
      {activeProgram && (
        <div className="prog-modal-backdrop" onClick={() => setActiveProgram(null)}>
          <div className="prog-modal-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="prog-modal-close" onClick={() => setActiveProgram(null)}>✕</button>
            
            <div 
              className="prog-modal-header" 
              style={{ 
                background: `linear-gradient(135deg, ${activeProgram.color}dd 0%, #0f1b24 100%)`,
              }}
            >
              <span className="prog-modal-number" style={{ color: activeProgram.color }}>
                Program {activeProgram.number}
              </span>
              <h2 className="prog-modal-title">{activeProgram.title}</h2>
              <p className="prog-modal-subtitle">{activeProgram.subtitle}</p>
            </div>
            
            <div className="prog-modal-body">
              <div className="prog-modal-section">
                <h3>About the Program</h3>
                <p>{activeProgram.description}</p>
                <p>
                  Through sustained interventions and structured support systems, this initiative ensures 
                  that talented minds are never restricted by financial limitations or geographic barriers. 
                  Scholars are evaluated through a robust selection procedure and provided with holistic 
                  resources to achieve their absolute potential.
                </p>
              </div>

              <div className="prog-modal-section">
                <h3>Core Objectives</h3>
                <ul className="prog-modal-list">
                  {objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div className="prog-modal-section">
                <h3>How It Works</h3>
                <div className="prog-modal-timeline">
                  <div className="prog-modal-timeline-item">
                    <div className="prog-modal-timeline-dot" style={{ backgroundColor: activeProgram.color }} />
                    <h4>1. Selection & Identification</h4>
                    <p>Applications are opened annually, followed by competitive evaluation and strict financial audits.</p>
                  </div>
                  <div className="prog-modal-timeline-item">
                    <div className="prog-modal-timeline-dot" style={{ backgroundColor: activeProgram.color }} />
                    <h4>2. Onboarding & Resource Mapping</h4>
                    <p>Selected scholars are assigned mentors, smart devices, learning modules, or scholarship funds.</p>
                  </div>
                  <div className="prog-modal-timeline-item">
                    <div className="prog-modal-timeline-dot" style={{ backgroundColor: activeProgram.color }} />
                    <h4>3. Milestones & Progress Tracking</h4>
                    <p>Regular check-ins, workshops, and exam trials are conducted to track and optimize outcomes.</p>
                  </div>
                </div>
              </div>

              <div className="prog-modal-section">
                <h3>Key Performance Metrics</h3>
                <div className="prog-modal-stats-list">
                  {activeProgram.stats.map((stat, i) => (
                    <div className="prog-modal-stat-item" key={i}>
                      <strong style={{ color: activeProgram.color }}>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="prog-modal-footer">
              <div className="prog-modal-actions">
                <Link 
                  to="/donate" 
                  className="prog-modal-btn btn-primary" 
                  style={{ backgroundColor: activeProgram.color }}
                  onClick={() => setActiveProgram(null)}
                >
                  Donate Now
                </Link>
                <Link 
                  to="/get-involved" 
                  className="prog-modal-btn btn-secondary"
                  onClick={() => setActiveProgram(null)}
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPrograms;
