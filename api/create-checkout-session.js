/* eslint-env node */
import Stripe from "stripe";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log("--- create-checkout-session API Triggered ---");
  console.log("Request Body:", req.body);
  console.log("STRIPE_SECRET_KEY status: length =", process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.length : 0);
  console.log("STRIPE_SECRET_KEY prefix =", process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.substring(0, 7) : "none");

  const {
    amount,
    frequency,
    email,
    firstName,
    lastName,
    givingTier,
    scholarshipType,
  } = req.body || {};

  // Basic validation
  if (!amount || isNaN(amount) || Number(amount) <= 0) {
    return res.status(400).json({ error: "Invalid donation amount." });
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  // Retrieve Stripe Secret Key from Environment Variables
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey || stripeSecretKey.startsWith("sk_test_placeholder")) {
    console.error("Error: STRIPE_SECRET_KEY is missing or is placeholder.");
    return res.status(500).json({
      error: "Stripe Secret Key is not configured. Please set your real STRIPE_SECRET_KEY in the .env file.",
    });
  }

  const stripe = new Stripe(stripeSecretKey);

  try {
    const isMonthly = frequency === "monthly";

    // Setup line item details
    let lineItemName = isMonthly ? "Monthly Recurring Donation" : "One-Time Donation";
    if (givingTier && givingTier !== "general") {
      const tierNames = {
        "hs-full": "High School Full Sponsorship",
        "hs-partial": "High School Partial Sponsorship",
        "ty-full": "Transition Year Full Sponsorship",
        "ty-partial": "Transition Year Partial Sponsorship",
        "pd-full": "Pre-Doctoral Full Sponsorship",
        "pd-partial": "Pre-Doctoral Partial Sponsorship",
      };
      lineItemName = `${tierNames[givingTier] || givingTier} (${lineItemName})`;
    }

    // 1. Create a Customer on Stripe to pre-fill both Name and Email
    const customer = await stripe.customers.create({
      email: email,
      name: `${firstName} ${lastName}`.trim(),
      metadata: {
        givingTier: givingTier || "general",
        scholarshipType: scholarshipType || "general",
      },
    });

    // 2. Create Checkout Session parameters using the Customer ID
    const sessionParams = {
      payment_method_types: ["card"],
      customer: customer.id, // Pre-fills name and email in Stripe Checkout
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: lineItemName,
              description: `Support donation to Kashmir Education Initiative`,
            },
            unit_amount: Math.round(Number(amount) * 100), // Convert amount from dollars to cents
            ...(isMonthly ? { recurring: { interval: "month" } } : {}),
          },
          quantity: 1,
        },
      ],
      mode: isMonthly ? "subscription" : "payment",
      success_url: `${req.headers.origin || "http://localhost:3000"}/stripe-payment?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || "http://localhost:3000"}/donate`,
      metadata: {
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
        givingTier: givingTier || "general",
        scholarshipType: scholarshipType || "general",
        frequency: frequency || "one-time",
      },
    };

    // Generate Stripe Session
    const session = await stripe.checkout.sessions.create(sessionParams);

    // Return the secure checkout redirect URL
    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe Session Creation Error:", error);
    return res.status(500).json({ error: error.message });
  }
}

