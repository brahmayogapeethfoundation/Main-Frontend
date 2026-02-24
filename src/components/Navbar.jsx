import React, { useState, memo } from "react";
import { NavLink } from "react-router-dom";
import lightImage from "../assets/logo01.png";
import darkImage from "../assets/logo02.png";
import lightModeIcon from "../assets/light-mode.png";
import darkModeIcon from "../assets/dark-mode.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [retreatOpen, setRetreatOpen] = useState(false);

  const dropdownHover = darkMode
    ? "hover:bg-gray-700"
    : "hover:bg-indigo-100";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-colors duration-500
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md`}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={darkMode ? darkImage : lightImage}
            alt="Brahma Yogapeeth"
            className="h-10 md:h-12"
          />
        </NavLink>

        <div className="hidden md:flex gap-6 items-center text-sm font-medium">

          <NavLink to="/" className="hover:text-indigo-500 transition-colors">Home</NavLink>

          <div className="relative group">
            <button className="hover:text-indigo-500 transition-colors">About</button>
            <div className={`absolute top-full left-0 mt-2 w-56 rounded shadow transition-all duration-300
              ${darkMode ? "bg-gray-800" : "bg-white"} opacity-0 invisible group-hover:opacity-100 group-hover:visible`}
            >
              <NavLink to="/about" className={`block px-4 py-2 ${dropdownHover}`}>Brahma Yogapeeth</NavLink>
              <NavLink to="/about-acharya" className={`block px-4 py-2 ${dropdownHover}`}>Acharya Shiva Ji</NavLink>
              <NavLink to="/about/mentors" className={`block px-4 py-2 ${dropdownHover}`}>Our Mentors</NavLink>
            </div>
          </div>

            <div className="relative group">
              <button className="hover:text-indigo-500 transition-colors">
                Courses
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-60 rounded shadow transition-all duration-300
                ${darkMode ? "bg-gray-800" : "bg-white"}
                opacity-0 invisible group-hover:opacity-100 group-hover:visible`}
              >
                {[
                  { label: "All Courses", path: "/classes" },
                  { label: "YTT 200 Hour – Rishikesh", path: "/courses/ytt-200-rishikesh" },
                  { label: "YTT 300 Hour – Rishikesh", path: "/courses/ytt-300-rishikesh" },
                  { label: "YTT 200 Hour – Goa", path: "/courses/ytt-200-goa" },
                  { label: "YTT 300 Hour – Goa", path: "/courses/ytt-300-goa" },
                  { label: "Ashtanga Yoga", path: "/courses/ashtanga" },
                ].map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 ${dropdownHover}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

                <div className="relative group">
                  <button className="hover:text-indigo-500 transition-colors">
                    Retreats
                  </button>

                  <div
                    className={`absolute top-full left-0 mt-2 w-56 rounded shadow transition-all duration-300
                    ${darkMode ? "bg-gray-800" : "bg-white"}
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible`}
                  >
                    {[
                      { name: "Rishikesh", path: "/retreats/rishikesh" },
                      { name: "Goa", path: "/retreats/goa" },
                      { name: "Kerala", path: "/retreats/kerala" },
                      { name: "Bali", path: "/retreats/bali" },
                    ].map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 ${dropdownHover}`}
                      >
                        Retreat in {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

          <NavLink to="/gallery" className="hover:text-indigo-500 transition-colors">Gallery</NavLink>
          <NavLink to="/contact" className="hover:text-indigo-500 transition-colors">Contact</NavLink>

          <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 border rounded">
            <img
              src={darkMode ? darkModeIcon : lightModeIcon}
              alt="theme"
              className="h-5 w-5"
            />
          </button>

        </div>

        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <div className="px-6 py-4 space-y-2">

          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2">Home</NavLink>

          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="w-full flex justify-between px-4 py-2"
          >
            About
            <span className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${aboutOpen ? "max-h-40" : "max-h-0"}`}>
            {[{ to: "/about", label: "Brahma Yogapeeth" },
              { to: "/about-acharya", label: "Acharya Shiva Ji" },
              { to: "/about/mentors", label: "Our Mentors" }].map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => {
                  setMenuOpen(false);
                  setAboutOpen(false);
                }}
                className={`block px-6 py-2 text-sm ${dropdownHover}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setCourseOpen(!courseOpen)}
            className="w-full flex justify-between px-4 py-2"
          >
            Courses
            <span className={`transition-transform ${courseOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          <div
                className={`overflow-hidden transition-all duration-300 ${
                  courseOpen ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {[
                  { label: "All Courses", path: "/classes" },
                  { label: "YTT 200 Hour – Rishikesh", path: "/courses/ytt-200-rishikesh" },
                  { label: "YTT 300 Hour – Rishikesh", path: "/courses/ytt-300-rishikesh" },
                  { label: "YTT 200 Hour – Goa", path: "/courses/ytt-200-goa" },
                   { label: "YTT 300 Hour – Goa", path: "/courses/ytt-300-goa" },
                  { label: "Ashtanga Yoga", path: "/courses/ashtanga" },
                ].map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setMenuOpen(false);
                      setCourseOpen(false);
                    }}
                    className={`block px-6 py-2 text-sm ${dropdownHover}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>


              <button
                onClick={() => setRetreatOpen(!retreatOpen)}
                className="w-full flex justify-between px-4 py-2"
              >
                Retreats
                <span
                  className={`transition-transform ${
                    retreatOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  retreatOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                {[
                  { name: "Rishikesh", path: "/retreats/rishikesh" },
                  { name: "Goa", path: "/retreats/goa" },
                  { name: "Kerala", path: "/retreats/kerala" },
                  { name: "Bali", path: "/retreats/bali" },
                ].map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setMenuOpen(false);
                      setRetreatOpen(false);
                    }}
                    className={`block px-6 py-2 text-sm ${dropdownHover}`}
                  >
                    Retreat in {item.name}
                  </NavLink>
                ))}
              </div>


          <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className="block px-4 py-2">Gallery</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2">Contact</NavLink>

          <button onClick={() => setDarkMode(!darkMode)} className="mt-4 p-2 border rounded">
            <img src={darkMode ? darkModeIcon : lightModeIcon} alt="theme" className="h-5" />
          </button>

        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
