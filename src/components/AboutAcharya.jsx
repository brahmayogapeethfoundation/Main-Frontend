import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import acharyaImg from "../assets/hero/hero003.webp";

const AboutAcharya = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`w-full overflow-x-hidden relative overflow-hidden transition-colors duration-500 py-16 font-sans
        ${darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900"
        }`}
      aria-label="About Acharya Section"
    >
      <div
        className={`absolute top-0 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/30" : "bg-purple-200/30"}`}
      />
      <div
        className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-pink-500/20" : "bg-pink-200/20"}`}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        <div className="text-center max-w-4xl mx-auto space-y-6">
         <h1 className={`font-bold leading-tight text-[clamp(1.5rem,3vw,2.5rem)] md:text-text-[clamp(1.6rem,3vw,2.5rem)]`}>
            <span className={darkMode ? "text-gray-100" : "text-gray-900"}>Why should you become a </span>
            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Teacher at Brahma Yogapeeth Yoga ?</span>
          </h1>


          <p className={`text-[clamp(0.95rem,2vw,1.05rem)] md:text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            At Brahma Yogapeeth Yoga, we share the knowledge just as it was passed
            down to us: pure, rooted in the scriptures, with devotion and respect.
            Studying with Acharya Shiv and his team allows you to immerse yourself
            in an authentic tradition.
          </p>

          <p className={`text-[clamp(0.95rem,2vw,1.05rem)] md:text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Living the experience in a spiritual environment will connect you not
            only with technique, but with the true purpose of yoga:
            <span className={`font-semibold ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
              {" "}self-knowledge, inner harmony, and service to others.
            </span>
            {" "}Our trainings are transformative—both personally and professionally.
          </p>
        </div>

        <h3 className={`text-center text-[clamp(1.4rem,3vw,2rem)] md:text-[clamp(2rem,4vw,2.5rem)] font-semibold mt-16 ${darkMode ? "text-orange-400" : "text-orange-600"}`}>
           Shiva ji
        </h3>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">

          <div className="flex justify-center md:justify-start">
            <div className={`relative p-[6px] rounded-2xl ${darkMode ? "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-200 via-white to-blue-300"} max-w-md`}>
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src={acharyaImg}
                  alt="Acharya Shiv Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 text-justify">
            <p className={`text-[clamp(0.95rem,2vw,1.05rem)] md:text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              My name is Shiva, and I come from India, the sacred 
              land where yoga was born and nurtured for thousands of years. 
              My journey into yoga began as a deep inner calling — a search for balance, peace, 
              and truth. Over time, that search has transformed into a way of living, teaching, 
              and sharing yoga with others from all walks of life.
            </p>

            <p className={`text-[clamp(0.95rem,2vw,1.05rem)] md:text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              I have completed both my Bachelor’s and Master’s degrees in Yogic Science from the University of Patanjali and 
              Uttarakhand Sanskrit University, two of the most respected institutions in India for yogic education. My academic 
              journey gave me a strong foundation in yogic philosophy, anatomy, pranayama, meditation, and spiritual 
              disciplines.
            </p>

            <button
              onClick={() => navigate("/about-acharya")}
              className={`px-6 py-3 rounded-md font-medium transition shadow-lg text-[clamp(0.95rem,2vw,1.05rem)]
                ${darkMode
                  ? "bg-indigo-400 text-white hover:bg-indigo-500 focus:ring-indigo-300"
                  : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400"}`}
            >
              Meet Acharya Shiv →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(AboutAcharya);
