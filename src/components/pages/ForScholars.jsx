import React from "react";
import { Link } from "react-router-dom";
import ForScholarsPrograms from "../ForScholarsPart/ForScholarsPrograms";
import "../../styles/For-Scholars/forscholars.css";

const ForScholars = () => {
  const applySteps = [
    {
      step: "01",
      title: "Application Form",
      desc: (
        <>
          Complete the {/* FUTURE ONLINE FORM LINK: Paste google form link or HTML doc link here in href, e.g. href="your_link_here" and remove onClick */}
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Form Will be Available Soon"); }} style={{ color: "#47BFDA", textDecoration: "underline", fontWeight: "600", cursor: "pointer" }}>online application form</a>. Alternatively, offline application forms are present at your respective schools, or you can visit the KEI office for the same.
        </>
      )
    },
    {
      step: "02",
      title: "Contact for Examination Date",
      desc: "Contact the KEI office directly to get the official schedule and details regarding the upcoming entrance examination date."
    },
    {
      step: "03",
      title: "Roll Slip & Center Details",
      desc: "Contact the KEI office to receive your roll slip, center allotment details, and other instructions for the examination."
    }
  ];

  const applicationDates = [
    {
      program: "High School Support Program (HSSP)",
      status: "Upcoming",
      statusColor: "#f39c12",
      timeline: [
        { label: "Applications Open", date: "October 01, 2026" },
        { label: "Application Submission Deadline", date: "October 25, 2026" },
        { label: "Release of Admit Cards / Roll Numbers", date: "November 15, 2026" },
        { label: "KEI HSSP Test", date: "November 29, 2026" },
        // { label: "Results & Document Verification", date: "December 20, 2026" }
      ]
    }
    /*
    {
      program: "Professional Support Program (PSP)",
      open: "September 15, 2026",
      deadline: "October 30, 2026",
      status: "Upcoming",
      statusColor: "#f39c12"
    },
    {
      program: "Graduate Abroad Program (GAP)",
      open: "February 01, 2026",
      deadline: "March 31, 2026",
      status: "Closed",
      statusColor: "#e74c3c"
    }
    */
  ];

  const applicationLinks = [
    {
      title: "Download Application Form (PDF)",
      desc: "Prefer paper? Download our official offline form, print it, and submit it at our offices.",
      btnText: "Download PDF Form",
      action: "download-alert"
    },
    {
      title: "Submit Admissions Inquiry",
      desc: "Have doubts regarding documents or need help? Contact our counselors directly.",
      btnText: "Contact Us",
      link: "mailto:info@kashmirei.org",
      external: true
    }
  ];

  return (
    <div className="forscholars-page-wrapper">
      {/* ── Rainbow Navigator ───────────────────────────────────── */}
      <ForScholarsPrograms />

      {/* ── How to Apply Section ────────────────────────────────── */}
      <section className="forscholars-apply-section">
        <div className="forscholars-container">
          <div className="forscholars-header">
            <h2>How to Apply.</h2>
            <p className="forscholars-sub">
              Our application process is structured to be transparent, fair, and accessible to students across Kashmir.
            </p>
          </div>

          <div className="forscholars-steps-grid">
            {applySteps.map((item, idx) => (
              <div key={idx} className="forscholars-step-card">
                <span className="step-num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="forscholars-apply-cta">
            <Link to="/for-scholars/how-to-apply" className="button-outline cta-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── Dates for Application Section ────────────────────────── */}
      <section className="forscholars-dates-section">
        <div className="forscholars-container">
          <div className="forscholars-header">
            <span className="forscholars-label font-teal"> DATES FOR APPLICATION</span>
            <h2>Application Timelines.</h2>
            <p className="forscholars-sub">
              Mark your calendars with the schedule for current and upcoming admission cycles for our core scholar programs.
            </p>
          </div>

          <div className="forscholars-dates-grid" style={{ display: "flex", justifyContent: "center" }}>
            {applicationDates.map((item, idx) => (
              <div key={idx} className="forscholars-date-card" style={{ maxWidth: "600px", width: "100%" }}>
                <div className="date-card-header" style={{ alignItems: "center", textAlign: "center" }}>
                  <span className="status-badge" style={{ backgroundColor: item.statusColor }}>
                    {item.status}
                  </span>
                  <h3>{item.program} Exam Form Timeline</h3>
                </div>
                <div className="date-card-body" style={{ marginTop: "24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", paddingLeft: "24px", borderLeft: "2px solid #e4eef4", textAlign: "left" }}>
                    {item.timeline && item.timeline.map((step, sIdx) => (
                      <div key={sIdx} style={{ position: "relative" }}>
                        <div style={{
                          position: "absolute",
                          left: "-33px",
                          top: "4px",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          backgroundColor: sIdx === 0 ? "#f39c12" : "#47BFDA",
                          border: "3px solid #ffffff",
                          boxShadow: "0 0 0 2px #e4eef4"
                        }} />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "10px" }}>
                          <strong style={{ fontSize: "14.5px", color: "#0f1b24", fontWeight: "700" }}>{step.label}</strong>
                          <span style={{ fontSize: "13.5px", color: "#666", fontWeight: "600" }}>{step.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Links to Application Section ────────────────────────── */}
      <section className="forscholars-links-section">
        <div className="forscholars-container">
          <div className="forscholars-header">
            <span className="forscholars-label"> Links to Application</span>
            <h2>Application Links & Downloads.</h2>
            <p className="forscholars-sub">
              Access online registration forms, download offline packets, or reach out to our team if you need support.
            </p>
          </div>

          <div className="forscholars-links-grid">
            {applicationLinks.map((item, idx) => (
              <div key={idx} className="forscholars-link-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                 <div className="link-card-action">
                  {item.action === "download-alert" ? (
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); alert("Form will be available soon, stay tuned"); }} 
                      className="button-outline card-btn"
                    >
                      {item.btnText}
                    </a>
                  ) : item.link && (item.link.startsWith("mailto:") || item.link === "#") ? (
                    <a href={item.link} className="button-outline card-btn">
                      {item.btnText}
                    </a>
                  ) : (
                    <Link to={item.link || "#"} className="button-outline card-btn">
                      {item.btnText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForScholars;
