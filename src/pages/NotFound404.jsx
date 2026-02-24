import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NotFound404 = ({ darkMode }) => {
  const navigate = useNavigate();

  const goHome = useCallback(() => navigate("/"), [navigate]);
  const goToCourses = useCallback(() => navigate("/classes"), [navigate]);

  return (
    <section
      className={`w-full min-h-screen relative flex items-center justify-center overflow-hidden transition-colors duration-500
        ${
          darkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-r from-blue-50 via-white to-blue-100"
        }`}
      aria-label="404 not found"
    >
      <div
        className={`absolute top-12 -left-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/25" : "bg-purple-200/40"}`}
      />
      <div
        className={`absolute bottom-10 -right-28 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-indigo-500/20" : "bg-indigo-200/40"}`}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <span
          className={`inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium
            ${
              darkMode
                ? "bg-red-400/10 text-red-300"
                : "bg-red-100 text-red-600"
            }`}
        >
          Error 404
        </span>

        <h1
          className={`font-bold leading-tight text-[clamp(2.8rem,6vw,4rem)]
            ${darkMode ? "text-gray-100" : "text-gray-900"}`}
        >
          Page Not Found
        </h1>

        <p
          className={`mt-4 text-[clamp(1rem,2.5vw,1.1rem)]
            ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          The page you’re looking for doesn’t exist or has been moved.
          Don’t worry — your yoga journey is still on the right path 🧘‍♂️
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goHome}
            className={`px-6 py-3 rounded-md font-medium transition
              ${
                darkMode
                  ? "bg-indigo-400 text-white hover:bg-indigo-500 focus:ring-indigo-300"
                  : "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-400"
              }`}
          >
            Go Back Home
          </button>

          <button
            onClick={goToCourses}
            className={`relative overflow-hidden px-6 py-3 rounded-md font-medium transition-all duration-300 ease-out
              border
              ${
                darkMode
                  ? "border-indigo-300 text-indigo-100 hover:border-indigo-400 hover:text-indigo-200"
                  : "border-indigo-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-900"
              }
              before:absolute before:inset-0 before:rounded-md
              before:bg-gradient-radial from-indigo-300/30 via-indigo-200/20 to-transparent
              before:opacity-0 before:scale-0 before:transition-all before:duration-500
              hover:before:opacity-70 hover:before:scale-150`}
          >
            View Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(NotFound404);
