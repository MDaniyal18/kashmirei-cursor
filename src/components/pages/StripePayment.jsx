import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../styles/StripePayment/stripe-payment.css";

const StripePayment = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // Scroll to top on component load
    window.scrollTo(0, 0);

    // Prevent search engine indexing for this confirmation page
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      // Clean up metadata tag on unmount
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="stripe-payment-page">
      <div className="stripe-payment-container">
        {sessionId ? (
          /* Success Page Layout */
          <div className="stripe-payment-card">
            <span className="test-badge">TEST MODE</span>
            <div className="success-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h1>Donation Confirmed!</h1>
            <p className="sub-title">
              Thank you for your generous contribution. Your support directly helps us
              provide high-potential, financially at-risk scholars in Kashmir with educational opportunities.
            </p>

            <div className="session-info-box">
              <span className="label">Stripe Session ID (Reference)</span>
              <span className="value">{sessionId}</span>
            </div>

            <p style={{ fontSize: "14px", color: "#666", marginBottom: "30px", lineHeight: "1.6" }}>
              Your transaction details have been securely logged. The integration is currently verifying this
              session and syncing donor records directly to Salesforce.
            </p>

            <div className="action-buttons">
              <Link to="/" className="btn-stripe-confirm btn-primary-stripe">
                Return to Home
              </Link>
              <Link to="/for-scholars/programs" className="btn-stripe-confirm btn-secondary-stripe">
                Explore Programs
              </Link>
            </div>
          </div>
        ) : (
          /* Missing Session ID Error/Fallback Layout */
          <div className="stripe-payment-card no-session-card">
            <span className="error-badge">VERIFICATION REQUIRED</span>
            <div className="warning-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <h1>No Payment Session Detected</h1>
            <p className="sub-title">
              This page requires a valid payment session parameter to verify the status of your transaction.
            </p>

            <p style={{ fontSize: "14.5px", color: "#666", marginBottom: "30px", lineHeight: "1.6" }}>
              If you intended to make a donation or payment, please use our secure checkout forms or contact
              us if you believe this is an error.
            </p>

            <div className="action-buttons">
              <Link to="/donate" className="btn-stripe-confirm btn-primary-stripe">
                Go to Donate Page
              </Link>
              <Link to="/" className="btn-stripe-confirm btn-secondary-stripe">
                Return to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StripePayment;
