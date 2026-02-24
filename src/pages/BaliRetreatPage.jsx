import { useState, useEffect } from "react";
import barbara from "../assets/about/mentors/babar.webp";
import shiva from "../assets/about/mentors/shiva.webp";
import rahul from "../assets/about/mentors/ashish.webp";
import Banner from "../assets/Bali_REtreat/BaliBanner.jpg";
import main from "../assets/Bali_REtreat/main.jpg";
import main2 from "../assets/Bali_REtreat/main2.jpg";
import Dinner from "../assets/Bali_REtreat/acco19.jpg";
import acco18 from "../assets/Bali_REtreat/acco18.jpg";
import acco12 from "../assets/Bali_REtreat/acco12.jpg";
import plac1 from "../assets/Bali_REtreat/plac1.jpg";
import plac2 from "../assets/Bali_REtreat/plac2.jpg";
import plac3 from "../assets/Bali_REtreat/plac3.jpg";
import plac4 from "../assets/Bali_REtreat/plac4.jpg";
import plac5 from "../assets/Bali_REtreat/plac5.jpg";
import plac6 from "../assets/Bali_REtreat/plac6.jpg";
import plac7 from "../assets/Bali_REtreat/plac7.jpg";
import plac8 from "../assets/Bali_REtreat/plac8.jpg";
import plac9 from "../assets/Bali_REtreat/plac9.jpg";
import plac10 from "../assets/Bali_REtreat/plac10.jpg";
import plac11 from "../assets/Bali_REtreat/plac11.jpg";
import plac12 from "../assets/Bali_REtreat/plac12.jpg";
import plac13 from "../assets/Bali_REtreat/plac13.jpg";
import plac14 from "../assets/Bali_REtreat/plac14.jpg";
import swim1 from "../assets/Bali_REtreat/swim1.jpg";
import swim3 from "../assets/Bali_REtreat/swim3.jpg";
import food1 from "../assets/Bali_REtreat/food1.jpg";
import food11 from "../assets/Bali_REtreat/food11.jpg";
import yoga6 from "../assets/Bali_REtreat/Yoga6.jpg";
import yoga7 from "../assets/Bali_REtreat/Yoga7.jpg";
import yoga4 from "../assets/Bali_REtreat/Yoga4.jpg";
import yoga3 from "../assets/Bali_REtreat/Yoga3.jpg";
import yoga1 from "../assets/Bali_REtreat/Yoga1.jpg";

