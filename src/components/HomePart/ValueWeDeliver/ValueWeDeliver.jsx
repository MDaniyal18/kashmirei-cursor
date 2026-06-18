import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Home/value-we-deliver.css";
import "../../../styles/For-Scholars/forscholars-programs.css";
import valueImage from "../../../assets/Images/value-we-deliver-updated.png";

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

const ValueWeDeliver = () => {
  const navigate = useNavigate();

  return (
    <section className="value-we-deliver">

      <div className="value-container">
        <span className="section-label value-label">OUR PROGRAMS</span>
        <h2 className="value-title">Empowering Every Step of the Scholar Journey</h2>
        <p className="value-subtitle">We support the scholar journey from their first classroom to their first career milestone.</p>
        <p className="value-blurb">
          At KEI, we walk alongside every scholar — from their first classroom to their first career milestone.
          Through a holistic ecosystem of support, we provide financial scholarships, dedicated mentorship,
          digital learning tools, and hands-on career experiences. Our eight programs — spanning High School
          S, Career Awareness, Mentorship, Experiential Learning, Gooru Navigator, Digital Smart
          Learning, International Bridge Scholarship, and Graduate Abroad — work together to ensure no gifted
          student in Kashmir is held back by circumstance.
        </p>

        <div className="value-image-wrapper">
          <div className="wwd-rainbow-wrap">
            <img
              src={valueImage}
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
        </div>

        <div className="value-cta" style={{ marginTop: "24px" }}>
          <p className="value-cta-text">Want to learn more about these programs?</p>
          <Link to="/for-scholars" className="value-btn-primary">
            EXPLORE OUR PROGRAMS
          </Link>
        </div>
      </div>

    </section>
  );
};

export default ValueWeDeliver;
