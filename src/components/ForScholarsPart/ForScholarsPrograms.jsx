import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../../styles/For-Scholars/forscholars-programs.css";
import { programs } from "../../data/programs";
import rainbowImg from "../../assets/Images/value-we-deliver-updated.png";

// ── Rainbow clickable overlay positions (% of image width/height) ──────────
const rainbowHotspots = [
  { id: "hsp",         label: "High School\nSupport",          left: "3%",  top: "52%", width: "14%", height: "40%" },
  { id: "cap",         label: "Career\nAwareness",             left: "11%", top: "28%", width: "14%", height: "40%" },
  { id: "mentorship",  label: "Mentorship\nProgram",           left: "23%", top: "8%",  width: "14%", height: "38%" },
  { id: "experiential",label: "Experiential\nLearning",        left: "37%", top: "0%",  width: "14%", height: "35%" },
  { id: "gooru",       label: "Gooru\nNavigator",              left: "51%", top: "0%",  width: "14%", height: "35%" },
  { id: "dsle",        label: "Digital Smart\nLearning",       left: "64%", top: "5%",  width: "15%", height: "38%" },
  { id: "ibsp",        label: "International\nBridge",         left: "75%", top: "26%", width: "14%", height: "40%" },
  { id: "gap",         label: "Graduate\nAbroad",              left: "84%", top: "50%", width: "14%", height: "42%" },
];

const scrollToProgram = (id) => {
  const el = document.getElementById(`program-${id}`);
  if (el) {
    const offset = 80; // header height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const ForScholarsPrograms = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#program-", "");
        scrollToProgram(id);
      }, 500);
    }
  }, [location]);

  return (
    <>
      {/* ── Rainbow Navigator (New Hero Section) ─────────────────────── */}
      <section className="wwd-rainbow-section">
        <div className="wwd-rainbow-inner">
          <span className="wwd-section-label">EXPLORE OUR PROGRAMS</span>
          <p className="wwd-rainbow-sub">
            Eight programs working together to guide every scholar from
            their first classroom to their first career milestone. Click any program below to see detail specifications.
          </p>

          <div className="wwd-rainbow-wrap">
            <img
              src={rainbowImg}
              alt="KEI Programs Rainbow Diagram"
              className="wwd-rainbow-img"
              draggable={false}
            />
            {rainbowHotspots.map((spot) => (
              <button
                key={spot.id}
                className="wwd-rainbow-hotspot"
                style={{
                  left: spot.left,
                  top: spot.top,
                  width: spot.width,
                  height: spot.height,
                }}
                onClick={() => scrollToProgram(spot.id)}
                aria-label={`Scroll to ${spot.label.replace("\n", " ")}`}
                title={spot.label.replace("\n", " ")}
              />
            ))}
          </div>

          {/* Pill links below the diagram for accessibility / mobile */}
          <div className="wwd-rainbow-pills">
            {programs.map((p) => (
              <button
                key={p.id}
                className="wwd-rainbow-pill"
                style={{ "--pill-color": p.color }}
                onClick={() => scrollToProgram(p.id)}
              >
                <span className="pill-num">{p.number}</span>
                {p.title.replace(" Program", "").replace(" Environment", "")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 Program Sections ────────────────────────────────────── */}
      {programs.map((prog, i) => {
        const isEven = i % 2 === 1; // even index → flip layout
        return (
          <section
            key={prog.id}
            id={`program-${prog.id}`}
            className={`wwd-prog-section ${isEven ? "wwd-prog-flip" : ""}`}
          >
            <div className="wwd-prog-container">

              {/* Image column (Clickable) */}
              <div className="wwd-prog-image-col">
                <Link to={`/for-scholars/${prog.id}`} className="wwd-prog-section-link">
                  <div
                    className="wwd-prog-img-wrap"
                    style={{ "--prog-color": prog.color }}
                  >
                    <img src={prog.image} alt={prog.title} />
                  </div>
                </Link>
              </div>

              {/* Content column */}
              <div className="wwd-prog-content-col">
                <div className="wwd-prog-number" style={{ color: prog.color }}>
                  {prog.number}
                </div>
                <span
                  className="wwd-prog-badge"
                  style={{ background: prog.color }}
                />
                
                {/* Clickable Title */}
                <Link to={`/for-scholars/${prog.id}`} className="wwd-prog-section-link">
                  <h3 className="wwd-prog-title" style={{ transition: "color 0.2s" }}>
                    {prog.title}
                  </h3>
                </Link>

                <p className="wwd-prog-subtitle">{prog.subtitle}</p>
                <p className="wwd-prog-desc">{prog.description}</p>

                {/* View Details Link */}
                <div style={{ marginBottom: "24px" }}>
                  <Link 
                    to={`/for-scholars/${prog.id}`} 
                    className="button-outline"
                    style={{ 
                      backgroundColor: prog.color,
                      borderColor: prog.color,
                      color: "#fff",
                      padding: "8px 20px",
                      fontSize: "13px",
                      textTransform: "uppercase"
                    }}
                  >
                    View Program Details →
                  </Link>
                </div>

                <div className="wwd-prog-stats">
                  {prog.stats.map((s) => (
                    <div
                      key={s.label}
                      className="wwd-prog-stat"
                      style={{ "--stat-color": prog.color }}
                    >
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        );
      })}
    </>
  );
};

export default ForScholarsPrograms;
