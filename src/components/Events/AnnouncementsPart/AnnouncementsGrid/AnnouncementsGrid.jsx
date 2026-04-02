import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../../styles/Announcements/announcements.css";

const MicIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14Z" fill="#ffc107" />
    <path d="M17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11H5C5 14.53 7.61 17.43 11 17.92V21H13V17.92C16.39 17.43 19 14.53 19 11H17Z" fill="#ffc107" />
  </svg>
);

const CATEGORIES = ["All", "Scholarships", "Internships", "Results", "Media", "Community"];

const CATEGORY_COLORS = {
  Assistance: "#1B4F8A",
  Internships:   "#47BFDA",
  Results:       "#E8A020",
  Media:        "#2E7D32",
  Community:    "#6D1ED4",
  Scholarships: "#6B7C3A",
  Achievements: "#991b1bff",
};

const announcements = [
  {
  id: 1,
  category: "Assistance",
  date: "March 15, 2026",
  title: "KEI Opens Applications for the High School Support Program",
  summary: "A 4-year fully supported academic program for high-potential students across Kashmir Valley starting from Class 9th to Class 12th.",
  body: `KEI is proud to announce the opening of applications every year for High School Support Program (HSSP) — a comprehensive 4-year academic support program beginning from Class 9th.

The program is designed to support high-potential students through structured academic coaching, and dedicated mentorship as they prepare for competitive high school and future academic opportunities.

Who Can Apply:
Students currently in Grade 8 with strong academic potential and demonstrated financial need are encouraged to apply.

Eligibility Criteria:
• Academic Performance: Applicants must have secured at least 75% in their Grade 8 results.
• Financial Need: The applicant's family annual income must not exceed INR 5 lakhs.

Selection Process:
The selection process is designed to be transparent, fair, and merit-based, ensuring that the most deserving candidates are selected.

• KEI Entrance Examination:
  A standardized test conducted across 10 districts to assess aptitude, critical thinking, and academic readiness. The exam is held simultaneously across all centers to ensure fairness.

• Academic Merit Verification:
  Grade 8 results are reviewed to confirm the minimum 75% requirement.

How to Apply:
Applications will be available through the KEI Kashmir office and partner schools.

For more information, contact info@kashmirei.org or call +0194 2458153.`,
  cta: { label: "Learn About HSP", href: "/what-we-do#program-hsp" },
},
  {
    id: 2,
    category: "Internships",
    date: "February 28, 2026",
    title: "New Mentorship Cohort: 50 Scholars Matched with Global Professionals",
    summary: "KEI has successfully matched 50 high-achieving scholars with mentors from the USA, UK, Canada, and the Gulf — our largest cohort to date.",
    body: `We are thrilled to announce the launch of KEI's Spring 2026 Mentorship Cohort — our largest to date. Fifty scholars from across the KEI network have been matched with dedicated mentors representing diverse industries including medicine, engineering, technology, finance, and education.\n\nThis cohort builds on the success of our 2025 program, which saw over 85% of participating scholars report measurable improvement in career clarity and academic confidence.\n\nMentors come from the USA, UK, Canada, UAE, and other parts of the global Kashmiri diaspora. Each mentor-scholar pair will meet bi-weekly via video call, with quarterly group sessions facilitated by KEI program staff.\n\nIf you are interested in becoming a mentor for future cohorts, visit our Get Involved page.`,
    cta: { label: "Become a Mentor", href: "/get-involved" },
  },
  {
    id: 3,
    category: "Media",
    date: "January 10, 2026",
    title: "KEI Annual Report 2025 — Now Available",
    summary: "Our 2025 Annual Report is now published. Read about our impact, financials, program highlights, and the scholars whose lives were transformed last year.",
    body: `KEI's Annual Report for 2025 is now available for download. The report covers:\n\n• Program reach: 2,500+ scholars supported across 8 programs\n• Financial summary: 91 cents of every dollar raised goes directly to programs\n• Highlights: Expansion of the Digital Smart Learning Environment to 5 new schools\n• Scholar spotlights: Stories from 6 scholars across different programs\n• Governance update: New Board member appointments and committee reports\n\nAs a 501(c)(3) registered charity (EIN: 42-1733906), KEI is committed to full financial transparency. The complete audited financial statements are included in the report.\n\nThank you to every donor, volunteer, and partner whose support made 2025 possible.`,
    cta: { label: "Download Report", href: "#" },
  },
{
  id: 4,
  category: "Achievements",
  date: "December 5, 2025",
  title: "KEI Achievements Across Kashmir and Beyond",
  summary: "KEI scholars continue to achieve academic excellence, securing admissions to top institutions in India and abroad while demonstrating strong academic growth and leadership.",
  body: `KEI is proud to highlight the achievements of its scholars across Kashmir and beyond.

Over the years, KEI programs have supported hundreds of high-potential students through sustained academic mentorship, financial assistance, and holistic development. These efforts have translated into meaningful outcomes for students and their communities.

Key Achievements:

• University Placements:
KEI scholars have gained admission to leading institutions in India and internationally, pursuing degrees across diverse fields including engineering, medicine, social sciences, and the humanities.

• Academic Excellence:
Students across KEI programs consistently demonstrate strong performance in board examinations and competitive academic environments.

• Global Opportunities:
Through mentorship and guidance, many KEI graduates have successfully accessed higher education opportunities abroad, expanding their academic and professional horizons.

• Holistic Development:
Beyond academics, KEI scholars actively engage in leadership, community service, and extracurricular initiatives, emerging as confident and socially responsible individuals.

These achievements reflect KEI’s long-term commitment to nurturing talent, expanding access to quality education, and empowering the next generation of leaders from Kashmir.

For more information, contact info@kashmirei.org or call +0194 2458153.`,
  cta: null,
},
  {
    id: 5,
    category: "Results",
    date: "November 20, 2025",
    title: "KEI Fundraising Gala — Boston 2025: A Night to Remember",
    summary: "Over 150 supporters gathered in Boston for KEI's annual fundraising gala. Together, we raised over $85,000 — our most successful gala yet.",
    body: `KEI's Annual Fundraising Gala took place on November 15th, 2025, at the Westin Copley Place in Boston, MA. The evening brought together over 150 donors, alumni, scholars, and community supporters for a night of inspiration and celebration.\n\nHighlights of the evening:\n• Keynote address by KEI alumna Dr. Seerat Shah, now a practising physician in Boston\n• Scholar spotlight video featuring voices from the 2025 cohort\n• Live auction raising $32,000 for the Graduate Abroad program\n• Total funds raised: $85,400 — a 28% increase over 2024\n\nWe are deeply grateful to every guest, sponsor, and volunteer who made the evening possible. Funds raised will directly support scholarships, mentorship, and digital learning programs for the 2026 academic year.\n\nPhotos from the event are available on request. Contact info@kashmirei.org.`,
    cta: null,
  },

{
  id: 6,
  category: "Scholarships",
  date: "February 15, 2026",
  title: "GAP and IBSP",
  summary: "Through GAP, IBSP, and related initiatives, KEI guides, mentors, and prepares talented Kashmiri students for global educational opportunities.",
  body: `KEI's Graduate Abroad Program (GAP) provides crucial mentorship to Kashmiri students aiming for higher education outside India.

As part of KEI’s broader ecosystem — including the Intermediate Board Support Program (IBSP) and other academic initiatives — students receive continuous guidance from high school through to global graduate opportunities.

GAP consists of two main components:

• GAP Sessions:
Open to all interested students. These include webinars, speaker sessions, and interviews focusing on career development, higher education pathways, studying abroad, and entrepreneurship.

• GAP Mentorship:
A highly selective program for students actively applying for graduate studies abroad. Selected scholars are paired with experienced mentors who guide them through the rigorous international application process, including university selection, essays, and interviews.

If you are a talented graduate planning to study abroad, GAP provides the structured mentorship and support needed to help you succeed.`,
  cta: { label: "Learn About GAP", href: "/what-we-do#program-gap" },
},
];

