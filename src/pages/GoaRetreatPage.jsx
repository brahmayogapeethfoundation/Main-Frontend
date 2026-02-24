import { useEffect, useState } from "react";
import goaBanner from "../assets/Certified_Photo/Cert3.jpg"; // update path
import { Link } from "react-router-dom";


const GoaRetreatPage = () => {
  const [statsAnimation, setStatsAnimation] = useState(false);

  useEffect(() => {
    setStatsAnimation(true);
  }, []);

  const stats = [
    { num: "6", label: "Beach Days", color: "amber" },
    { num: "4", label: "Sunrise Flows", color: "cyan" },
    { num: "3", label: "Excursions", color: "emerald" },
    { num: "24/7", label: "Sea Breeze", color: "rose" },
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
    <div className="min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-950 text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[80vh] md:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 lg:opacity-40"
          style={{ backgroundImage: `url(${goaBanner})` }}
        />
        {/* tropical sunset overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#041019]/95 via-[#0b2532]/80 to-[#ff9f7b]/40" />

        <div className="relative z-10 flex flex-col h-full justify-end px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-end">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="uppercase tracking-[0.35em] text-amber-200 text-[11px] sm:text-xs md:text-sm mb-4 bg-amber-500/25 px-4 py-2 rounded-full inline-block">
                Ocean Retreat • Goa
              </div>

              <h1 className="font-black leading-tight break-words mb-4">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Beachfront Yoga
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-cyan-100 drop-shadow-2xl">
                  Retreat In Goa
                </span>
              </h1>

              {/* FREEBIES / USPs */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                <span className="px-3 py-2 rounded-full bg-cyan-500/15 border border-cyan-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Sunrise Yoga On The Beach
                </span>
                <span className="px-3 py-2 rounded-full bg-emerald-500/15 border border-emerald-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Ocean‑View Eco Cottages
                </span>
                <span className="px-3 py-2 rounded-full bg-rose-500/15 border border-rose-300/60 text-[11px] sm:text-xs md:text-sm font-semibold">
                  Sunset Sound Healing &amp; Bonfire
                </span>
              </div>

              {/* INTRO */}
              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-cyan-50/95 mb-4 leading-relaxed">
                A tropical retreat where your morning begins with waves kissing
                the shore, palms swaying above and a yoga mat on warm sand.
              </p>
              <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-cyan-50/90 mb-8 leading-relaxed">
                Over six rejuvenating days you move, breathe and unwind with
                mindful yoga flows, ocean swims, beach meditations and
                coastal adventures across Goa&apos;s most magical shores.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
                <a
                  href="#dates"
                  className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-300 text-slate-950 font-black text-sm sm:text-base rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5 transform transition-all duration-300 backdrop-blur-sm text-center"
                >
                  View Goa Retreat Dates
                </a>
                <a
                  href="#accommodation"
                  className="px-8 py-4 sm:px-10 sm:py-5 border-2 sm:border-[3px] border-cyan-100/80 backdrop-blur-xl text-cyan-50 font-black text-sm sm:text-base rounded-3xl hover:bg-cyan-50/10 hover:border-cyan-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  See Stay &amp; Food
                </a>
              </div>
            </div>

            {/* RIGHT – STATS */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-white/15 via-white/5 to-cyan-100/10 backdrop-blur-xl border border-white/40 text-center group hover:from-amber-100/20 hover:via-rose-100/10 hover:to-cyan-100/20 hover:scale-[1.04] transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-[90px] sm:min-h-[100px] md:min-h-[110px] px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6 ${
                      statsAnimation
                        ? "animate-in slide-in-from-bottom-4 duration-700"
                        : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-400/25 via-transparent to-cyan-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

      {/* ACCOMMODATION & FOOD */}
      <section
        id="accommodation"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="bg-gradient-to-br from-slate-950/85 via-sky-950/80 to-cyan-950/85 border border-cyan-300/45 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
              Sea‑View Cottages
            </h2>
            <p className="text-cyan-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Sleep to the sound of waves in wooden eco‑cottages tucked among
              swaying palms, just a short barefoot walk from the beach.
            </p>
            <ul className="space-y-2 text-cyan-50/85 text-sm sm:text-base">
              <li>• Airy rooms with cozy beds &amp; soft cotton linen</li>
              <li>• Private sit‑outs with hammocks or lounge chairs</li>
              <li>• Ensuite bathrooms, hot showers &amp; eco‑friendly amenities</li>
              <li>• Fast Wi‑Fi zones balanced with digital‑detox corners</li>
              <li>• Shared and private stay options for every budget</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/85 via-sky-900/80 to-amber-900/85 border border-amber-200/55 rounded-3xl p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-black mb-3 text-amber-100">
              Coastal Kitchen &amp; Fresh Plates
            </h3>
            <p className="text-cyan-50/90 text-sm sm:text-base md:text-lg leading-relaxed mb-3">
              Enjoy colourful, coastal‑inspired sattvik meals – tropical
              smoothie bowls, coconut curries, grilled veggies and seasonal
              fruits served under the palm trees.
            </p>
            <p className="text-cyan-50/85 text-sm sm:text-base leading-relaxed mb-3">
              All menus are vegetarian with vegan options, using local produce
              from Goan markets and spice farms to keep each plate bright and
              nourishing.
            </p>
            <p className="text-cyan-50/80 text-sm sm:text-base leading-relaxed">
              Whether you prefer light salads before practice or hearty
              slow‑cooked dinners after sunset, every meal is crafted to keep
              your practice effortless and your energy high.
            </p>
          </div>
        </div>
      </section>

      {/* INCLUSIONS / EXCLUSIONS */}
      <section
        id="includes"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
          What Your Goa Retreat Includes
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-slate-950/85 via-sky-950/80 to-cyan-950/85 border border-emerald-300/45 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-cyan-100">
              Included
            </h3>
            <ul className="space-y-2 text-cyan-50/92 text-sm sm:text-base">
              <li>• 6 nights stay in eco‑cottages</li>
              <li>• Daily yoga, pranayama &amp; guided meditation</li>
              <li>• Sunrise and sunset beach practices</li>
              <li>• Vegetarian brunch &amp; dinner plus herbal teas</li>
              <li>• One sound‑healing / yoga nidra evening</li>
              <li>• Curated beach &amp; village excursions</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-950/85 via-rose-950/80 to-amber-950/80 border border-rose-300/45 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-rose-100">
              Not Included
            </h3>
            <ul className="space-y-2 text-rose-50/92 text-sm sm:text-base">
              <li>• Flights and long‑distance travel to Goa</li>
              <li>• Airport transfers (can be arranged on request)</li>
              <li>• Additional spa / massage treatments</li>
              <li>• Surf lessons, scuba and extra activities</li>
            </ul>
            <p className="mt-4 text-rose-50/78 text-xs sm:text-sm">
              You can add extra adventures or keep it simple and slow – the
              retreat is built for both explorers and deep‑rest seekers.
            </p>
          </div>
        </div>
      </section>

      {/* EXCURSIONS */}
      <section
        id="excursions"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
          Goa Experiences Included
        </h2>
        <p className="text-center text-cyan-50/92 text-sm sm:text-base max-w-2xl mx-auto mb-8">
          Discover quiet coves, colourful markets and golden‑hour viewpoints
          that make Goa the perfect blend of calm and celebration.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base text-center">
          {[
            "Sunrise Beach Walk",
            "Spice Farm Visit",
            "Old Goa Heritage Trip",
            "Sunset Boat Ride",
            "Local Market Stroll",
            "Bonfire & Music Night",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-gradient-to-br from-slate-950/85 via-sky-950/80 to-cyan-950/85 border border-cyan-300/50 px-3 py-4 sm:px-4 sm:py-5 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section
        id="schedule"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
          Typical Day By The Sea
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-slate-950/85 border border-cyan-300/35 rounded-3xl p-6 sm:p-7 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-cyan-100 mb-3 text-lg">
              Morning &amp; Afternoon
            </h3>
            <ul className="space-y-1 text-cyan-50/88 text-sm sm:text-base">
              <li>• Sunrise beach yoga &amp; breathwork</li>
              <li>• Nourishing coastal brunch</li>
              <li>• Free time to swim, read or nap in hammocks</li>
              <li>• Optional workshops or coastal walks</li>
            </ul>
          </div>
          <div className="bg-slate-950/85 border border-amber-300/40 rounded-3xl p-6 sm:p-7 shadow-[0_14px_32px_rgba(0,0,0,0.7)]">
            <h3 className="font-bold text-amber-100 mb-3 text-lg">
              Evening &amp; Night
            </h3>
            <ul className="space-y-1 text-cyan-50/88 text-sm sm:text-base">
              <li>• Sunset slow‑flow or yin class</li>
              <li>• Beach meditation or sound healing</li>
              <li>• Candlelit dinner with ocean breeze</li>
              <li>• Occasional bonfire, music &amp; stargazing</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-cyan-50/75">
          The rhythm is intentionally spacious so you can choose more practice
          or more rest depending on how your body feels each day.
        </p>
      </section>

      {/* DATES */}
      <section
        id="dates"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:max-w-6xl xl:mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
          Upcoming Goa Retreat Dates
        </h2>

        <div className="overflow-x-auto rounded-3xl bg-slate-950/88 border border-cyan-300/50 backdrop-blur-md shadow-[0_20px_45px_rgba(0,0,0,0.8)]">
          <table className="min-w-full text-xs sm:text-sm md:text-base">
            <thead className="bg-gradient-to-r from-amber-600 via-rose-500 to-cyan-500 text-amber-50">
              <tr>
                <th className="px-3 sm:px-4 py-3 text-left">Retreat Date</th>
                <th className="px-3 sm:px-4 py-3 text-left">Availability</th>
                <th className="px-3 sm:px-4 py-3 text-left">2‑Sharing</th>
                <th className="px-3 sm:px-4 py-3 text-left">Private Cottage</th>
                <th className="px-3 sm:px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "15th July 2026", status: "Open" },
                { date: "15th Sept 2026", status: "Open" },
                { date: "15th Nov 2026", status: "Open" },
                { date: "15th Jan 2027", status: "Open" },
              ].map((row) => (
                <tr
                  key={row.date}
                  className="border-t border-cyan-500/20 hover:bg-slate-900/80"
                >
                  <td className="px-3 sm:px-4 py-3">{row.date}</td>
                  <td className="px-3 sm:px-4 py-3">{row.status}</td>
                  <td className="px-3 sm:px-4 py-3">
                    <span className="line-through opacity-60 mr-1">$799</span>
                    $399
                  </td>
                  <td className="px-3 sm:px-4 py-3">
                    <span className="line-through opacity-60 mr-1">$999</span>
                    $549
                  </td>
                  <td className="px-3 sm:px-4 py-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-3 py-2 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-300 text-slate-950 font-semibold text-xs sm:text-sm hover:brightness-110 transition-colors"
                    >
                      {row.status === "Waitlist"
                        ? "Join Waitlist"
                        : "Reserve Spot"}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs sm:text-sm text-cyan-50/78">
          Early reservations lock in launch pricing and the closest cottages to
          the beach line.
        </p>
      </section>
    </div>
  );
};

export default GoaRetreatPage;