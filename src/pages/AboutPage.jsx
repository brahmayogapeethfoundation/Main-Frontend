import React from "react";
import AboutSections from "../components/AboutSection";

const AboutPage = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <AboutSections className={`w-full overflow-x-hidden`} darkMode={darkMode} />
    </div>
  );
};

export default AboutPage;
