import { useEffect, useState } from "react";
import keralaBanner from "../assets/Certified_Photo/Cert1.jpg";


const KeralaRetreatPage = () => {
  const [statsAnimation, setStatsAnimation] = useState(false);

  useEffect(() => {
    setStatsAnimation(true);
  }, []);

  const stats = [
    { num: "10", label: "Retreat Days", color: "orange" },
    { num: "€1,400", label: "All‑Inclusive", color: "teal" },
    { num: "15 min", label: "To Backwaters", color: "emerald" },
    { num: "5 ★", label: "Guest Reviews", color: "rose" },
  ];

  const highlights = [
    {
      title: "Authentic Ayurveda",
      desc: "Daily Panchakarma‑style therapies designed after a personal consultation with certified Ayurvedic doctors.",
      color: "orange",
      icon: "🧴",
      id: "ayurveda",
    },
    {
      title: "Houseboat Paradise",
      desc: "Private backwater cruise with freshly cooked Kerala cuisine, sunsets and stargazing on calm waters.",
      color: "teal",
      icon: "⛵",
      id: "houseboat",
    },
    {
      title: "Beachfront Yoga",
      desc: "Sunrise and sunset sessions on soft sand with ocean breeze and guided pranayama for deep relaxation.",
      color: "emerald",
      icon: "🌅",
      id: "yoga",
    },
    {
      title: "5 ★ Eco Resort",
      desc: "Palm‑fringed villas, pool, spa area and gardens designed for silence, rest and nature connection.",
      color: "rose",
      icon: "🏝️",
      id: "resort",
    },
    {
      title: "All Meals Included",
      desc: "Sattvic Kerala‑style vegetarian buffets, herbal teas and fresh coconuts tailored to your dosha.",
      color: "amber",
      icon: "🍲",
      id: "meals",
    },
    {
      title: "Photos & Videos",
      desc: "Professional photography and video sessions available for yoga, houseboat and ceremony moments.",
      color: "indigo",
      icon: "📷",
      id: "media",
    },
  ];

  const statTextColor = {
    orange: "text-orange-400",
    teal: "text-teal-400",
    emerald: "text-emerald-400",
    rose: "text-rose-400",
    amber: "text-amber-400",
    indigo: "text-indigo-400",
  };

  const cardBorder = {
    orange: "border-orange-400/50",
    teal: "border-teal-400/50",
    emerald: "border-emerald-400/50",
    rose: "border-rose-400/50",
    amber: "border-amber-400/50",
    indigo: "border-indigo-400/50",
  };

  const cardBg = {
    orange: "from-orange-500/25",
    teal: "from-teal-500/25",
    emerald: "from-emerald-500/25",
    rose: "from-rose-500/25",
    amber: "from-amber-500/25",
    indigo: "from-indigo-500/25",
  };

  return (
    <div className="min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-orange-900/80 via-amber-900/50 to-rose-950/80 text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 lg:opacity-30"
          style={{ backgroundImage: `url(${keralaBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/95 via-black/50 to-transparent" />

        <div className="relative z-10 flex flex-col h-full justify-end px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-end">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="uppercase tracking-[0.35em] text-orange-300 text-xs sm:text-sm md:text-base mb-6 bg-orange-500/20 px-4 py-2 rounded-full inline-block">
                AyurAura Retreats • Kerala, India
              </div>

              <h1 className="font-black leading-tight break-words mb-7">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-orange-400 via-amber-300 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Kerala Yoga &
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-orange-300 drop-shadow-2xl">
                  Ayurvedic Retreat
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-100 mb-6 max-w-xl leading-relaxed font-medium drop-shadow-lg">
                10‑Day immersive healing journey with yoga, Ayurveda and
                backwaters in “God’s Own Country”.
                <span className="block mt-4 text-orange-300 font-black text-lg sm:text-xl md:text-2xl">
                  All‑Inclusive from{" "}
                  <span className="text-xl sm:text-2xl md:text-3xl">
                    €1,400
                  </span>{" "}
                  per person (shared room).
                </span>
              </p>

              <p className="text-sm sm:text-base md:text-lg text-amber-100/90 mb-8 leading-relaxed max-w-2xl">
                Designed for international guests seeking a safe, professionally
                guided Ayurveda experience with daily yoga, personalized
                treatments and curated cultural experiences in Kerala.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
                <a
                  href="#contact"
                  className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-900 font-black text-base sm:text-lg rounded-3xl shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 transform transition-all duration-300 bg-orange-500/90 backdrop-blur-sm text-center"
                >
                  Reserve Your Spot
                </a>

                <a
                  href="#schedule"
                  className="px-8 py-4 sm:px-10 sm:py-5 border-2 sm:border-4 border-white/60 backdrop-blur-xl text-white font-black text-base sm:text-lg rounded-3xl hover:bg-white/20 hover:border-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  View Day‑By‑Day Plan
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT - STATS */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 text-center group hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden min-h-[90px] sm:min-h-[100px] md:min-h-[110px] px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6 ${
                      statsAnimation
                        ? "animate-in slide-in-from-bottom-4 duration-700"
                        : ""
                    }`}
                  >
                    <div
                      className={`font-black mb-1 sm:mb-2 drop-shadow-lg ${statTextColor[stat.color]} text-xl sm:text-2xl md:text-3xl lg:text-3xl`}
                    >
                      {stat.num}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-xs uppercase tracking-[0.2em] text-amber-200 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & WHY KERALA */}
      <section
        id="about"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-black/35 border border-orange-400/40 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.8)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r from-orange-300 via-amber-200 to-teal-300 bg-clip-text text-transparent">
              Who This Retreat Is For
            </h2>
            <p className="text-amber-100/90 text-sm sm:text-base mb-3">
              Perfect for individuals, couples and small groups who want a
              structured, fully organised healing holiday: yoga, Ayurveda,
              culture and nature in one program.
            </p>
            <ul className="space-y-2 text-amber-100/85 text-sm sm:text-base">
              <li>• International guests looking for a safe first visit to India</li>
              <li>• Busy professionals needing full nervous‑system reset</li>
              <li>• Yoga practitioners wanting deeper Ayurvedic understanding</li>
              <li>• Solo travellers who prefer a guided group experience</li>
            </ul>
          </div>

          <div className="bg-black/35 border border-teal-300/40 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.8)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 text-teal-100">
              Why Kerala Is World‑Renowned
            </h2>
            <p className="text-amber-100/90 text-sm sm:text-base mb-2">
              Kerala is globally known as the home of classical Ayurveda,
              peaceful backwaters and lush tropical landscapes, attracting
              wellness guests from Europe, the US and across Asia.
            </p>
            <p className="text-amber-100/80 text-sm sm:text-base">
              Many top Ayurvedic centres and wellness resorts choose Kerala for
              its experienced doctors, herbal richness and calm coastal climate.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section
        id="highlights"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-10 sm:mb-14 md:mb-16 bg-gradient-to-r from-orange-400 via-amber-300 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
          Kerala Healing Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={`highlight-${highlight.id}-${index}`}
              className="group cursor-pointer hover:scale-[1.03] transition-all duration-300"
            >
              <div
                className={`w-full h-56 md:h-64 rounded-3xl overflow-hidden mb-6 border-2 ${cardBorder[highlight.color]} shadow-2xl transition-all duration-300 relative`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cardBg[highlight.color]} via-amber-900/20 to-rose-900/30`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-6xl mb-4 block opacity-90 drop-shadow-2xl">
                    {highlight.icon}
                  </span>
                  <div className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-2xl">
                    {highlight.title}
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black mb-2 text-amber-100">
                {highlight.title}
              </h3>
              <p className="text-amber-200 text-base sm:text-lg leading-relaxed">
                {highlight.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT’S INCLUDED */}
      <section
        id="included"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-orange-300 via-amber-200 to-teal-300 bg-clip-text text-transparent">
          What Is Included In Your Retreat
        </h2>

        <div className="grid gap-8 md:grid-cols-2 text-sm sm:text-base text-amber-100/90">
          <div className="bg-black/35 border border-amber-300/40 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-amber-100">
              Wellness &amp; Program
            </h3>
            <ul className="space-y-2">
              <li>• 10 days / 9 nights accommodation in eco resort</li>
              <li>• Daily yoga, pranayama and guided relaxation classes</li>
              <li>• Personalized Ayurvedic consultation on arrival</li>
              <li>• Daily therapies tailored to your body type (dosha)</li>
              <li>• Group satsangs, sharing circles and reflection time</li>
            </ul>
          </div>

          <div className="bg-black/35 border border-teal-300/40 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-teal-100">
              Comfort, Food &amp; Experiences
            </h3>
            <ul className="space-y-2">
              <li>• Three vegetarian Ayurvedic meals per day</li>
              <li>• Herbal teas, infused water and healthy snacks</li>
              <li>• Backwater houseboat experience (day or overnight)</li>
              <li>• Local temple or cultural visit depending on season</li>
              <li>• Wi‑Fi in common areas, airport pick‑up on request</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SAFETY & INTERNATIONAL GUESTS */}
      <section
        id="international"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-black/35 border border-rose-300/40 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.8)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 text-rose-100">
              Safety, Care &amp; Medical Support
            </h2>
            <p className="text-amber-100/90 text-sm sm:text-base mb-3">
              Kerala is one of India’s leading wellness destinations with
              professional Ayurveda clinics, trained therapists and hospitals
              nearby for any emergency needs.
            </p>
            <ul className="space-y-2 text-amber-100/85 text-sm sm:text-base">
              <li>• Pre‑arrival health questionnaire and guidance</li>
              <li>• Supervision by qualified Ayurvedic doctors and therapists</li>
              <li>• Hygienic, well‑maintained treatment rooms and equipment</li>
              <li>• Support with diet, sleep and energy during detox</li>
            </ul>
          </div>

          <div className="bg-black/35 border border-teal-300/40 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.8)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 text-teal-100">
              Designed For International Travellers
            </h2>
            <p className="text-amber-100/90 text-sm sm:text-base mb-3">
              English‑speaking staff, clear communication before arrival and
              airport transfer support make it easy to fly in from abroad.
            </p>
            <ul className="space-y-2 text-amber-100/85 text-sm sm:text-base">
              <li>• Assistance with travel planning and recommended flights</li>
              <li>• Simple guidance on visas, local SIM and currency</li>
              <li>• Vegetarian, vegan and gluten‑free meal options</li>
              <li>• Small‑group size so you receive personal attention</li>
            </ul>
          </div>
        </div>
      </section>

      {/* You can keep your schedule and contact sections below this */}
    </div>
  );
};

export default KeralaRetreatPage;
