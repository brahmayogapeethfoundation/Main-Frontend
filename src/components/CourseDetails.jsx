import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CourseDetails({ darkMode }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const course = state?.course;

  const [selectedAccommodation, setSelectedAccommodation] = useState(
    course?.accommodations?.length ? course.accommodations[0] : null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!course)
    return <p className="text-center mt-20 text-red-600">Course not found</p>;

  const cardBg = darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900";
  const textColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <section
      className={`w-full overflow-x-hidden  relative min-h-screen pt-24 pb-16 transition-colors duration-500
        ${darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900"
        }`}
      aria-label="Course Details Section"
    >
      <div
        className={`absolute top-0 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/30" : "bg-purple-200/30"}`}
      ></div>
      <div
        className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-pink-500/20" : "bg-pink-200/20"}`}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-10 relative z-10">
        <div>
          {loading ? (
            <div className="h-12 w-3/4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
          ) : (
            course.title && (
              <h1 className={`text-4xl md:text-5xl font-bold mb-4`}>
                {course.title}
              </h1>
            )
          )}

          {loading ? (
            <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          ) : (
            course.shortDescription && <p className={textColor}>{course.shortDescription}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[course.optionImage1, course.optionImage2, course.optionImage3].map(
            (img, i) =>
              img && (
                loading ? (
                  <div key={i} className="h-64 w-full rounded-xl bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                ) : (
                  <img
                    key={i}
                    src={img}
                    alt={`Course ${i + 1}`}
                    className="h-64 w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                )
              )
          )}
        </div>

        {course.longDescription && (
          <div>
            <h2 className="text-2xl font-bold mt-6 mb-2">
              Course Overview
            </h2>
            {loading ? (
              <div className="h-24 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            ) : (
              <p className={textColor}>{course.longDescription}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {course.category && <p><b>Category:</b> {course.category}</p>}
          {course.schedule && <p><b>Date:</b> {course.schedule}</p>}
          {course.duration && <p><b>Duration:</b> {course.duration}</p>}
          {course.price && <p className="text-2xl font-bold text-orange-500">₹{course.price}</p>}
        </div>

        {course.instructor && (
          <div
            className={`flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-2xl shadow-xl transition-transform duration-500 transform hover:scale-105 ${cardBg}`}
          >
            {course.instructor.imageUrl && (
              <div className="flex-shrink-0">
                <img
                  src={course.instructor.imageUrl}
                  alt={course.instructor.name || "Instructor"}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-md"
                  loading="lazy"
                />
              </div>
            )}

            <div className="text-center md:text-left flex-1 space-y-1">
              {course.instructor.name && <h3 className="text-xl md:text-2xl font-semibold">{course.instructor.name}</h3>}
              {course.instructor.role && (
                <p className={`text-[clamp(0.95rem,2vw,1rem)] ${textColor} font-medium`}>
                  {course.instructor.role}
                </p>
              )}
              {course.instructor.description && (
                <p className={`text-[clamp(0.9rem,1.9vw,1rem)] ${textColor} leading-relaxed`}>
                  {course.instructor.description}
                </p>
              )}
            </div>
          </div>
        )}

        {course.accommodations?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Choose Accommodation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {course.accommodations.map((item) => (
                <label
                  key={item.id}
                  className={`border rounded-xl p-4 cursor-pointer transition-transform duration-300 hover:scale-105
                    ${selectedAccommodation?.id === item.id
                      ? "border-blue-500 shadow-lg"
                      : darkMode
                      ? "border-gray-700"
                      : "border-gray-300"
                    }`}
                  onClick={() => setSelectedAccommodation(item)}
                >
                  <input
                    type="radio"
                    name="accommodation"
                    hidden
                    checked={selectedAccommodation?.id === item.id}
                    readOnly
                  />
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.type || "Accommodation"}
                      className="h-48 md:h-56 w-full object-cover rounded-lg mb-3"
                      loading="lazy"
                    />
                  )}
                  {item.type && <p className="font-semibold">{item.type}</p>}
                  {item.price && <p className={textColor}>₹{item.price} / day</p>}
                </label>
              ))}
            </div>
            {selectedAccommodation?.type && (
              <p className={`mt-4 font-semibold ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                Selected: {selectedAccommodation.type}
              </p>
            )}
          </div>
        )}

          <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
            {/* Mobile: Enroll first, Back below */}
            <button
              onClick={() => navigate("/enroll", { state: { course, selectedAccommodation } })}
              className={`px-10 py-4 rounded-xl text-white text-lg font-semibold transition-transform transform hover:scale-105
                ${darkMode
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600"
                  : "bg-gradient-to-r from-blue-600 to-purple-600"} 
                order-1 sm:order-2 w-full sm:w-auto`}
            >
              Enroll Now
            </button>

            <button
              onClick={() => navigate(-1)}
              className={`flex items-center justify-center gap-2 px-6 py-2 rounded-xl transition
                ${darkMode ? "bg-gray-700 text-gray-100 hover:bg-gray-600" : "bg-gray-300 text-gray-700 hover:bg-gray-400"} 
                order-2 sm:order-1 w-full sm:w-auto`}
            >
              ← Back
            </button>
          </div>

      </div>
    </section>
  );
}

export default CourseDetails;
