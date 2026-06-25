import React from "react";
import { Link } from "react-router-dom";
import YearOverYearTable from "../AboutPart/AboutFinancials/YearOverYearTable";
import { reportDownloads } from "../../data/historicalFinancials";

const HistoricalFinancials = () => {
  return (
    <div className="historical-financials-page" style={{ backgroundColor: "#ffffff" }}>
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="wwd-rainbow-section" style={{ padding: "100px 40px 22px", backgroundColor: "#f4f8fb" }}>
        <div className="wwd-rainbow-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "24px" }}>
            <Link 
              to="/about" 
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
              ← Back to About
            </Link>
          </div>
          <span className="wwd-section-label">ARCHIVE RECORDS</span>
          <h1 className="wwd-rainbow-heading" style={{ fontSize: "36px", fontWeight: "700", color: "#0f1b24", marginTop: "10px" }}>
            Historical Financials
          </h1>
          <p className="wwd-rainbow-sub" style={{ fontSize: "15px", color: "#555", marginTop: "12px", lineHeight: "1.8" }}>
            Review our financial charts, audit disclosures, and compliance registries from previous fiscal periods.
          </p>
        </div>
      </section>

      {/* ── Table Section ───────────────────────────────────────── */}
      <section style={{ padding: "22px 40px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <YearOverYearTable />
        </div>
      </section>

      {/* ── Downloads Section ───────────────────────────────────── */}
      <section style={{ padding: "22px 40px", backgroundColor: "#f4f8fb" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "26px", color: "#0f1b24", marginBottom: "22px", textAlign: "center", fontWeight: "700" }}>
            Download Audited Disclosures
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {reportDownloads.map((report, idx) => (
              <div 
                key={idx} 
                className="forscholars-link-card" 
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #e4eef4",
                  borderRadius: "16px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.01)"
                }}
              >
                <div>
                  <h3 style={{ fontSize: "18px", color: "#0f1b24", fontWeight: "700", marginBottom: "12px" }}>
                    {report.year}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#666", lineHeight: "1.65", marginBottom: "24px" }}>
                    {report.desc}
                  </p>
                </div>
                <a 
                  href="#" 
                  className="card-btn"
                  style={{
                    backgroundColor: "#47BFDA",
                    color: "#ffffff",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    display: "block",
                    textAlign: "center"
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    alert("This is a demo download link. Real financial records will be provided in production.");
                  }}
                >
                  Download Report PDF ⬇
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoricalFinancials;
