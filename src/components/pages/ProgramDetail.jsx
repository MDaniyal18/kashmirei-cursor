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
      <div style={{ padding: "100px 40px 22px", textAlign: "center" }}>
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
    "Provide academic, and strategic mentorship checkpoints.",
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
          <Link to={`/for-scholars/programs#program-${program.id}`} className="prog-detail-back-link">
            ← Back to Programs
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
            {/* Program Overview */}
            <div className="prog-detail-section">
              <h3>Program Overview</h3>
              <p>{program.overview || program.description}</p>
              {!program.overview && (
                <p>
                  Scholars are evaluated through a robust selection procedure and provided with holistic 
                  resources to achieve their absolute potential.
                </p>
              )}
            </div>

            {/* Program Goals */}
            <div className="prog-detail-section">
              <h3>Program Goals</h3>
              {program.goals ? (
                <ul className="prog-detail-list">
                  {program.goals.map((g, idx) => (
                    <li key={idx}>
                      <strong>{g.title}:</strong> {g.desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="prog-detail-list">
                  {objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Eligibility Criteria */}
            {program.eligibility && (
              <div className="prog-detail-section">
                <h3>Eligibility Criteria</h3>
                <ul className="prog-detail-list">
                  {program.eligibility.academic && (
                    <li>
                      <strong>Academic Performance:</strong> {program.eligibility.academic}
                    </li>
                  )}
                  {program.eligibility.financial && (
                    <li>
                      <strong>Financial Need:</strong> {program.eligibility.financial}
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Selection Process */}
            {program.selectionProcess !== null && (
              <div className="prog-detail-section">
                <h3>Selection Process</h3>
                {program.selectionProcess ? (
                  <div className="prog-timeline">
                    {program.selectionProcess.map((step, idx) => (
                      <div className="prog-timeline-item" key={idx}>
                        <div className="prog-timeline-dot" style={{ backgroundColor: program.color }} />
                        <h4>{step.step || idx + 1}. {step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    ))}
                  </div>
                ) : (
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
                )}
              </div>
            )}

            {/* Entrance Exam (HSSP only) */}
            {program.entranceExam && (
              <div className="prog-detail-section">
                <h3>Entrance Exam</h3>
                <div style={{
                  background: "#f4f8fb",
                  borderLeft: `4px solid ${program.color}`,
                  padding: "16px",
                  borderRadius: "0 12px 12px 0"
                }}>
                  <p style={{ margin: 0, fontSize: "14.5px", lineHeight: "1.6", color: "#444" }}>
                    {program.entranceExam}
                  </p>
                </div>
              </div>
            )}

            {/* Program Duration & Support Structure */}
            {program.durationAndSupport && (
              <div className="prog-detail-section">
                <h3>Program Duration & Support Structure</h3>
                <p><strong>Duration:</strong> {program.durationAndSupport.duration}</p>
                <h4 style={{ marginTop: "20px", fontSize: "15.5px", fontWeight: "700", color: "#0f1b24", marginBottom: "12px" }}>Support Structure:</h4>
                <ul className="prog-detail-list">
                  {program.durationAndSupport.supportStructure.map((s, idx) => (
                    <li key={idx}>
                      <strong>{s.name}:</strong> {s.desc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
