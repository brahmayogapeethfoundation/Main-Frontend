import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SocialFloating from "./components/SocialFloating";


import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Mentors from "./pages/MentorsPage";
import MentorDetails from "./pages/MentorDetails";
import AboutAcharyaPage from "./pages/AboutAcharyaPage";
import Classes from "./pages/CoursePage";
import Blog from "./pages/BlogPage";
import Gallery from "./pages/GalleryPage";
import Contact from "./pages/ContactPage";
import EnrollPage from "./pages/EnrollPage";
import CourseDetails from "./components/CourseDetails";
import RishikeshRetreatPage from "./pages/RishikeshRetreatPage";
import BaliRetreatPage from "./pages/BaliRetreatPage";
import GoaRetreatPage from "./pages/GoaRetreatPage";
import KeralaRetreatPage from "./pages/KeralaRetreatPage";

import YTT200GoaPage from "./pages/YTT200GoaPage";
import YTT300GoaPage from "./pages/YTT300GoaPage";
import YTT300RishikeshPage from "./pages/YTT300RishikeshPage";
import YTT200RishikeshPage from "./pages/YTT200RishikeshPage";

import ComingSoon from "./pages/ComingSoon";
import NotFound404 from "./pages/NotFound404";



function App() {
  const [darkMode, setDarkMode] = useState(false);

 
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    if (prefersDark) document.documentElement.classList.add("dark");
  }, []);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} transition-colors duration-500`}>
    
      <ScrollToTop />

     
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

  
      <main className="">
        <Routes>
        
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/about/mentors" element={<Mentors darkMode={darkMode} />} />
          <Route path="/about/mentors/:id" element={<MentorDetails darkMode={darkMode} />} />
          <Route path="/about-acharya" element={<AboutAcharyaPage darkMode={darkMode} />} />
          <Route path="/classes" element={<Classes darkMode={darkMode} />} />
          <Route path="/courseDetails" element={<CourseDetails darkMode={darkMode} />} />
          <Route path="/enroll" element={<EnrollPage darkMode={darkMode} />} />
          <Route path="/blog" element={<Blog darkMode={darkMode} />} />
          <Route path="/gallery" element={<Gallery darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/retreats/rishikesh" element={<RishikeshRetreatPage darkMode={darkMode} />} />
          <Route path="/retreats/goa" element={<GoaRetreatPage />} />
          <Route path="/retreats/kerala" element={<KeralaRetreatPage />} />
          <Route path="/retreats/bali" element={<BaliRetreatPage />} />
          <Route path="/courses/ytt-200-goa" element={<YTT200GoaPage />} />
          <Route path="/courses/ytt-300-goa" element={<YTT300GoaPage />} />
          <Route path="/courses/ytt-200-rishikesh" element={<YTT200RishikeshPage />} />
          <Route path="/courses/ytt-300-rishikesh" element={<YTT300RishikeshPage />} />
          <Route path="/courses/ashtanga" element={<ComingSoon darkMode={darkMode} />} />                
          <Route path="*" element={<NotFound404 darkMode={darkMode} />} />

        </Routes>

        <SocialFloating darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