// ── Modal Component ───────────────────────────────────────────────────────────
const AnnouncementModal = ({ item, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const color = CATEGORY_COLORS[item.category] || "#47BFDA";

  return (
    <div className="ann-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="ann-modal-drawer" onClick={(e) => e.stopPropagation()}>
        <button className="ann-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="ann-modal-header" style={{ borderColor: color }}>
          <span className="ann-cat-pill" style={{ background: color }}>
            {item.category}
          </span>
          <p className="ann-modal-date">{item.date}</p>
          <h2 className="ann-modal-title">{item.title}</h2>
        </div>
        <div className="ann-modal-body">
          {item.body.split("\n").map((line, i) =>
            line.trim() === "" ? <br key={i} /> : <p key={i}>{line}</p>
          )}
        </div>
        {item.cta && (
          <div className="ann-modal-footer">
            {item.cta.href.startsWith("/") ? (
              <Link to={item.cta.href} className="ann-modal-cta" onClick={onClose}>
                {item.cta.label} →
              </Link>
            ) : (
              <a href={item.cta.href} className="ann-modal-cta" onClick={onClose}>
                {item.cta.label} →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────
const AnnouncementsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openItem, setOpenItem] = useState(null);

  const filtered = activeFilter === "All"
    ? announcements
    : announcements.filter((a) => a.category === activeFilter);

  return (
    <section className="section-ann-grid">
      <div className="ann-grid-container">

        <div className="ann-grid-header">
          <div className="ann-title-wrapper">
            <MicIcon className="ann-mic ann-mic-top" />
            <MicIcon className="ann-mic ann-mic-left" />
            <h2>Announcements</h2>
            <MicIcon className="ann-mic ann-mic-right" />
          </div>
        </div>

        {/* Filter pills */}
        <div className="ann-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`ann-filter-pill ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
              style={activeFilter === cat && cat !== "All"
                ? { background: CATEGORY_COLORS[cat], borderColor: CATEGORY_COLORS[cat] }
                : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="ann-cards-grid">
          {filtered.map((item) => {
            const color = CATEGORY_COLORS[item.category] || "#47BFDA";
            return (
              <div
                key={item.id}
                className="ann-card"
                style={{ "--ann-color": color }}
              >
                <div className="ann-card-top-bar" />
                <div className="ann-card-body">
                  <div className="ann-card-meta">
                    <span className="ann-cat-pill" style={{ background: color }}>
                      {item.category}
                    </span>
                    <span className="ann-card-date">{item.date}</span>
                  </div>
                  <h3 className="ann-card-title">{item.title}</h3>
                  <p className="ann-card-summary">{item.summary}</p>
                </div>
                <button
                  className="ann-card-readmore"
                  onClick={() => setOpenItem(item)}
                >
                  Read More →
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {openItem && (
        <AnnouncementModal item={openItem} onClose={() => setOpenItem(null)} />
      )}
    </section>
  );
};

export default AnnouncementsGrid;