// Image gallery data with categories
const images = [
  // Hero Background
  {
    src: Banner,
    category: "Hero Background",
    alt: "Bali sunrise yoga pose",
    id: "Banner",
  },
  { src: main, category: "Hero Background", alt: "God", id: "1st" },
  { src: main2, category: "Hero Background", alt: "God2", id: "2st" },

  // Mentors
  {
    src: barbara,
    category: "Mentors",
    alt: "Barbara Ji portrait",
    id: "mentor-barbara",
  },
  {
    src: shiva,
    category: "Mentors",
    alt: "Shiv Kumar Singh portrait",
    id: "mentor-shiva",
  },
  { src: rahul, category: "Mentors", alt: "Rahul Ji", id: "mentor-Rahul Ji" },

  // Highlights section images
  {
    src: food1,
    category: "Highlights",
    alt: "Vegetarian meals",
    id: "highlight-meals",
  },
  {
    src: food11,
    category: "Highlights",
    alt: "Vegetarian meals",
    id: "highlight-airport",
  },
  {
    src: main,
    category: "Highlights",
    alt: "Ubud temple activities",
    id: "highlight-activities",
  },
  {
    src: swim1,
    category: "Highlights",
    alt: "Yogashala and pool",
    id: "highlight-yogashala",
  },
  {
    src: swim3,
    category: "Highlights",
    alt: "Yogashala and pool",
    id: "highlight-transport",
  },

  // Location section
  { src: plac1, category: "Location", alt: "Living Place", id: "location1" },
  { src: plac2, category: "Location", alt: "Living Place", id: "location2" },
  { src: plac3, category: "Location", alt: "Living Place", id: "location3" },
  { src: plac4, category: "Location", alt: "Living Place", id: "location4" },
  { src: plac5, category: "Location", alt: "Living Place", id: "location5" },
  { src: plac6, category: "Location", alt: "Living Place", id: "location6" },
  { src: plac7, category: "Location", alt: "Living Place", id: "location7" },
  { src: plac8, category: "Location", alt: "Living Place", id: "location8" },
  { src: plac9, category: "Location", alt: "Living Place", id: "location9" },
  { src: plac10, category: "Location", alt: "Living Place", id: "location10" },
  { src: plac11, category: "Location", alt: "Living Place", id: "location11" },
  { src: plac12, category: "Location", alt: "Living Place", id: "location12" },
  { src: plac13, category: "Location", alt: "Living Place", id: "location13" },
  { src: plac14, category: "Location", alt: "Living Place", id: "location14" },

  // Schedule accordion images
  {
    src: yoga3,
    category: "Schedule",
    alt: "Hath Yoga practice",
    id: "schedule-hath",
  },
  {
    src: yoga1,
    category: "Schedule",
    alt: "Vinyasa Flow practice",
    id: "schedule-vinyasa",
  },
  {
    src: yoga6,
    category: "Schedule",
    alt: "Pranayama session",
    id: "schedule-pranayam",
  },
  {
    src: yoga7,
    category: "Schedule",
    alt: "Meditation session",
    id: "schedule-meditation",
  },
  {
    src: yoga4,
    category: "Schedule",
    alt: "Yoga philosophy",
    id: "schedule-philosophy",
  },

  // Activities section
  {
    src: main2,
    category: "Activities",
    alt: "Ubud Palace",
    id: "activity-palace",
  },
  {
    src: main,
    category: "Activities",
    alt: "Tirta Empul Temple",
    id: "activity-temple",
  },
  {
    src: Dinner,
    category: "Activities",
    alt: "Food Activity",
    id: "activity-fire",
  },
  {
    src: acco18,
    category: "Activities",
    alt: "Sunrise walks",
    id: "activity-sunrise",
  },
];

