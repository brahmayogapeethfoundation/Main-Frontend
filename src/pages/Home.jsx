import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import HomeAboutSection from '../components/HomeAboutSection';
import AboutAcharya from '../components/AboutAcharya';
import HeroCoursesCarousel from '../components/HeroCoursesCarousel';
import HeroMentorsCarousel from '../components/HeroMentorsCarousel';
import HeroTestimonialsCarousel from '../components/HeroTestimonialsCarousel';
import GalleryCarousel from '../components/GalleryCarousel';
import HomeContact from '../components/HomeContact';

const Home = ({ darkMode }) => {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`w-full overflow-x-hidden transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
     
      <section className="w-full">
        <Hero darkMode={darkMode} /> 
      </section>

      <section className="w-full">
        <HomeAboutSection darkMode={darkMode} />
      </section>

      <section className="w-full">
        <AboutAcharya darkMode={darkMode} />
      </section> 

      <section className="w-full">
        <HeroCoursesCarousel darkMode={darkMode} />
      </section> 

      <section className="w-full">
        <HeroMentorsCarousel darkMode={darkMode} />
      </section>

    <section className="w-full">
        <HeroTestimonialsCarousel darkMode={darkMode} />
      </section>

       <section className="w-full">
       <GalleryCarousel darkMode={darkMode} />
      </section>

        <section className="w-full">
      <HomeContact darkMode={darkMode} />
      </section>

    </div>
  );
};

export default Home;
