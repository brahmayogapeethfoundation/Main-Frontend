import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialFloating = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 md:bottom-6 md:right-6 sm:bottom-4 sm:right-4">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/919368979367" 
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 hover:bg-green-600
          text-white p-4 md:p-4 sm:p-3
          rounded-full shadow-lg
          transition-transform transform
          hover:-translate-y-1
        "
      >
        <FaWhatsapp size={24} className="md:text-xl sm:text-lg" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/brahma_yogapeeth?igsh=MW42bWlxMzJsMmtzZg%3D%3D&utm_source=qr" 
        rel="noopener noreferrer"
        className="
          bg-pink-500 hover:bg-pink-600
          text-white p-4 md:p-4 sm:p-3
          rounded-full shadow-lg
          transition-transform transform
          hover:-translate-y-1
        "
      >
        <FaInstagram size={24} className="md:text-xl sm:text-lg" />
      </a>

    </div>
  );
};

export default SocialFloating;
