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

  return (
    <section className="gi-ways">
      <div className="container">

        <div className="gi-ways-header">
          <span>GET INVOLVED</span>
          <h2>Ways to Get Involved</h2>
        </div>

        <div className="gi-ways-grid">

          <div className="gi-card">
            <Link to="/volunteer-with-us">
              <img src={volunteerIcon} alt="Volunteer" />
            </Link>
            <h3>Volunteer With Us</h3>
            <p>Join hands with us in operations, training, or outreach.</p>
            <Link to="/volunteer-with-us">VOLUNTEER WITH US</Link>
          </div>

          <div className="gi-card">
            <Link to="/become-a-mentor">
              <img src={mentorIcon} alt="Mentor" />
            </Link>
            <h3>Mentor</h3>
            <p>Guide a scholar’s journey and be part of their transformation.</p>
            <Link to="/become-a-mentor">BECOME A MENTOR</Link>
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