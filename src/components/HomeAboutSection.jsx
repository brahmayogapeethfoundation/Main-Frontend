import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/hero/hero002.webp";

const HomeAboutSection = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`w-full relative overflow-hidden transition-colors duration-500
        ${darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900"
        } py-20 font-sans`}
      aria-label="Home About Section"
    >
      <div
        className={`absolute top-0 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/30" : "bg-purple-200/30"}`}
      />
      <div
        className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-pink-500/20" : "bg-pink-200/20"}`}
      />

      <div className="text-center max-w-4xl mx-auto space-y-6 px-6 relative z-10">
        <h1 className={`font-bold leading-tight text-[clamp(1.5rem,3vw,2.5rem)] md:text-text-[clamp(1.6rem,3vw,2.5rem)]`}>
          <span className={darkMode ? "text-gray-100" : "text-gray-900"}>Welcome to </span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Brahma Yogapeeth Yoga & Retreat</span>
        </h1>

        <p className={`text-[clamp(0.95rem,2vw,1.05rem)] md:text-[clamp(1rem,1.5vw,1.1rem)] ${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
          Your gateway to ancient yogic practices through Yoga Retreats in Rishikesh, India. 
          Experience a transformative journey that nurtures the mind, body, and spirit.
        </p>

        <p className={`text-[clamp(0.95rem,2vw,1.05rem)] md:text-[clamp(1rem,1.5vw,1.1rem)] ${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
          Immerse yourself in the rich tradition of yoga as you deepen your practice, learn the art of teaching, and connect with like-minded souls on the path to inner harmony and well-being.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-20 grid md:grid-cols-2 gap-12 items-center relative z-10">

        <div className="w-full aspect-[6/4] rounded-xl overflow-hidden shadow-xl">
          <img
            src={aboutImage}
            alt="Brahma Yogapeeth Yoga Retreat"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="space-y-6 text-justify">
          <p className={`text-[clamp(0.95rem,2vw,1.05rem)] md:text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Welcome to Brahma Yogapeeth Yoga & Retreat — your gateway to the ancient yogic practices through Yoga Retreats in Rishikesh, nestled in the serene surroundings of the world’s yoga capital. 
          </p>
          <p className={`text-[clamp(0.95rem,2vw,1.05rem)] md:text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Join us on a transformative journey to uplift the mind, body, and spirit under the guidance of experienced Yoga masters.
          </p>
          <p className={`text-[clamp(0.95rem,2vw,1.05rem)] md:text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Our retreats offer authentic learning experiences, blending tradition with practical guidance, suitable for both beginners and advanced practitioners.
          </p>

          <button
            onClick={() => navigate("/about")}
            className={`px-6 py-3 rounded-md font-medium transition shadow-lg text-[clamp(0.95rem,2vw,1.05rem)]
              ${darkMode
                ? "bg-indigo-400 text-white hover:bg-indigo-500 focus:ring-indigo-300"
                : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400"}`}
          >
            Read More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default memo(HomeAboutSection);
