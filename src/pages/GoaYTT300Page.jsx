import { useEffect, useState } from "react";
import goaYTTBanner from "../assets/Certified_Photo/Cert4.jpg"; // update path

const GoaYTT300Page = () => {
  const [statsAnimation, setStatsAnimation] = useState(false);

  useEffect(() => {
    setStatsAnimation(true);
  }, []);

  const stats = [
    { num: "300", label: "Advanced Hours", color: "amber" },
    { num: "4", label: "Weeks By The Sea", color: "cyan" },
    { num: "10", label: "Sunrise Flows", color: "emerald" },
    { num: "RYT‑500", label: "Pathway", color: "rose" },
  ];

  const statTextColor = {
    amber: "text-amber-300",
    cyan: "text-cyan-300",
    emerald: "text-emerald-300",
    rose: "text-rose-300",
  };

  const cardBorder = {
    amber: "border-amber-300/60",
    cyan: "border-cyan-300/60",
    emerald: "border-emerald-300/60",
    rose: "border-rose-300/60",
  };

  const cardBg = {
    amber: "from-amber-500/25",
    cyan: "from-cyan-500/25",
    emerald: "from-emerald-500/25",
    rose: "from-rose-500/25",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-950 text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 lg:opacity-45"
          style={{ backgroundImage: `url(${goaYTTBanner})` }}
        />
        {/* Goa neon‑sunset overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020914]/96 via-[#041f2b]/85 to-[#ff9f7b]/45" />

        <div className="relative z-10 flex flex-col h-full justify-end px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-end">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="uppercase tracking-[0.35em] text-amber-200 text-[11px] sm:text-xs md:text-sm mb-4 bg-amber-500/30 px-4 py-2 rounded-full inline-block">
                300‑Hour YTT • Goa Beach
              </div>

              <h1 className="font-black leading-tight break-words mb-4">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Advanced Yoga Teacher
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-cyan-100 drop-shadow-2xl">
                  Training In Goa
                </span>
              </h1>

              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-cyan-50/95 mb-3 leading-relaxed">
                A 300‑hour, ocean‑side immersion for teachers who want more than
                a certificate – a place to refine their voice, deepen practice
                and step into leadership on and off the mat.
              </p>
              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-cyan-50/90 mb-6 leading-relaxed">
                Wake up to waves, practice under palm trees and study advanced
                Vinyasa, Hatha, Yin, anatomy, sequencing and the art of holding
                powerful spaces for your students.
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-7">
                <span className="px-3 py-2 rounded-full bg-cyan-500/18 border border-cyan-300/70 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Beachfront Campus &amp; Eco Cottages
                </span>
                <span className="px-3 py-2 rounded-full bg-emerald-500/16 border border-emerald-300/70 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Multi‑Style • Vinyasa • Hatha • Yin
                </span>
                <span className="px-3 py-2 rounded-full bg-rose-500/18 border border-rose-300/70 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Designed For RYT‑200 Teachers
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
                <a
                  href="#curriculum"
                  className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-300 text-slate-950 font-black text-sm sm:text-base rounded-3xl shadow-[0_22px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_26px_55px_rgba(0,0,0,0.9)] hover:-translate-y-1.5 transform transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Explore Advanced Curriculum
                </a>
                <a
                  href="#schedule"
                  className="px-8 py-4 sm:px-10 sm:py-5 border-2 sm:border-[3px] border-cyan-100/90 backdrop-blur-xl text-cyan-50 font-black text-sm sm:text-base rounded-3xl hover:bg-cyan-50/10 hover:border-cyan-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  See A Typical Goa Day
                </a>
              </div>
            </div>

            {/* RIGHT – STATS */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-white/14 via-white/6 to-cyan-100/10 backdrop-blur-xl border border-white/40 text-center group hover:from-amber-100/22 hover:via-rose-100/12 hover:to-cyan-100/22 hover:scale-[1.06] transition-all duration-300 shadow-xl hover:shadow-[0_22px_45px_rgba(0,0,0,0.7)] relative overflow-hidden min-h-[90px] sm:min-h-[100px] md:min-h-[110px] px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6 ${
                      statsAnimation
                        ? "animate-in slide-in-from-bottom-4 duration-700"
                        : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-amber-400/30 via-transparent to-cyan-300/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`relative font-black mb-1 sm:mb-2 drop-shadow-lg ${statTextColor[stat.color]} text-xl sm:text-2xl md:text-3xl lg:text-3xl`}
                    >
                      {stat.num}
                    </div>
                    <div className="relative text-[10px] sm:text-xs md:text-[11px] uppercase tracking-[0.22em] text-cyan-50/85 font-medium">
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
          Ocean‑Side Advanced Curriculum
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-sm sm:text-base text-cyan-50/92">
            <div className="bg-slate-950/88 border border-cyan-300/45 rounded-3xl p-5 sm:p-6 shadow-[0_16px_36px_rgba(0,0,0,0.75)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-cyan-100">
                🌊 Vinyasa, Hatha &amp; Yin Intensives
              </h3>
              <p>
                Morning classes dive into strong Vinyasa and alignment‑based
                Hatha, while evenings slow down into Yin and restorative so you
                can explore both fire and stillness in your teaching.
              </p>
            </div>

            <div className="bg-slate-950/88 border border-emerald-300/45 rounded-3xl p-5 sm:p-6 shadow-[0_16px_36px_rgba(0,0,0,0.75)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🌬 Advanced Pranayama &amp; Kriyas
              </h3>
              <p>
                Build disciplined breathwork with ratio breathing, bandhas,
                prolonged retentions and traditional cleansing practices that
                work beautifully in a coastal climate.
              </p>
            </div>

            <div className="bg-slate-950/88 border border-emerald-300/45 rounded-3xl p-5 sm:p-6 shadow-[0_16px_36px_rgba(0,0,0,0.75)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🩺 Yoga Therapy &amp; Functional Anatomy
              </h3>
              <p>
                Learn to work safely with surfers, digital nomads and retreat
                guests: shoulders, lower back, hips, wrists and nervous‑system
                regulation through targeted sequences.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-cyan-50/92">
            <div className="bg-slate-950/88 border border-cyan-300/45 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-cyan-100">
                🧘‍♂️ Meditation, Mantra &amp; Ocean Rituals
              </h3>
              <p className="mb-2">
                Practices include sunrise beach meditation, mantra japa, yoga
                nidra and moon‑circle style rituals to harmonise with tides and
                lunar cycles.
              </p>
              <p>
                Learn how to offer grounding practices to groups who may be
                processing intense emotional release during retreats.
              </p>
            </div>

            <div className="bg-slate-950/88 border border-cyan-300/45 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-cyan-100">
                💫 Subtle Anatomy &amp; Chakras
              </h3>
              <p>
                Explore chakras, koshas and nadis with practical tools –
                visualisations, breath patterns and sequencing that bring subtle
                body theory into real classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED TEACHING & BUSINESS */}
      <section
        id="teaching"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
          Teach, Lead &amp; Create Your Own Retreats
        </h2>

        <div className="grid gap-8 md:grid-cols-2 text-sm sm:text-base text-cyan-50/92">
          <div className="space-y-5">
            <div className="bg-slate-950/90 border border-emerald-300/45 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🎓 Intelligent Sequencing &amp; Theming
              </h3>
              <p>
                Design strong yet safe classes with wave‑based sequencing,
                peak‑pose architecture and themes that weave philosophy, nature
                and personal story into the practice.
              </p>
            </div>

            <div className="bg-slate-950/90 border border-emerald-300/45 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-emerald-100">
                🧠 Alignment Labs &amp; Hands‑On Assists
              </h3>
              <p>
                Workshops on inversions, arm balances, backbends and hip
                openers, with detailed alignment, props and trauma‑sensitive
                touch guidelines.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-slate-950/90 border border-cyan-300/45 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-cyan-100">
                🧑‍🏫 Practicum, Mentoring &amp; Co‑Teaching
              </h3>
              <p className="mb-2">
                Teach complete classes to your peers, assist senior teachers and
                receive structured feedback on voice, timing, presence and
                sequencing.
              </p>
              <p>
                Learn how to design retreat schedules, theme weeks and workshops
                specifically for a beach destination like Goa.
              </p>
            </div>

            <div className="bg-slate-950/90 border border-amber-300/45 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-100">
                💼 Conscious Yoga Business
              </h3>
              <p>
                Extra sessions on branding as a teacher, pricing, creating
                retreats, collaborating with studios and setting healthy,
                ethical boundaries with students.
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
          <div className="bg-gradient-to-br from-slate-950/88 via-sky-950/82 to-cyan-950/88 border border-cyan-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
              📖 Philosophy, Myth &amp; Storytelling
            </h2>
            <p className="text-cyan-50/92 text-sm sm:text-base mb-3 leading-relaxed">
              Deepen your understanding of Yoga Sutras, Gita and mythological
              stories, then learn how to seed these into classes without feeling
              preachy or heavy.
            </p>
            <p className="text-cyan-50/86 text-sm sm:text-base leading-relaxed">
              Use the ocean, tides, sun and moon as living metaphors for
              teaching impermanence, balance and inner strength.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-950/88 via-emerald-950/82 to-amber-950/86 border border-emerald-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 text-emerald-100">
              🌿 Yogic Lifestyle By The Sea
            </h2>
            <p className="text-cyan-50/92 text-sm sm:text-base mb-3">
              Balance study intensity with coastal living – early nights, ocean
              swims, sattvik meals and tech‑light evenings to keep your nervous
              system steady.
            </p>
            <p className="text-cyan-50/86 text-sm sm:text-base">
              Learn sustainable self‑care routines so you can keep teaching long
              after the training ends without burning out.
            </p>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION & MEALS */}
      <section
        id="accommodation"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
          Where You Will Live &amp; Eat
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-slate-950/90 border border-cyan-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.8)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-cyan-100">
              Sea‑View Eco Cottages
            </h3>
            <ul className="space-y-2 text-cyan-50/90 text-sm sm:text-base">
              <li>• Shared or private wooden cottages near the beach</li>
              <li>• Ensuite bathrooms, hot water &amp; eco‑friendly amenities</li>
              <li>• Hammocks, chill‑spaces and rooftop sunsets</li>
              <li>• Fast Wi‑Fi zones plus digital‑detox corners</li>
            </ul>
          </div>

          <div className="bg-slate-950/90 border border-amber-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.8)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-amber-100">
              Sattvik Coastal Meals
            </h3>
            <ul className="space-y-2 text-cyan-50/90 text-sm sm:text-base">
              <li>• Three vegetarian meals daily plus herbal tea breaks</li>
              <li>• Light tropical menus: smoothie bowls, curries, salads</li>
              <li>• Vegan / gluten‑free options on request</li>
              <li>• Designed to support intense practice in warm weather</li>
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
          <div className="bg-gradient-to-br from-slate-950/88 via-sky-950/82 to-cyan-950/88 border border-cyan-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
              Senior Coastal Faculty
            </h2>
            <p className="text-cyan-50/92 text-sm sm:text-base mb-3 leading-relaxed">
              Learn from teachers who live and teach in Goa season after season,
              guiding retreats, drop‑in classes and global students around the
              world.
            </p>
            <p className="text-cyan-50/86 text-sm sm:text-base leading-relaxed">
              You receive personal mentoring, demo opportunities and honest
              feedback to sharpen your unique teaching voice.
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-cyan-50/92">
            <div className="bg-slate-950/90 border border-cyan-300/45 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-cyan-100">
                🌍 Language Of Instruction
              </h3>
              <p>
                The training is conducted in English with a friendly,
                international community of teachers and students from many
                countries.
              </p>
            </div>

            <div className="bg-slate-950/90 border border-amber-300/45 rounded-3xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-100">
                🪷 Certification &amp; RYT‑500 Track
              </h3>
              <p className="mb-2">
                When combined with a recognised 200‑hour certification, this
                300‑hour program can qualify you for 500‑hour teacher status in
                line with Yoga‑Alliance style standards.
              </p>
              <p>
                Full attendance, teaching practicum and assignments are required
                so that your certificate reflects real competence, not just
                course completion.
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
          A Day In The 300‑Hour Goa Flow
        </h2>

        <div className="grid gap-6 md:grid-cols-2 text-sm sm:text-base text-cyan-50/92">
          <div className="bg-slate-950/90 border border-cyan-300/45 rounded-3xl p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.8)]">
            <h3 className="font-bold text-cyan-100 mb-3 text-lg">
              Sunrise To Afternoon
            </h3>
            <ul className="space-y-1">
              <li>• Sunrise beach meditation &amp; breathwork</li>
              <li>• Strong Vinyasa / Hatha alignment practice</li>
              <li>• Tropical brunch</li>
              <li>• Philosophy, anatomy or yoga therapy lecture</li>
              <li>• Short break, sea swim or hammock rest</li>
            </ul>
          </div>

          <div className="bg-slate-950/90 border border-amber-300/45 rounded-3xl p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.8)]">
            <h3 className="font-bold text-amber-100 mb-3 text-lg">
              Late Afternoon To Stars
            </h3>
            <ul className="space-y-1">
              <li>• Alignment lab, sequencing or methodology workshop</li>
              <li>• Teaching practicum or Yin / restorative session</li>
              <li>• Sunset contemplation on the beach</li>
              <li>• Dinner &amp; occasional satsang or kirtan</li>
              <li>• Journaling, integration or stargazing silence</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-cyan-50/78 text-center">
          One lighter day each week includes a coastal excursion or free
          afternoon to let your body and mind absorb the training fully.
        </p>
      </section>

      {/* SIMPLE DATES PLACEHOLDER */}
      <section
        id="dates"
        className="py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 text-center bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
          Upcoming 300‑Hour Goa Batches
        </h2>
        <p className="text-center text-cyan-50/88 text-sm sm:text-base">
          Upcoming Goa 300-hour seasons will be listed here soon, including exact dates, pricing, and booking links.
        </p>
      </section>
    </div>
  );
};

export default GoaYTT300Page;
