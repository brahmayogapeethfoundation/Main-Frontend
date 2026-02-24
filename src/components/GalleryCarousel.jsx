import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  memo,
  useCallback,
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Lightbox from "../components/Lightbox";
import { getGalleryImages } from "../api/api";

const CARD_WIDTH = 340;
const GAP = 16;
const AUTO_ROTATE_INTERVAL = 4000;

const GalleryCarousel = ({ darkMode = false }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    getGalleryImages()
      .then((res) => setImages(Array.isArray(res.data) ? res.data : []))
      .catch((err) =>
        console.error("Failed to fetch gallery images:", err)
      );
  }, []);

  /* SAME responsive logic style */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 480) setCardsPerView(1);
      else if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (images.length <= cardsPerView) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= images.length - cardsPerView ? 0 : prev + 1
      );
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [images.length, cardsPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - cardsPerView : prev - 1
    );
  }, [images.length, cardsPerView]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev >= images.length - cardsPerView ? 0 : prev + 1
    );
  }, [images.length, cardsPerView]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const visibleWidth =
    cardsPerView * CARD_WIDTH + (cardsPerView - 1) * GAP;
  const translateX = currentIndex * (CARD_WIDTH + GAP);

  const cards = useMemo(
    () =>
      images.map((img, idx) => (
        <div key={idx} style={{ width: CARD_WIDTH }} className="flex-shrink-0">
          <div
            onClick={() => openLightbox(idx)}
            className={`cursor-pointer border rounded-2xl shadow-lg overflow-hidden
              transition-shadow hover:shadow-2xl
              ${
                darkMode
                  ? "border-indigo-400 bg-gray-800"
                  : "border-orange-400 bg-white"
              }`}
          >
            <img
              src={img.imageUrl}
              alt={img.title || "Gallery Image"}
              className="w-full h-[240px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )),
    [images, darkMode]
  );

  if (!images.length) return null;

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-20 transition-colors duration-500
        ${
          darkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-r from-blue-50 via-white to-blue-100"
        }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-16 z-10">
        <h2 className="text-center font-bold mb-8 sm:mb-12 text-[clamp(1.4rem,3vw,2.5rem)]">
          Our{" "}
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Gallery
          </span>
        </h2>

        <div className="relative flex justify-center items-center">
          {/* LEFT ARROW (MATCHES TESTIMONIALS) */}
          <button
            onClick={prevSlide}
            className={`hidden sm:flex absolute left-0 md:-left-10
              top-1/2 -translate-y-1/2 p-2 sm:p-3
              rounded-full shadow-md z-20 ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
          >
            <FaChevronLeft />
          </button>

          {/* CAROUSEL */}
          <div className="overflow-hidden" style={{ width: visibleWidth }}>
            <div
              className="flex transition-transform duration-700 ease-in-out py-8 sm:py-12"
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
            className={`hidden sm:flex absolute right-0 md:translate-x-10
              top-1/2 -translate-y-1/2 p-2 sm:p-3
              rounded-full shadow-md z-20 ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
          >
            <FaChevronRight />
          </button>
        </div>

        {lightboxOpen && (
          <Lightbox
            images={images}
            startIndex={currentIndex}
            onClose={() => setLightboxOpen(false)}
            onJumpTo={(index) => setCurrentIndex(index)}
          />
        )}
      </div>
    </section>
  );
};

export default memo(GalleryCarousel);
