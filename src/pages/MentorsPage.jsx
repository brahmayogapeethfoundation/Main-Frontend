import React, { useState } from "react";
import MentorCard from "../components/MentorCard";
import { mentors } from "../data/mentors";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MentorsPage = ({ darkMode }) => {
  const mentorsPerPage = 6; 
  const columns = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [fadeSlide, setFadeSlide] = useState(true);

  const totalPages = Math.ceil(mentors.length / mentorsPerPage);
  const currentMentors = mentors.slice(
    (currentPage - 1) * mentorsPerPage,
    currentPage * mentorsPerPage
  );

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setFadeSlide(false);
    setTimeout(() => {
      setCurrentPage(page);
      setFadeSlide(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const rows = [];
  for (let i = 0; i < currentMentors.length; i += columns) {
    rows.push(currentMentors.slice(i, i + columns));
  }

  return (
    <section
      className={`w-full overflow-x-hidden relative transition-colors duration-500
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-900"
        }`}
    >
      <div
        className={`absolute top-0 -left-24 w-80 h-80 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/30" : "bg-purple-300/30"}`}
      />
      <div
        className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-pink-500/20" : "bg-pink-300/30"}`}
      />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-24 pt-24 pb-28 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-[clamp(1.6rem,3vw,2.8rem)] mb-4">
            Our{" "}
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r
                ${
                  darkMode
                    ? "from-indigo-400 via-purple-400 to-pink-400"
                    : "from-blue-600 via-purple-500 to-pink-500"
                }`}
            >
              Mentors
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-[clamp(0.95rem,1.5vw,1.1rem)]
              ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            Meet our experienced mentors who guide you through every step of
            your yoga journey.
          </p>
        </div>

        <div className={`transition-all duration-500 ${fadeSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-wrap gap-6 md:gap-6 mb-6 justify-center ${
                row.length < columns ? "justify-center" : "justify-start"
              }`}
            >
              {row.map((mentor) => (
                <div key={mentor.id} className="flex justify-center w-full sm:w-[48%] md:w-[31%]">
                  <div className="w-full max-w-[340px]">
                    <MentorCard mentor={mentor} darkMode={darkMode} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-full transition
                ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-40"
                    : "bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-40"
                }`}
            >
              <FaChevronLeft />
            </button>

            <span className="font-medium">
              Page {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full transition
                ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-40"
                    : "bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-40"
                }`}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MentorsPage;
