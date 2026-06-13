import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Get-Involved/getinvolved-ways.css";

import volunteerIcon from "../../../assets/Images/GetInvolved-icon/getinvolved-volunteer.webp";
import mentorIcon from "../../../assets/Images/GetInvolved-icon/getinvolved-mentor.webp";
import sponsorIcon from "../../../assets/Images/GetInvolved-icon/getinvolved-sponsor.webp";

const partners = [
  {
    initials: "IMT",
    color: "#1B4F8A",
    name: "Iqbal Memorial Trust",
    desc: "Standardised testing frameworks and experiential learning opportunities for KEI scholars across Kashmir.",
  },
  {
    initials: "MCW",
    color: "#47BFDA",
    name: "MCW Global",
    desc: "Access to the Young Leaders Access Programme — connecting KEI scholars with global leadership networks.",
  },
  {
    initials: "CMI",
    color: "#2E7D32",
    name: "Chartered Management Institute",
    desc: "Leadership certification and professional development training for high-achieving mentorship scholars.",
  },
];

const GetInvolvedWays = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <section className="gi-ways">
      <div className="container">

        <div className="gi-ways-header">
          <span>GET INVOLVED</span>
          <h2>Ways to Get Involved</h2>
        </div>

        <div className="gi-ways-grid">

          <div 
            className={`gi-card ${activeSection === "volunteer" ? "gi-card-active" : ""}`} 
            onClick={() => {
              setActiveSection(prev => prev === "volunteer" ? null : "volunteer");
              setTimeout(() => {
                document.getElementById("gi-inline-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 100);
            }} 
            style={{ cursor: "pointer" }}
          >
            <span style={{ display: "block" }}>
              <img src={volunteerIcon} alt="Volunteer" />
            </span>
            <h3>Volunteer With Us</h3>
            <p>Join hands with us in operations, training, or outreach.</p>
            <button 
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                fontFamily: "inherit",
                fontWeight: "700",
                color: "#47BFDA",
                cursor: "pointer",
                padding: 0,
                letterSpacing: "0.6px"
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveSection(prev => prev === "volunteer" ? null : "volunteer");
                setTimeout(() => {
                  document.getElementById("gi-inline-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
              }}
            >
              VOLUNTEER WITH US
            </button>
          </div>

          <div 
            className={`gi-card ${activeSection === "mentor" ? "gi-card-active" : ""}`} 
            onClick={() => {
              setActiveSection(prev => prev === "mentor" ? null : "mentor");
              setTimeout(() => {
                document.getElementById("gi-inline-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 100);
            }} 
            style={{ cursor: "pointer" }}
          >
            <span style={{ display: "block" }}>
              <img src={mentorIcon} alt="Mentor" />
            </span>
            <h3>Mentor</h3>
            <p>Guide a scholar’s journey and be part of their transformation.</p>
            <button 
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                fontFamily: "inherit",
                fontWeight: "700",
                color: "#47BFDA",
                cursor: "pointer",
                padding: 0,
                letterSpacing: "0.6px"
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveSection(prev => prev === "mentor" ? null : "mentor");
                setTimeout(() => {
                  document.getElementById("gi-inline-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
              }}
            >
              BECOME A MENTOR
            </button>
          </div>

          {/* Interactive Card triggering Partners Drawer */}
          <div className="gi-card" onClick={() => setDrawerOpen(true)} style={{ cursor: "pointer" }}>
            <span style={{ display: "block" }}>
              <img src={sponsorIcon} alt="Partner" />
            </span>
            <h3>Partner With Us</h3>
            <p>Collaborate with us as an institution, university, or corporate partner to amplify impact.</p>
            <button 
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                fontFamily: "inherit",
                fontWeight: "700",
                color: "#47BFDA",
                cursor: "pointer",
                padding: 0,
                letterSpacing: "0.6px"
              }}
              onClick={(e) => {
                e.stopPropagation();
                setDrawerOpen(true);
              }}
            >
              PARTNER WITH US
            </button>
          </div>

        </div>

        {/* Inline Detail Section */}
        {activeSection && (
          <div id="gi-inline-details" className="gi-inline-details-container">
            <button className="gi-details-close" onClick={() => setActiveSection(null)}>✕ Close Section</button>
            
            {activeSection === "volunteer" && (
              <div className="gi-details-content volunteer-details">
                <div className="gi-details-header">
                  <span className="gi-details-label">GET INVOLVED / VOLUNTEER</span>
                  <h2>Volunteer With Us</h2>
                </div>
                <p className="gi-details-intro">
                  KEI is a volunteer-driven organization, and we offer a wide range of 
                  opportunities for individuals who are passionate about creating impact.
                </p>
                <div className="gi-details-card">
                  <h3>How can you help?</h3>
                  <p>
                    You can contribute your time and skills by supporting specific ongoing 
                    projects or by assisting in our broader organizational efforts.
                  </p>
                  <p>
                    Our volunteers and interns actively engage in a variety of initiatives, 
                    including managing scholarship programs, mentoring students across 
                    primary, secondary, undergraduate, and graduate levels, and delivering 
                    guest lectures at educational institutions.
                  </p>
                  <p>
                    In addition, volunteers support outreach initiatives, enhance our 
                    digital presence, conduct research and field studies, and contribute 
                    to fundraising efforts that sustain our mission.
                  </p>
                  <p>
                    We are always open to fresh ideas and innovative approaches. If you have 
                    a vision or initiative you would like to contribute, we would love to 
                    hear from you.
                  </p>
                  
                  <div className="gi-details-action">
                    <p className="cta-text">To get started, click the button below and share your details with us.</p>
                    <a
                      href="https://docs.google.com/forms/d/e/YOUR_FORM_LINK_HERE/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: "14px 28px", fontSize: "13px", display: "inline-block", textDecoration: "none" }}
                    >
                      Fill Volunteer Information Form
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "mentor" && (
              <div className="gi-details-content mentor-details">
                <div className="gi-details-header">
                  <span className="gi-details-label">GET INVOLVED / MENTOR</span>
                  <h2>Become a Mentor</h2>
                </div>
                <p className="gi-details-intro">
                  Share your knowledge and guide scholars towards a brighter future.
                  Your mentorship can shape careers and transform lives.
                </p>
                
                <div className="gi-details-card">
                  <div className="mentor-highlight-box">
                    <h4>One Mentor, One Scholar</h4>
                    <p>
                      Support a high school scholar by volunteering <strong>2 hours per month</strong> 
                      for a minimum of <strong>one year</strong>. Help guide their academic journey 
                      and future goals.
                    </p>
                  </div>

                  <hr className="gi-details-separator" />

                  <h3>Mentorship Sign-Up</h3>
                  <p><strong>Dear Mentor,</strong></p>
                  <p>Thank you for your interest in supporting KEI scholars.</p>
                  <p>Before applying, please confirm that you meet the following criteria:</p>
                  
                  <ul className="gi-requirements-list">
                    <li>
                      Have completed higher secondary education and are currently in college or hold a degree.
                    </li>
                    <li>
                      Can commit <strong>2–4 hours per month</strong> for at least <strong>a year</strong>.
                    </li>
                    <li>
                      Are willing to mentor a student and guide them in their academic and long-term goals 
                      (no tutoring required).
                    </li>
                  </ul>

                  <div className="gi-details-action">
                    <p className="cta-text">If you meet these criteria, please proceed to the application form.</p>
                    <div className="gi-buttons-row">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfKvVgYMBk7IyH-rIR43V9B-3ZQUyZunFZxMWYi2Wq3VZu4Lg/viewform?usp=sf_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: "14px 28px", fontSize: "13px", display: "inline-block", textDecoration: "none" }}
                      >
                        Sign up / Apply Online
                      </a>
                      <Link
                        to="/mentorship-success-stories"
                        className="btn-outline"
                        style={{ padding: "14px 28px", fontSize: "13px", display: "inline-block", textDecoration: "none" }}
                      >
                        Mentorship Program Success Stories
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <blockquote className="gi-quote">
          “Supporting KEI is like investing in the future of humanity.”
          <span>– KEI Supporter</span>
        </blockquote>

      </div>

      {/* ── Partners Side Drawer popup ────────────────────────────────── */}
      {drawerOpen && (
        <div className="gi-modal-backdrop" onClick={() => setDrawerOpen(false)}>
          <div className="gi-modal-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="gi-modal-close" onClick={() => setDrawerOpen(false)}>✕</button>
            
            <div className="gi-modal-header">
              <span className="gi-modal-label">OUR PARTNERS</span>
              <h2 className="gi-modal-title">Working Together for Lasting Change</h2>
            </div>
            
            <div className="gi-modal-body">
              <div className="gi-modal-partners-list">
                {partners.map((p) => (
                  <div className="gi-partner-item" key={p.name}>
                    <div className="gi-partner-avatar" style={{ backgroundColor: p.color }}>
                      {p.initials}
                    </div>
                    <div className="gi-partner-info">
                      <h4>{p.name}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="gi-modal-footer">
              <a href="mailto:info@kashmirei.org" className="gi-modal-btn">
                Become a Partner →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetInvolvedWays;