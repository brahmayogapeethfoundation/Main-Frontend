import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import lightImage from "../assets/logo01.png";
import darkImage from "../assets/logo02.png";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-500 font-sans
        ${
          darkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-300"
            : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-700"
        }`}
    >
      {/* Decorative blobs */}
      <div
        className={`hidden sm:block absolute top-0 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30
          ${darkMode ? "bg-indigo-500" : "bg-indigo-300"}`}
      />
      <div
        className={`hidden sm:block absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20
          ${darkMode ? "bg-pink-500" : "bg-pink-300"}`}
      />

      <div
        className="
          relative z-10 max-w-7xl mx-auto
          px-4 sm:px-6 md:px-16
          py-12 sm:py-14
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
          gap-8
          text-center lg:text-left
        "
      >
        {/* LOGO + DESCRIPTION */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <img
            src={darkMode ? darkImage : lightImage}
            alt="Brahma Yogapeeth"
            className="h-10 md:h-12"
          />

          <p className="text-sm sm:text-[0.95rem] leading-relaxed opacity-90 max-w-sm">
            A sacred space for holistic wellness, discipline, and spiritual
            growth through authentic yoga traditions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "#", label: "Retreat in Bali" },
              { to: "#", label: "Retreat in Kerala" },
              { to: "#", label: "Retreat in Goa" },
              { to: "#", label: "Retreat in Rishikesh" },
            ].map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className="opacity-80 hover:opacity-100 hover:text-indigo-500 transition"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ABOUT */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-sm opacity-85">
            {[
              { to: "/about/", label: "Brahma Yogapeeth" },
              { to: "/about-acharya", label: "Acharya Shiva Ji" },
              { to: "/about/mentors", label: "Our Mentors" },
              { to: "#", label: "Yoga Philosophy" },
            ].map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className="opacity-80 hover:opacity-100 hover:text-indigo-500 transition"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col items-center lg:items-start space-y-3">
          <h3 className="font-semibold text-lg mb-4">Contact</h3>

          <div className="flex items-center gap-2 text-sm opacity-85
                       justify-center lg:justify-start
                       hover:text-indigo-500 transition">
            <span>📍</span>
            <span>Jonk Gao Ram Jhula, Rishikesh, Uttarakhand</span>
          </div>

          <a
            href="mailto:brahmayogapeeth.foundation@gmail.com"
            className="flex items-center gap-2 text-sm opacity-85
                       justify-center lg:justify-start
                       hover:text-indigo-500 transition"
          >
            <span>✉️</span>
            <span>brahmayogapeeth.foundation@gmail.com</span>
          </a>

          <a
            href="tel:+919368979367"
            className="flex items-center gap-2 text-sm opacity-85
                       justify-center lg:justify-start
                       hover:text-indigo-500 transition"
          >
            <span>📞</span>
            <span>+91 9368979367</span>
          </a>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        className={`h-px mx-4 sm:mx-6 md:mx-16 opacity-40
          ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}
      />

      {/* COPYRIGHT */}
      <div className="relative z-10 text-center py-4 text-[0.7rem] sm:text-xs tracking-wide opacity-80">
        © {new Date().getFullYear()} Brahma Yogapeeth. All Rights Reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
