import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon = ({ darkMode }) => {
  const navigate = useNavigate();

  const goHome = useCallback(() => navigate("/"), [navigate]);
  const goToCourses = useCallback(() => navigate("/classes"), [navigate]);

  return (
    <section
      className={`w-full min-h-screen relative flex items-center justify-center overflow-hidden transition-colors duration-500
        ${darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-100"}`}
      aria-label="Coming soon page"
    >
      <div
        className={`absolute top-10 -left-20 w-80 h-80 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-indigo-500/25" : "bg-indigo-200/40"}`}
      />
      <div
        className={`absolute bottom-10 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/20" : "bg-purple-200/40"}`}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <span
          className={`inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium
            ${darkMode
              ? "bg-indigo-400/10 text-indigo-300"
              : "bg-indigo-100 text-indigo-600"}`}
        >
          Under Development
        </span>

        <h1
          className={`font-bold leading-tight text-[clamp(2.2rem,5vw,3.5rem)]
            ${darkMode ? "text-gray-100" : "text-gray-900"}`}
        >
          Coming Soon
        </h1>

        <p
          className={`mt-4 text-[clamp(1rem,2.5vw,1.1rem)]
            ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          This course page is currently being crafted with care.  
          We’re preparing something meaningful, authentic, and
          transformative for your yoga journey.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goToCourses}
            className={`px-6 py-3 rounded-md font-medium transition
              ${darkMode
                ? "bg-indigo-400 text-white hover:bg-indigo-500 focus:ring-indigo-300"
                : "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-400"}`}
          >
            View All Courses
          </button>

          <button
            onClick={goHome}
            className={`relative overflow-hidden px-6 py-3 rounded-md font-medium transition-all duration-300 ease-out
              border
              ${darkMode
                ? "border-indigo-300 text-indigo-100 hover:border-indigo-400 hover:text-indigo-200"
                : "border-indigo-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-900"}
              before:absolute before:inset-0 before:rounded-md
              before:bg-gradient-radial from-indigo-300/30 via-indigo-200/20 to-transparent
              before:opacity-0 before:scale-0 before:transition-all before:duration-500
              hover:before:opacity-70 hover:before:scale-150`}
          >
            Go Back Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(ComingSoon);
