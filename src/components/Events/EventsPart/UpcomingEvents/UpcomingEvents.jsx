import React from "react";
import "../../../../styles/Events/upcoming-events.css";

const TYPE_COLORS = {
  "In-Person": "#2E7D32",
  "Online":    "#1B4F8A",
  "Hybrid":    "#E8A020",
};

const upcomingEvents = [
  {
    id: 1,
    month: "APR",
    day: "15",
    year: "2026",
    title: "KEI Annual Fundraising Dinner 2026",
    location: "Boston, MA, USA",
    time: "6:30 PM EDT",
    type: "In-Person",
    description: "Join us for an evening of inspiration, celebration, and community as we raise funds for KEI's 2026 scholarship and mentorship programmes.",
    actionLabel: "Register Interest",
    actionHref: "/donate",
  },
  {
    id: 2,
    month: "MAR",
    day: "30",
    year: "2026",
    title: "Scholar Orientation Day — Spring 2026",
    location: "Srinagar, Jammu & Kashmir",
    time: "9:00 AM IST",
    type: "In-Person",
    description: "New scholars joining the 2026 cohort are welcomed into the KEI family with a full day of orientation, introductions, and programme briefings.",
    actionLabel: "Learn More",
    actionHref: "#",
  },
  {
    id: 3,
    month: "APR",
    day: "05",
    year: "2026",
    title: "Global Mentorship Kickoff Webinar",
    location: "Online — Zoom",
    time: "7:00 PM EDT / 4:30 AM IST",
    type: "Online",
    description: "Mentors and scholars from the Spring 2026 cohort meet for the first time. Guest address by a KEI alumnus and overview of the mentorship framework.",
    actionLabel: "Get the Link",
    actionHref: "/get-involved",
  },
];

import "../../../../styles/Announcements/announcements.css";

const UpcomingEvents = () => {
  return (
    <section className="section-upcoming-events" style={{ backgroundColor: "#f4f8fb" }}>
      <div className="events-container">

        <div className="events-header" style={{ marginBottom: "44px" }}>
          <span className="events-label">UPCOMING EVENTS</span>
          <h2>Mark Your Calendar.</h2>
          <p className="events-sub">
            Join us at our next events — in Kashmir, across the USA, and online.
          </p>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="events-empty">
            <span className="events-empty-icon">📅</span>
            <p>No upcoming events right now. Check back soon or subscribe below for updates.</p>
          </div>
        ) : (
          <div className="ann-cards-grid">
            {upcomingEvents.map((ev) => {
              const color = TYPE_COLORS[ev.type] || "#47BFDA";
              return (
                <div 
                  className="ann-card" 
                  key={ev.id}
                  style={{ "--ann-color": color }}
                >
                  <div className="ann-card-top-bar" />
                  <div className="ann-card-body" style={{ display: "flex", flexDirection: "column" }}>
                    <div className="ann-card-meta">
                      <span className="ann-cat-pill" style={{ background: color }}>
                        {ev.type}
                      </span>
                      <span className="ann-card-date">{ev.month} {ev.day}, {ev.year}</span>
                    </div>
                    <span style={{ fontSize: "12.5px", color: "#666", display: "block", marginBottom: "12px", fontFamily: "sans-serif" }}>
                      📍 {ev.location} <br /> 🕐 {ev.time}
                    </span>
                    <h3 className="ann-card-title" style={{ fontSize: "17px", minHeight: "48px" }}>{ev.title}</h3>
                    <p className="ann-card-summary" style={{ fontSize: "14px", color: "#555", lineHeight: "1.7", marginBottom: "16px" }}>{ev.description}</p>
                  </div>
                  <a 
                    href={ev.actionHref} 
                    className="ann-card-readmore" 
                    style={{ textDecoration: "none", display: "block", borderTop: "1px solid #e4eef4", padding: "14px 24px", color: color }}
                  >
                    {ev.actionLabel} →
                  </a>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default UpcomingEvents;