const BaliRetreatPage = () => {
  const [activeTab, setActiveTab] = useState("highlights");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  //  NEW VIDEO STATE ADD KARO
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideoModal(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter images by category
  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Get unique categories
  const categories = ["all", ...new Set(images.map((img) => img.category))];

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-emerald-900 via-slate-950 to-indigo-950 text-white font-sans">
      {/* VIDEO MODAL - FIRST */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              autoPlay
              muted
              playsInline
              controls
              className="w-full h-auto max-h-[90vh] rounded-2xl shadow-2xl"
            >
              <source src="/Video/Bali_Video.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
            <button
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-2xl z-10 hover:scale-110 transition-all"
              onClick={() => setShowVideoModal(false)}
            >
              <svg
                className="w-7 h-7 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/*  SINGLE IMAGE MODAL - KEEP THIS ONE */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="max-w-4xl max-h-[90vh] w-full h-full relative group"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
            <div
              className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm p-3 rounded-full cursor-pointer hover:bg-black/90 transition-all duration-300 z-10"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-sm p-4 rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-1">{selectedImage.alt}</h3>
              <p className="text-emerald-300 text-sm">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-screen">
        {/* HERO BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 lg:opacity-40"
          style={{ backgroundImage: `url(${Banner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col h-full justify-end p-6 md:p-8 lg:p-12 xl:max-w-7xl xl:mx-auto xl:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:gap-12">
            <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <div className="uppercase tracking-[0.3em] text-emerald-300 text-xs md:text-sm mb-4">
                Brahmayogapeeth
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-emerald-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Ubud Bali
                <br className="hidden md:block" />
                <span className="block md:inline text-emerald-300">
                  Best Yoga Retreat
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed">
                20th to 30th April 2026 • 10 Days Transformation
                <br />
                <span className="font-semibold">
                  Hosted by Barbara & Shiva Ji
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-emerald-500 text-slate-900 font-bold text-lg rounded-2xl shadow-2xl hover:bg-emerald-400 hover:shadow-emerald-500/25 transform hover:-translate-y-1 transition-all duration-300 text-center whitespace-nowrap"
                >
                  Book Your Retreat
                </a>
                <a
                  href="#schedule"
                  className="px-8 py-4 border-2 border-white/50 backdrop-blur-sm text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-300 text-center whitespace-nowrap"
                >
                  See Schedule
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
              {[
                { num: "10", label: "Days", color: "emerald" },
                { num: "Ubud", label: "Location", color: "cyan" },
                { num: "15min", label: "Walk to Market", color: "amber" },
                { num: "3x", label: "Veg Meals", color: "purple" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 md:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className={`text-2xl md:text-3xl font-black text-${stat.color}-400 mb-2`}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="py-20 px-4 md:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Everything Included
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              title: "Accommodation",
              desc: "Sharing & private rooms with bathroom",
              color: "emerald",
              image: acco12,
            },
            {
              title: "3x Daily Meals",
              desc: "Vegetarian breakfast, lunch, dinner ",
              color: "amber",
              image: food11,
            },
            {
              title: "Airport Transfer",
              desc: "Denpasar ↔ Ubud round-trip included",
              color: "cyan",
              image: Dinner,
            },
            {
              title: "Activities",
              desc: "Ubud Palace, Tirta Empul, Fire Dance",
              color: "purple",
              image: main,
            },
            {
              title: "Yogashala & Pool",
              desc: "Dedicated studio + swimming pool",
              color: "indigo",
              image: swim3,
            },
            {
              title: "Local Transport",
              desc: "All activity taxis covered ",
              color: "rose",
              image: acco18,
            },
          ].map((highlight, i) => (
            <div
              key={i}
              className="group cursor-pointer hover:scale-105 transition-all duration-300"
            >
              {/* IMAGE PLACEHOLDER - Now links to gallery */}
              <div
                className={`w-full h-48 md:h-52 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-${highlight.color}-500/20 border-2 border-${highlight.color}-400/30 group-hover:border-${highlight.color}-400/60 transition-all duration-500`}
                style={{
                  backgroundImage: `url(${highlight.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex items-center justify-center h-full text-slate-100 text-sm font-medium p-4 text-center bg-black/40 group-hover:bg-black/20 backdrop-blur-sm transition-all duration-500">
                  {highlight.title} Photo
                </div>
              </div>

              <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {highlight.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/50 to-cyan-900/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-green-900/60 to-emerald-900/60 h-80 md:h-96 lg:h-[500px] flex items-center justify-center text-2xl text-slate-300 border-4 border-white/20 hover:scale-105 transition-all duration-700 cursor-pointer hover:text-white"
                style={{
                  backgroundImage: `url(${images.find((i) => i.id === "Banner")?.src || ""})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => {
                  const img = images.find((i) => i.id === "Banner");
                  setSelectedImage(img);
                }}
              >
                Rice Fields Aerial View
                <div className="absolute bottom-4 left-4 bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                  15 min walk from Ubud Market
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Sacred Ubud Sanctuary
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Quiet place surrounded by rice fields and nature. Perfect for
                  deep practice and soul nourishment.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                  <div>
                    <h3 className="font-bold text-xl mb-2 flex items-center">
                      <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3 text-sm font-black text-slate-900">
                        🏞️
                      </span>
                      Yogashala
                    </h3>
                    <p className="text-slate-300">Dedicated practice space</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 flex items-center">
                      <span className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-black text-slate-900">
                        🏊
                      </span>
                      Swimming Pool
                    </h3>
                    <p className="text-slate-300">Relaxation area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="schedule"
        className="py-20 px-4 md:px-8 lg:px-12 xl:max-w-5xl xl:mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          10-Day Transformation
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          {/* LEFT COLUMN - Daily Practices */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">
              Daily Practices
            </h3>
            <ul className="space-y-4 text-lg">
              {[
                "Hatha Yoga",
                "Ashtanga Vinyasa",
                "Pranayama",
                "Anatomy/Alignment",
                "Meditation",
                "Sanskrit Mantra Chanting",
                "Shatkarma",
                "Ceremonies",
              ].map((practice, i) => (
                <li
                  key={`practice-${i}`}
                  className="flex items-start p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-4 flex-shrink-0" />
                  {practice}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN - Deepen Your Practice */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">
              Deepen Your Practice
            </h3>

            {/* ✅ BUILT-IN MAPPING - NO EXTERNAL DEPENDENCY */}
            {[
              { topic: "Hatha Yoga", id: "schedule-hath" },
              { topic: "Vinyasa Flow", id: "schedule-vinyasa" },
              { topic: "Pranayama", id: "schedule-pranayam" },
              { topic: "Meditation", id: "schedule-meditation" },
              { topic: "Philosophy", id: "schedule-philosophy" },
            ].map(({ topic, id }, i) => {
              // Find image from your existing images array
              const image = images?.find((img) => img.id === id);

              return (
                <div
                  key={`accordion-${i}`}
                  className="mb-4 overflow-hidden rounded-2xl border border-white/20 bg-white/5 hover:border-emerald-400/50 transition-all duration-300"
                  onClick={() =>
                    setOpenAccordion(openAccordion === i ? null : i)
                  }
                >
                  <div className="p-6 cursor-pointer flex items-center justify-between">
                    <h4 className="font-bold text-lg">{topic}</h4>
                    <span
                      className={`text-2xl transition-transform ${openAccordion === i ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </div>
                  {openAccordion === i && (
                    <div className="px-6 pb-6">
                      <div
                        className="w-full h-32 mb-4 rounded-xl overflow-hidden border border-white/20 cursor-pointer hover:border-emerald-400/50 transition-all duration-300 relative group"
                        style={{
                          backgroundImage: `url(${image?.src || ""})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(image);
                        }}
                      >
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                          <span className="text-slate-100 text-sm font-medium">
                            View {topic} Photo
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Transformative {topic.toLowerCase()} sessions led by
                        experienced teachers.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Beyond the Mat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Ubud Palace", id: "activity-palace" },
              { title: "Tirta Empul Temple", id: "activity-temple" },
              { title: "Delicious Food", id: "activity-fire" },
              { title: "Sunlight", id: "activity-sunrise" },
              { title: "Yoga Time", id: "activity-massage" },
              { title: "Fire Dance", id: "activity-rice" },
            ].map((activity, i) => {
              const img = images.find((image) => image.id === activity.id); //  Fixed: 'i' → 'image'

              return (
                <div
                  key={`activity-${i}`}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-64 md:h-72 lg:h-80 cursor-pointer"
                  style={{
                    backgroundImage: `url(${img?.src})`, // SHOW IMAGE DIRECTLY
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={() => setSelectedImage(img)}
                >
                  {/*  OVERLAY ON TOP OF IMAGE */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-900/80 to-transparent flex items-end p-6 group-hover:bg-slate-900/60 transition-all duration-500">
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-white drop-shadow-lg">
                        {activity.title}
                      </h3>
                      <p className="text-emerald-300 font-medium drop-shadow-md">
                        Click to view full photo
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - FIXED */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Meet Your Teachers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* BARBARA JI */}
          <div className="bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl text-center hover:scale-105 transition-all duration-300">
            <div
              className="mb-12 cursor-pointer"
              onClick={() =>
                setSelectedImage(images.find((i) => i.id === "mentor-barbara"))
              }
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-2xl border-4 border-emerald-400/50 mb-6 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 overflow-hidden">
                <img
                  src={barbara}
                  alt="Barbara Ji"
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-all duration-300"
                />
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Barbara Ji
              </h3>
              <p className="text-xl text-slate-200 mb-8 max-w-md mx-auto leading-relaxed">
                Inhale peace, exhale stress.
              </p>
            </div>
            <div className="space-y-4 text-lg">
              <div>
                <span className="font-bold text-emerald-300">📱</span>
                <a
                  href="tel:+21650503633"
                  className="ml-3 hover:underline block md:inline"
                >
                  +2 1650 503 633
                </a>
              </div>
              <div>
                <span className="font-bold text-emerald-300">✉️</span>
                <a
                  href="mailto:abbesbarbara@gmail.com"
                  className="ml-3 hover:underline block md:inline"
                >
                  abbesbarbara@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* SHIVA JI */}
          <div className="bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl text-center hover:scale-105 transition-all duration-300">
            <div
              className="mb-12 cursor-pointer"
              onClick={() =>
                setSelectedImage(images.find((i) => i.id === "mentor-shiva"))
              }
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-2xl border-4 border-emerald-400/50 mb-6 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 overflow-hidden">
                <img
                  src={shiva}
                  alt="Shiva Ji"
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-all duration-300"
                />
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-4">Shiva Ji</h3>
              <p className="text-xl text-slate-200 mb-8 max-w-md mx-auto leading-relaxed">
                Strong body. Peaceful mind.
              </p>
            </div>
            <div className="space-y-4 text-lg">
              <div>
                <span className="font-bold text-emerald-300">📱</span>
                <a
                  href="tel:+919368979367"
                  className="ml-3 hover:underline block md:inline"
                >
                  +91 9368979367
                </a>
              </div>
              <div>
                <span className="font-bold text-emerald-300">✉️</span>
                <a
                  href="mailto:Shivarajput1835@gmail.com"
                  className="ml-3 hover:underline block md:inline"
                >
                  Shivarajput1835@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-indigo-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl text-center hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div
              className="mb-12 cursor-pointer"
              onClick={() =>
                setSelectedImage(images.find((i) => i.id === "mentor-Rahul Ji"))
              }
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-2xl border-4 border-emerald-400/50 mb-6 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 overflow-hidden">
                <img
                  src={rahul}
                  alt="Rahul Ji"
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-all duration-300"
                />
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-4">Rahul Ji</h3>
              <p className="text-xl text-slate-200 mb-8 max-w-md mx-auto leading-relaxed">
                Let’s flow into balance together.
              </p>
            </div>
            <div className="space-y-4 text-lg">
              <div>
                <span className="font-bold text-emerald-300">📱</span>
                <a
                  href="tel:+919368979367"
                  className="ml-3 hover:underline block md:inline"
                >
                  +91 9368979367
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <a
            href="/contact"
            className="block w-full md:w-auto px-12 py-6 bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 text-slate-900 font-black text-xl rounded-3xl shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-2 transition-all duration-500 tracking-wide mx-auto"
          >
            Secure Your Spot Now
          </a>
        </div>

        <div className="text-center mt-16 pt-16 border-t border-white/20">
          <p className="text-lg font-bold text-emerald-300">
            Proudly presented by
          </p>
          <h4 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent mt-4">
            Brahmayogapeeth
          </h4>
        </div>
      </section>

     
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-slate-900/50 to-black/70 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 bg-gradient-to-r from-emerald-400 via-white to-cyan-400 bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg max-w-2xl mx-auto">
            Explore all retreat images organized by category. Click any image to
            view full size.
          </p>

        
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-emerald-500 text-slate-900 shadow-emerald-500/25 shadow-lg scale-105"
                    : "bg-white/10 hover:bg-white/20 border border-white/30 hover:scale-105"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

   
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border-2 border-white/20 hover:border-emerald-400/60 hover:bg-white/10 transition-all duration-400 cursor-pointer aspect-square hover:scale-105 hover:shadow-2xl shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-3">
                  <div>
                    <p className="font-bold text-xs text-emerald-300">
                      {image.category}
                    </p>
                    <p className="text-white text-xs truncate">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default BaliRetreatPage;
