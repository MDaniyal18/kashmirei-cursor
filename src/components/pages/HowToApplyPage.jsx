import React, { useState } from "react";
import { Link } from "react-router-dom";

const HowToApplyPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    {
      num: "01",
      title: "Review Eligibility Criteria",
      desc: "Before starting your application, verify that you meet the criteria for the specific program. For the High School Support Program (HSSP), students must be in Class 9, have scored 75% or higher in Class 8, and have an annual family income under 3,00,000 INR. Other programs (PSP, GAP) have their own academic and enrollment prerequisites.",
      details: [
        "Academic records: Mark sheets from the previous academic year.",
        "Income threshold: Verified annual household income within current limits.",
        "School/College registration: Active enrollment in a recognized Kashmiri educational institution."
      ]
    },
    {
      num: "02",
      title: "Obtain & Fill the Application",
      desc: "Applications can be filled online through our active admission portals during the application window. Alternatively, you can download the application form PDF from our website, or collect a physical form from the KEI office in Srinagar or district centers. Fill in all sections thoroughly, including student profile, academic history, and contact coordinates.",
      details: [
        "Ensure names match official certificates exactly.",
        "Provide a functional mobile number and email address for correspondence.",
        "Include reference details from school headmasters or teachers."
      ]
    },
    {
      num: "03",
      title: "Submit Supporting Documents",
      desc: "Compile and submit all necessary documentation to support your application. Incomplete applications or those missing mandatory verifications cannot be processed. Submissions can be uploaded directly to our portal or hand-delivered to the KEI office/district centers.",
      details: [
        "Income Certificate issued by a Tehsildar or Gazetted Officer.",
        "Recent report card or official marks sheet.",
        "Aadhaar Card or valid Government identity proof.",
        "Passport size photographs (3 copies)."
      ]
    },
    {
      num: "04",
      title: "Written Test & Selection Interview",
      desc: "Shortlisted candidates (for HSSP) will be invited to sit for the KEI Aptitude Test. This test assesses logic, basic math, english grammar, and science competencies. Candidates who qualify the written test will proceed to an interview with our selection committee, which includes KEI staff and external academics to assess motivation and potential.",
      details: [
        "Aptitude Test: Held at multiple centers across Kashmir districts.",
        "Personal Interview: A friendly conversation focusing on goals, interests, and family background.",
        "Final Selection: Notification sent via SMS, email, and published on the KEI website."
      ]
    }
  ];

  const faqs = [
    {
      q: "When do applications open for KEI programs?",
      a: "Application timelines vary. High School Support Program (HSSP) applications typically open in July. Professional Support Program (PSP) applications open in September. Check the 'Important Dates' section on the main Scholars page regularly for active cycles."
    },
    {
      q: "Is there an application fee?",
      a: "No, applying to any Kashmir Education Initiative (KEI) program is completely free of charge."
    },
    {
      q: "Can I apply offline if I don't have internet access?",
      a: "Yes! You can collect physical application forms from our main office in Srinagar or contact local district representatives. Physical forms must be returned with paper copies of the required documents before the application deadline."
    },
    {
      q: "What is the family income limit for eligibility?",
      a: "For the HSSP scholarship, the family's annual household income should generally not exceed 3,00,000 INR from all sources. Verification certificates issued by the competent authority (Tehsildar) are required."
    },
    {
      q: "How will I be notified about my application status?",
      a: "KEI notifies shortlisted candidates via SMS and email. The list of selected candidates is also published on our website and social media platforms. Please ensure your contact details are written correctly on the form."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="how-to-apply-page" style={{ backgroundColor: "#ffffff" }}>
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="wwd-rainbow-section" style={{ padding: "140px 40px 40px", backgroundColor: "#f4f8fb" }}>
        <div className="wwd-rainbow-inner" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "24px" }}>
            <Link 
              to="/for-scholars" 
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
              ← Back to For Scholars
            </Link>
          </div>
          <h1 className="wwd-rainbow-heading" style={{ fontSize: "36px", fontWeight: "700", color: "#0f1b24", marginTop: "10px" }}>
            Detailed Application Process
          </h1>
          <p className="wwd-rainbow-sub" style={{ fontSize: "15px", color: "#555", marginTop: "12px", lineHeight: "1.8" }}>
            Learn about our transparent, merit-cum-means selection methodology and find the checklists required for a successful application.
          </p>
        </div>
      </section>

      {/* ── Steps Section ────────────────────────────────────────── */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", color: "#0f1b24", marginBottom: "40px", textAlign: "center" }}>
            Four Steps to Secure Your Scholarship
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="step-card-detailed"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #e4eef4",
                  borderRadius: "16px",
                  padding: "40px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.02)",
                  display: "flex",
                  gap: "30px",
                  position: "relative"
                }}
              >
                <div style={{
                  fontSize: "52px",
                  fontWeight: "900",
                  color: "#47BFDA",
                  opacity: "0.25",
                  lineHeight: "1",
                  fontFamily: "monospace"
                }}>
                  {step.num}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "20px", color: "#0f1b24", fontWeight: "700", marginBottom: "16px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8", marginBottom: "20px" }}>
                    {step.desc}
                  </p>
                  
                  <div style={{
                    background: "#f8fbfd",
                    borderLeft: "4px solid #47BFDA",
                    padding: "20px 24px",
                    borderRadius: "0 8px 8px 0"
                  }}>
                    <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0f1b24", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      Key Information / Requirements:
                    </h4>
                    <ul style={{ paddingLeft: "18px", margin: 0, fontSize: "14px", color: "#444", lineHeight: "1.7" }}>
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} style={{ marginBottom: "6px" }}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Document Checklist Sidebar / Card ───────────────────── */}
      <section style={{ padding: "60px 40px", backgroundColor: "#f4f8fb" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{
            background: "#ffffff",
            borderRadius: "16px",
            border: "1.5px solid #e4eef4",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
          }}>
            <h3 style={{ fontSize: "24px", color: "#0f1b24", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              📋 Required Documents Checklist
            </h3>
            <p style={{ fontSize: "14.5px", color: "#666", marginBottom: "24px" }}>
              Keep scanned or photocopied versions of these files ready before initiating your application to avoid delays.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
              {[
                { title: "Income Certificate", desc: "Issued by Tehsildar or competent Revenue Authority." },
                { title: "Academic Report Cards", desc: "Marks list from last qualifying annual examination." },
                { title: "Identification Proof", desc: "Aadhaar Card, Student ID, or Birth Certificate." },
                { title: "Passport Photographs", desc: "Recent color photographs with light backgrounds." },
                { title: "Category Certificate", desc: "If applying under specific quotas or orphaned category." },
                { title: "Enrollment Slip", desc: "College admissions slip or fee receipt (for PSP applicants)." }
              ].map((doc, idx) => (
                <div key={idx} style={{ display: "flex", gap: "12px", background: "#f8fbfd", padding: "16px", borderRadius: "10px", border: "1px solid #eef4f7" }}>
                  <div style={{ color: "#47BFDA", fontSize: "18px", fontWeight: "bold" }}>✓</div>
                  <div>
                    <h4 style={{ fontSize: "14.5px", fontWeight: "700", color: "#0f1b24", margin: "0 0 4px" }}>{doc.title}</h4>
                    <p style={{ fontSize: "13px", color: "#666", margin: 0, lineHeight: "1.4" }}>{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", color: "#0f1b24", marginBottom: "40px", textAlign: "center" }}>
            Admissions FAQs
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  style={{
                    border: "1.5px solid #e4eef4",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "border-color 0.2s"
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: isOpen ? "#f8fbfd" : "#ffffff",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                      cursor: "pointer",
                      fontFamily: "inherit"
                    }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: "700", color: "#0f1b24" }}>{faq.q}</span>
                    <span style={{ fontSize: "18px", color: "#47BFDA", transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "20px 24px", fontSize: "14.5px", color: "#555", lineHeight: "1.7", borderTop: "1.5px solid #e4eef4", backgroundColor: "#ffffff" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer / CTA ────────────────────────────────────────── */}
      <section style={{ padding: "60px 40px", backgroundColor: "#f4f8fb", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "22px", color: "#0f1b24", marginBottom: "12px" }}>Still Have Questions?</h3>
          <p style={{ fontSize: "15px", color: "#555", marginBottom: "24px" }}>
            If you need assistance with application forms or eligibility determinations, contact our admissions help desk.
          </p>
          <a 
            href="mailto:admissions@kashmirei.org" 
            className="button-outline"
            style={{
              backgroundColor: "#47BFDA",
              borderColor: "#47BFDA",
              color: "#fff",
              padding: "10px 24px",
              fontSize: "14px",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block"
            }}
          >
            Email Helpdesk
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowToApplyPage;
