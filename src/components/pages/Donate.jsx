import React from "react";

import DonateHero from "../DonateHero/DonateHero";
import DonateInfo from "../DonateInfo/DonateInfo";
import DonatePayment from "../DonatePayment/DonatePayment";
import DonateForm from "../DonateForm/DonateForm";

const Donate = () => {
  return (
    <>
      <DonateHero />
      {/* <DonateInfo /> */}
      <DonateForm />
      <DonatePayment />
    </>
  );
};

export default Donate;
