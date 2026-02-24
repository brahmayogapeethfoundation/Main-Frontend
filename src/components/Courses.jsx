import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAllCourses } from "../api/api";
import { mapBackendCourses } from "../utils/mapCourses";
import CourseCard from "./CourseCard";

const COURSES_PER_PAGE = 6;

const Courses = ({ darkMode }) => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const data = await getAllCourses();
        const mapped = mapBackendCourses(data);
        setCourses(mapped.filter((c) => c.isVisible));
      } catch (err) {
        console.error("Failed to load courses", err);
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  const totalPages = Math.max(1, Math.ceil(courses.length / COURSES_PER_PAGE));
  const currentCourses = courses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const goToPage = (page) =>
    setCurrentPage(Math.min(Math.max(1, page), totalPages));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleEnroll = (course) =>
    navigate("/enroll", { state: { course } });

  const handleDetails = (course) =>
    navigate("/courseDetails", { state: { course } });

  return (
    <section
      className={`w-full relative transition-colors duration-500
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100"
            : "bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900"
        }`}
    >
      
      <div
        className={`absolute top-0 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/30" : "bg-purple-200/30"}`}
      />
      <div
        className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-pink-500/20" : "bg-pink-200/20"}`}
      />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 pt-28 pb-28 relative z-10">
      
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
              Yoga Courses
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-[clamp(0.95rem,1.5vw,1.1rem)]
              ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            Carefully curated yoga programs for beginners to advanced
            practitioners.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {loading
            ? Array.from({ length: COURSES_PER_PAGE }).map((_, i) => (
                <div
                  key={i}
                  className={`w-[340px] h-[520px] rounded-2xl animate-pulse
                    ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
                />
              ))
            : currentCourses.map((course) => (
                <div key={course.id} className="w-[340px]">
                  <CourseCard
                    course={course}
                    darkMode={darkMode}
                    onEnroll={handleEnroll}
                    onDetails={handleDetails}
                  />
                </div>
              ))}
        </div>

        {!loading && courses.length > COURSES_PER_PAGE && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => goToPage(currentPage - 1)}
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
              onClick={() => goToPage(currentPage + 1)}
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

export default memo(Courses);
