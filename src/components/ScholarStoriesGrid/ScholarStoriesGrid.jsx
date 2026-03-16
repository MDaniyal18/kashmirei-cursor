import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Scholar-Page/scholar-grid.css";

import scholarStories from "../../data/ScholarStories";

const ScholarStoriesGrid = () => {

  const [showAll, setShowAll] = useState(false);

  const storiesToShow = showAll
    ? scholarStories
    : scholarStories.slice(0, 9);

  return (
    <section id="scholar-stories-grid" className="section-ss-grid">
      <div className="container">

        <div className="ss-grid">

          {storiesToShow.map((story) => {

            const preview =
              story?.paragraphs?.length
                ? story.paragraphs[0]
                    .slice(0, 110)
                    .replace(/\s+\S*$/, "") + "..."
                : "";

            return (

              <div className="ss-card" key={story.id}>

                <img src={story.thumbnail} alt={story.name} />

                <p>“{preview}”</p>

                <h4>{story.name}</h4>

                <Link
                  to={`/blog/${story.slug}`}
                  className="ss-read-more"
                  onClick={() =>
                    sessionStorage.setItem("scrollToScholarGrid", "true")
                  }
                >
                  Read More →
                </Link>

              </div>

            );
          })}

        </div>

        <div className="ss-buttons">

          {!showAll && (
            <button
              className="btn-primary"
              onClick={() => setShowAll(true)}
            >
              READ MORE SCHOLAR STORIES
            </button>
          )}

          <button className="btn-outline">
            SUPPORT A SCHOLAR'S JOURNEY
          </button>

        </div>

        {/* Back to Top */}

        <div className="ss-back-top">

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
          >
            Back to Top ↑
          </button>

        </div>

      </div>
    </section>
  );
};

export default ScholarStoriesGrid;