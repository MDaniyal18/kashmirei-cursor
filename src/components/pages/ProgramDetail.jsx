import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { programs } from "../../data/programs";
import "../../styles/Programs/programs.css";

const ProgramDetail = () => {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!program) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center" }}>
        <h2>Program Not Found</h2>
        <p>We couldn't find the program you are looking for.</p>
        <Link to="/for-scholars" className="button-outline" style={{ display: "inline-block", marginTop: "16px" }}>
          Back to Programs
        </Link>
      </div>
    );
  }

  // Generate some premium placeholder content based on program ID
  const objectives = [
    "Empower students with 21st-century skills and global competitiveness.",
    "Provide academic, financial, and strategic mentorship checkpoints.",
    "Bridge the geographical and economic divide in secondary and tertiary education.",
    "Cultivate a lifelong network of leadership-driven professionals returning value to Kashmir."
  ];

  return (
    <article className="program-detail-page">
      {/* Premium Hero Banner */}
      <header 
        className="prog-detail-hero"
        style={{ 
          background: `linear-gradient(135deg, ${program.color}dd 0%, #0f1b24 100%)`
        }}
      >
        <div className="container">
          <Link to={`/for-scholars#program-${program.id}`} className="prog-detail-back-link">
            ← Back to For Scholars
          </Link>
          <div className="prog-detail-hero-content">
            <span className="prog-detail-number" style={{ color: program.color }}>
              Program {program.number}
            </span>
            <h1 className="prog-detail-title">{program.title}</h1>
            <p className="prog-detail-subtitle">{program.subtitle}</p>
          </div>
        </div>
      </header>

      {/* Main Details Area */}
      <section className="prog-detail-body">
        <div className="container prog-detail-grid">
          
          {/* Column 1: Core Content */}
          <div className="prog-detail-main">
            <div className="prog-detail-section">
              <h3>About the Program</h3>
              <p>{program.description}</p>
              <p>
                Through sustained interventions and structured support systems, this initiative ensures 
                that talented minds are never restricted by financial limitations or geographic barriers. 
                Scholars are evaluated through a robust selection procedure and provided with holistic 
                resources to achieve their absolute potential.
              </p>
            </div>

            <div className="prog-detail-section">
              <h3>Core Objectives</h3>
              <ul className="prog-detail-list">
                {objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>

            <div className="prog-detail-section">
              <h3>How It Works</h3>
              <div className="prog-timeline">
                <div className="prog-timeline-item">
                  <div className="prog-timeline-dot" style={{ backgroundColor: program.color }} />
                  <h4>1. Selection & Identification</h4>
                  <p>Applications are opened annually, followed by competitive evaluation and strict financial audits.</p>
                </div>
                <div className="prog-timeline-item">
                  <div className="prog-timeline-dot" style={{ backgroundColor: program.color }} />
                  <h4>2. Onboarding & Resource Mapping</h4>
                  <p>Selected scholars are assigned mentors, smart devices, learning modules, or scholarship funds.</p>
                </div>
                <div className="prog-timeline-item">
                  <div className="prog-timeline-dot" style={{ backgroundColor: program.color }} />
                  <h4>3. Milestones & Progress Tracking</h4>
                  <p>Regular check-ins, workshops, and exam trials are conducted to track and optimize outcomes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Sidebar Stats & Actions */}
          <aside className="prog-detail-sidebar">
            <div className="prog-detail-card" style={{ borderColor: program.color }}>
              <h4 style={{ color: program.color }}>Key Performance Metrics</h4>
              <div className="sidebar-stats-list">
                {program.stats.map((stat, i) => (
                  <div className="sidebar-stat-item" key={i}>
                    <strong style={{ color: program.color }}>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="prog-detail-card bg-light">
              <h4>Support This Initiative</h4>
              <p>You can directly empower a student's educational trajectory by donating or volunteering today.</p>
              <div className="sidebar-actions">
                <Link to="/donate" className="button btn-sidebar-primary" style={{ backgroundColor: program.color, color: "#fff", display: "block", textAlign: "center", marginBottom: "12px", textDecoration: "none", padding: "12px", borderRadius: "6px" }}>
                  Donate Now
                </Link>
                <Link to="/get-involved" className="button button-outline" style={{ display: "block", textAlign: "center", textDecoration: "none", padding: "10px", borderRadius: "6px" }}>
                  Become a Volunteer
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </article>
  );
};

export default ProgramDetail;
