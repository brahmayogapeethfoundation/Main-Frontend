import React, { useState, useEffect, useMemo, memo } from "react";
import { FaStar } from "react-icons/fa";
import { getTestimonials } from "../api/api";


const TestimonialCard = memo(({ testimonial, darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  const { text, isLong } = useMemo(() => {
    const words = testimonial.feedback.split(" ");
    const long = words.length > 45;

    return {
      isLong: long,
      text:
        !expanded && long
          ? words.slice(0, 45).join(" ") + "..."
          : testimonial.feedback,
    };
  }, [testimonial.feedback, expanded]);

  return (
    <div
      className={`border rounded-2xl shadow-md transition-all
        flex flex-col items-center text-center
        px-4 py-5
        w-full
        hover:scale-105 hover:shadow-xl
        ${
          darkMode
            ? "border-indigo-400 bg-gray-800 text-gray-200"
            : "border-orange-400 bg-white text-gray-900"
        }`}
    >
      
      <img
        src={testimonial.photoUrl}
        alt={testimonial.name}
        loading="lazy"
        className="
          w-16 h-16
          sm:w-20 sm:h-20
          rounded-full object-cover mb-3
          border-2 border-orange-400 dark:border-indigo-400
        "
      />

   
      <h3 className="text-sm sm:text-base font-semibold mb-1">
        {testimonial.name}
      </h3>


      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={14}
            className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      

      <p className="text-[0.82rem] sm:text-sm leading-snug opacity-90">
        {text}
        {isLong && (
          <button
            onClick={() => setExpanded((p) => !p)}
            className="ml-1 text-blue-600 dark:text-blue-400 font-medium"
          >
            {expanded ? " Less" : " More"}
          </button>
        )}
      </p>
    </div>
  );
});


const Testimonials = ({ darkMode }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials()
      .then((res) => setTestimonials(res.data || []))
      .catch(console.error);
  }, []);

  return (
    <section
      className={`py-10 transition-colors
        ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-center font-bold mb-8
            text-[clamp(1.3rem,5vw,2rem)]
            ${darkMode ? "text-gray-100" : "text-gray-900"}`}
        >
          Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
