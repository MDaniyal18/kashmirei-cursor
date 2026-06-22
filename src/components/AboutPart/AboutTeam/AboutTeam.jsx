import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/About/about.css";

const PersonIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="about-placeholder-icon">
    <circle cx="40" cy="30" r="16" fill="#c8d6e0" />
    <path d="M10 72c0-16.6 13.4-30 30-30s30 13.4 30 30" fill="#c8d6e0" />
  </svg>
);

const TeamMemberAvatar = ({ name }) => {
  const [hasError, setHasError] = useState(false);

  const formattedName = name ? name.trim().toLowerCase().replace(/\s+/g, "_") : "";
  const isPlaceholder = !name || name.trim() === "—" || name.toLowerCase().includes("coming soon");

  useEffect(() => {
    setHasError(false);
  }, [name]);

  if (isPlaceholder || hasError) {
    return <PersonIcon />;
  }

  const imgUrl = new URL(`../../../assets/Images/Team/${formattedName}.png`, import.meta.url).href;

  return (
    <img 
      src={imgUrl} 
      alt={name} 
      onError={() => setHasError(true)} 
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%"
      }}
    />
  );
};

const defaultBoardMembers = [
  { name: "Faisal Farooq", title: "President" },
  { name: "Irfan Banihali", title: "Treasurer" },
  { name: "Suhel Shah", title: "Board Member" },
  { name: "Yunis Fazili", title: "Board Member" },
  { name: "Imran Amin", title: "Board Member" },
  { name: "Maheen Akram", title: "Secretary" },
  { name: "Sidra Sheikh", title: "Coordinator" },
  { name: "Name Coming Soon", title: "Officer" },
];

const defaultOpsTeam = [
  { name: "Yasir Khanyari", title: "Operation's Director" },
  { name: "Kousar Khan", title: "Program Officer" },
  { name: "Firdous Hussain", title: "Program Officer" },
  { name: "Danish Munshi", title: "Program Officer" },
  { name: "Tayaba Khan", title: "Program Officer" },
  { name: "Syed Uzma", title: "Assistant Program Officer" },
  { name: "Raja Adil", title: "Senior Field Officer" },
  { name: "Qamran Latief", title: "Field Officer" },
  { name: "Mir Amaan", title: "IT Admin" },
  { name: "Mohammad Daniyal", title: "IT Admin" },
];

const AboutTeam = () => {
  const [board, setBoard] = useState(() => {
    const saved = localStorage.getItem("kei_board_members");
    return saved ? JSON.parse(saved) : defaultBoardMembers;
  });

  const [ops, setOps] = useState(() => {
    const saved = localStorage.getItem("kei_ops_team");
    return saved ? JSON.parse(saved) : defaultOpsTeam;
  });

  useEffect(() => {
    localStorage.setItem("kei_board_members", JSON.stringify(board));
  }, [board]);

  useEffect(() => {
    localStorage.setItem("kei_ops_team", JSON.stringify(ops));
  }, [ops]);

  const handleBoardNameChange = (index, newName) => {
    const updated = [...board];
    updated[index].name = newName;
    setBoard(updated);
  };

  const handleOpsNameChange = (index, newName) => {
    const updated = [...ops];
    updated[index].name = newName;
    setOps(updated);
  };

  const hasEdits =
    JSON.stringify(board) !== JSON.stringify(defaultBoardMembers) ||
    JSON.stringify(ops) !== JSON.stringify(defaultOpsTeam);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all names to default?")) {
      setBoard(defaultBoardMembers);
      setOps(defaultOpsTeam);
    }
  };

  return (
    <section className="section-about-team">
      <div className="about-team-container">

        <div className="about-team-header">
          <span className="about-label">THE PEOPLE BEHIND KEI</span>
          <h2>Meet the Team.</h2>
          <p className="about-team-sub">
            Our strength lies in the people who dedicate their time and
            expertise to building a brighter future for Kashmiri youth.
          </p>
          {/* {hasEdits && (
            // <button
            //   onClick={handleReset}
            //   style={{
            //     background: "transparent",
            //     border: "none",
            //     color: "#47BFDA",
            //     cursor: "pointer",
            //     fontSize: "13px",
            //     fontWeight: "600",
            //     textDecoration: "underline",
            //     marginTop: "12px",
            //     padding: 0
            //   }}
            // >
            //   Reset Names to Default
            // </button>
          )} */}
        </div>

        {/* Board of Directors */}
        <div className="about-team-tier">
          <h3 className="about-team-tier-title">Board of Directors &amp; Officers</h3>
          <div className="about-team-grid">
            {board.map((m, i) => (
              <div className="about-team-card" key={i}>
                <div className="about-avatar-wrap">
                  <TeamMemberAvatar name={m.name} />
                </div>
                <input
                  type="text"
                  value={m.name}
                  onChange={(e) => handleBoardNameChange(i, e.target.value)}
                  className="about-team-name-input"
                  placeholder="Enter name..."
                  aria-label={`Name of ${m.title}`}
                />
                <p className="about-team-role">{m.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operations Team */}
        <div className="about-team-tier">
          <h3 className="about-team-tier-title">Operations Team — Kashmir</h3>
          <div className="about-team-grid about-team-grid--sm">
            {ops.map((m, i) => (
              <div className="about-team-card" key={i}>
                <div className="about-avatar-wrap">
                  <TeamMemberAvatar name={m.name} />
                </div>
                <input
                  type="text"
                  value={m.name}
                  onChange={(e) => handleOpsNameChange(i, e.target.value)}
                  className="about-team-name-input"
                  placeholder="Enter name..."
                  aria-label={`Name of ${m.title}`}
                />
                <p className="about-team-role">{m.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-team-cta" style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid #e4eef4", paddingTop: "40px" }}>
          <p style={{ fontSize: "16px", color: "#333", fontWeight: "600", marginBottom: "20px" }}>
            Quick Resources &amp; Updates
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/events-and-announcements" className="about-outline-btn" style={{ padding: "12px 30px", fontSize: "15px" }}>
              Events &amp; Announcements
            </Link>
            <Link to="/faq" className="about-outline-btn" style={{ padding: "12px 30px", fontSize: "15px" }}>
              View FAQ
            </Link>
            <a href="mailto:info@kashmirei.org" className="about-filled-btn" style={{ padding: "12px 30px", fontSize: "15px" }}>
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
