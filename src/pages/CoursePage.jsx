import React from "react";
import Courses from "../components/Courses";

const CoursePage = ({ darkMode }) => {
  return (
    <div className={`w-full overflow-x-hidden transition-colors duration-500 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      <Courses darkMode={darkMode} />
    </div>
  );
};

export default CoursePage;
