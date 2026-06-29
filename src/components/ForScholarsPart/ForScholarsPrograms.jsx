import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/For-Scholars/forscholars-programs.css";
import { programs } from "../../data/programs";
import rainbowImg from "../../assets/Images/value-we-deliver-rearranged.png";

const rainbowHotspots = [
  { id: "hsp",         label: "High School\nSupport",          left: "4%",  top: "57%", width: "12%", height: "30%" },
  { id: "dsle",        label: "Digital Smart\nLearning",       left: "12%", top: "33%", width: "12%", height: "30%" },
  { id: "gooru",       label: "Gooru\nNavigator",              left: "24%", top: "12%", width: "12%", height: "30%" },
  { id: "experiential",label: "Experiential\nLearning",        left: "38%", top: "2%",  width: "12%", height: "30%" },
  { id: "cap",         label: "Career\nAwareness",             left: "50%", top: "2%",  width: "12%", height: "30%" },
  { id: "mentorship",  label: "Mentorship\nProgram",           left: "65%", top: "9%",  width: "12%", height: "30%" },
  { id: "gap",         label: "Graduate\nAbroad",              left: "76%", top: "31%", width: "12%", height: "30%" },
  { id: "ibsp",        label: "International\nBridge",         left: "85%", top: "56%", width: "12%", height: "30%" },
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
