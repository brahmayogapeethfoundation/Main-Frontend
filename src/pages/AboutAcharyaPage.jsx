import React from "react";

import AcharyaProfile from "../components/AcharyaProfile";
import GalleryCarousel from "../components/GalleryCarousel";
import ContactPage from "./ContactPage";

const AboutAcharyaPage = ({ darkMode }) => {
  return (
    <div
      className={`w-full overflow-hidden transition-colors duration-500
        ${
          darkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200"
            : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900"
        }`}
    >
 
      <AcharyaProfile darkMode={darkMode} />


      <GalleryCarousel darkMode={darkMode} />


      <ContactPage darkMode={darkMode} />
    </div>
  );
};

export default AboutAcharyaPage;
