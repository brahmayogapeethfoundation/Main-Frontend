import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  memo,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CourseCard from "./CourseCard";
import { fetchAndMapCourses } from "../utils/mapCourses";

const GAP = 16;
const AUTO_ROTATE_INTERVAL = 4000;

const HeroCoursesCarousel = ({ darkMode }) => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(340);

  const intervalRef = useRef(null);

  useEffect(() => {
    fetchAndMapCourses()
      .then(setCourses)
      .catch((err) => console.error("Failed to load courses:", err));
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
    if (courses.length <= cardsPerView) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= courses.length - cardsPerView ? 0 : prev + 1
      );
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [courses.length, cardsPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? courses.length - cardsPerView : prev - 1
    );
  }, [courses.length, cardsPerView]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev >= courses.length - cardsPerView ? 0 : prev + 1
    );
  }, [courses.length, cardsPerView]);

  const translateX = currentIndex * (cardWidth + GAP);
  const visibleWidth =
    cardsPerView * cardWidth + (cardsPerView - 1) * GAP;

  const cards = useMemo(
    () =>
      courses.map((course) => (
        <div
          key={course.id}
          style={{ width: cardWidth }}
          className="flex-shrink-0"
        >
          <CourseCard
            course={course}
            darkMode={darkMode}
            onEnroll={(c) =>
              navigate("/enroll", { state: { course: c } })
            }
            onDetails={(c) =>
              navigate("/courseDetails", { state: { course: c } })
            }
          />
        </div>
      )),
    [courses, darkMode, navigate, cardWidth]
  );

  if (!courses.length) return null;

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
            Yoga Courses
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

export default memo(HeroCoursesCarousel);
