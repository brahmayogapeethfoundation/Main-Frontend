import React, { useEffect, useState, useCallback } from "react";

const Lightbox = ({ images = [], startIndex = 0, onClose, onJumpTo }) => {
  const [index, setIndex] = useState(
    Math.min(Math.max(0, startIndex), Math.max(0, images.length - 1))
  );
  const current = images[index];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(images.length - 1, i + 1));
    },
    [images.length, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (onJumpTo) onJumpTo(index);
  }, [index, onJumpTo]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 md:top-4 right-2 md:right-4 z-20 text-xl md:text-2xl p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/50 text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/50 text-white text-xl md:text-2xl disabled:opacity-30"
          aria-label="Previous"
        >
          ‹
        </button>

        <button
          onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
          disabled={index === images.length - 1}
          className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/50 text-white text-xl md:text-2xl disabled:opacity-30"
          aria-label="Next"
        >
          ›
        </button>

        <div
          className="w-full max-w-[95vw] md:max-w-[80vw] flex justify-center items-center border-4 rounded-xl shadow-xl p-1 md:p-2 bg-black/20"
          style={{ height: "60vh", minHeight: "400px" }} // fixed height
        >
          <img
            src={current.imageUrl}
            alt={current.title || "Lightbox image"}
            className="h-full max-w-full object-contain rounded-lg" // height fixed, width auto but compressed on mobile
            draggable={false}
          />
        </div>

        <div className="mt-2 md:mt-4 w-full max-w-[90vw] md:max-w-3xl text-center text-white">
          {current.title && (
            <div className="text-base md:text-lg font-semibold">{current.title}</div>
          )}
          {current.description && (
            <div className="text-xs md:text-sm text-gray-200 mt-1">{current.description}</div>
          )}

          <div className="mt-2 md:mt-4 flex items-center justify-center gap-2 overflow-x-auto py-1 px-1">
            {images.map((img, i) => (
              <button
                key={img.id ?? i}
                onClick={() => setIndex(i)}
                className={`w-12 md:w-16 h-12 md:h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all
                  ${i === index ? "border-blue-400 scale-105" : "border-gray-400 hover:border-blue-300"}`}
                aria-label={`Jump to image ${i + 1}`}
              >
                <img
                  src={img.imageUrl}
                  alt={img.title || ""}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
