import React from "react";
import { useNavigate, Link } from "react-router-dom";
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

const ForScholarsPrograms = () => {
  const navigate = useNavigate();

  return (
    <section className="wwd-rainbow-section">
      <div className="wwd-rainbow-inner">
        <span className="wwd-section-label">EXPLORE OUR PROGRAMS</span>
        <p className="wwd-rainbow-sub" style={{ maxWidth: "600px", margin: "12px auto 36px" }}>
          Eight programs working together to guide every scholar from their first classroom to their first career milestone. Click any program below to view detailed specifications.
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
              onClick={() => navigate(`/for-scholars/programs#program-${spot.id}`)}
              aria-label={`View details for ${spot.label.replace("\n", " ")}`}
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
              onClick={() => navigate(`/for-scholars/programs#program-${p.id}`)}
            >
              <span className="pill-num">{p.number}</span>
              {p.title.replace(" Program", "").replace(" Environment", "")}
            </button>
          ))}
        </div>

        {/* Learn More Button directing to All Programs page */}
        <div style={{ marginTop: "48px" }}>
          <Link 
            to="/for-scholars/programs" 
            className="button-outline"
            style={{
              backgroundColor: "#47BFDA",
              borderColor: "#47BFDA",
              color: "#fff",
              padding: "12px 36px",
              fontSize: "14px",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "700",
              textDecoration: "none",
              borderRadius: "30px",
              boxShadow: "0 4px 14px rgba(71, 191, 218, 0.3)",
              transition: "transform 0.2s ease, background-color 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.backgroundColor = "#3aa9c4";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor = "#47BFDA";
            }}
          >
            Learn More About Our Programs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForScholarsPrograms;
