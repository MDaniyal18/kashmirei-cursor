import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Announcements/announcements.css";
import YearOverYearTable from "./YearOverYearTable";

const AboutFinancials = () => {
  return (
    <section className="section-about-financials" style={{ padding: "40px", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span className="about-label" style={{ color: "#47BFDA", letterSpacing: "2px", fontWeight: "600", textTransform: "uppercase", fontSize: "13px" }}>
            Financials
          </span>
          <h2 style={{ fontSize: "40px", color: "#0f1b24", marginTop: "12px", fontFamily: "Franklin Gothic Demi, sans-serif" }}>
            Latest Financials.
          </h2>
          <p style={{ fontSize: "15px", color: "#555", maxWidth: "560px", margin: "10px auto 0", lineHeight: "1.7" }}>
            We hold ourselves to the highest standards of financial accountability, ensuring every contribution is fully maximized to benefit Kashmiri scholars.
          </p>
        </div>

        <YearOverYearTable title="" />

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
