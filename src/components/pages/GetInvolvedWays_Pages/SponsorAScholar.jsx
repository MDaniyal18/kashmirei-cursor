import { useNavigate } from "react-router-dom";
import "../../../styles/Get-Involved/sponsor-a-scholar.css";

const Sponsor = () => {
  const navigate = useNavigate();

  return (
    <section className="sponsor-page">
      <div className="container">

        <h1>Sponsor a Scholar</h1>

        <p className="intro">
          Support deserving students by funding their education and helping them
          build a brighter future.
        </p>

        <div className="content-card">

          <h2>About the Program</h2>
          <p>
            The Sponsor-1-Scholar (S1S) initiative supports academically talented
            students who face financial challenges and are at risk of discontinuing
            their education. Scholars are selected through a rigorous process based
            on merit, potential, and financial need.
          </p>

          <p>
            Once you sponsor a scholar, KEI connects you with the student and provides
            regular progress updates, ensuring transparency and meaningful engagement.
          </p>

          <hr />

          <h2>Programs & Sponsorship Options</h2>

          {/* High School */}
          <div className="sponsor-section">
            <h3>High School (S1S-HS)</h3>
            <p>
              Supports students in Grades 10–12 with tuition and essential resources.
            </p>
            <ul>
              <li><strong>Full:</strong> $660/year or $55/month</li>
              <li><strong>Partial:</strong> $360/year or $30/month</li>
            </ul>
          </div>

          {/* Transition Year */}
          <div className="sponsor-section">
            <h3>Transition Year (S1S-TY)</h3>
            <p>
              Supports students preparing for competitive entrance examinations.
            </p>
            <ul>
              <li><strong>Full:</strong> $500/year or 4 × $125</li>
              <li><strong>Partial:</strong> $300/year or 4 × $75</li>
            </ul>
          </div>

          {/* Predoctoral */}
          <div className="sponsor-section">
            <h3>Pre-Doctoral (S1S-PD)</h3>
            <p>
              Supports scholars pursuing advanced studies toward MS/PhD goals.
            </p>
            <ul>
              <li><strong>Full:</strong> $700/year or 4 × $175</li>
              <li><strong>Partial:</strong> $300/year or 4 × $75</li>
            </ul>
          </div>

          <p className="cta-text">
            Sponsor a scholar today and make a lasting impact—one student at a time.
          </p>

          {/* CTA Button */}
          <a
            href="/donate"
            className="apply-button"
          >
            Sponsor a Scholar
          </a>

        </div>

        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Previous Page
        </button>

      </div>
    </section>
  );
};

export default Sponsor;