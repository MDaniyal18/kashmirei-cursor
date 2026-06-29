import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Home/value-we-deliver.css";
import "../../../styles/For-Scholars/forscholars-programs.css";
import valueImage from "../../../assets/Images/value-we-deliver-rearranged.png";

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

const ValueWeDeliver = () => {
  const navigate = useNavigate();

  return (
    <section className="value-we-deliver">

      <div className="value-container">
        <span className="section-label value-label">OUR PROGRAMS</span>
        <h2 className="value-title">Empowering Every Step of the Scholar Journey</h2>
        <p className="value-subtitle">We support the scholar journey from their first classroom to their first career milestone.</p>
        <p className="value-blurb">
          At KEI, we walk alongside every scholar — from the start of their high school journey to their first career milestone. Through a comprehensive ecosystem of support, we provide academic enrichment, competitive exam preparation, mentorship, digital learning, AI-powered career guidance, self-directed learning opportunities, experiential learning, and 21st-century skill development.
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
