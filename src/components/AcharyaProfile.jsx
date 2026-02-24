import React, { memo } from "react";
import shiva001 from "../assets/about/archarya/shiva001.webp";
import shiva002 from "../assets/about/archarya/shiva002.webp";
import shiva003 from "../assets/about/archarya/shiva003.webp";

const AcharyaProfile = ({ darkMode }) => {
  return (
    <section
      className={`w-full overflow-x-hidden relative transition-colors duration-500
        ${darkMode 
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900"
        }`}
    >
      <div
        className={`absolute top-0 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/30" : "bg-purple-200/30"}`}
      ></div>
      <div
        className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-pink-500/20" : "bg-pink-200/20"}`}
      ></div>

      <div className="relative h-[100vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={shiva001}
          alt="Acharya Shiva Ji"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16">
          <h1 className="font-bold leading-tight text-[clamp(2rem,4vw,3.4rem)] text-white">
            Shiva Ji
          </h1>
          <p className="mt-3 font-semibold text-[clamp(1.1rem,2.5vw,1.5rem)] text-indigo-200">
             Brahma Yogapeeth
          </p>
        </div>
      </div>

      <div className="text-center py-16 relative z-10">
        <h2 className="font-playfair italic font-bold text-[clamp(2.2rem,5vw,3rem)] text-yellow-500">
          Namaste!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-[40%_1fr] gap-12 items-center relative z-10">
        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={shiva002}
            alt="Acharya Shiva Ji"
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/5] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="space-y-6 text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed opacity-90 text-justify">
          <p>
            My name is Shiva, and I come from India, the sacred land where yoga was
            born and nurtured for thousands of years. My journey into yoga began
            as a deep inner calling — a search for balance, peace, and truth.
          </p>

          <p>
            I have completed both my Bachelor’s and Master’s degrees in Yogic
            Science from the University of Patanjali and Uttarakhand Sanskrit
            University, gaining a strong foundation in yogic philosophy,
            anatomy, pranayama, meditation, and spiritual disciplines.
          </p>

          <p>
            Beyond formal education, I was blessed to learn from traditional and
            ancient teachers who passed down the true essence of yoga —
            discipline, devotion, awareness, and compassion.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-[1fr_40%] gap-12 items-center relative z-10">
        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-xl md:order-2">
          <img
            src={shiva003}
            alt="Acharya Shiva Ji Teaching"
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/5] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-6 text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed opacity-90 text-justify md:order-1">
          <p>
            I specialize in Ashtanga Vinyasa Yoga, alignment, and adjustment
            techniques, guiding students to connect body, mind, and breath in
            harmony.
          </p>

          <p>
            My teaching philosophy focuses on transformation — from physical
            awareness to inner consciousness. Yoga is not just a practice but a
            sacred path toward self-realization.
          </p>

          <p>
            Each day, I continue to learn, share, and grow — with gratitude for
            my teachers, my students, and the timeless wisdom of yoga.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-16 py-24 text-center relative z-10">
        <p className="font-semibold italic text-[clamp(1.2rem,3vw,1.6rem)] text-indigo-400">
          “Yoga is not about touching your toes; it is about what you learn on the way down.”
        </p>
      </div>
    </section>
  );
};

export default memo(AcharyaProfile);
