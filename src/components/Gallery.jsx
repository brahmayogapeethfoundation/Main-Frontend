import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getGalleryImages } from "../api/api";

const Gallery = ({ darkMode }) => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const IMAGES_PER_PAGE = 9;

  useEffect(() => {
    let mounted = true;
    const fetchGallery = async () => {
      setLoading(true);
      try {
        const res = await getGalleryImages();
        if (!mounted) return;

        const data = Array.isArray(res.data) ? res.data : [];
        setImages(data);
        setFilteredImages(data);

        const uniqueCategories = [
          "All",
          ...Array.from(new Set(data.map((img) => img.category).filter(Boolean))),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to load gallery:", error);
        if (mounted) {
          setImages([]);
          setFilteredImages([]);
        }
      } finally {
        mounted && setLoading(false);
      }
    };
    fetchGallery();
    return () => (mounted = false);
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setFilteredImages(category === "All" ? images : images.filter((img) => img.category === category));
  };

  const totalPages = Math.max(1, Math.ceil(filteredImages.length / IMAGES_PER_PAGE));
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = filteredImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  const goToPage = (page) => setCurrentPage(Math.min(Math.max(1, page), totalPages));

  // Scroll top on page or filter change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedCategory]);

  const buttonClass = (isSelected = false) => `
    relative px-6 py-3 rounded-md font-medium transition-all duration-300
    border ${isSelected 
      ? darkMode
        ? "border-purple-400 text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500"
        : "border-indigo-400 text-gray-900 font-bold bg-gradient-to-r from-blue-500 to-purple-600"
      : darkMode
        ? "border-gray-600 text-gray-300 hover:border-purple-400 hover:text-white"
        : "border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-gray-900"
    }
    before:absolute before:inset-0 before:rounded-md
    before:bg-gradient-radial from-indigo-300/30 via-indigo-200/20 to-transparent
    before:opacity-0 before:scale-0 before:transition-all before:duration-500
    hover:before:opacity-70 hover:before:scale-150
  `;

  const getGridClasses = () => {
    let cols = 1; // default 1 column
    if (window.innerWidth >= 640 && window.innerWidth < 1024) cols = 2; // sm to md
    if (window.innerWidth >= 1024) cols = 3; // md and above

    const remaining = currentImages.length % cols;
    return remaining > 0 && remaining < cols
      ? "grid justify-center"
      : "grid";
  };

  const [gridClass, setGridClass] = useState(getGridClasses());

  useEffect(() => {
    const handleResize = () => setGridClass(getGridClasses());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentImages]);

  return (
    <section
      className={`w-full overflow-x-hidden relative flex flex-col py-28 transition-colors duration-500
        ${darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900"
        }`}
    >
      {/* Decorative Blobs */}
      <div
        className={`absolute top-0 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/30" : "bg-purple-200/30"}`}
      ></div>
      <div
        className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-pink-500/20" : "bg-pink-200/20"}`}
      ></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 flex flex-col">
        <h1 className="font-extrabold leading-tight text-center mb-6 text-[clamp(1.2rem,2vw,2.5rem)] md:text-[clamp(1.2rem,2.5vw,3rem)]">
          <span className={darkMode ? "text-gray-100" : "text-gray-900"}>
            Explore Moments Captured from{" "}
          </span>
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r
              ${darkMode ? "from-indigo-400 via-purple-400 to-pink-400"
                         : "from-blue-600 via-purple-500 to-pink-500"}`}
          >
            Our Yoga Community
          </span>
        </h1>

        <div className="flex justify-center flex-wrap gap-3 mb-6 z-10 relative">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`
                relative px-6 py-2 rounded-full font-medium transition-all duration-300
                border 
                ${selectedCategory === cat
                  ? darkMode
                    ? "border-purple-400 text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                    : "border-indigo-400 text-gray-900 font-bold bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                  : darkMode
                    ? "border-gray-600 text-gray-300 hover:border-purple-400 hover:text-white"
                    : "border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-gray-900"
                }
                before:absolute before:inset-0 before:rounded-full
                before:bg-gradient-radial from-indigo-300/30 via-indigo-200/20 to-transparent
                before:opacity-0 before:scale-0 before:transition-all before:duration-500
                hover:before:opacity-70 hover:before:scale-150
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`${gridClass} grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 z-10 relative`}>
          {loading
            ? Array.from({ length: IMAGES_PER_PAGE }).map((_, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-[4/3] rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse"
                />
              ))
            : currentImages.map((img, idx) => (
                <div
                  key={img.id ?? idx}
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md transition-transform duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  <img
                    src={img.imageUrl}
                    alt={img.title || "Gallery Image"}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                </div>
              ))}
        </div>

        {!loading && filteredImages.length > IMAGES_PER_PAGE && (
          <div className="flex justify-center items-center gap-4 mb-8 z-10 relative">
            <button
              onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={buttonClass(false)}
            >
              <FaChevronLeft size={18} />
            </button>

            <span className="font-medium">Page {currentPage} / {totalPages}</span>

            <button
              onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={buttonClass(false)}
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
