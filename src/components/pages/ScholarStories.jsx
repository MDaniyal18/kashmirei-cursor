import React from "react";

import ScholarStoriesHero from "../ScholarStoriesHero/ScholarStoriesHero";
import ScholarStoriesGrid from "../ScholarStoriesGrid/ScholarStoriesGrid";
import ScholarStoriesVideos from "../ScholarStoriesVideos/ScholarStoriesVideos";

const ScholarStories = () => {
  return (
    <>
      <ScholarStoriesHero />
      <ScholarStoriesGrid />
      <ScholarStoriesVideos />
    </>
  );
};

export default ScholarStories;
