import React from "react";
import { Link } from "react-router-dom";

const HistoricalFinancials = () => {
  const historicalData = [
    { year: "FY 2024", revenue: "$135,000", program: "$121,500 (90%)", admin: "$13,500 (10%)", audit: "CPA Audited" },
    { year: "FY 2023", revenue: "$128,000", program: "$117,760 (92%)", admin: "$10,240 (8%)", audit: "CPA Audited" },
    { year: "FY 2022", revenue: "$115,000", program: "$102,350 (89%)", admin: "$12,650 (11%)", audit: "CPA Audited" },
    { year: "FY 2021", revenue: "$98,000", program: "$89,180 (91%)", admin: "$8,820 (9%)", audit: "CPA Audited" },
  ];

  const reportDownloads = [
    { year: "FY 2024 Disclosures", desc: "Includes Audited Statement of Financial Position, Revenue Ledger, and IRS Form 990 filing." },
    { year: "FY 2023 Disclosures", desc: "Detailed breakdown of Program Allocations, smart labs support, and operations expenses." },
    { year: "FY 2022 Disclosures", desc: "Audited financial declarations and Boston/Srinagar operations compliance filings." },
    { year: "FY 2021 Disclosures", desc: "Annual charity disclosure statement, fundraising audit reports, and balance sheets." },
  ];

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
          <h2 style={{ fontSize: "26px", color: "#0f1b24", marginBottom: "22px", textAlign: "center", fontWeight: "700" }}>
            Year-Over-Year Financial Summary
          </h2>

          <div style={{ overflowX: "auto", border: "1.5px solid #e4eef4", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px", textAlign: "left" }}>
              <thead>
                <tr style={{ backgroundColor: "#f8fbfd", borderBottom: "1.5px solid #e4eef4" }}>
                  <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Fiscal Year</th>
                  <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Total Revenue</th>
                  <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Program Expenditures</th>
                  <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Admin & General</th>
                  <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Audit Status</th>
                </tr>
              </thead>
              <tbody>
                {historicalData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    style={{ 
                      borderBottom: idx === historicalData.length - 1 ? "none" : "1px solid #eef3f7",
                      transition: "background-color 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fcfdfe"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    <td style={{ padding: "18px 24px", fontSize: "14.5px", fontWeight: "700", color: "#0f1b24" }}>{row.year}</td>
                    <td style={{ padding: "18px 24px", fontSize: "14.5px", color: "#444" }}>{row.revenue}</td>
                    <td style={{ padding: "18px 24px", fontSize: "14.5px", color: "#2E7D32", fontWeight: "600" }}>{row.program}</td>
                    <td style={{ padding: "18px 24px", fontSize: "14.5px", color: "#E8A020", fontWeight: "600" }}>{row.admin}</td>
                    <td style={{ padding: "18px 24px", fontSize: "14px" }}>
                      <span style={{ backgroundColor: "#e8f5e9", color: "#2E7D32", padding: "4px 10px", borderRadius: "20px", fontWeight: "700", fontSize: "11px", textTransform: "uppercase" }}>
                        {row.audit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
