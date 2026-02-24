import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import hero001 from "../assets/hero/hero001.webp";

const Hero = ({ darkMode }) => {  
  const navigate = useNavigate();
  const goToCourses = useCallback(() => navigate("/classes"), [navigate]);
  const goToContact = useCallback(() => navigate("/contact"), [navigate]);

  return (
    <section
      className={`w-full h-full relative flex justify-center py-20 overflow-hidden transition-colors duration-500
        ${darkMode ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700" : "bg-gradient-to-r from-blue-50 via-white to-blue-100"}`}
      aria-label="Hero section"
    >
      
      <div
        className={`absolute top-0 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/30" : "bg-purple-200/30"}`}
      ></div>
      <div
        className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-pink-500/20" : "bg-pink-200/20"}`}
      ></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 py-16 sm:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <h1 className={`font-bold leading-tight text-[clamp(1.9rem,4vw,3.2rem)]
            ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
            Best Yoga School and Retreat in Rishikesh, Goa, Kerala & Bali
          </h1>

          <h2 className={`font-semibold leading-snug text-[clamp(1.4rem,3vw,2rem)]
            ${darkMode ? "text-indigo-300" : "text-indigo-600"}`}>
            Transform Your Life with Traditional Yoga Retreat in Rishikesh
          </h2>

          <p className={`max-w-md md:max-w-lg mx-auto md:mx-0 text-[clamp(0.95rem,2vw,1.05rem)]
            ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Embrace a journey of self-discovery, serenity & spiritual growth
            in the Himalayas along the sacred Ganges river, guided by the
            best yoga teachers of India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            {/* Explore Courses Button */}
            <button
              onClick={goToCourses}
              className={`px-6 py-3 rounded-md font-medium transition 
                ${darkMode 
                  ? "bg-indigo-400 text-white hover:bg-indigo-500 focus:ring-indigo-300" 
                  : "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-400"}`}
            >
              Explore Courses →
            </button>

            <button
              onClick={goToContact}
              className={`relative overflow-hidden px-6 py-3 rounded-md font-medium transition-all duration-300 ease-out
                border ${darkMode ? "border-indigo-300 text-indigo-100 hover:border-indigo-400 hover:text-indigo-200" 
                                  : "border-indigo-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-900"}
                before:absolute before:inset-0 before:rounded-md
                before:bg-gradient-radial from-indigo-300/30 via-indigo-200/20 to-transparent
                before:opacity-0 before:scale-0 before:transition-all before:duration-500
                hover:before:opacity-70 hover:before:scale-150`}
            >
              Contact Us
            </button>
          </div>
        </div>

   
        <div className="w-full flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-[360px] aspect-square overflow-hidden rounded-2xl shadow-xl group">
            <img
              src={hero001}
              alt="Yoga retreat in Rishikesh"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 pointer-events-none shadow-2xl rounded-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
