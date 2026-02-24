import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  memo,
  useCallback,
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MentorCard from "./MentorCard";
import { mentors } from "../data/mentors";

const GAP = 16;
const AUTO_ROTATE_INTERVAL = 4000;

const HeroMentorsCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(340);

  const intervalRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      if (w < 480) {
        setCardsPerView(1);
        setCardWidth(Math.min(w - 32, 340));
      } else if (w < 768) {
        setCardsPerView(1);
        setCardWidth(340);
      } else if (w < 1024) {
        setCardsPerView(2);
        setCardWidth(300);
      } else {
        setCardsPerView(3);
        setCardWidth(340);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (mentors.length <= cardsPerView) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= mentors.length - cardsPerView ? 0 : prev + 1
      );
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [cardsPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? mentors.length - cardsPerView : prev - 1
    );
  }, [cardsPerView]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev >= mentors.length - cardsPerView ? 0 : prev + 1
    );
  }, [cardsPerView]);

  const translateX = currentIndex * (cardWidth + GAP);
  const visibleWidth =
    cardsPerView * cardWidth + (cardsPerView - 1) * GAP;

  const cards = useMemo(
    () =>
      mentors.map((mentor) => (
        <div
          key={mentor.id}
          style={{ width: cardWidth }}
          className="flex-shrink-0"
        >
          <MentorCard mentor={mentor} darkMode={darkMode} />
        </div>
      )),
    [cardWidth, darkMode]
  );

  if (!mentors.length) return null;

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-20 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <h2 className="text-center font-bold mb-10 text-[clamp(1.5rem,3vw,2.5rem)]">
          Our{" "}
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Mentors
          </span>
        </h2>

        <div className="relative flex justify-center items-center">
          <button
            onClick={prevSlide}
            className={`hidden sm:flex absolute left-0 md:-left-10 top-1/2 -translate-y-1/2
              p-3 rounded-full shadow-md z-20 ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
          >
            <FaChevronLeft />
          </button>

          <div className="overflow-hidden" style={{ width: visibleWidth }}>
            <div
              className="flex transition-transform duration-700 ease-in-out py-8"
              style={{
                transform: `translateX(-${translateX}px)`,
                gap: GAP,
              }}
            >
              {cards}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className={`hidden sm:flex absolute right-0 md:translate-x-10 top-1/2 -translate-y-1/2
              p-3 rounded-full shadow-md z-20 ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroMentorsCarousel);
