import React, { useState, useMemo, memo, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = memo(({ testimonial, darkMode }) => {
  const storageKey = `testimonial-${testimonial.id}-expanded`;

  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved === "true") setShowModal(true);
  }, [storageKey]);

  const { isLong, shortText } = useMemo(() => {
    const words = testimonial.feedback.split(" ");
    const long = words.length > 45;
    return {
      isLong: long,
      shortText: long ? words.slice(0, 45).join(" ") + "..." : testimonial.feedback,
    };
  }, [testimonial.feedback]);

  const handleReadMore = () => {
    setShowModal(true);
    localStorage.setItem(storageKey, "true"); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
    localStorage.removeItem(storageKey); 
  };

  return (
    <>
      <div
        className={`border rounded-2xl shadow-lg transition-all flex flex-col h-full w-full
          ${darkMode ? "border-indigo-400 bg-gray-800 text-gray-200" : "border-orange-400 bg-white text-gray-900"}
          hover:scale-105 hover:shadow-2xl`}
      >
        <div className="w-28 h-28 mx-auto mt-4 overflow-hidden rounded-full border-4 border-gray-200">
          <img
            src={testimonial.photoUrl}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 md:p-6 flex flex-col flex-grow text-center">
    
    
          <h2 className="text-lg md:text-xl font-bold mt-2">{testimonial.name}</h2>

        
          <div className="flex justify-center gap-1 mt-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={14}
                className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>

         
         
          <p className={`text-sm md:text-base leading-snug flex-grow ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
            {shortText}
          </p>

       
          {isLong && (
            <button
              onClick={handleReadMore}
              className={`mt-2 text-sm font-medium hover:underline
                ${darkMode ? "text-indigo-400" : "text-orange-500"}`}
            >
              Read More →
            </button>
          )}
        </div>
      </div>

   
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full p-6 mx-4`}
          >
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? "text-gray-200" : "text-gray-900"}`}>
              {testimonial.name}'s Feedback
            </h3>
            <p className={`text-sm md:text-base mb-6 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              {testimonial.feedback}
            </p>
            <button
              onClick={handleCloseModal}
              className={`px-4 py-2 rounded-md font-medium ${darkMode ? "bg-indigo-400 text-gray-900" : "bg-orange-500 text-white"}`}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
});

export default TestimonialCard;
