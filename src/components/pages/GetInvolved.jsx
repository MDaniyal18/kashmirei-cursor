import GetInvolvedHero from "../GetInvolvedPart/GetInvolvedHero/GetInvolvedHero";
import GetInvolvedWays from "../GetInvolvedPart/GetInvolvedWays/GetInvolvedWays";
import GetInvolvedSupport from "../GetInvolvedPart/GetInvolvedSupport/GetInvolvedSupport";

const GetInvolved = () => {
  return (
    <>
      
      <GetInvolvedWays />
      <GetInvolvedHero />
      <GetInvolvedSupport />
    </>
  );
};

export default GetInvolved;
