import React, { useState } from "react";
import "../../../styles/Donate/donate-form.css";

const DonateForm = () => {
  const [frequency, setFrequency] = useState("one-time"); // one-time / monthly
  const [selectedAmount, setSelectedAmount] = useState(100); // 25, 50, 100, 250, custom
  const [customAmount, setCustomAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardZip, setCardZip] = useState("");

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const presetAmounts = [25, 50, 100, 250];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^\d+$/.test(val)) {
      setCustomAmount(val);
      setSelectedAmount("custom");
    }
  };

  const getFinalAmount = () => {
    if (selectedAmount === "custom") {
      return Number(customAmount) || 0;
    }
    return selectedAmount;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const amount = getFinalAmount();
    if (amount <= 0) {
      setErrorMsg("Please select or enter a valid donation amount.");
      return;
    }
    if (!firstName || !lastName || !email) {
      setErrorMsg("Please fill out your personal information.");
      return;
    }
    if (!cardNumber || !cardExpiry || !cardCvc || !cardZip) {
      setErrorMsg("Please fill out your payment card details.");
      return;
    }

    setIsProcessing(true);

    // Simulate Stripe Gateway roundtrip
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setCardNumber("");
    setCardExpiry("");
    setCardCvc("");
    setCardZip("");
    setCustomAmount("");
    setSelectedAmount(100);
  };

  if (isSuccess) {
    return (
      <section className="section-donate-form" id="cc">
        <div className="donate-form-inner" style={{ maxWidth: "600px" }}>
          <div className="donate-success-card">
            <div className="success-icon-wrap">✓</div>
            <h2 style={{ color: "#2E7D32", fontSize: "28px", marginBottom: "16px" }}>Thank You For Your Support!</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#444", marginBottom: "28px" }}>
              Your donation of <strong>${getFinalAmount()}</strong> ({frequency === "monthly" ? "Monthly Recurring" : "One-Time"}) 
              has been successfully processed. 
            </p>
            <p style={{ fontSize: "14.5px", color: "#555", marginBottom: "32px" }}>
              A tax receipt has been emailed to <strong>{email}</strong>. The scholars and community of Kashmir 
              gratefully appreciate your investment in their potential.
            </p>
            <button className="button" onClick={resetForm} style={{ backgroundColor: "#47BFDA", color: "#fff" }}>
              Make Another Donation
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-donate-form" id="cc">
      <div className="donate-form-inner">

        <div className="donate-form-header">
          <span className="donate-section-label">SECURE PAYMENT</span>
          <h2>Donate by Credit or Debit Card</h2>
          <p>
            Choose your contribution details and fill in payment data. All cards are securely processed 
            using Stripe encryption. A tax receipt will be emailed to you.
          </p>
        </div>

        <div className="donate-form-card">
          <form onSubmit={handleSubmit}>
            
            {/* Frequency Toggle */}
            <div style={{ marginBottom: "24px" }}>
              <span className="form-group-label">Donation Frequency</span>
              <div className="donate-toggle-buttons">
                <button
                  type="button"
                  className={`donate-opt-btn ${frequency === "one-time" ? "active" : ""}`}
                  onClick={() => setFrequency("one-time")}
                >
                  Give One-Time
                </button>
                <button
                  type="button"
                  className={`donate-opt-btn ${frequency === "monthly" ? "active" : ""}`}
                  onClick={() => setFrequency("monthly")}
                >
                  Give Monthly (Recurring)
                </button>
              </div>
            </div>

            {/* Presets Grid */}
            <div style={{ marginBottom: "16px" }}>
              <span className="form-group-label">Select Amount (USD)</span>
              <div className="donate-amount-grid">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`donate-opt-btn ${selectedAmount === amt ? "active" : ""}`}
                    onClick={() => handleAmountClick(amt)}
                  >
                    ${amt}
                  </button>
                ))}
                <button
                  type="button"
                  className={`donate-opt-btn ${selectedAmount === "custom" ? "active" : ""}`}
                  onClick={() => setSelectedAmount("custom")}
                >
                  Custom
                </button>
              </div>
            </div>

            {/* Custom Amount Field */}
            {selectedAmount === "custom" && (
              <div className="custom-amount-input">
                <span>$</span>
                <input
                  type="text"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="input"
                  required
                />
              </div>
            )}

            {/* Personal Details */}
            <div style={{ marginBottom: "24px" }}>
              <span className="form-group-label">Billing & Receipt Information</span>
              <div className="donor-info-grid">
                <div>
                  <label htmlFor="first-name" className="sr-only" style={{ display: "none" }}>First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only" style={{ display: "none" }}>Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="donor-info-grid donor-info-grid-full">
                <div>
                  <label htmlFor="email-address" className="sr-only" style={{ display: "none" }}>Email Address</label>
                  <input
                    id="email-address"
                    type="email"
                    placeholder="Email Address (for Tax Receipt)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Stripe Mock Card Details */}
            <div style={{ marginBottom: "24px" }}>
              <span className="form-group-label">Credit Card Details (Stripe Secured)</span>
              <div className="stripe-elements-mock">
                <div>
                  <label htmlFor="card-number" className="sr-only" style={{ display: "none" }}>Card Number</label>
                  <input
                    id="card-number"
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength="19"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="card-expiry" className="sr-only" style={{ display: "none" }}>MM/YY</label>
                  <input
                    id="card-expiry"
                    type="text"
                    placeholder="MM / YY"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    maxLength="5"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="card-cvc" className="sr-only" style={{ display: "none" }}>CVC</label>
                  <input
                    id="card-cvc"
                    type="text"
                    placeholder="CVC"
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value)}
                    maxLength="4"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="card-zip" className="sr-only" style={{ display: "none" }}>Postal Code</label>
                <input
                  id="card-zip"
                  type="text"
                  placeholder="ZIP / Postal Code"
                  value={cardZip}
                  onChange={(e) => setCardZip(e.target.value)}
                  maxLength="8"
                  required
                />
              </div>

              <div className="stripe-branding-line">
                <span>🔒 Encrypted connection</span>
                <span>
                  Powered by 
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="stripe-logo-icon" style={{ marginLeft: "6px", display: "inline-block", verticalAlign: "middle" }} />
                </span>
              </div>
            </div>

            {/* Errors */}
            {errorMsg && (
              <div style={{ color: "#D32F2F", marginBottom: "16px", fontSize: "14px", fontWeight: "700" }}>
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isProcessing}
              className="button btn-primary"
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "16px",
                backgroundColor: "#47BFDA",
                color: "#ffffff"
              }}
            >
              {isProcessing ? "Processing Secure Payment..." : `Donate $${getFinalAmount() || "0"} Now`}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default DonateForm;
