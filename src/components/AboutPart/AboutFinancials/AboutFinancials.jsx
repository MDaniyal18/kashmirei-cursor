import React from "react";
import "../../../styles/Announcements/announcements.css";
import YearOverYearTable from "./YearOverYearTable";

const FINANCIAL_REPORT_PDF = "/documents/KEI-financial-Rpt-2024-detailed.pdf";

const AboutFinancials = () => {
  return (
    <section className="section-about-financials" style={{ padding: "40px", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span className="about-label" style={{ color: "#47BFDA", letterSpacing: "2px", fontWeight: "600", textTransform: "uppercase", fontSize: "13px" }}>
            Financials
          </span>
        </div>

        <YearOverYearTable title="" />

        <div style={{ marginTop: "26px", textAlign: "center" }}>
          <a
            href={FINANCIAL_REPORT_PDF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.open(FINANCIAL_REPORT_PDF, "_blank", "noopener,noreferrer");
            }}
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
            View latest financial report →
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutFinancials;
