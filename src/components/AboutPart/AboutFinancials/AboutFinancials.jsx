import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Announcements/announcements.css";

const AboutFinancials = () => {
  const financialCards = [
    {
      category: "Overview",
      date: "FY 2025 Disclosures",
      title: "$142,500 Total Revenue",
      summary: "Supported entirely by individual donations, diaspora fundraising dinners, and private foundation grants. KEI does not accept funds from political groups.",
      color: "#1B4F8A"
    },
    {
      category: "Efficiency",
      date: "Program Spend Ratio",
      title: "91% Program Allocation",
      summary: "Over 91 cents of every single dollar raised goes directly to scholarship payouts, smart labs setup, carrier awareness materials, and tutor coaching fees.",
      color: "#2E7D32"
    },
    {
      category: "Overhead",
      date: "General & Administrative",
      title: "9% Admin & Operations",
      summary: "Overhead costs are minimized through streamlined volunteer assistance and cloud operations. This ensures resources are prioritized for direct scholar benefits.",
      color: "#E8A020"
    },
    {
      category: "Compliance",
      date: "Regulatory Audit",
      title: "CPA Audited Reports",
      summary: "Audited by independent certified public accountants. Registered as a 501(c)(3) public charity in Massachusetts, in compliance with federal guidelines.",
      color: "#6D1ED4"
    }
  ];

  return (
    <section className="section-about-financials" style={{ padding: "88px 40px", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        <div className="about-financials-header" style={{ marginBottom: "52px", textAlign: "center" }}>
          <span className="about-label" style={{ color: "#47BFDA", letterSpacing: "2px", fontWeight: "600", textTransform: "uppercase" }}>FINANCIALS</span>
          <h2 style={{ fontSize: "42px", color: "#0f1b24", marginTop: "14px", fontFamily: "Franklin Gothic Demi, sans-serif" }}>Latest Financials.</h2>
          <p style={{ fontSize: "15px", color: "#555", maxWidth: "600px", margin: "10px auto 0", lineHeight: "1.8" }}>
            We hold ourselves to the highest standards of financial accountability, ensuring every contribution is fully maximized to benefit Kashmiri scholars.
          </p>
        </div>

        {/* 4-column card grid */}
        <div className="financials-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px"
        }}>
          {financialCards.map((card, i) => (
            <div
              key={i}
              className="ann-card"
              style={{ 
                "--ann-color": card.color,
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div className="ann-card-top-bar" />
                <div className="ann-card-body" style={{ padding: "24px 24px 16px" }}>
                  <div className="ann-card-meta" style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "14px" }}>
                    <span className="ann-cat-pill" style={{ background: card.color }}>
                      {card.category}
                    </span>
                    <span className="ann-card-date">{card.date}</span>
                  </div>
                  <h3 className="ann-card-title" style={{ fontSize: "18px", color: "#0f1b24", lineHeight: "1.4" }}>{card.title}</h3>
                  <p className="ann-card-summary" style={{ fontSize: "14px", color: "#555", lineHeight: "1.75" }}>{card.summary}</p>
                </div>
              </div>
              
              <div style={{ borderTop: "1px solid #e4eef4", padding: "14px 24px", fontSize: "13px", fontWeight: "700", color: card.color }}>
                Verified Financial Report
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Historical Financials */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Link 
            to="/about/historical-financials" 
            className="button-outline"
            style={{
              backgroundColor: "transparent",
              borderColor: "#47BFDA",
              borderWidth: "1.5px",
              borderStyle: "solid",
              color: "#47BFDA",
              padding: "10px 28px",
              fontSize: "13px",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "600",
              textDecoration: "none"
            }}
          >
            View Historical Financials →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutFinancials;
