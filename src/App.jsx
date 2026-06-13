import React from "react";
import { Routes, Route } from "react-router-dom";

// Global Styles
import "./styles/base.css";
import "./styles/Header/header.css";
import "./styles/Footer/footer.css";

// Layout Components
import SkipLink from "./components/SkipLink";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import HistoricalFinancials from "./components/pages/HistoricalFinancials";
import Announcements from "./components/pages/Announcements";
import Events from "./components/pages/Events";
import ForScholars from "./components/pages/ForScholars";
import AllPrograms from "./components/pages/AllPrograms";
import HowToApplyPage from "./components/pages/HowToApplyPage";
import ProgramDetail from "./components/pages/ProgramDetail";
import Donate from "./components/pages/Donate";
import GetInvolved from "./components/pages/GetInvolved";
import OurImpact from "./components/pages/OurImpact";
import FAQ from "./components/pages/FAQ";
import ScholarStories from "./components/pages/ScholarStories";
import ImpactByNumbers from "./components/pages/ImpactByNumbers";
// Get Involved Pages
import Sponsor from "./components/pages/GetInvolvedWays_Pages/SponsorAScholar";

// Mentorship Pages
import MentorshipSuccessStories from "./components/pages/GetInvolvedWays_Pages/MentorshipSuccessStories/MentorshipSuccessStories";

// ✅ CORRECT IMPORT
import MentorshipStoryPage from "./components/pages/GetInvolvedWays_Pages/MentorshipStoryPage";

// Blog Page
import Blog from "./components/OurImpactPart/ScholarStoryPart/ScholarStorySection/Blog";

// Video Player Pages
// import ScholarVideoPlayer from "./components/OurImpactPart/ScholarStoryPart/ScholarStorySection/ScholarVideoPlayer";
import AlumniVideoPlayer from "./components/OurImpactPart/AlumniPart/AlumniStorySection/AlumniVideoPlayer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <SkipLink />
      <Header />

      <main id="main-content">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/historical-financials" element={<HistoricalFinancials />} />
          <Route path="/for-scholars" element={<ForScholars />} />
          <Route path="/for-scholars/programs" element={<AllPrograms />} />
          <Route path="/for-scholars/how-to-apply" element={<HowToApplyPage />} />
          <Route path="/for-scholars/:id" element={<ProgramDetail />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/our-impact" element={<ScholarStories />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/sponsor-a-scholar" element={<Sponsor />} />

          <Route
            path="/mentorship-success-stories"
            element={<MentorshipSuccessStories />}
          />

          {/* ✅ THIS WORKS NOW */}
          <Route
            path="/mentorship/:slug"
            element={<MentorshipStoryPage />}
          />

          <Route path="/announcements" element={<Announcements />} />
          <Route path="/events" element={<Events />} />

          <Route path="/impact-by-numbers" element={<ImpactByNumbers />} />
          <Route path="/scholar-stories" element={<ScholarStories />} />

          <Route path="/blog/:slug" element={<Blog />} />

          {/* <Route path="/scholar-video/:slug" element={<ScholarVideoPlayer />} /> */}
          <Route path="/alumni-video/:slug" element={<AlumniVideoPlayer />} />

        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;