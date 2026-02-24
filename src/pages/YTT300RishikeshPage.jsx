import { useEffect, useState } from "react";
import ytt300Banner from "../assets/Certified_Photo/Cert5.jpg"; // update path

const YTT300RishikeshPage = () => {
  const [statsAnimation, setStatsAnimation] = useState(false);

  useEffect(() => {
    setStatsAnimation(true);
  }, []);

  const stats = [
    { num: "300", label: "Advanced Hours", color: "amber" },
    { num: "4", label: "Weeks Immersion", color: "emerald" },
    { num: "2", label: "Practice Rooms", color: "sky" },
    { num: "500", label: "RYT Pathway", color: "rose" },
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
          style={{ backgroundImage: `url(${ytt300Banner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/96 via-[#122436]/82 to-[#ffb070]/42" />

        <div className="relative z-10 flex flex-col h-full justify-end px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-end">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="uppercase tracking-[0.35em] text-amber-200 text-[11px] sm:text-xs md:text-sm mb-4 bg-amber-500/25 px-4 py-2 rounded-full inline-block">
                Advanced Yoga Teacher Training • Rishikesh
              </div>

              <h1 className="font-black leading-tight break-words mb-4">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent drop-shadow-2xl">
                  300‑Hour Advanced
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-emerald-100 drop-shadow-2xl">
                  Yoga Teacher Training
                </span>
              </h1>

              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-emerald-50/95 mb-3 leading-relaxed">
                A 300‑hour residential immersion in Rishikesh for certified
                teachers who want to refine their practice, expand their
                teaching skills and move towards the RYT‑500 level.
              </p>
              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-emerald-50/90 mb-6 leading-relaxed">
                Deepen everything learned in the 200‑hour training with advanced
                asana, subtle anatomy, sequencing, philosophy and hands‑on
                teaching experience in the birthplace of yoga.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-7">
                <span className="px-3 py-2 rounded-full bg-emerald-500/15 border border-emerald-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  For RYT‑200 or 200‑Hour Graduates
                </span>
                <span className="px-3 py-2 rounded-full bg-sky-500/15 border border-sky-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  4‑Week Intensive • Rishikesh
                </span>
                <span className="px-3 py-2 rounded-full bg-amber-500/15 border border-amber-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  July &amp; Sept Batches
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
                <a
                  href="#curriculum"
                  className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-300 text-slate-950 font-black text-sm sm:text-base rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5 transform transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Explore 300‑Hour Curriculum
                </a>
                <a
                  href="#advanced-teaching"
                  className="px-8 py-4 sm:px-10 sm:py-5 border-2 sm:border-[3px] border-emerald-100/90 backdrop-blur-xl text-emerald-50 font-black text-sm sm:text-base rounded-3xl hover:bg-emerald-50/10 hover:border-emerald-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  See Advanced Teaching Track
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

      {/* CURRICULUM – ADVANCED PRACTICE */}
      <section
        id="curriculum"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          What You Will Master In 300 Hours
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-sm sm:text-base text-emerald-50/90">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧘‍♂️ Advanced Ashtanga Vinyasa
              </h3>
              <p>
                Deepen your Ashtanga practice with work on the full primary
                series, elements of the intermediate series, refined vinyasa
                counting, assists and energetic alignment.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧘‍♀️ Hatha, Vinyasa &amp; Yin
              </h3>
              <p>
                Explore multi‑style practice – classical Hatha, creative Vinyasa
                and grounding Yin – so you can design intelligent classes for
                different bodies, moods and levels.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🌬 Advanced Pranayama &amp; Kriyas
              </h3>
              <p>
                Build on your 200‑hour basics with longer pranayama sessions,
                ratio breathing, bandha integration and classical cleansing
                practices to stabilise subtle energy.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-emerald-50/90">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🩺 Yoga Therapy &amp; Functional Anatomy
              </h3>
              <p className="mb-2">
                Go deeper into therapeutic sequencing for back care, shoulders,
                hips, stress, anxiety and modern lifestyle patterns.
              </p>
              <p>
                Study joint mechanics, myofascial lines and safe progression
                into inversions, arm balances and long holds.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧘‍♂️ Meditation, Mantra &amp; Subtle Body
              </h3>
              <p className="mb-2">
                Daily meditation includes mantra japa, Antar Mouna, yoga nidra
                and mindfulness, with reflections on integrating these into
                classes.
              </p>
              <p>
                Study chakras, koshas and nadis from a practical, experience‑
                based perspective, not just theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED TEACHING SKILLS */}
      <section
        id="advanced-teaching"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Teaching, Mentoring &amp; Leadership
        </h2>

        <div className="grid gap-8 md:grid-cols-2 text-sm sm:text-base text-emerald-50/90">
          <div className="space-y-5">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🎓 Advanced Sequencing &amp; Theming
              </h3>
              <p>
                Learn to design 60–90‑minute classes with peak poses, waves of
                intensity and clear themes that weave together breath, movement
                and philosophy.
              </p>
            </div>
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧠 Alignment Labs &amp; Adjustments
              </h3>
              <p>
                Hands‑on labs for advanced assists, partner work and prop‑based
                variations. Learn when to adjust, when to verbally cue, and how
                to respect boundaries.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧑‍🏫 Teaching Practicum &amp; Feedback
              </h3>
              <p className="mb-2">
                Lead full classes for your peers, assist senior teachers, and
                receive detailed feedback on cues, pacing, presence and class
                design.
              </p>
              <p>
                You also assist as a mentor in beginner groups when available,
                learning to support mixed‑level rooms with confidence.
              </p>
            </div>
            <div className="bg-slate-950/85 border border-amber-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-100">
                🪷 Capstone Project &amp; Self‑Practice
              </h3>
              <p>
                Create a capstone class or mini‑workshop based on your passion –
                such as back‑care, stress relief, or morning rituals – and teach
                it under mentor guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & LIFESTYLE */}
      <section
        id="philosophy"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-gradient-to-br from-slate-950/85 via-emerald-950/80 to-sky-950/85 border border-emerald-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
              📖 Philosophy &amp; Yogic Inquiry
            </h2>
            <p className="text-emerald-50/90 text-sm sm:text-base mb-3 leading-relaxed">
              Go beyond introductions into deeper study of Yoga Sutras, Gita and
              non‑dual teachings, exploring how they inform modern teaching and
              lifestyle.
            </p>
            <p className="text-emerald-50/85 text-sm sm:text-base leading-relaxed">
              Group discussions, journaling prompts and satsangs help you apply
              concepts like abhyasa, vairagya, gunas and karma yoga in real
              life.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-950/85 via-sky-950/80 to-emerald-950/85 border border-sky-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 text-sky-100">
              🌿 Lifestyle, Ayurveda &amp; Self‑Care
            </h2>
            <p className="text-emerald-50/90 text-sm sm:text-base mb-3">
              Learn how advanced practitioners protect their energy with
              ayurvedic routines, rest, boundaries and sustainable teaching
              schedules.
            </p>
            <p className="text-emerald-50/85 text-sm sm:text-base">
              Explore how to move from doing yoga to living yoga through
              conscious habits, seva (service) and community teaching.
            </p>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION & MEALS */}
      <section
        id="accommodation"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Accommodation, Meals &amp; Study Space
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-slate-950/85 border border-emerald-300/40 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-emerald-100">
              A Campus Built For Study
            </h3>
            <ul className="space-y-2 text-emerald-50/88 text-sm sm:text-base">
              <li>• Shared or private rooms in a peaceful yogic setting</li>
              <li>• Dedicated practice halls for asana and philosophy</li>
              <li>• Clean rooms with attached bathrooms &amp; hot water</li>
              <li>• Study corners, rooftop spaces and quiet zones</li>
            </ul>
          </div>

          <div className="bg-slate-950/85 border border-amber-300/40 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-amber-100">
              Sattvik, Aurvedic Food For Intense Study
            </h3>
            <ul className="space-y-2 text-emerald-50/88 text-sm sm:text-base">
              <li>• Three fresh vegetarian meals every day</li>
              <li>• One light snack or herbal drink daily</li>
              <li>• Sattvik, simple and easy‑to‑digest menus</li>
              <li>• Options for vegan / gluten‑free on request</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEACHERS, LANGUAGE & CERTIFICATION */}
      <section
        id="teachers"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-gradient-to-br from-slate-950/85 via-emerald-950/80 to-sky-950/85 border border-emerald-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
              Senior Teachers &amp; Mentors
            </h2>
            <p className="text-emerald-50/90 text-sm sm:text-base mb-3 leading-relaxed">
              The 300‑hour track is led by senior teachers with many years of
              teaching, retreat and training experience in Rishikesh and
              abroad.
            </p>
            <p className="text-emerald-50/85 text-sm sm:text-base leading-relaxed">
              You receive personal mentoring, one‑on‑one check‑ins and clear
              feedback on practice, teaching and lifestyle.
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-emerald-50/90">
            <div className="bg-slate-950/85 border border-sky-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-sky-100">
                🌍 Language Of Instruction
              </h3>
              <p>
                Classes are primarily conducted in English, with support in
                French where needed so international students feel at home.
              </p>
            </div>

            <div className="bg-slate-950/85 border border-amber-300/40 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-100">
                🪷 Certification &amp; RYT‑500 Path
              </h3>
              <p className="mb-2">
                Upon successful completion, your 300‑hour certificate combines
                with a recognised 200‑hour YTT to qualify you for the 500‑hour
                teacher level (RYT‑500) with relevant registration bodies.
              </p>
              <p>
                Attendance, assignments, practicum and final teaching
                assessment are required so your certification reflects real,
                embodied skill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE DAY */}
      <section
        id="schedule"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Sample Day In The 300‑Hour Training
        </h2>

        <div className="grid gap-6 md:grid-cols-2 text-sm sm:text-base text-emerald-50/90">
          <div className="bg-slate-950/85 border border-emerald-300/35 rounded-3xl p-6 sm:p-7 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-emerald-100 mb-3 text-lg">
              Morning &amp; Midday
            </h3>
            <ul className="space-y-1">
              <li>• Silent sit &amp; herbal tea by the Ganga</li>
              <li>• Advanced Ashtanga / Hatha practice with assists</li>
              <li>• Extended pranayama &amp; kriya session</li>
              <li>• Breakfast</li>
              <li>• Philosophy, subtle anatomy or yoga therapy lecture</li>
              <li>• Lunch &amp; short rest / self‑study</li>
            </ul>
          </div>

          <div className="bg-slate-950/85 border border-sky-300/35 rounded-3xl p-6 sm:p-7 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-sky-100 mb-3 text-lg">
              Afternoon &amp; Evening
            </h3>
            <ul className="space-y-1">
              <li>• Alignment lab, sequencing or methodology workshop</li>
              <li>• Teaching practicum / mentoring or second asana class</li>
              <li>• Meditation, mantra or satsang</li>
              <li>• Dinner</li>
              <li>• Journaling, integration or quiet reflection</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-emerald-50/75">
          Days include one lighter rest/outing day each week so your body and
          mind can absorb the intensity of advanced practice and study.
        </p>
      </section>

      {/* SIMPLE DATES PLACEHOLDER */}
      <section
        id="dates"
        className="py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Upcoming 300‑Hour YTT Batches
        </h2>
        <p className="text-center text-emerald-50/85 text-sm sm:text-base">
          February and March advanced 300‑hour residential programs in
          Rishikesh. We will provide acurate dates.
        </p>
      </section>
    </div>
  );
};

export default YTT300RishikeshPage;
