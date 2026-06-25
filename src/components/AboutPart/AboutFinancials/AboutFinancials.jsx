import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Announcements/announcements.css";
import YearOverYearTable from "./YearOverYearTable";

const AboutFinancials = () => {
  // ── FY2024 reviewed figures (year ended Dec 31, 2024) ──────────────────────
  const stats = [
    { label: "Total Support & Revenue", value: "$426,802" },
    { label: "Total Expenses", value: "$232,693" },
    { label: "Total Liabilities", value: "$22,426" },
  ];

  // Expense allocation for the doughnut
  const PROGRAM = 155273;
  const NONPROGRAM = 77420;
  const TOTAL = PROGRAM + NONPROGRAM; // 232,693
  const programPct = Math.round((PROGRAM / TOTAL) * 100); // 67
  const nonProgramPct = 100 - programPct; // 33

  // Doughnut geometry (SVG stroke arcs)
  const R = 60;
  const C = 2 * Math.PI * R; // 376.99
  const programLen = (PROGRAM / TOTAL) * C;
  const nonProgramLen = C - programLen;

  const PROGRAM_COLOR = "#1B4F8A";
  const NONPROGRAM_COLOR = "#9CC2DE";

  return (
    <section className="section-about-financials" style={{ padding: "40px", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span className="about-label" style={{ color: "#47BFDA", letterSpacing: "2px", fontWeight: "600", textTransform: "uppercase", fontSize: "13px" }}>
            Financials
          </span>
          <h2 style={{ fontSize: "40px", color: "#0f1b24", marginTop: "12px", fontFamily: "Franklin Gothic Demi, sans-serif" }}>
            FY2024 at a Glance
          </h2>
          <p style={{ fontSize: "15px", color: "#555", maxWidth: "560px", margin: "10px auto 0", lineHeight: "1.7" }}>
            Year ended December 31, 2024 — financial statements independently reviewed by a CPA firm.
          </p>
        </div>

        {/* Snapshot stat strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          marginBottom: "36px",
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{
              background: "#f5f9fc",
              borderRadius: "12px",
              padding: "20px 22px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "13px", color: "#5a6b78", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {s.label}
              </div>
              <div style={{ fontSize: "30px", fontWeight: "700", color: "#0f1b24", fontFamily: "Franklin Gothic Demi, sans-serif" }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Expense allocation doughnut */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
        }}>
          <div style={{ position: "relative", width: "180px", height: "180px", flexShrink: 0 }}>
            <svg viewBox="0 0 160 160" width="180" height="180" role="img" aria-label={`Doughnut chart of FY2024 expenses: program ${programPct} percent, non-program ${nonProgramPct} percent.`}>
              <g transform="rotate(-90 80 80)">
                <circle cx="80" cy="80" r={R} fill="none" stroke={NONPROGRAM_COLOR} strokeWidth="22" />
                <circle
                  cx="80" cy="80" r={R}
                  fill="none"
                  stroke={PROGRAM_COLOR}
                  strokeWidth="22"
                  strokeDasharray={`${programLen} ${nonProgramLen}`}
                  strokeDashoffset="0"
                />
              </g>
              <text x="80" y="74" textAnchor="middle" fontSize="30" fontWeight="700" fill="#0f1b24" fontFamily="Franklin Gothic Demi, sans-serif">
                {programPct}%
              </text>
              <text x="80" y="94" textAnchor="middle" fontSize="12" fill="#5a6b78" letterSpacing="0.5">
                to programs
              </text>
            </svg>
          </div>

          {/* Legend */}
          <div style={{ minWidth: "240px" }}>
            <div style={{ fontSize: "13px", color: "#5a6b78", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>
              How Expenses Are Allocated
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #eef3f7" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#0f1b24" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: PROGRAM_COLOR }} />
                Program expenses
              </span>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#0f1b24" }}>$155,273</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#0f1b24" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: NONPROGRAM_COLOR }} />
                Non-program expenses
              </span>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#0f1b24" }}>$77,420</span>
            </div>
          </div>
        </div>

        <YearOverYearTable />

        {/* Compliance footnote */}
        <p style={{ fontSize: "13px", color: "#7a8893", textAlign: "center", margin: "30px auto 0", maxWidth: "640px", lineHeight: "1.7" }}>
          Registered 501(c)(3) public charity incorporated in Massachusetts. KEI does not accept funds raised at
          political events; all donations come through official channels.
        </p>

        {/* CTA to Historical Financials */}
        <div style={{ marginTop: "26px", textAlign: "center" }}>
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
              textDecoration: "none",
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
