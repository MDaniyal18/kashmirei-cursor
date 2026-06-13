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
  const [activeDrawer, setActiveDrawer] = useState(null);

  const closeDrawer = () => {
    setActiveDrawer(null);
  };

  return (
    <section className="gi-ways">
      <div className="container">

        <div className="gi-ways-header">
          <span>GET INVOLVED</span>
          <h2>Ways to Get Involved</h2>
        </div>

        <div className="gi-ways-grid">

          {/* Volunteer Card */}
          <div 
            className="gi-card" 
            onClick={() => setActiveDrawer("volunteer")} 
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
                setActiveDrawer("volunteer");
              }}
            >
              VOLUNTEER WITH US
            </button>
          </div>

          {/* Mentor Card */}
          <div 
            className="gi-card" 
            onClick={() => setActiveDrawer("mentor")} 
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
                setActiveDrawer("mentor");
              }}
            >
              BECOME A MENTOR
            </button>
          </div>

          {/* Partner Card */}
          <div 
            className="gi-card" 
            onClick={() => setActiveDrawer("partners")} 
            style={{ cursor: "pointer" }}
          >
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
                setActiveDrawer("partners");
              }}
            >
              PARTNER WITH US
            </button>
          </div>

        </div>

        <blockquote className="gi-quote">
          “Supporting KEI is like investing in the future of humanity.”
          <span>– KEI Supporter</span>
        </blockquote>

      </div>

      {/* ── Side Drawer Popup ────────────────────────────────── */}
      {activeDrawer && (
        <div className="gi-modal-backdrop" onClick={closeDrawer}>
          <div className="gi-modal-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="gi-modal-close" onClick={closeDrawer}>✕</button>
            
            {activeDrawer === "partners" && (
              <>
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
              </>
            )}

            {activeDrawer === "volunteer" && (
              <>
                <div className="gi-modal-header" style={{ borderLeft: "5px solid #47BFDA" }}>
                  <span className="gi-modal-label">GET INVOLVED / VOLUNTEER</span>
                  <h2 className="gi-modal-title">Volunteer With Us</h2>
                </div>
                
                <div className="gi-modal-body">
                  <p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "#444", marginBottom: "20px" }}>
                    KEI is a volunteer-driven organization, and we offer a wide range of 
                    opportunities for individuals who are passionate about creating impact.
                  </p>
                  
                  <div style={{ marginTop: "24px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f1b24", marginBottom: "12px" }}>How can you help?</h3>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555", marginBottom: "14px" }}>
                      You can contribute your time and skills by supporting specific ongoing 
                      projects or by assisting in our broader organizational efforts.
                    </p>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555", marginBottom: "14px" }}>
                      Our volunteers and interns actively engage in a variety of initiatives, 
                      including managing scholarship programs, mentoring students across 
                      primary, secondary, undergraduate, and graduate levels, and delivering 
                      guest lectures at educational institutions.
                    </p>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555", marginBottom: "14px" }}>
                      In addition, volunteers support outreach initiatives, enhance our 
                      digital presence, conduct research and field studies, and contribute 
                      to fundraising efforts that sustain our mission.
                    </p>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555", marginBottom: "14px" }}>
                      We are always open to fresh ideas and innovative approaches. If you have 
                      a vision or initiative you would like to contribute, we would love to 
                      hear from you.
                    </p>
                  </div>
                </div>
                
                <div className="gi-modal-footer">
                  <p style={{ fontSize: "13.5px", fontWeight: "600", color: "#0f1b24", marginBottom: "12px" }}>To get started, click the button below and share your details with us.</p>
                  <a
                    href="https://docs.google.com/forms/d/e/YOUR_FORM_LINK_HERE/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gi-modal-btn"
                  >
                    Fill Volunteer Information Form
                  </a>
                </div>
              </>
            )}

            {activeDrawer === "mentor" && (
              <>
                <div className="gi-modal-header" style={{ borderLeft: "5px solid #47BFDA" }}>
                  <span className="gi-modal-label">GET INVOLVED / MENTOR</span>
                  <h2 className="gi-modal-title">Become a Mentor</h2>
                </div>
                
                <div className="gi-modal-body">
                  <p style={{ fontSize: "14.5px", lineHeight: "1.6", color: "#444", marginBottom: "20px" }}>
                    Share your knowledge and guide scholars towards a brighter future.
                    Your mentorship can shape careers and transform lives.
                  </p>
                  
                  <div style={{
                    background: "#f4f8fb",
                    borderLeft: "4px solid #47BFDA",
                    padding: "18px",
                    borderRadius: "0 12px 12px 0",
                    marginBottom: "20px"
                  }}>
                    <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#0f1b24", margin: "0 0 6px" }}>One Mentor, One Scholar</h4>
                    <p style={{ margin: 0, fontSize: "13.5px", color: "#555", lineHeight: "1.5" }}>
                      Support a high school scholar by volunteering <strong>2 hours per month</strong> 
                      for a minimum of <strong>one year</strong>. Help guide their academic journey 
                      and future goals.
                    </p>
                  </div>

                  <div style={{ marginTop: "24px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#0f1b24", marginBottom: "10px" }}>Mentorship Sign-Up Requirements</h3>
                    <p style={{ fontSize: "13.5px", color: "#555", marginBottom: "12px" }}>Before applying, please confirm that you:</p>
                    
                    <ul style={{ paddingLeft: "18px", margin: "0 0 20px", listStyleType: "decimal" }}>
                      <li style={{ fontSize: "13.5px", color: "#555", lineHeight: "1.6", marginBottom: "8px" }}>
                        Have completed higher secondary education and are currently in college or hold a degree.
                      </li>
                      <li style={{ fontSize: "13.5px", color: "#555", lineHeight: "1.6", marginBottom: "8px" }}>
                        Can commit <strong>2–4 hours per month</strong> for at least <strong>a year</strong>.
                      </li>
                      <li style={{ fontSize: "13.5px", color: "#555", lineHeight: "1.6", marginBottom: "8px" }}>
                        Are willing to mentor a student and guide them in their academic and long-term goals 
                        (no tutoring required).
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="gi-modal-footer">
                  <p style={{ fontSize: "13.5px", fontWeight: "600", color: "#0f1b24", marginBottom: "12px" }}>If you meet these criteria, please proceed to the application form.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfKvVgYMBk7IyH-rIR43V9B-3ZQUyZunFZxMWYi2Wq3VZu4Lg/viewform?usp=sf_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gi-modal-btn"
                    >
                      Sign up / Apply Online
                    </a>
                    <Link
                      to="/mentorship-success-stories"
                      className="gi-modal-btn"
                      style={{
                        background: "transparent",
                        border: "2.5px solid #47BFDA",
                        color: "#47BFDA"
                      }}
                    >
                      Success Stories →
                    </Link>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

export default GetInvolvedWays;