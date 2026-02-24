import { useEffect, useState } from "react";
import rishikeshBanner from "../assets/Certified_Photo/Cert2.jpg"; 
import { Link } from "react-router-dom";

const RishikeshRetreatPage = () => {
  const [statsAnimation, setStatsAnimation] = useState(false);

  useEffect(() => {
    setStatsAnimation(true);
  }, []);

  const stats = [
    { num: "7", label: "Days", color: "indigo" },
    { num: "24/7", label: "Ganga View", color: "teal" },
    { num: "2", label: "Temple Visits", color: "amber" },
    { num: "3", label: "Aarti Nights", color: "rose" },
  ];

  const statTextColor = {
    orange: "text-orange-300",
    teal: "text-teal-300",
    emerald: "text-emerald-300",
    rose: "text-rose-300",
    amber: "text-amber-300",
    indigo: "text-indigo-300",
  };

  const cardBorder = {
    orange: "border-orange-300/60",
    teal: "border-teal-300/60",
    emerald: "border-emerald-300/60",
    rose: "border-rose-300/60",
    amber: "border-amber-300/60",
    indigo: "border-indigo-300/60",
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
    <div className="min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-emerald-950 text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 lg:opacity-40"
          style={{ backgroundImage: `url(${rishikeshBanner})` }}
        />
        {/* warm sunrise overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/95 via-[#102535]/70 to-[#ffb26b]/30" />

        <div className="relative z-10 flex flex-col h-full justify-end px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-end">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="uppercase tracking-[0.35em] text-amber-200 text-[11px] sm:text-xs md:text-sm mb-4 bg-amber-500/20 px-4 py-2 rounded-full inline-block">
                Yoga Retreat • Rishikesh
              </div>

              <h1 className="font-black leading-tight break-words mb-4">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Ganga Side Yoga
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-emerald-100 drop-shadow-2xl">
                  &amp; Himalayan Retreat
                </span>
              </h1>

              {/* FREEBIES */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                <span className="px-3 py-2 rounded-full bg-emerald-500/15 border border-emerald-300/50 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Free Sound Healing or Reiki Session
                </span>
                <span className="px-3 py-2 rounded-full bg-sky-500/15 border border-sky-300/50 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Free Accommodation &amp; Sattvik Meals
                </span>
                <span className="px-3 py-2 rounded-full bg-amber-500/15 border border-amber-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Free Pickup from Dehradun Airport
                </span>
              </div>

              {/* INTRO */}
              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-emerald-50/95 mb-4 leading-relaxed">
                This retreat is designed to help you drop city stress, tune into
                the sacred Ganga and rediscover your inner stillness in the
                foothills of the Himalayas.
              </p>
              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-emerald-50/90 mb-8 leading-relaxed">
                In seven immersive days you practice asana, pranayama,
                meditation and mantra, eat fresh sattvik food and allow your
                mind and body to become lighter, stronger and more present.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
                <a
                  href="#dates"
                  className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-amber-400 via-emerald-300 to-sky-300 text-slate-950 font-black text-sm sm:text-base rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5 transform transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Check Next Retreat Dates
                </a>
                <a
                  href="#accommodation"
                  className="px-8 py-4 sm:px-10 sm:py-5 border-2 sm:border-[3px] border-emerald-200/80 backdrop-blur-xl text-emerald-50 font-black text-sm sm:text-base rounded-3xl hover:bg-emerald-50/10 hover:border-emerald-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explore Stay &amp; Food
                </a>
              </div>
            </div>

            {/* RIGHT – STATS */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-sky-100/10 backdrop-blur-xl border border-white/40 text-center group hover:from-amber-100/15 hover:via-emerald-100/10 hover:to-sky-100/15 hover:scale-[1.04] transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-[90px] sm:min-h-[100px] md:min-h-[110px] px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6 ${
                      statsAnimation
                        ? "animate-in slide-in-from-bottom-4 duration-700"
                        : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-transparent to-emerald-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`relative font-black mb-1 sm:mb-2 drop-shadow-lg ${statTextColor[stat.color]} text-xl sm:text-2xl md:text-3xl lg:text-3xl`}
                    >
                      {stat.num}
                    </div>
                    <div className="relative text-[10px] sm:text-xs md:text-[11px] uppercase tracking-[0.22em] text-emerald-50/80 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION & FOOD */}
      <section
        id="accommodation"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-emerald-950/80 border border-emerald-300/40 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
              Accommodation
            </h2>
            <p className="text-emerald-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Stay in calm, Ganga‑side rooms designed like your own Himalayan
              home – cozy, clean and filled with soft sunrise light.
            </p>
            <ul className="space-y-2 text-emerald-50/85 text-sm sm:text-base">
              <li>• Well‑furnished rooms with attached bathrooms</li>
              <li>• Running hot &amp; cold water and drinking water all day</li>
              <li>• Unlimited high‑speed Wi‑Fi and CCTV‑secured campus</li>
              <li>• Shared and private room options for every comfort level</li>
              <li>• Dedicated buildings for different training groups</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/80 via-slate-900/80 to-sky-900/80 border border-amber-200/50 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-black mb-3 text-amber-100">
              Kitchen &amp; Ayurvedik herbs
            </h3>
            <p className="text-emerald-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-3">
              Our kitchen follows the wisdom of sattvik cooking – light,
              nourishing, full of prana and made with seasonal Himalayan
              produce.
            </p>
            <p className="text-emerald-50/85 text-sm sm:text-base leading-relaxed mb-3">
              Our Chef crafts colourful thalis, soulful lentil stews, fresh
              salads, herbal teas and comfort bowls that keep your practice
              energized from sunrise to stargazing.
            </p>
            <p className="text-emerald-50/80 text-sm sm:text-base leading-relaxed mb-3">
              Vegetarian, vegan, gluten‑free or spice‑light – meals are tailored
              to what your body needs while keeping every plate vibrant and
              flavourful.
            </p>
            <p className="text-emerald-50/75 text-sm sm:text-base leading-relaxed">
              Think of every meal as a mini ceremony where food becomes a bridge
              between body, breath and awareness.
            </p>
          </div>
        </div>
      </section>

      {/* INCLUSIONS / EXCLUSIONS */}
      <section
        id="includes"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          What Your Retreat Includes
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-slate-950/85 via-slate-900/85 to-emerald-950/85 border border-emerald-300/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-emerald-100">
              Included
            </h3>
            <ul className="space-y-2 text-emerald-50/90 text-sm sm:text-base">
              <li>• Accommodation in shared or private rooms</li>
              <li>• Yoga material for classes and practice</li>
              <li>• Daily vegetarian &amp; vegan sattvik meals &amp; Ayurvedik</li>
              <li>• Kirtan nights &amp; community circles</li>
              <li>• One Himalayan sightseeing trip</li>
              <li>• Weekend excursions around Rishikesh</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-950/85 via-rose-950/80 to-amber-950/80 border border-rose-300/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-rose-100">
              Not Included
            </h3>
            <ul className="space-y-2 text-rose-50/90 text-sm sm:text-base">
              <li>• Ayurvedic Panchakarma treatments</li>
              <li>• Air‑conditioner usage (available at extra charge)</li>
              <li>• Visa, flights and long‑distance taxi transfers</li>
            </ul>
            <p className="mt-4 text-rose-50/75 text-xs sm:text-sm">
              Extra therapies and upgrades are optional so you can customise the
              retreat to your own flow.
            </p>
          </div>
        </div>
      </section>

      {/* EXCURSIONS */}
      <section
        id="excursions"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Rishikesh Experiences Included
        </h2>
        <p className="text-center text-emerald-50/90 text-sm sm:text-base max-w-2xl mx-auto mb-8">
          Beyond the yoga shala, step into sacred caves, riverside ghats and
          Himalayan viewpoints so your retreat feels like a journey, not just a
          course.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base text-center">
          {[
            "Ganga Aarti",
            "Rafting",
            "Vashishtha Cave",
            "Waterfall Trek",
            "Kunjapuri Temple",
            "Ganga Beach Circle",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-gradient-to-br from-slate-950/80 via-emerald-950/80 to-sky-950/80 border border-emerald-300/40 px-3 py-4 sm:px-4 sm:py-5 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE (HIGHLIGHT VIEW) */}
      <section
        id="schedule"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          7‑Day Immersion Flow
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-slate-950/80 border border-emerald-300/35 rounded-3xl p-6 sm:p-7 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-emerald-100 mb-3 text-lg">
              Days 1 – 3 • Arrive &amp; Deepen
            </h3>
            <ul className="space-y-1 text-emerald-50/85 text-sm sm:text-base">
              <li>• Morning Yoga &amp; Pranayama</li>
              <li>• Yoga detox &amp; Ayurvedic massage sessions</li>
              <li>• Ganga Aarti on the riverside ghats</li>
              <li>• Visits to Mauni Baba &amp; Vashishtha caves</li>
              <li>• Sunrise yoga at Kunjapuri Temple &amp; Tehri Lake visit</li>
            </ul>
          </div>

          <div className="bg-slate-950/80 border border-sky-300/35 rounded-3xl p-6 sm:p-7 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-sky-100 mb-3 text-lg">
              Days 4 – 7 • Expand &amp; Integrate
            </h3>
            <ul className="space-y-1 text-emerald-50/85 text-sm sm:text-base">
              <li>• Daily Yoga, Yoga Nidra &amp; meditation</li>
              <li>• Beatles Ashram visit &amp; Ganga‑side yoga class</li>
              <li>• White‑water rafting adventure</li>
              <li>• Waterfall trekking &amp; sunset reflections</li>
              <li>• Closing circle, sharing and integration</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-emerald-50/70">
          During major Indian festivals like Diwali, Holi or Raksha Bandhan the
          schedule may gently shift, and graduation can move by a day so
          celebrations are honoured without rushing your practice.
        </p>
      </section>

      {/* UPCOMING DATES */}
      <section
        id="dates"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
          Upcoming Retreat Dates
        </h2>

        <div className="overflow-x-auto rounded-3xl bg-slate-950/85 border border-emerald-300/40 backdrop-blur-md shadow-[0_20px_45px_rgba(0,0,0,0.8)]">
          <table className="min-w-full text-xs sm:text-sm md:text-base">
            <thead className="bg-gradient-to-r from-emerald-700 via-sky-700 to-amber-600 text-emerald-50">
              <tr>
                <th className="px-3 sm:px-4 py-3 text-left">Course Date</th>
                <th className="px-3 sm:px-4 py-3 text-left">Availability</th>
                <th className="px-3 sm:px-4 py-3 text-left">2‑Sharing</th>
                <th className="px-3 sm:px-4 py-3 text-left">Private Room</th>
                <th className="px-3 sm:px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "1st Apr 2026", status: "Open" },
                { date: "1st May 2026", status: "Open" },
                { date: "1st Jun 2026", status: "Open" },
                { date: "1st Jul 2026", status: "Open" },
                { date: "1st Aug 2026", status: "Open" },
                { date: "1st Sep 2026", status: "Waiting List" },
                { date: "1st Oct 2026", status: "Open" },
                { date: "1st Nov 2026", status: "Open" },
                { date: "1st Dec 2026", status: "Waiting List" },
              ].map((row) => (
                <tr
                  key={row.date}
                  className="border-t border-emerald-500/20 hover:bg-slate-900/80"
                >
                  <td className="px-3 sm:px-4 py-3">{row.date}</td>
                  <td className="px-3 sm:px-4 py-3">{row.status}</td>
                  <td className="px-3 sm:px-4 py-3">
                    <span className="line-through opacity-60 mr-1">$698</span>
                    $349
                  </td>
                  <td className="px-3 sm:px-4 py-3">
                    <span className="line-through opacity-60 mr-1">$898</span>
                    $449
                  </td>
                  <td className="px-3 sm:px-4 py-3">
                    <Link
                      to="/contact"
                      
                      className="inline-flex items-center justify-center px-3 py-2 rounded-full bg-gradient-to-r from-amber-400 via-emerald-300 to-sky-300 text-slate-950 font-semibold text-xs sm:text-sm hover:brightness-110 transition-colors"
                    >
                      {row.status === "Fully Booked"
                        ? "Join Waitlist"
                        : "Reserve Seat"}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs sm:text-sm text-emerald-50/75">
          Early bookings get the best room choices and launch‑offer pricing for
          both shared and private stays.
        </p>
      </section>
    </div>
  );
};

export default RishikeshRetreatPage;
