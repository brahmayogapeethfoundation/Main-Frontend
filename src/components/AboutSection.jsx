import React, { memo } from "react";
import banner001 from "../assets/about/brahma/banner001.webp";
import image001 from "../assets/about/brahma/image001.webp";
import image002 from "../assets/about/brahma/image002.webp";
import image003 from "../assets/about/brahma/image003.webp";
import image004 from "../assets/about/brahma/image004.webp";
import image005 from "../assets/about/brahma/image005.webp";
import image006 from "../assets/about/brahma/image006.webp";

const AboutSections = ({ darkMode }) => {
  const gradientBg = darkMode
    ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200"
    : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900";

  return (
    <section className={`w-full overflow-x-hidden transition-colors duration-500 ${gradientBg}`}>
      <div className="relative h-[100vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={banner001}
          alt="Yoga Retreat"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-bold text-[clamp(1.9rem,4vw,3.2rem)] text-white">
            Welcome to Brahma Yogapeeth
          </h1>
          <p className="mt-2 font-semibold text-[clamp(1rem,2.5vw,1.4rem)] text-indigo-200">
            Yoga & Retreats in Rishikesh
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h2 className="font-bold text-[clamp(1.6rem,3.5vw,2.6rem)]">
            <span className={darkMode ? "text-gray-100" : "text-gray-900"}>
              Welcome to{" "}
            </span>
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode
                  ? "from-indigo-400 via-purple-400 to-pink-400"
                  : "from-blue-600 via-purple-500 to-pink-500"
              }`}
            >
              Brahma Yogapeeth Yoga & Retreat
            </span>
          </h2>

          <p className="leading-relaxed opacity-90">
            At Brahma Yogapeeth Yoga, we share the knowledge just as it was passed
            down to us — pure, rooted in ancient scriptures, practiced with
            devotion and respect. Learning here allows you to experience yoga in
            its most authentic and traditional form.
          </p>

          <p className="leading-relaxed opacity-90">
            Living and studying in a spiritual environment connects you not only
            with physical techniques, but with the true purpose of yoga:{" "}
            <span className="font-semibold">
              self-knowledge, inner harmony, and service to others.
            </span>{" "}
            Our retreats are deeply transformative — both personally and
            professionally.
          </p>

          <p className="leading-relaxed opacity-90">
            Join us in Rishikesh, the world’s yoga capital, and embark on a
            life-changing journey that nurtures the mind, body, and spirit under
            the guidance of experienced yoga masters.
          </p>
        </div>
      </div>

      {[
        {
          title: ["Our ", "Mission"],
          image: image001,
          text: (
            <>
              <p>
                At Brahmya Yogapeeth, our business goal is to offer authentic,
                traditional yoga education rooted in the ancient yogic lineage
                of India, while making it accessible and meaningful for a global
                audience.
              </p>
              <p>
                We exist to guide sincere students toward the true essence of
                yoga — beyond physical postures — through disciplined practice,
                self-awareness, and inner transformation.
              </p>
            </>
          ),
        },
        {
          title: ["Preserving Authentic ", "Yoga Traditions"],
          image: image002,
          text: (
            <>
              <p>
                In today’s modern world, yoga is often simplified and
                commercialized. Our goal is to preserve the purity of classical
                yoga teachings and share them in their original form, without
                dilution or compromise.
              </p>
              <p>
                Every program at Brahma Yogapeeth is grounded in the timeless
                wisdom of traditional yogic scriptures and the guru–shishya
                lineage that has been passed down for generations.
              </p>
            </>
          ),
        },
        {
          title: ["Offering Complete ", "Yogic Education"],
          image: image003,
          text: (
            <>
              <p>
                Our goal is to provide more than just physical training. We offer
                a complete yogic education that integrates:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Asana, pranayama, meditation, and yogic philosophy.</li>
                <li>Physical strength, mental clarity, and emotional balance.</li>
                <li>Awareness, discipline, and conscious living.</li>
                <li>
                  Students are guided to understand yoga as a way of life, not
                  merely a workout.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: ["Creating a ", "Supportive Learning Environment"],
          image: image004,
          text: (
            <>
              <p>
                We aim to create a safe, respectful, and supportive environment
                where international students feel comfortable, guided, and
                inspired throughout their journey.
              </p>
              <p>Our focus is on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Experienced and English-speaking teachers.</li>
                <li>Beginner-friendly yet traditional instruction.</li>
                <li>Small group learning and personal attention.</li>
                <li>Cultural sensitivity and ethical teaching practices.</li>
              </ul>
            </>
          ),
        },
        {
          title: ["Sharing India’s ", "Yogic Culture with the World"],
          image: image005,
          text: (
            <>
              <p>
                One of our core goals is to introduce students to the deeper
                cultural and spiritual roots of yoga in India.
              </p>
              <p>Through our programs, students experience:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Traditional yogic lifestyle and discipline.</li>
                <li>Sacred rituals, mantras, and meditative practices.</li>
                <li>A deeper connection with India’s spiritual heritage.</li>
              </ul>
            </>
          ),
        },
        {
          title: ["Building a ", "Trusted Global Yoga School"],
          image: image006,
          text: (
            <>
              <p>
                Our long-term goal is to establish Brahma Yogapeeth as a trusted
                international yoga school, known for authenticity, integrity,
                and high-quality traditional yoga education.
              </p>
              <p>
                We aim to build a global community of practitioners who carry
                the values of yoga — awareness, balance, and compassion — into
                their daily lives and teaching.
              </p>
            </>
          ),
        },
      ].map((section, index) => (
        <div key={index} className="max-w-7xl mx-auto px-6 md:px-16 py-16">
          <h3 className="text-center font-bold text-[clamp(1.5rem,3vw,2.3rem)] mb-10">
            <span>{section.title[0]}</span>
            <span className="text-indigo-500">{section.title[1]}</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div
              className={`rounded-2xl overflow-hidden shadow-xl ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <img
                src={section.image}
                alt={section.title.join("")}
                className="w-full h-[280px] md:h-[320px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              className={`space-y-4 leading-relaxed opacity-90 ${
                index % 2 !== 0 ? "md:order-1" : ""
              }`}
            >
              {section.text}
            </div>
          </div>
        </div>
      ))}

      <div className="max-w-4xl mx-auto px-6 py-14 text-center">
        <p className="font-semibold italic text-[clamp(1.2rem,3vw,1.6rem)] text-indigo-400">
          “Yoga is the journey of the self, through the self, to the self.”
        </p>
      </div>
    </section>
  );
};

export default memo(AboutSections);
