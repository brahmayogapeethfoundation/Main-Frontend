import { useEffect, useState } from "react";
import ytt200GoaBanner from "../assets/Certified_Photo/Cert5.jpg"; 
import { Link } from "react-router-dom";

const YTT200GoaPage = () => {
  const [statsAnimation, setStatsAnimation] = useState(false);

  useEffect(() => {
    setStatsAnimation(true);
  }, []);

  const stats = [
    { num: "200", label: "Certification Hours", color: "cyan" },
    { num: "4", label: "Weeks In Goa", color: "rose" },
    { num: "2", label: "Practice Shalas", color: "amber" },
    { num: "200", label: "RYT Certification", color: "emerald" },
  ];

  const statTextColor = {
    cyan: "text-cyan-300",
    rose: "text-rose-300",
    amber: "text-amber-300",
    emerald: "text-emerald-300",
  };

  return (
    <div className="min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-950 text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 lg:opacity-40"
          style={{ backgroundImage: `url(${ytt200GoaBanner})` }}
        />
        {/* neon beach sunrise overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/95 via-[#062338]/85 to-[#ff7b9c]/55" />

        {/* floating orbs - responsive positioning */}
        <div className="pointer-events-none absolute -left-12 sm:-left-20 top-8 sm:top-12 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-400/30 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute right-0 bottom-8 sm:bottom-12 w-56 h-56 sm:w-72 sm:h-72 bg-rose-500/25 blur-3xl rounded-full" />

        <div className="relative z-10 flex flex-col h-full justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-end">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="uppercase tracking-[0.3em] sm:tracking-[0.35em] text-cyan-100 text-[10px] sm:text-xs md:text-sm mb-4 bg-slate-900/40 border border-cyan-300/50 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full inline-flex items-center gap-1.5 sm:gap-2 backdrop-blur-xl">
                <span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-300 animate-pulse" />
                Goa • 200 Hour YTT • RYT-200
              </div>

              <h1 className="font-black leading-tight break-words mb-4 sm:mb-5">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl">
                  200‑Hour Beachfront
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-rose-200 via-amber-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Yoga Teacher Training • Goa
                </span>
              </h1>

              <p className="text-[12px] sm:text-sm md:text-base lg:text-lg text-cyan-50/95 mb-3 leading-relaxed">
                Transformative 200‑hour Yoga Teacher Training on Goa's pristine
                beaches, perfect for beginners seeking Yoga Alliance RYT-200
                certification and a deep foundation in authentic yoga practice.
              </p>
              <p className="text-[12px] sm:text-sm md:text-base lg:text-lg text-cyan-50/90 mb-6 leading-relaxed">
                Wake to ocean waves, practice under swaying palms, immerse in Hatha,
                Vinyasa and Yoga Philosophy during four unforgettable weeks.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-7">
                <span className="px-3 py-2 rounded-full bg-cyan-500/15 border border-cyan-300/60 text-[10px] sm:text-xs md:text-sm font-semibold">
                  Beginner-Friendly • RYT-200
                </span>
                <span className="px-3 py-2 rounded-full bg-emerald-500/15 border border-emerald-300/60 text-[10px] sm:text-xs md:text-sm font-semibold">
                  Beachfront Shala • North Goa
                </span>
                <span className="px-3 py-2 rounded-full bg-rose-500/15 border border-rose-300/60 text-[10px] sm:text-xs md:text-sm font-semibold">
                  Hatha • Vinyasa • Ashtanga
                </span>
              </div>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 mb-10">
                <a
                  href="#curriculum"
                  className="px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300 text-slate-950 font-black text-sm sm:text-base rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_55px_rgba(0,0,0,0.9)] hover:-translate-y-1.5 transform transition-all duration-300 backdrop-blur-sm text-center w-full xs:w-auto"
                >
                  Explore 200‑Hour Curriculum
                </a>
                <a
                  href="#dates"
                  className="px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 border-2 sm:border-[3px] border-cyan-100/90 backdrop-blur-xl text-cyan-50 font-black text-sm sm:text-base rounded-3xl hover:bg-cyan-50/10 hover:border-cyan-100 transition-all duration-300 flex items-center justify-center gap-2 w-full xs:w-auto"
                >
                  Goa Batch Dates
                </a>
              </div>
            </div>

            {/* RIGHT – STATS */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`relative flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-slate-950/40 backdrop-blur-2xl border border-cyan-100/40 text-center group hover:bg-slate-900/40 hover:scale-[1.05] transition-all duration-300 shadow-[0_18px_40px_rgba(0,0,0,0.7)] overflow-hidden min-h-[80px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[110px] px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-5 ${
                      statsAnimation
                        ? "animate-in slide-in-from-bottom-4 duration-700"
                        : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.25),_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`relative font-black mb-1 sm:mb-2 drop-shadow-lg ${
                        statTextColor[stat.color]
                      } text-lg sm:text-xl md:text-2xl lg:text-3xl`}
                    >
                      {stat.num}
                    </div>
                    <div className="relative text-[9px] sm:text-xs md:text-[10px] lg:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-cyan-50/85 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section
        id="curriculum"
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 text-center bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
          Complete 200 Hour Foundation
        </h2>
        <p className="text-center text-cyan-50/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 px-2">
          Yoga Alliance certified curriculum blending traditional Hatha wisdom with
          dynamic Vinyasa flow, philosophy, anatomy and teaching methodology – all
          beachside in magical Goa.
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-cyan-50/90">
            <div className="bg-slate-950/85 border border-cyan-300/40 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-cyan-100">
                🧘‍♀️ Hatha Yoga & Asana Foundation
              </h3>
              <p className="leading-relaxed">
                Master primary series alignment, breath-synchronized movement and
                classical Hatha sequences with hands-on adjustments and prop work.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-emerald-100">
                🌬 Pranayama, Bandhas & Meditation
              </h3>
              <p className="leading-relaxed">
                Daily breathwork practice including Ujjayi, Nadi Shodhana,
                Bhastrika with retention techniques and foundational meditation.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-emerald-100">
                📖 Yoga Philosophy & Sanskrit
              </h3>
              <p className="leading-relaxed">
                Bhagavad Gita, Yoga Sutras, 8 Limbs of Yoga and essential
                terminology to teach with authentic roots and confidence.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-cyan-50/90">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-emerald-100">
                🩺 Anatomy & Physiology
              </h3>
              <p className="mb-2 leading-relaxed">
                Functional anatomy for yoga teachers – skeletal alignment,
                muscular engagement and common injuries with practical applications.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-rose-300/40 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-rose-100">
                🧑‍🏫 Teaching Methodology
              </h3>
              <p className="leading-relaxed">
                Class planning, clear cueing, safe hands-on assists, voice training
                and how to create inclusive, transformative group experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHING PRACTICE & ASSESSMENT */}
      <section
        id="teaching"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-center bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
          Practice Teaching From Day 1
        </h2>

        <div className="grid gap-8 md:grid-cols-2 text-sm sm:text-base md:text-lg text-cyan-50/90">
          <div className="space-y-5">
            <div className="bg-slate-950/85 border border-cyan-300/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-cyan-100">
                🎓 Progressive Teaching Practicum
              </h3>
              <p className="leading-relaxed mb-3">
                Start with 10-minute segments, progress to full 60-minute classes
                with peer and mentor feedback throughout the entire course.
              </p>
              <p className="leading-relaxed">
                Practice different class levels and styles to build confidence
                and versatility as a teacher.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-emerald-100">
                👥 Group Dynamics & Safe Space
              </h3>
              <p className="leading-relaxed">
                Learn to read group energy, modify for different levels, create
                consent-based touch guidelines and foster inclusive classrooms.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-emerald-100">
                📝 Assessment & Certification
              </h3>
              <p className="mb-3 leading-relaxed">
                Written exams, practical teaching assessments and attendance
                requirements ensure you're fully prepared for RYT-200 registration.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-amber-300/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-amber-100">
                🌟 Yoga Alliance Registered
              </h3>
              <p className="leading-relaxed">
                Internationally recognized 200-hour certificate qualifies you to
                register as RYT-200 and teach worldwide professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GOA LIFESTYLE */}
      <section
        id="lifestyle"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="bg-gradient-to-br from-slate-950/85 via-sky-950/80 to-cyan-950/85 border border-cyan-300/45 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
              🏖 Goa Beach Yoga Life
            </h2>
            <p className="text-cyan-50/90 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
              North Goa beaches provide the perfect backdrop for your yoga
              transformation – sunrise practice, beachside philosophy and
              sunset chanting under coconut palms.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-950/85 via-rose-950/80 to-amber-950/85 border border-rose-300/45 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 text-rose-100">
              🌅 Daily Rhythm
            </h2>
            <ul className="space-y-2 text-cyan-50/85 text-sm sm:text-base md:text-lg">
              <li>• 5:30 AM Wake up & beach sunrise</li>
              <li>• 6:30-8:30 AM Primary practice</li>
              <li>• Sattvic meals & study breaks</li>
              <li>• Evening circles & stargazing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION & FOOD */}
      <section
        id="stay"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-center bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
          Beachside Comforts
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-slate-950/85 border border-cyan-300/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-cyan-100">
              🛏 Beach Resort Stay
            </h3>
            <ul className="space-y-2 text-cyan-50/88 text-sm sm:text-base md:text-lg">
              <li>• Shared/private AC rooms 2min beach walk</li>
              <li>• Clean Western bathrooms & hot showers</li>
              <li>• Dedicated beachfront yoga shalas</li>
              <li>• WiFi zones & quiet study corners</li>
            </ul>
          </div>

          <div className="bg-slate-950/85 border border-amber-300/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-amber-100">
              🥗 Sattvic Goa Cuisine
            </h3>
            <ul className="space-y-2 text-cyan-50/88 text-sm sm:text-base md:text-lg">
              <li>• 3 daily vegetarian meals + snacks</li>
              <li>• Fresh Goan fruits & coconut water</li>
              <li>• Vegan/gluten-free options available</li>
              <li>• Hydrating herbal teas all day</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SAMPLE SCHEDULE */}
      <section
        id="schedule"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-center bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
          Your Daily 200 Hour Flow
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 text-sm sm:text-base md:text-lg text-cyan-50/90">
          <div className="bg-slate-950/85 border border-cyan-300/35 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-cyan-100 mb-4 text-lg sm:text-xl">
              🌅 5:30 AM - 1:00 PM
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>• 5:30 Silence & beach sunrise</li>
              <li>• 6:30-8:30 Hatha/Vinyasa practice</li>
              <li>• 9:00 Breakfast & herbal tea</li>
              <li>• 10:00-1:00 Philosophy/Anatomy</li>
            </ul>
          </div>

          <div className="bg-slate-950/85 border border-emerald-300/35 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-emerald-100 mb-4 text-lg sm:text-xl">
              🌙 2:00 PM - 8:30 PM
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>• 2:00 Lunch & rest</li>
              <li>• 3:30-5:30 Teaching methodology</li>
              <li>• 6:00 Practice teaching</li>
              <li>• 7:30 Dinner & evening circle</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm md:text-base text-cyan-50/75 max-w-2xl mx-auto">
          One integration/rest day weekly with optional Goa exploration while
          maintaining immersion in the transformative training environment.
        </p>
      </section>

      {/* DATES & BOOKING */}
      <section
        id="dates"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-center bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
          Upcoming 200 Hour Yoga Teacher Tranning in Goa 
        </h2>
        <div className="text-center text-cyan-50/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          <p className="mb-6">
            November 2026 - February 2027 (Peak Season)
            <br />
            Limited spaces - early booking recommended
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 text-slate-950 font-black text-base rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_55px_rgba(0,0,0,0.9)] hover:-translate-y-1.5 transform transition-all duration-300 w-full sm:w-auto"
            >
              Secure Your Spot
            </Link>

            <Link
              to="/"
              className="px-8 py-4 border-3 border-cyan-100/90 backdrop-blur-xl text-cyan-50 font-black text-base rounded-3xl hover:bg-cyan-50/10 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Go Back Home
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default YTT200GoaPage;
