import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "What is Kashmir Education Initiative (KEI)?",
      a: "Kashmir Education Initiative (KEI) is a non-profit, non-political organization. Our mission is to provide high-potential but financially at-risk scholars in Kashmir a supportive and leadership-oriented educational environment through mentorship, experiential opportunities, and financial assistance."
    },
    {
      q: "Who is eligible for KEI scholarships?",
      a: "Eligibility requirements vary depending on the specific program. For our flagship High School Support Program (HSSP), students currently in Grade 8 who scored at least 75% on their exams and whose family's annual income is under INR 5 lakhs are eligible to apply. Check our 'For Scholars' detail pages for other specific requirements."
    },
    {
      q: "How does the Mentorship Program work?",
      a: "Our Mentorship Program pairs scholars in Kashmir with global Kashmiri diaspora members and professional community leaders. Pairs meet bi-weekly via video calls to discuss career objectives, university applications, soft skills development, and academic milestones."
    },
    {
      q: "How does KEI ensure transparency in fund utilization?",
      a: "We are committed to full fiscal transparency. Over 91% of all donations raised go directly into student-centric program costs, device acquisitions, coaching, and tuition payments. Our financial statements are audited by independent certified public accountants annually."
    },
    {
      q: "How can I volunteer or partner with KEI?",
      a: "You can sign up as a mentor, run local operations, or establish corporate partnerships. To apply, visit our 'Get Involved' page or email our operations coordinator directly at info@kashmirei.org."
    },
    {
      q: "Can I sponsor a specific student?",
      a: "While we pool resources to ensure equity and systemic support across all cohorts (e.g. including digital devices and career sessions), you can choose to direct donations to specific program categories such as the Graduate Abroad Program, High School support, or Digital Learning environments."
    }
  ];

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-page" style={{ padding: "120px 40px 80px", backgroundColor: "#f4f8fb" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <div className="faq-header" style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="section-label" style={{ color: "#47BFDA", letterSpacing: "2px", fontWeight: "600", fontSize: "15px" }}>GOT QUESTIONS?</span>
          <h1 style={{ fontSize: "40px", color: "#0f1b24", marginTop: "12px", fontFamily: "Franklin Gothic Demi, sans-serif" }}>Frequently Asked Questions</h1>
          <p style={{ color: "#555", fontSize: "15px", marginTop: "10px" }}>
            Everything you need to know about Kashmir Education Initiative's programs, eligibility, and support systems.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="faq-accordion" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="faq-item"
                style={{
                  background: "#ffffff",
                  borderRadius: "8px",
                  border: "1.5px solid #e4eef4",
                  boxShadow: isOpen ? "0 8px 24px rgba(71, 191, 218, 0.08)" : "0 4px 12px rgba(0, 0, 0, 0.02)",
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Header (Question trigger) */}
                <button
                  onClick={() => toggleIndex(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    background: "transparent",
                    border: "none",
                    color: "#0f1b24",
                    textAlign: "left",
                    cursor: "pointer",
                    boxShadow: "none"
                  }}
                >
                  <span style={{ fontSize: "16px", fontWeight: "700", fontFamily: "Franklin Gothic Demi, sans-serif", paddingRight: "20px" }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#47BFDA",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease"
                  }}>
                    ＋
                  </span>
                </button>

                {/* Body (Answer content) */}
                <div
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderTop: isOpen ? "1px solid #e4eef4" : "1px solid transparent"
                  }}
                >
                  <div style={{ padding: "20px 24px", fontSize: "14.5px", color: "#444", lineHeight: "1.8", background: "#fcfdfe" }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-footer" style={{ marginTop: "50px", textAlign: "center" }}>
          <p style={{ fontSize: "15px", color: "#666" }}>Still have questions? Contact our team at any time.</p>
          <a href="mailto:info@kashmirei.org" className="button-outline" style={{ display: "inline-block", marginTop: "12px", textDecoration: "none" }}>
            Email Us Directly →
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
