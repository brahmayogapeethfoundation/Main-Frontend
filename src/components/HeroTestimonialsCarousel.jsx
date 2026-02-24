import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  memo,
  useCallback,
} from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { getTestimonials } from "../api/api";

const GAP = 16;
const AUTO_ROTATE_INTERVAL = 4000;
const MAX_WORDS = 24;

const HeroTestimonialsCarousel = ({ darkMode }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(340);
  const [modalTestimonial, setModalTestimonial] = useState(null);

  const intervalRef = useRef(null);

  useEffect(() => {
    getTestimonials()
      .then((res) => setTestimonials(res.data || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

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
    if (testimonials.length <= cardsPerView || modalTestimonial) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= testimonials.length - cardsPerView ? 0 : prev + 1
      );
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [testimonials.length, cardsPerView, modalTestimonial]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - cardsPerView : prev - 1
    );
  }, [testimonials.length, cardsPerView]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - cardsPerView ? 0 : prev + 1
    );
  }, [testimonials.length, cardsPerView]);

  const translateX = currentIndex * (cardWidth + GAP);
  const visibleWidth =
    cardsPerView * cardWidth + (cardsPerView - 1) * GAP;

  const getFixedWords = (text) =>
    text.split(" ").length > MAX_WORDS
      ? text.split(" ").slice(0, MAX_WORDS).join(" ") + "..."
      : text;

  const cards = useMemo(
    () =>
      testimonials.map((t) => (
        <div key={t.id} style={{ width: cardWidth }} className="flex-shrink-0">
          <div
            className={`h-[420px] p-4 md:p-6 rounded-2xl shadow-lg text-center
              transition-transform hover:scale-105
              ${
                darkMode
                  ? "bg-gray-800 text-gray-200 border border-indigo-400"
                  : "bg-white text-gray-900 border border-orange-400"
              }`}
          >
            <div className="flex justify-center items-center h-[170px]">
              <img
                src={t.photoUrl}
                alt={t.name}
                className="rounded-full object-cover border-2"
                style={{
                  width: Math.min(cardWidth / 2, 140),
                  height: Math.min(cardWidth / 2, 140),
                  borderColor: darkMode ? "#818CF8" : "#FB923C",
                }}
              />
            </div>

            <h3 className="text-lg font-semibold mt-2">{t.name}</h3>

            <div className="flex justify-center gap-1 my-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={16}
                  className={
                    i < t.rating ? "text-yellow-400" : "text-gray-300"
                  }
                />
              ))}
            </div>

            <div className="h-[96px] overflow-hidden">
              <p className="text-sm leading-relaxed">
                {getFixedWords(t.feedback)}
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={() => setModalTestimonial(t)}
                className={`font-medium hover:underline ${
                  darkMode ? "text-indigo-400" : "text-orange-500"
                }`}
              >
                Read More →
              </button>
            </div>
          </div>
        </div>
      )),
    [testimonials, darkMode, cardWidth]
  );

  if (loading || !testimonials.length) return null;

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
          What Our{" "}
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Students Say
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
              style={{ transform: `translateX(-${translateX}px)`, gap: GAP }}
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

      {modalTestimonial && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
          onClick={() => setModalTestimonial(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 max-w-md w-full p-6 rounded-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">
              {modalTestimonial.name}'s Feedback
            </h3>

            <p className="mb-6 text-sm leading-relaxed">
              {modalTestimonial.feedback}
            </p>

            <div className="text-right">
              <button
                onClick={() => setModalTestimonial(null)}
                className={`px-6 py-2 rounded-xl ${
                  darkMode
                    ? "bg-indigo-400 text-gray-900"
                    : "bg-orange-500 text-white"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(HeroTestimonialsCarousel);
