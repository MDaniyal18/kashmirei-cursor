import React from "react";
import EventsHero from "../Events/EventsPart/EventsHero/EventsHero";
// import EventsGrid from "../Events/EventsPart/EventsGrid/EventsGrid";
import UpcomingEvents from "../Events/EventsPart/UpcomingEvents/UpcomingEvents";
import HowToApply from "../Events/EventsPart/HowToApply/HowToApply";
import PastEvents from "../Events/EventsPart/PastEvents/PastEvents";
import NewsletterStrip from "../Events/AnnouncementsPart/NewsletterStrip/NewsletterStrip";

const Events = () => {
  return (
    <>
      <EventsHero />
{/* <EventsGrid /> */}
      <UpcomingEvents />
      <HowToApply />
      <PastEvents />
      <NewsletterStrip />
    </>
  );
};

export default Events;
