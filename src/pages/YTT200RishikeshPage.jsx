import { useEffect, useState } from "react";
import yttBanner from "../assets/Certified_Photo/Cert3.jpg";

const YTT200RishikeshPage = () => {
  const [statsAnimation, setStatsAnimation] = useState(false);

  useEffect(() => {
    setStatsAnimation(true);
  }, []);

  // You can tweak these numbers later
  const stats = [
    { num: "200", label: "Training Hours", color: "amber" },
    { num: "4", label: "Weeks Immersion", color: "emerald" },
    { num: "6+", label: "Senior Teachers", color: "sky" },
    { num: "2", label: "Languages", color: "rose" },
  ];

  const statTextColor = {
    amber: "text-amber-300",
    emerald: "text-emerald-300",
    sky: "text-sky-300",
    rose: "text-rose-300",
  };

  const cardBorder = {
    amber: "border-amber-300/60",
    emerald: "border-emerald-300/60",
    sky: "border-sky-300/60",
    rose: "border-rose-300/60",
  };

  const cardBg = {
    amber: "from-amber-500/25",
    emerald: "from-emerald-500/25",
    sky: "from-sky-500/25",
    rose: "from-rose-500/25",
  };

  return (
    <div className="min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-emerald-950 text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 lg:opacity-40"
          style={{ backgroundImage: `url(${yttBanner})` }}
        />
        {/* Rishikesh sunrise overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/95 via-[#102436]/80 to-[#ffb070]/40" />

        <div className="relative z-10 flex flex-col h-full justify-end px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-end">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="uppercase tracking-[0.35em] text-amber-200 text-[11px] sm:text-xs md:text-sm mb-4 bg-amber-500/25 px-4 py-2 rounded-full inline-block">
                Yoga Teacher Training • Rishikesh
              </div>

              <h1 className="font-black leading-tight break-words mb-4">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent drop-shadow-2xl">
                  200‑Hour Yoga Teacher
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-emerald-100 drop-shadow-2xl">
                  Training In Rishikesh
                </span>
              </h1>

              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-emerald-50/95 mb-3 leading-relaxed">
                A complete 200‑hour foundation program rooted in traditional
                Indian wisdom, modern anatomy and therapeutic understanding –
                created for future yoga teachers and sincere practitioners.
              </p>
              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-emerald-50/90 mb-6 leading-relaxed">
                Study in Rishikesh, on the banks of the holy Ganga and at the
                foothills of the Himalayas, where yogan has been practiced
                and shared for generations.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-7">
                <span className="px-3 py-2 rounded-full bg-emerald-500/15 border border-emerald-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  200‑Hour Multi‑Style YTT
                </span>
                <span className="px-3 py-2 rounded-full bg-sky-500/15 border border-sky-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Rishikesh • Birthplace of Yoga
                </span>
                <span className="px-3 py-2 rounded-full bg-amber-500/15 border border-amber-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  February &amp; March Batches
                </span>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
                <a
                  href="#curriculum"
                  className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-300 text-slate-950 font-black text-sm sm:text-base rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5 transform transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Explore 200‑Hour Curriculum
                </a>
                <a
                  href="#dates"
                  className="px-8 py-4 sm:px-10 sm:py-5 border-2 sm:border-[3px] border-emerald-100/90 backdrop-blur-xl text-emerald-50 font-black text-sm sm:text-base rounded-3xl hover:bg-emerald-50/10 hover:border-emerald-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  February &amp; March Intakes
                </a>
              </div>
            </div>

            {/* RIGHT – STATS */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-white/12 via-white/5 to-emerald-100/10 backdrop-blur-xl border border-white/35 text-center group hover:from-amber-100/20 hover:via-emerald-100/10 hover:to-sky-100/20 hover:scale-[1.04] transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-[90px] sm:min-h-[100px] md:min-h-[110px] px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6 ${
                      statsAnimation
                        ? "animate-in slide-in-from-bottom-4 duration-700"
                        : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-400/25 via-transparent to-emerald-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`relative font-black mb-1 sm:mb-2 drop-shadow-lg ${statTextColor[stat.color]} text-xl sm:text-2xl md:text-3xl lg:text-3xl`}
                    >
                      {stat.num}
                    </div>
                    <div className="relative text-[10px] sm:text-xs md:text-[11px] uppercase tracking-[0.22em] text-emerald-50/85 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section
        id="curriculum"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          What You Will Learn In 200 Hours
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-sm sm:text-base text-emerald-50/90">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧘‍♂️ Ashtanga Vinyasa Yoga
              </h3>
              <p>
                Learn the traditional Ashtanga Vinyasa system with
                breath‑synchronised movement, discipline, drishti and bandhas.
                Build strength, flexibility and stamina through dynamic flow.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧘‍♀️ Hatha Yoga
              </h3>
              <p>
                Explore classical postures, proper alignment and holding asanas
                with awareness. Learn to prepare the body safely and cultivate
                stillness and stability through traditional Hatha techniques.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🌬 Pranayama
              </h3>
              <p>
                Practice Nadi Shodhana, Kapalbhati, Bhastrika, Ujjayi, Bhramari
                and more. Cleanse the nervous system, expand lung capacity and
                prepare the mind for deep meditation.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-emerald-50/90">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🩺 Yoga Therapy
              </h3>
              <p>
                Learn how to adapt asanas, sequences and breathwork for common
                issues like back pain, anxiety, digestion and joint discomfort
                using simple therapeutic principles.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧘‍♂️ Meditation &amp; 📿 Mantra
              </h3>
              <p className="mb-2">
                Practice breath awareness, mantra meditation, mindfulness and
                traditional techniques to cultivate inner silence and
                self‑awareness.
              </p>
              <p>
                Experience the power of Sanskrit mantra chanting to calm the
                mind, open the heart and align with higher consciousness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & TEACHING SKILLS */}
      <section
        id="knowledge"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Yogic Knowledge &amp; Teaching Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-sm sm:text-base text-emerald-50/90">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                📖 Yoga Philosophy &amp; History
              </h3>
              <p>
                Study Patanjali&apos;s Yoga Sutras, the Bhagavad Gita and
                classical yogic teachings – ethics, eight limbs, karma, bhakti
                and jnana yoga – plus how yoga evolved into modern practice.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧠 Alignment &amp; Adjustment
              </h3>
              <p>
                Learn safe hands‑on assists, use of props and modifications,
                alignment principles and injury‑prevention so you can support
                students of different body types and levels.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-emerald-50/90">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🎓 Teaching Methodology
              </h3>
              <p>
                Develop class sequencing, voice modulation, cueing, demo skills,
                observation and space‑holding. Practice teaching peers to gain
                confidence before you step into real classes.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧘 Self‑Practice (Sadhana)
              </h3>
              <p>
                Daily self‑practice sessions build discipline, inner listening
                and personal transformation so your teaching comes from direct
                experience, not just theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AYURVEDA & LIFESTYLE + EXCURSIONS */}
      <section
        id="lifestyle"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-gradient-to-br from-slate-950/85 via-emerald-950/80 to-sky-950/85 border border-emerald-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
              🌿 Ayurveda &amp; Yogic Lifestyle
            </h2>
            <p className="text-emerald-50/90 text-sm sm:text-base mb-3 leading-relaxed">
              Learn the basics of Ayurveda – doshas, daily routines, seasonal
              lifestyle and food awareness – so you can care for body and mind
              in a yogic way.
            </p>
            <p className="text-emerald-50/85 text-sm sm:text-base leading-relaxed">
              Understand how sattvik habits, simple rituals and mindful choices
              support long‑term practice, teaching and overall wellbeing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-950/85 via-sky-950/80 to-emerald-950/85 border border-sky-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 text-sky-100">
              Cultural &amp; Spiritual Excursions
            </h2>
            <p className="text-emerald-50/90 text-sm sm:text-base mb-3">
              Step out of the classroom and into living yoga culture with
              carefully guided experiences around Rishikesh.
            </p>
            <ul className="space-y-2 text-emerald-50/85 text-sm sm:text-base">
              <li>• Ganga Aarti ceremony on the banks of the Ganga</li>
              <li>• Sunrise visit to Kunjapuri Temple in the Himalayas</li>
              <li>• Local ashram visits to observe traditional yogic life</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION & MEALS */}
      <section
        id="accommodation"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Accommodation &amp; Yogic Meals
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-emerald-100">
              Stay Close To The Shala
            </h3>
            <ul className="space-y-2 text-emerald-50/88 text-sm sm:text-base">
              <li>• Comfortable shared or private rooms</li>
              <li>• Peaceful, yogic environment for deep study</li>
              <li>• Clean surroundings with attached bathrooms</li>
            </ul>
          </div>

          <div className="bg-slate-950/85 border border-amber-300/40 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-amber-100">
              Sattvik Meals
            </h3>
            <ul className="space-y-2 text-emerald-50/88 text-sm sm:text-base">
              <li>• Three freshly prepared vegetarian meals daily</li>
              <li>• One daily healthy snack or herbal drink</li>
              <li>• Meals are sattvik, light and easy to digest</li>
              <li>• Designed to support practice, energy and digestion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEACHERS, LANGUAGE, CERTIFICATION */}
      <section
        id="teachers"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-gradient-to-br from-slate-950/85 via-emerald-950/80 to-sky-950/85 border border-emerald-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
              Our Teachers
            </h2>
            <p className="text-emerald-50/90 text-sm sm:text-base mb-3 leading-relaxed">
              Classes are led by experienced teachers from Rishikesh, trained
              in traditional lineages and modern teaching approaches, offering
              a balance of discipline, warmth and personal attention.
            </p>
            <p className="text-emerald-50/85 text-sm sm:text-base leading-relaxed">
              Small groups, clear instructions and open Q&amp;A spaces ensure
              you are guided at every step – on and beyond the mat.
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-emerald-50/90">
            <div className="bg-slate-950/85 border border-sky-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-sky-100">
                🌍 Language Of Instruction
              </h3>
              <p>
                Classes are conducted in English and French, making the 200‑hour
                program accessible to international students from many
                backgrounds.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-amber-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-100">
                🪷 Certification &amp; Transformation
              </h3>
              <p className="mb-2">
                After completing all hours and assessments, you receive a
                200‑Hour Yoga Teacher Training certificate that allows you to
                start teaching worldwide, depending on local guidelines.
              </p>
              <p>
                Beyond certification, this course is a journey of self‑study,
                discipline and inner growth that reshapes how you move, think
                and live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE DAILY FLOW FOR 200H (NOT THE KERALA 10‑DAY) */}
      <section
        id="schedule"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Sample Day In The 200‑Hour YTT
        </h2>

        <div className="grid gap-6 md:grid-cols-2 text-sm sm:text-base text-emerald-50/90">
          <div className="bg-slate-950/85 border border-emerald-300/35 rounded-3xl p-6 sm:p-7 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-emerald-100 mb-3 text-lg">
              Morning &amp; Midday
            </h3>
            <ul className="space-y-1">
              <li>• Herbal tea &amp; silent morning reflection</li>
              <li>• Hatha or Ashtanga Vinyasa practice</li>
              <li>• Pranayama &amp; cleansing techniques</li>
              <li>• Breakfast</li>
              <li>• Yoga Philosophy / Anatomy / Yoga Therapy</li>
              <li>• Lunch &amp; short rest</li>
            </ul>
          </div>

          <div className="bg-slate-950/85 border border-sky-300/35 rounded-3xl p-6 sm:p-7 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-sky-100 mb-3 text-lg">
              Afternoon &amp; Evening
            </h3>
            <ul className="space-y-1">
              <li>• Alignment &amp; adjustment / teaching methodology</li>
              <li>• Asana lab or second asana session</li>
              <li>• Meditation, mantra chanting or satsang</li>
              <li>• Dinner</li>
              <li>• Self‑study, journaling or quiet time</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-emerald-50/75">
          The exact schedule can vary by season and teacher, but each day
          balances physical practice, theory, self‑study and rest so that
          learning remains integrated and sustainable.
        </p>
      </section>

      {/* PLACEHOLDER DATES SECTION (YOU CAN EDIT) */}
      <section
        id="dates"
        className="py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Upcoming 200‑Hour YTT Batches
        </h2>
        <p className="text-center text-emerald-50/85 text-sm sm:text-base">
          February and March residential batches in Rishikesh. You can plug in
          your exact dates and fees here or connect this section to a booking
          form.
        </p>
      </section>
    </div>
  );
};

export default YTT200RishikeshPage;
