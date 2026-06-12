import React from "react";
import "../../../../styles/Events/upcoming-events.css"; // Reuse events styling for consistency

const HowToApply = () => {
  const steps = [
    {
      num: "01",
      title: "Review Eligibility Criteria",
      desc: "Verify that you meet the program-specific requirements, such as a minimum 75% score in Grade 8 for HSSP, and that your family's annual income is within the required threshold."
    },
    {
      num: "02",
      title: "Obtain & Fill Application",
      desc: "Download the official application form from our website or collect it from the KEI Srinagar office. Complete all fields accurately, including academic history and references."
    },
    {
      num: "03",
      title: "Submit Documents",
      desc: "Provide necessary supporting documents including recent report cards, family income certificate, and identity proof. Submit physical copies at designated district centers or online."
    },
    {
      num: "04",
      title: "Assessment & Interview",
      desc: "Qualified applicants will be invited to sit for the KEI Aptitude Test. Shortlisted students from the exam are interviewed by our selection panel to confirm final cohorts."
    }
  ];

  return (
    <section className="section-how-to-apply" style={{ padding: "80px 40px", backgroundColor: "#ffffff" }}>
      <div className="events-container">
        
        <div className="events-header" style={{ marginBottom: "50px", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", color: "#0f1b24", marginTop: "12px" }}>How to Apply.</h2>
          <p className="events-sub" style={{ maxWidth: "600px", margin: "10px auto 0" }}>
            A transparent, merit-based selection process to ensure support reaches the most deserving and high-potential students in Kashmir.
          </p>
        </div>

        <div className="apply-steps-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "28px",
          marginTop: "30px"
        }}>
          {steps.map((step, index) => (
            <div className="apply-step-card" key={index} style={{
              background: "#f4f8fb",
              padding: "35px 24px",
              borderRadius: "12px",
              border: "1.5px solid #e4eef4",
              position: "relative",
              transition: "transform 0.25s ease, box-shadow 0.25s ease"
            }}>
              <span className="step-number" style={{
                fontSize: "44px",
                fontWeight: "900",
                color: "#47BFDA",
                opacity: "0.2",
                position: "absolute",
                top: "15px",
                right: "20px",
                lineHeight: "1"
              }}>{step.num}</span>
              
              <h3 style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#0f1b24",
                marginBottom: "12px",
                paddingRight: "40px"
              }}>{step.title}</h3>
              
              <p style={{
                fontSize: "14px",
                color: "#555",
                lineHeight: "1.75",
                margin: "0"
              }}>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowToApply;
