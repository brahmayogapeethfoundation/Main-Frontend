import React from "react";
import Gallery from "../components/Gallery";

const GalleryPage = ({ darkMode }) => {
  return (
    <div
      className={`w-full min-h-screen transition-colors duration-500
        ${darkMode 
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900"
        }`}
    >
      <Gallery darkMode={darkMode} />
    </div>
  );
};

export default GalleryPage;
